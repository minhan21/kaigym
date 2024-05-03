import AuthNavigator from "./AuthNavigator";
import OnboardingNavigator from "./OnBoardingNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
      {/* Add other screens as needed */}
    </Stack.Navigator>
  );
};
export default RootNavigator;
