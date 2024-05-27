import Toast from "react-native-toast-message";

import { Platform } from "react-native";

type ToastType = {
  type: "success" | "error" | "info";
  title: string;
  content: string;
};

function showErrorToast(title, message) {
  Toast.show({
    type: "error",
    text1: title,
    text2: message,
  });
}

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

  handleFirestoreError(error) {
    console.log(error.code, "error.code"); // Log the error code for debugging

    switch (error.code) {
      case "permission-denied":
        return showErrorToast(
          "Lỗi",
          "Bạn không có quyền truy cập dữ liệu này."
        );

      case "auth/email-already-in-use":
        return showErrorToast("Lỗi", "Email đã được sử dụng");
      case "unavailable":
        return showErrorToast(
          "Lỗi",
          "Máy chủ hiện đang có vấn đề, vui lòng thử lại sau."
        );
      case "auth/invalid-credential":
        return showErrorToast("Lỗi", "Sai tài khoản hoặc mật khẩu");
      default:
        return showErrorToast(
          "Lỗi",
          "Đã xảy ra lỗi không mong muốn. Vui lòng thử lại."
        );
    }
  },
  getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  },
  getCurrentDate() {
    return new Date().toISOString().split("T")[0];
  },
  convertDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  },
  combineDateTimeToISO(dateString, timeString) {
    // Parse the date string to a JavaScript Date object
    const date = new Date(dateString);

    // Extract the time components from the timeString
    const [hours, minutes] = timeString.split(":").map(Number);

    // Set the hours and minutes on the parsed date
    date.setHours(hours, minutes, 0, 0); // Set in local time

    // Format the date to ISO 8601 format
    const isoString = date.toISOString();

    return isoString;
  },

  convertStatus(status) {
    if (status === "holding") {
      return "Đang giữ chỗ";
    }
    if (status === "available") {
      return "Sân trống";
    }
    if (status === "reserved") {
      return "Đã đặt";
    }
  },
};
export default Helper;
