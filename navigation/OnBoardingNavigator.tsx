import OnboardingScreen from "../screens/OnboardingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "@components/BaseComponent/Loading";

const Stack = createNativeStackNavigator();
interface OnboardingNavigatorProps {
  isLoading: boolean;
}
const OnboardingNavigator: React.FC<OnboardingNavigatorProps> = ({
  isLoading,
}) => {
  console.log(isLoading, "isLoading OnboardingNavigator");
  return (
    <Stack.Navigator initialRouteName={isLoading ? "Loading" : "Onboarding"}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Loading"
        component={LoadingScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={OnboardingScreen}
      />
    </Stack.Navigator>
  );
};
export default OnboardingNavigator;
