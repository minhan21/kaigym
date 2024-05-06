import { IconName } from "@components/Icon";
import Colors from "@constants/Colors";
import { TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";

export interface IButton extends TouchableOpacityProps {
  title?: string;
  titleStyle?: TextStyle | TextStyle[];
  backgroundColor?: string;
  icon?: IconProps;
  color?: string;
  shadow?: boolean;
  onPressColor?: string;
  isLoading?: boolean;
  loadingColor?: string;
  containerStyle?: ViewStyle | ViewStyle[];
  isShowRender?: boolean;
  position?: "right" | "left";
}

export interface IconProps {
  name: IconName;
  size?: number;
  color?: keyof typeof Colors | string;
  containerStyle?: ViewStyle | ViewStyle[];
}
export const baseStyle: ViewStyle = {
  padding: 10,
};

export const shadowStyle: ViewStyle = {
  shadowOffset: {
    width: 8,
    height: 6,
  },
  shadowOpacity: 0.2,
  shadowRadius: 3.84,
  elevation: 3,
  shadowColor: "#000",
};
