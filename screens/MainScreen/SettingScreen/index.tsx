import { useState } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import Block from "@components/BaseComponent/Block";
import Typography from "@components/BaseComponent/Text";
import Icon from "@components/Icon";
import Colors from "@constants/Colors";
import { NavigationTypes } from "@navigation/navigationTypes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { logoutUser } from "../../Authentication/authenticateCollection";

const SettingScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<StackNavigationProp<NavigationTypes>>();
  const handleLogout = async () => {
    setLoading(true); // Start loading
    await logoutUser();

    setLoading(false); // Stop loading
  };
  return (
    <Block radius={0} flex backgroundColor={Colors.light.white}>
      <TouchableOpacity onPress={handleLogout}>
        <Block margin={8} row alignCenter>
          {loading ? <ActivityIndicator /> : <Icon icon="LogOut" size={18} />}
          <Typography marginLeft={8}>Log out</Typography>
        </Block>
      </TouchableOpacity>
    </Block>
  );
};

export default SettingScreen;
