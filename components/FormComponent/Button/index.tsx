import Block from "@components/BaseComponent/Block";
import Typography from "@components/BaseComponent/Text";
import GradientView from "@components/GradientView.tsx";
import Icon from "@components/Icon";
import Colors from "@constants/Colors";
import Fonts from "@constants/Fonts";
import React from "react";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { getSize } from "utils/responsive";
import styles from "./styles";
import { baseStyle, IButton, IconProps, shadowStyle } from "./types";

const Button: React.FC<IButton> = (props) => {
  const {
    title,
    color,
    titleStyle,
    backgroundColor,
    onPressColor,
    children,
    icon,
    shadow,
    position = "left",
    loadingColor = "white",
    isLoading,
    containerStyle,
    ...pressableProps
  } = props;
  const btnBg = backgroundColor
    ? (Colors as any)[backgroundColor] || backgroundColor
    : Colors.light.purpleLinear;
  const pressBg = onPressColor
    ? (Colors as any)[onPressColor] || onPressColor
    : Colors.light.gray2;
  const textColor = color ? (Colors as any)[color] : "white";

  const _renderTitle = () => (
    <Block row alignCenter justifyCenter>
      {icon && position === "left" && renderIcon(icon)}
      {!!title && (
        <Typography
          color={textColor}
          size={getSize.m(18)}
          center
          style={[
            StyleSheet.flatten(titleStyle),
            { fontFamily: Fonts.bold, marginHorizontal: 10 },
          ]}
        >
          {title}
        </Typography>
      )}
      {icon && position === "right" && renderIcon(icon)}
      {isLoading && (
        <ActivityIndicator style={{ marginLeft: 8 }} color={loadingColor} />
      )}
    </Block>
  );
  const combinedStyle = StyleSheet.flatten([baseStyle, shadowStyle]);
  const customStyles = [
    styles.buttonStyle,
    {
      backgroundColor: btnBg,
    },
    StyleSheet.flatten(pressableProps.style),
  ];

  if (shadow) {
    return (
      <TouchableOpacity>
        <GradientView
          name="BlueLinear"
          radius={99}
          {...pressableProps}
          style={combinedStyle}
        >
          {children ? children : _renderTitle()}
        </GradientView>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity {...pressableProps}>
      <GradientView radius={99} name="BlueLinear">
        {children ? children : _renderTitle()}
        {pressableProps.disabled && (
          <Block
            opacity={0.3}
            style={[StyleSheet.absoluteFillObject]}
            backgroundColor="white"
          />
        )}
      </GradientView>
    </TouchableOpacity>
  );
};

export default Button;

const renderIcon = (iconPos: IconProps) => {
  if (iconPos) {
    const iconColor = iconPos.color || "primary";

    return (
      <Block style={StyleSheet.flatten([iconPos.containerStyle])}>
        <Icon
          icon={iconPos.name}
          color={(Colors as any)[iconColor] || iconColor}
          size={getSize.m(iconPos?.size || 18)}
        />
      </Block>
    );
  }
};
