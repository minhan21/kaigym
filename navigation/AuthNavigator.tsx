import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Authentication/LoginScreen";
import SignUpScreen from "../screens/Authentication/SignUpScreen";
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
