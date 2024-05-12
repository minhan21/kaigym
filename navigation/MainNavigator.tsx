import HomeScreen from "../screens/MainScreen/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingScreen from "../screens/MainScreen/SettingScreen";
import Icon from "@components/Icon";
import Colors from "@constants/Colors";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.light.primaryColor,
        tabBarInactiveTintColor: Colors.light.gray1,
        tabBarIcon: ({ focused, color, size }) => {
          // Use the Image component to display the icon
          return (
            <Icon
              focused={focused}
              icon={route.name}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
