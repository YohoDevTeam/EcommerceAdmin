import {
  View,
  Text,
  Image,
  Touchable,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ForgetPasswordScreen = ({ navigation }) => {
  const img2 = require("../../../../assets/images/img2.png");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <TouchableOpacity
          style={{
            marginTop: 20,
            marginLeft: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
          <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 10 }}>
            Forget Password
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={img2}
            style={{ width: "100%", height: 200 }}
            resizeMode="contain"
          />
        </View>

        <View style={{ marginLeft: 20, marginTop: 25 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Select which contact details should we use to{" "}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            reset your password{" "}
          </Text>
        </View>

        <TouchableOpacity style={{ marginHorizontal: 20, marginTop: 15 }}>
          <View
            style={{
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 10,
              width: "100%",
              height: 100,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <View
                style={{
                  padding: 15,
                  backgroundColor: "lightgrey",
                  borderRadius: 25,
                }}
              >
                <AntDesign name="message1" size={24} color="black" />
              </View>

              <View style={{ marginLeft: 10 }}>
                <Text> via Sms</Text>
                <Text style={{ fontWeight: "bold" }}> +1 111 ******99</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginHorizontal: 20, marginTop: 15 }}>
          <View
            style={{
              borderColor: "lightgrey",
              borderWidth: 1,
              borderRadius: 10,
              width: "100%",
              height: 100,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <View
                style={{
                  padding: 15,
                  backgroundColor: "lightgrey",
                  borderRadius: 25,
                }}
              >
                <Ionicons name="mail" size={24} color="black" />
              </View>

              <View style={{ marginLeft: 10 }}>
                <Text> via Email</Text>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  and***ley@yourdomain.com
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 20,
          }}
          onPress={() =>
            navigation.navigate("ForgetPasswordOtpVerificationScreen")
          }
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: 50,
              backgroundColor: "black",
              borderRadius: 25,
            }}
          >
            <Text
              style={{
                marginLeft: 10,
                fontWeight: "600",
                fontSize: 15,
                color: "white",
              }}
            >
              continue
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;
