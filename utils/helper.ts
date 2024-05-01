import { Platform } from "react-native";

const Helper = {
  calculateLineHeight(
    fontSize: number,
    iOSLineHeightMultiplier = 1.48,
    androidLineHeightMultiplier = 1.5
  ): number {
    const lineHeightMultiplier =
      Platform.OS === "ios"
        ? iOSLineHeightMultiplier
        : androidLineHeightMultiplier;
    return fontSize * lineHeightMultiplier;
  },
};
export default Helper;
