import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import Block from "../Block";
import Colors from "@constants/Colors";

const LoadingScreen = () => {
  return (
    <Block flex alignCenter justifyCenter>
      <ActivityIndicator color={Colors.light.primaryColor} />
    </Block>
  );
};

export default LoadingScreen;
