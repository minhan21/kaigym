import React, { ReactElement, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./types";
import Block from "@/components/BaseComponent/Block";
import Icon from "@/components/Icon";
import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import FontSize from "@/constants/FontSize";
import GradientView from "@/components/GradientView.tsx";

type InputType = "input-weight" | "input-height" | "input" | "password";
interface InputRightComponentProps {
  type: InputType;
}

const InputRightComponent: React.FC<InputRightComponentProps> = ({ type }) => {
  const components: Record<InputType, ReactElement> = {
    input: <></>,
    "input-weight": (
      <GradientView name="PurpleLinear">
        <Text style={styles.weightBlockText}>KG</Text>
      </GradientView>
    ),
    "input-height": (
      <GradientView name="PurpleLinear">
        <Text style={styles.weightBlockText}>CM</Text>
      </GradientView>
    ),
    password: <></>,
  };

  // Safe to use type as key since it's constrained by InputType
  return components[type] || null;
};
const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  placeholder,
  rightComponent,
  type = "input",
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(false);

  const renderInput = ({ onChange, onBlur, value }: any, errors: any) => (
    <Block>
      <Block row alignCenter space="between">
        <Block row alignCenter>
          <Icon size={18} icon="Profile" />
          <TextInput
            style={styles.inputContainer}
            placeholder={placeholder}
            placeholderTextColor={Colors.light.gray2}
            value={value}
            secureTextEntry={type === "password" && !hidePassword}
            onChangeText={onChange}
            onBlur={onBlur}
            {...props}
          />
        </Block>

        {type === "password" && (
          <TouchableOpacity onPress={() => setHidePassword((prev) => !prev)}>
            <Icon size={18} icon={hidePassword ? "Show" : "Hide"} />
          </TouchableOpacity>
        )}
        {rightComponent}
        <InputRightComponent type={type} />
      </Block>
      {errors[name]?.message && (
        <Block marginTop={4} row alignCenter>
          <Icon size={12} color="red" icon="Danger2" />
          <Text style={styles.errorText}>
            {errors[name]?.message}Error Field is required
          </Text>
        </Block>
      )}
    </Block>
  );

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => renderInput(field, errors)}
      defaultValue=""
    />
  );
};

export default FormInput;
const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 10,
    fontSize: FontSize.smallText,
  },
  errorText: {
    color: Colors.light.error,
    marginLeft: 4,
    fontFamily: Fonts.lightItalic,
    fontSize: FontSize.caption,
  },
  weightBlockText: {
    color: Colors.light.white,
    fontFamily: Fonts.medium,
    fontSize: FontSize.smallText,
  },
});
