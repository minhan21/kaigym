import { StyleSheet, TouchableOpacity } from "react-native";

import Block from "@components/BaseComponent/Block";
import Typography from "@components/BaseComponent/Text";
import Colors from "@constants/Colors";
import Icon from "@components/Icon";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationTypes } from "@navigation/navigationTypes";

const OwnerHomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<NavigationTypes>>();

  const navigationToRegisterStage = () => {
    navigation.navigate("RegisterStage");
  };
  return (
    <Block flex backgroundColor={Colors.light.white}>
      <TouchableOpacity
        onPress={navigationToRegisterStage}
        style={styles.floatBtn}
      >
        <Icon icon="Plus" size={24} />
      </TouchableOpacity>
    </Block>
  );
};

export default OwnerHomeScreen;
const styles = StyleSheet.create({
  floatBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 90,
    borderWidth: 1,
    padding: 8,
    borderColor: Colors.light.gray1,
  },
});
