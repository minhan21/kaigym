import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingScreen from "@screens/MainScreen/SettingScreen";
import Icon from "@components/Icon";
import Colors from "@constants/Colors";
import PlayerHomeScreen from "@screens/MainScreen/PlayerScreens/PlayerHomeScreen";
import OwnerHomeScreen from "@screens/MainScreen/OwnerScreens/OwnerHomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterStage from "@screens/MainScreen/OwnerScreens/RegisterStage";

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
      <TabNavigator.Screen
        options={{ headerShown: false }}
        name="Home"
        component={homeScreen}
      />
      <TabNavigator.Screen name="Settings" component={SettingScreen} />
    </TabNavigator.Navigator>
  );
};

// Create a stack navigator for the owner role
const OwnerStack = createStackNavigator();

const OwnerStackNavigator = () => (
  <OwnerStack.Navigator>
    <OwnerStack.Screen
      options={{ headerShown: false }}
      name="OwnerHome"
      component={OwnerHomeScreen}
    />
    <OwnerStack.Screen
      options={{
        headerBackTitleVisible: false, // Hide back button text
        headerTitle: "Đặt sân Tennis",
      }}
      name="RegisterStage"
      component={RegisterStage}
    />
  </OwnerStack.Navigator>
);
const PlayerNavigator = createTabNavigator(PlayerHomeScreen);
const OwnerNavigator = createTabNavigator(OwnerStackNavigator);

export { PlayerNavigator, OwnerNavigator };
