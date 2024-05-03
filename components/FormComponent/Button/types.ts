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
  type: any;
  name: IconName;
  size?: number;
  color?: keyof typeof Colors | string;
  containerStyle?: ViewStyle | ViewStyle[];
}
export const baseStyle: ViewStyle = {
  backgroundColor: "blue",
  padding: 10,
};

export const shadowStyle: ViewStyle = {
  shadowOffset: { width: 5, height: 5 },
  shadowOpacity: 0.5,
  shadowRadius: 10,
  elevation: 20,
  shadowColor: "#000",
};
