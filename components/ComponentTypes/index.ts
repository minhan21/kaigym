import { IconName } from "@components/Icon";
import Colors from "@constants/Colors";
import { TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface ITextInput extends TextInputProps {
  /**
   * Label of textinput
   */
  label?: string;
  onRightPress?: () => void;
  onLeftPress?: () => void;

  /**
   * Styles of label
   */
  labelStyle?: TextStyle | TextStyle[];

  /**
   * Textinput size
   */
  size?: number;

  containerInputStyle?: ViewStyle | ViewStyle[];

  color?: keyof typeof Colors;
  isSecure?: boolean;
  rightIcon?: IconProps;
  leftIcon?: IconProps;
  maxLength?: number;
  inputStyle?: ViewStyle | ViewStyle[];
  errorText?: string;
  isError?: boolean;
  disabled?: boolean;
  errorContainerStyle?: ViewStyle | ViewStyle[];
  ref?: any;
  maxHeight?: number;
  leftDistance?: number;
  borderWidth?: number;
  borderColor?: string;
  borderColorError?: string;
}

export interface IconProps {
  name: IconName;
  size?: number;
  color?: keyof typeof Colors | string;
  action?: () => void;
  containerStyle?: ViewStyle | ViewStyle[];
}
