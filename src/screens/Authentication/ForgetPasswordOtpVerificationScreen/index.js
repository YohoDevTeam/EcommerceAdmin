import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import OTPTextInput from "react-native-otp-textinput";
import { AntDesign } from "@expo/vector-icons";

const ForgetPasswordOtpVerificationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ flexDirection: "row", marginTop: 30, marginHorizontal: 10 }}
      >
        <View style={{ marginRight: 10 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Forgot Password
        </Text>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 16 }}
          >
            Code has been send to +9021****998
          </Text>
        </View>

        <View style={{ marginHorizontal: 15, marginVertical: 40 }}>
          <OTPTextInput
            ref={(e) => (otpInput = e)}
            inputCount={6}
            // handleTextChange={(val) => setOtp(val)}
            containerStyle={{}}
            textInputStyle={{
              borderWidth: 1,
              borderRadius: 10,
              borderBottomWidth: 1,
            }}
            offTintColor="grey"
          />
        </View>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 16 }}
          >
            Resend code in 53s
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "black",
            marginBottom: 30,
            height: 50,
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
          }}
          onPress={() =>
            navigation.navigate("ForgetPasswordSetNewPasswordScreen")
          }
        >
          <View>
            <Text style={{ color: "white", fontWeight: "bold" }}>Verify</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPasswordOtpVerificationScreen;
