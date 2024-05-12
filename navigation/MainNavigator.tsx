import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingScreen from "@screens/MainScreen/SettingScreen";
import Icon from "@components/Icon";
import Colors from "@constants/Colors";
import PlayerHomeScreen from "@screens/MainScreen/PlayerScreens/PlayerHomeScreen";
import OwnerHomeScreen from "@screens/MainScreen/OwnerScreens/OwnerHomeScreen";

const createTabNavigator = (homeScreen) => {
  const TabNavigator = createBottomTabNavigator();

  return () => (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.light.primaryColor,
        tabBarInactiveTintColor: Colors.light.gray1,
        tabBarIcon: ({ focused, color, size }) => (
          <Icon focused={focused} icon={route.name} size={size} color={color} />
        ),
      })}
    >
      <TabNavigator.Screen name="Home" component={homeScreen} />
      <TabNavigator.Screen name="Settings" component={SettingScreen} />
    </TabNavigator.Navigator>
  );
};

const PlayerNavigator = createTabNavigator(PlayerHomeScreen);
const OwnerNavigator = createTabNavigator(OwnerHomeScreen);

export { PlayerNavigator, OwnerNavigator };
