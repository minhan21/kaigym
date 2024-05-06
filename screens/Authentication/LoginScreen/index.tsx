import Block from "@components/BaseComponent/Block";
import Typography from "@components/BaseComponent/Text";
import Colors from "@constants/Colors";
import Fonts from "@constants/Fonts";
import FontSize from "@constants/FontSize";
import { useForm } from "react-hook-form";
import { StyleSheet, TouchableOpacity } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidate } from "./validate";
import FormInput from "@components/FormComponent/Input";
import Button from "@components/FormComponent/Button";
import { NavigationTypes } from "@navigation/navigationTypes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = NavigationTypes;

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };
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
    resolver: yupResolver(loginValidate),
    mode: "onChange",
    defaultValues: INITIAL_VALUES,
  });
  return (
    <Block flex marginTop={40}>
      <Block marginBottom={30} alignCenter justifyCenter>
        <Typography style={styles.title1}>Hey there,</Typography>
        <Typography style={styles.title2}>Welcome Back</Typography>
      </Block>
      <Block flex marginHorizontal={30}>
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
        onPress={navigateToHomeScreen}
        position="left"
        icon={{ name: "Login", size: 18, color: Colors.light.white }}
        titleStyle={{ fontSize: FontSize.largeText }}
        shadow
        title="Login"
      />
      <Block row alignCenter justifyCenter>
        <Typography style={styles.content}>
          Dont't have an account yet?{" "}
        </Typography>
        <TouchableOpacity onPress={navigateToLoginScreen}>
          <Typography onPress={navigateToSignUpScreen} style={styles.loginTxt}>
            Register
          </Typography>
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

export default LoginScreen;
