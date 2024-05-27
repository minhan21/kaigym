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

export interface CustomModalProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  animationIn?: AnimationType;
  animationOut?: AnimationType;
  backdropColor?: string;
  backdropOpacity?: number;
  onBackdropPress?: () => void;
  style?: object;
}
export type AnimationType =
  | "slideInUp"
  | "slideOutDown"
  | "bounce"
  | "flash"
  | "jello"
  | "pulse"
  | "rotate"
  | "rubberBand"
  | "shake"
  | "swing"
  | "tada"
  | "wobble"
  | "bounceIn"
  | "bounceInDown"
  | "bounceInUp"
  | "bounceInLeft"
  | "bounceInRight"
  | "bounceOut"
  | "bounceOutDown"
  | "bounceOutUp"
  | "bounceOutLeft"
  | "bounceOutRight"
  | "fadeIn"
  | "fadeInDown"
  | "fadeInDownBig"
  | "fadeInUp"
  | "fadeInUpBig"
  | "fadeInLeft"
  | "fadeInLeftBig"
  | "fadeInRight"
  | "fadeInRightBig"
  | "fadeOut"
  | "fadeOutDown"
  | "fadeOutDownBig"
  | "fadeOutUp"
  | "fadeOutUpBig"
  | "fadeOutLeft"
  | "fadeOutLeftBig"
  | "fadeOutRight"
  | "fadeOutRightBig"
  | "flipInX"
  | "flipInY"
  | "flipOutX"
  | "flipOutY"
  | "lightSpeedIn"
  | "lightSpeedOut"
  | "slideInDown"
  | "slideInLeft"
  | "slideInRight"
  | "slideOutUp"
  | "slideOutLeft"
  | "slideOutRight"
  | "zoomIn"
  | "zoomInDown"
  | "zoomInUp"
  | "zoomInLeft"
  | "zoomInRight"
  | "zoomOut"
  | "zoomOutDown"
  | "zoomOutUp"
  | "zoomOutLeft"
  | "zoomOutRight";
