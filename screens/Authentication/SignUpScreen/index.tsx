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

type RootStackParamList = NavigationTypes;

const SignUpScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const navigateToHomeScreen = () => {
    navigation.navigate("Main");
  };
  const navigateToLoginScreen = () => {
    navigation.navigate("Login");
  };
  const INITIAL_VALUES = {};
  const {
    control,
    handleSubmit,
    setValue,
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
          name="fistname"
        />
        <FormInput
          containerStyles={{ marginTop: 15 }}
          leftIcon={{ name: "Profile", size: 18 }}
          type="input"
          placeholder="Last Name"
          control={control}
          name="lastname"
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
          name="pasword"
        />
      </Block>
      <Button
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
