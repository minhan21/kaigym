import Colors from "@/constants/Colors";
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
  name: string;
  size?: number;
  color?: keyof typeof Colors | string;
  containerStyle?: ViewStyle | ViewStyle[];
}
