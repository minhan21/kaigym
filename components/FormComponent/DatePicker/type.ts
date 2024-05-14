import { ReactNode } from "react";
import { Control } from "react-hook-form";
import { CalendarProps } from "react-native-calendars";
import { ViewStyle } from "react-native/types";

export interface FormDatePickerProps extends CalendarProps {
  name: string;
  control: Control<any>;
  placeholder?: string;
  rightComponent?: ReactNode;
  containerStyles?: ViewStyle | ViewStyle[];
}
