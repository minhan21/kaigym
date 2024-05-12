import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import OnboardingNavigator from "./OnBoardingNavigator";
import { OwnerNavigator, PlayerNavigator } from "./MainNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const user = useSelector((state) => state.user.userDetails);
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading, "isLoading");
  console.log(user, "user");
  useEffect(() => {
    // Check if user data has been fetched
    if (user !== null) {
      // Assuming initialState is undefined for user details
      setIsLoading(false);
    }
  }, [user]);

  const ChooseNavigator = () => {
    if (!user) {
      return <OnboardingNavigator isLoading={isLoading} />;
    } else if (user.role === "owner") {
      return <OwnerNavigator />;
    } else {
      return <PlayerNavigator />;
    }
  };

  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={ChooseNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingNavigator"
        component={OnboardingNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default RootNavigator;
