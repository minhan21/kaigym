import Block from "@components/BaseComponent/Block";
import Typography from "@components/BaseComponent/Text";
import Icon from "@components/Icon";
import Colors from "@constants/Colors";
import Fonts from "@constants/Fonts";
import FontSize from "@constants/FontSize";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, TouchableOpacity, Modal, TextInput } from "react-native";
import { Calendar } from "react-native-calendars";
import { FormDatePickerProps } from "./type";

const DatePicker: React.FC<FormDatePickerProps> = ({
  name,
  control,
  placeholder,
  rightComponent,
  containerStyles,
  ...props
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const currentDate = new Date().toISOString().split("T")[0];

  const renderDatePicker = ({ onChange, onBlur, value }: any, errors: any) => {
    const handleDayPress = (day) => {
      console.log(day, "day");
      onChange(day.dateString);
      setModalVisible(false);
    };
    return (
      <Block paddingVertical={15}>
        <TouchableOpacity
          style={styles.row}
          onPress={() => setModalVisible(true)}
        >
          <Icon icon="Calendar" size={18} />
          <TextInput
            onPress={() => setModalVisible(true)}
            editable={false}
            value={value}
            style={styles.inputContainer}
            onBlur={onBlur}
            placeholder="Ngày đặt sân"
          />
        </TouchableOpacity>
        {errors[name]?.message && (
          <Block marginTop={8} row alignCenter>
            <Icon size={12} color="red" icon="Danger2" />
            <Typography style={styles.errorText}>
              {errors[name]?.message}
            </Typography>
          </Block>
        )}
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <Block style={styles.modalBackground}>
            <Block>
              <Calendar
                onDayPress={handleDayPress}
                markedDates={{
                  [currentDate]: { selected: true, selectedColor: "blue" },
                }}
                {...props}
              />
            </Block>
          </Block>
        </Modal>
      </Block>
    );
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState: { errors } }) =>
        renderDatePicker(field, errors)
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

export default DatePicker;
