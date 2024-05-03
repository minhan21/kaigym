import { forwardRef } from "react";
import { Text, Animated, StyleSheet } from "react-native";
import { ITypography } from "./types";
import { isNumber } from "lodash";

import { handleMargin, handlePadding } from "@shared/index";
import Colors from "@constants/Colors";
import { getSize } from "utils/responsive";
import Helper from "utils/helper";
import Fonts from "@constants/Fonts";

const ANDROID_LINE_HEIGHT_MULTIPLIER = 1.2;
const IOS_LINE_HEIGHT_MULTIPLIER = 1.2;
const Typography = forwardRef<any, ITypography>((props, ref) => {
  const {
    flex,
    flexShrink,
    flexGrow,
    size = 14,
    color = "black",
    center,
    right,
    justify,
    padding,
    margin,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingVertical,
    paddingHorizontal,
    marginVertical,
    marginHorizontal,
    style,
    lineHeight,
    animated,
    ...textProps
  } = props;

  const DEFAULT_LINE_HEIGHT = Helper.calculateLineHeight(
    getSize.m(size),
    IOS_LINE_HEIGHT_MULTIPLIER,
    ANDROID_LINE_HEIGHT_MULTIPLIER
  );

  const textStyle: any = [
    flex && { flex: 1 },
    flexShrink && { flexShrink: 1 },
    flexGrow && { flexGrow: 1 },
    { color: (Colors as any)[color] || color },
    center && { textAlign: "center" },
    right && { textAlign: "right" },
    justify && { textAlign: "justify" },
    padding && { ...handlePadding(getSize.m(padding)) },
    margin && { ...handleMargin(getSize.m(margin)) },
    paddingTop && { paddingTop: getSize.m(paddingTop) },
    paddingRight && { paddingRight: getSize.m(paddingRight) },
    paddingBottom && { paddingBottom: getSize.m(paddingBottom) },
    paddingLeft && { paddingLeft: getSize.m(paddingLeft) },
    marginBottom && { marginBottom: getSize.m(marginBottom) },
    marginTop && { marginTop: getSize.m(marginTop) },
    marginRight && { marginRight: getSize.m(marginRight) },
    marginLeft && { marginLeft: getSize.m(marginLeft) },
    paddingHorizontal && { paddingHorizontal: getSize.m(paddingHorizontal) },
    paddingVertical && { paddingVertical: getSize.m(paddingVertical) },
    marginHorizontal && { marginHorizontal: getSize.m(marginHorizontal) },
    marginVertical && { marginVertical: getSize.m(marginVertical) },
    { lineHeight: isNumber(lineHeight) ? lineHeight : 0 },
    { fontSize: getSize.m(size) },
    { fontFamily: Fonts.regular },
    { ...StyleSheet.flatten(style) },
  ];

  if (animated) {
    return (
      <Animated.Text
        style={textStyle}
        {...textProps}
        maxFontSizeMultiplier={12}
      >
        {props.children}
      </Animated.Text>
    );
  }

  return (
    <Text style={textStyle} {...textProps} ref={ref}>
      {props.children}
    </Text>
  );
});

export default Typography;
