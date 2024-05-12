import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigation/RootNavigator";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import { store } from "utils/store";
import AuthHandler from "@screens/Authentication/AuthHandler";

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    mediumItalic: require("./assets/fonts/Poppins-MediumItalic.ttf"),
    lightItalic: require("./assets/fonts/Poppins-LightItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthHandler />
        <MainNavigator />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}
