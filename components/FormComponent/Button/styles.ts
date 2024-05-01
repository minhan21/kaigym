import { getSize } from "@/utils/responsive";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonStyle: {
    paddingVertical: getSize.m(16.5),
    paddingHorizontal: getSize.m(16),
    borderRadius: getSize.m(12),
  },

  shadowBtn: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 3,
    shadowColor: "rgba(0,0,0,0.2)",
  },
});
