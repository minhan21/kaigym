import { ITextInput } from "@/components/ComponentTypes";
import { ReactNode } from "react";
import { Control } from "react-hook-form";

export interface FormInputProps extends ITextInput {
  name: string;
  control: Control<any>;
  placeholder?: string;
  rightComponent?: ReactNode;
  type: "input" | "password" | "input-weight" | "input-height";
}
