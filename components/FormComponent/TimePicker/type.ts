import { ReactNode } from "react";
import { Control } from "react-hook-form";
import { ViewStyle } from "react-native/types";

export interface FormTimePickerProps {
  name: string;
  control: Control<any>;
  placeholder?: string;
  rightComponent?: ReactNode;
  containerStyles?: ViewStyle | ViewStyle[];
}
