import { StyleProp } from "react-native";
import { TextProps, TextStyle } from "react-native";

export interface ITypography extends TextProps {
  flex?: boolean;
  flexShrink?: boolean;
  flexGrow?: boolean;
  size?: number;
  color?: string;
  center?: boolean;
  right?: boolean;
  justify?: boolean;
  padding?: number;
  margin?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  style?: StyleProp<TextStyle>;
  lineHeight?: number;
  animated?: boolean;
  ref?: any;
  children?: any;
}
