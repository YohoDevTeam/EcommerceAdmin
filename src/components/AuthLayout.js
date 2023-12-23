import React from "react";
import { View, Text, Image } from "react-native";
import { FONTS, images, SIZES, COLORS } from "../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <View
          style={{
            marginTop: SIZES.radius,
            ...titleContainerStyle,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              ...FONTS.h2,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: COLORS.darkGray,
              marginTop: SIZES.base,
              ...FONTS.body3,
            }}
          >
            {subtitle}
          </Text>
        </View>

        {/** Content / Children */}
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AuthLayout;
