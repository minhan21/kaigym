import React from "react";
import AuthNavigator from "./AuthNavigator";
import OnboardingNavigator from "./OnBoardingNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigator from "./MainNavigator";
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="OnboardingNavigator">
      <Stack.Screen
        name="OnboardingNavigator"
        options={{ headerShown: false }}
        component={OnboardingNavigator}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Auth"
        component={AuthNavigator}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={MainNavigator}
      />
      {/* Add other screens as needed */}
    </Stack.Navigator>
  );
};
export default RootNavigator;
