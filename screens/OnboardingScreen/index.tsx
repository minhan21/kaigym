import Block from "@components/BaseComponent/Block";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Typography from "@components/BaseComponent/Text";
import { IMAGES } from "assets/images";
import Colors from "@constants/Colors";
import { getSize } from "utils/responsive";
import Fonts from "@constants/Fonts";
import FontSize from "@constants/FontSize";
import GradientView from "@components/GradientView.tsx";
import { useNavigation } from "@react-navigation/native";
import { NavigationTypes } from "@navigation/navigationTypes";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = NavigationTypes;

const OnboardingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const navigateToSignUpScreen = () => {
    navigation.navigate("Auth");
  };

  return (
    <Block flex radius={0} backgroundColor={Colors.light.white}>
      <Block alignCenter justifyCenter flex>
        <Image
          style={{ width: 177, resizeMode: "contain" }}
          source={IMAGES.logo}
        />

        <Typography style={styles.title}>
          Simple - Adaptable - Flexible
        </Typography>
      </Block>
      <TouchableOpacity
        onPress={() => navigateToSignUpScreen()}
        style={styles.button}
      >
        <GradientView
          shadow
          radius={99}
          name="BlueLinear"
          children={
            <Typography style={styles.txtButton}>Get Started</Typography>
          }
        />
      </TouchableOpacity>
    </Block>
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.subTitle,
    fontFamily: Fonts.regular,
    color: Colors.light.gray1,
  },
  txtButton: {
    color: Colors.light.white,
    fontSize: getSize.m(16),
    fontFamily: Fonts.bold,
  },
  button: {
    marginBottom: getSize.m(40),
  },
});
