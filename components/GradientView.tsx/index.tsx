import React, { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type GradientViewProps = {
  name: "BlueLinear" | "PurpleLinear";
  children: ReactNode;
  style?: ViewStyle;
  radius?: number;
};

const gradientConfigurations: Record<
  string,
  {
    colors: string[];
    start: { x: number; y: number };
    end: { x: number; y: number };
  }
> = {
  BlueLinear: {
    colors: ["#92A3FD", "#9DCEFF"],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
  PurpleLinear: {
    colors: ["#C58BF2", "#EEA4CE"],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
};

const GradientView = ({ name, children, style, radius }: GradientViewProps) => {
  const gradientConfig = gradientConfigurations[name];
  if (!gradientConfig) return null;

  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={gradientConfig.colors}
        start={gradientConfig.start}
        end={gradientConfig.end}
        style={[styles.gradient, { borderRadius: radius }]}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  gradient: {
    padding: 15,
    alignItems: "center",
  },
});

export default GradientView;
