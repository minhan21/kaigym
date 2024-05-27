import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { TimePickerModal } from "react-native-paper-dates";
import { Provider as PaperProvider } from "react-native-paper";
import { Controller } from "react-hook-form";
import { FormTimePickerProps } from "./type";
import Block from "@components/BaseComponent/Block";
import Icon from "@components/Icon";
import Colors from "@constants/Colors";
import Fonts from "@constants/Fonts";
import FontSize from "@constants/FontSize";

const TimePicker: React.FC<FormTimePickerProps> = ({
  name,
  control,
  placeholder,
  rightComponent,
  containerStyles,
  ...props
}) => {
  const [isPickerVisible, setPickerVisible] = useState(false);

  const onDismiss = () => {
    setPickerVisible(false);
  };

  const renderTimePicker = ({ onChange, onBlur, value }: any, errors: any) => {
    const onConfirm = ({ hours, minutes }) => {
      const formattedTime = `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}`;
      onChange(formattedTime);
      setPickerVisible(false);
    };
    return (
      // <PaperProvider>
      <Block paddingVertical={15}>
        <TouchableOpacity
          style={styles.row}
          onPress={() => setPickerVisible(true)}
        >
          <Icon icon="Calendar" size={18} />
          <TextInput
            onPress={() => setPickerVisible(true)}
            editable={false}
            value={value}
            style={styles.inputContainer}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        </TouchableOpacity>

        <TimePickerModal
          visible={isPickerVisible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          label="Select time"
          cancelLabel="Cancel"
          use24HourClock={true}
          confirmLabel="Ok"
          // hours={24}
          // minutes={14}
          {...props}
        />
      </Block>
      // </PaperProvider>
    );
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState: { errors } }) =>
        renderTimePicker(field, errors)
      }
      defaultValue=""
    />
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: Colors.light.error,
    marginLeft: 4,
    fontFamily: Fonts.lightItalic,
    fontSize: FontSize.caption,
  },
  inputContainer: {
    marginLeft: 10,
    fontSize: FontSize.smallText,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default TimePicker;
