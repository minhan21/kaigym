import Toast from "react-native-toast-message";
import { Platform } from "react-native";
type ToastType = {
  type: "success" | "error" | "info";
  title: string;
  content: string;
};
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
  showToastMessage({ type, title, content }: ToastType) {
    // Ensure the type is valid
    const validTypes = ["success", "error", "info"];
    if (!validTypes.includes(type)) {
      console.error(`Invalid toast type: ${type}`);
      return;
    }

    // Show the toast with the specified type, title, and content
    Toast.show({
      type: type, // 'success', 'error', 'info'
      text1: title,
      text2: content,
    });
  },
};
export default Helper;
