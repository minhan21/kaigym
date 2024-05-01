import React, { useState } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Control, Controller } from "react-hook-form";
import Icon from "@/components/Icon";
import Typography from "@/components/BaseComponent/Text";
import Colors from "@/constants/Colors";
import Block from "@/components/BaseComponent/Block";
import FontSize from "@/constants/FontSize";
import Fonts from "@/constants/Fonts";

interface Option {
  label: string;
  value: string | number;
}

interface CustomDropdownProps {
  control: Control<any>; // Specify better type here if possible
  name: string;
  options: Option[];
  label: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  control,
  name,
  options,
  label,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
              onBlur();
            }}
          >
            <Block row alignCenter space="between">
              <Block row alignCenter>
                <Icon size={18} icon="User2Light" />
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
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 200,
    margin: 10,
  },

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
