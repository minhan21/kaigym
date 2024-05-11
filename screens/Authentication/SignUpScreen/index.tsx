import Block from "@components/BaseComponent/Block";
import Typography from "@components/BaseComponent/Text";
import Colors from "@constants/Colors";
import Fonts from "@constants/Fonts";
import FontSize from "@constants/FontSize";
import { useForm } from "react-hook-form";
import { StyleSheet, TouchableOpacity } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpValidate } from "./validate";
import FormInput from "@components/FormComponent/Input";
import Button from "@components/FormComponent/Button";
import { NavigationTypes } from "@navigation/navigationTypes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { registerUser } from "../authenticateCollection";
import { useState } from "react";
import CustomDropdown from "@components/FormComponent/Dropdown";

type RootStackParamList = NavigationTypes;
type RegisterFormParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "owner" | "player";
};

const ROLES_OPTION = [
  {
    label: "Sports Station Owner",
    value: "owner",
  },
  {
    label: "Player",
    value: "player",
  },
];

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "owner",
};

const SignUpScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const navigateToHomeScreen = () => {
    navigation.navigate("Main");
  };
  const navigateToLoginScreen = () => {
    navigation.navigate("Login");
  };
  const handleRegisterUserAccount = async (values: RegisterFormParams) => {
    setLoading(true); // Start loading
    const result = await registerUser(values);
    if (result.success) {
      navigateToLoginScreen();
    }
    setLoading(false); // Stop loading
  };

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(signUpValidate),
    mode: "onChange",
    defaultValues: INITIAL_VALUES,
  });
  return (
    <Block flex marginTop={40}>
      <Block marginBottom={30} alignCenter justifyCenter>
        <Typography style={styles.title1}>Hey there,</Typography>
        <Typography style={styles.title2}>Create an Account</Typography>
      </Block>
      <Block flex marginHorizontal={30}>
        <FormInput
          leftIcon={{ name: "Profile", size: 18 }}
          type="input"
          placeholder="First Name"
          control={control}
          name="firstName"
        />
        <FormInput
          containerStyles={{ marginTop: 15 }}
          leftIcon={{ name: "Profile", size: 18 }}
          type="input"
          placeholder="Last Name"
          control={control}
          name="lastName"
        />
        <FormInput
          containerStyles={{ marginTop: 15 }}
          leftIcon={{ name: "Message", size: 18 }}
          type="input"
          placeholder="Email"
          control={control}
          name="email"
        />
        <FormInput
          containerStyles={{ marginTop: 15 }}
          leftIcon={{ name: "Lock", size: 18 }}
          type="password"
          placeholder="Password"
          control={control}
          name="password"
        />
        <CustomDropdown
          containerStyles={{ marginTop: 15 }}
          label="Role"
          options={ROLES_OPTION}
          name="role"
          icon={{ name: "User2Light", size: 18 }}
          control={control}
        />
      </Block>
      <Button
        disabled={!isValid}
        isLoading={loading}
        onPress={handleSubmit(handleRegisterUserAccount)}
        titleStyle={{ fontSize: FontSize.largeText }}
        shadow
        title="Register"
      />
      <Block row alignCenter justifyCenter>
        <Typography style={styles.content}>
          Already have an account?{" "}
        </Typography>
        <TouchableOpacity onPress={navigateToLoginScreen}>
          <Typography style={styles.loginTxt}>Login</Typography>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  title1: {
    color: Colors.light.black,
    fontSize: FontSize.largeText,
    fontFamily: Fonts.regular,
  },
  title2: {
    fontFamily: Fonts.bold,
    fontSize: FontSize.h4,
    color: Colors.light.black,
  },
  content: {
    fontFamily: Fonts.regular,
    fontSize: FontSize.mediumText,
    color: Colors.light.black,
  },
  loginTxt: {
    fontFamily: Fonts.regular,
    fontSize: FontSize.mediumText,
    color: "#94ACFD",
  },
});

export default SignUpScreen;
