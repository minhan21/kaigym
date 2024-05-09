import React, { ReactElement, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./types";
import GradientView from "@components/GradientView.tsx";
import Block from "@components/BaseComponent/Block";
import Icon from "@components/Icon";
import Colors from "@constants/Colors";
import FontSize from "@constants/FontSize";
import Fonts from "@constants/Fonts";

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
  leftIcon,
  rightComponent,
  containerStyles,
  type = "input",
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(false);

  const renderInput = ({ onChange, onBlur, value }: any, errors: any) => (
    <Block style={containerStyles} paddingVertical={15}>
      <Block row alignCenter space="between">
        <Block row alignCenter>
          <Icon size={leftIcon.size} icon={leftIcon.name} />
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
          {type === "password" && (
            <TouchableOpacity onPress={() => setHidePassword((prev) => !prev)}>
              <Icon size={18} icon={hidePassword ? "Show" : "Hide"} />
            </TouchableOpacity>
          )}
        </Block>

        {rightComponent}
        <InputRightComponent type={type} />
      </Block>
      {errors[name]?.message && (
        <Block marginTop={8} row alignCenter>
          <Icon size={12} color="red" icon="Danger2" />
          <Text style={styles.errorText}>{errors[name]?.message}</Text>
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
    flex: 1,
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
