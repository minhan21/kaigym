import React, { useState } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ViewStyle,
} from "react-native";
import { Control, Controller } from "react-hook-form";
import Block from "@components/BaseComponent/Block";
import Icon from "@components/Icon";
import Typography from "@components/BaseComponent/Text";
import FontSize from "@constants/FontSize";
import Colors from "@constants/Colors";
import Fonts from "@constants/Fonts";
import { IconProps } from "../Button/types";

interface Option {
  label: string;
  value: string | number;
}

interface CustomDropdownProps {
  control: Control<any>; // Specify better type here if possible
  name: string;
  options: Option[];
  label: string;
  containerStyles?: ViewStyle | ViewStyle[];
  icon: IconProps;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  control,
  name,
  options,
  label,
  containerStyles,
  icon,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Block paddingVertical={15} style={[styles.container, containerStyles]}>
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
              onBlur();
            }}
          >
            <Block row alignCenter space="between">
              <Block row alignCenter>
                <Icon size={icon.size} icon={icon.name} />
                <Typography
                  style={{ fontSize: FontSize.smallText }}
                  marginLeft={10}
                  color={Colors.light.gray2}
                >
                  {value ?? label}
                </Typography>
              </Block>
              <Icon size={18} icon="Dropdown" />
            </Block>
          </TouchableOpacity>
          <Modal
            transparent={true}
            visible={visible}
            animationType="slide"
            onRequestClose={() => setVisible(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              onPress={() => setVisible(false)}
            >
              <View style={styles.modalContent}>
                <ScrollView>
                  {options.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.option}
                      onPress={() => {
                        onChange(option.value);
                        setVisible(false);
                      }}
                    >
                      <Typography style={styles.optionText}>
                        {option.label}
                      </Typography>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </TouchableOpacity>
          </Modal>
        </Block>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {},

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    width: "80%",
    maxHeight: "50%",
    borderRadius: 5,
    overflow: "hidden",
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: Fonts.regular,
  },
});

export default CustomDropdown;
