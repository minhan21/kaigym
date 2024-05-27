import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import OnboardingNavigator from "./OnBoardingNavigator";
import { OwnerNavigator, PlayerNavigator } from "./MainNavigator";
import { RootState } from "utils/stateTypes";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { userDetails, isLoading } = useSelector(
    (state: RootState) => state.user
  );

  const ChooseNavigator = () => {
    if (!userDetails) {
      return <OnboardingNavigator isLoading={isLoading} />;
    } else if (userDetails.role === "owner") {
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
