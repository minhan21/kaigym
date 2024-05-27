// CustomModal.tsx
import { CustomModalProps } from "@components/ComponentTypes";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import Block from "../Block";

const CustomModal: React.FC<CustomModalProps> = ({
  isVisible,
  onClose,
  title,
  children,
  animationIn = "slideInUp",
  animationOut = "slideOutDown",
  backdropColor = "black",
  backdropOpacity = 0.5,
  onBackdropPress,
  backgroundColor = "#FFF",
  style,
  ...props
}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn={animationIn}
      animationOut={animationOut}
      backdropColor={backdropColor}
      backdropOpacity={backdropOpacity}
      onBackdropPress={onBackdropPress || onClose}
      style={[styles.modal, style]}
      {...props}
    >
      <Block backgroundColor={backgroundColor} style={styles.container}>
        {title && <Text style={styles.title}>{title}</Text>}
        {children}
      </Block>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    // justifyContent: "center",
    // alignItems: "center",
    // margin: 0,
  },
  container: {
    borderRadius: 10,

    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default CustomModal;
