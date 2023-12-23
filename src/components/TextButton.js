import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { FONTS, COLORS } from "../constants";

const TextButton = ({
  label,
  buttonContainerStyle,
  disabled,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.white,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
