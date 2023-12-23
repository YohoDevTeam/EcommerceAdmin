import { View, Text, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { SIZES, FONTS, COLORS } from "../../constants";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const OnboardingScreen = () => {
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const imageOne = require("../../../assets/images/onboarding1.png");
  const imageTwo = require("../../../assets/images/onboarding2.png");
  const imageThree = require("../../../assets/images/onboarding3.png");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : (
        <Onboarding
          onSkip={() => navigation.navigate("SignInScreen")}
          onDone={() => navigation.navigate("SignInScreen")}
          bottomBarColor="white"
          containerStyles={{
            backgroundColor: COLORS.background,
          }}
          pages={[
            {
              backgroundColor: COLORS.background,
              image: <Image source={imageOne} />,
              title: "We provide high quality products just for you",
              titleStyles: {
                ...FONTS.h1,
                marginHorizontal: 5,
              },
              subtitle: "",
            },
            {
              backgroundColor: COLORS.background,
              image: <Image source={imageTwo} />,
              title: "Your satisfaction is our number one priority",
              titleStyles: {
                ...FONTS.h1,
                marginHorizontal: 5,
              },
              subtitle: "",
            },
            {
              backgroundColor: COLORS.background,
              image: <Image source={imageThree} />,
              titleStyles: {
                ...FONTS.h1,
                marginHorizontal: 5,
              },
              title: "Let's fullfill your daily needs with Yoho righ now!",
              subtitle: "",
            },
          ]}
        />
      )}
    </SafeAreaView>
  );
};

export default OnboardingScreen;
