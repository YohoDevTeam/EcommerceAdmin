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
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { FONTS, icons } from "./../../../constants";
import { TextIconButton } from "./../../../components";

const AuthOptionsScreen = ({ navigation }) => {
  const img1 = require("../../../../assets/images/img1.png");
  const google = require("../../../../assets/images/google.png");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{ marginTop: 20, marginLeft: 15 }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={img1}
            style={{ width: "100%", height: 200 }}
            resizeMode="contain"
          />

          <Text style={{ ...FONTS.largeTitle }}> Let's You in </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <View
            style={{
              height: 40,
              width: "auto",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 280,
                  height: 50,
                  borderColor: "lightgrey",
                  borderWidth: 1,
                  borderRadius: 10,
                }}
              >
                <Entypo name="facebook-with-circle" size={24} color="#3b5998" />
                <Text style={{ marginLeft: 10, fontWeight: "600" }}>
                  Continue with Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 40,
              width: "auto",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 280,
                  height: 50,
                  borderColor: "lightgrey",
                  borderWidth: 1,
                  borderRadius: 10,
                }}
              >
                {/* <AntDesign name="google" size={24} color=" #4c8bf5" /> */}
                <Image source={google} style={{ width: 30, height: 30 }} />
                <Text style={{ marginLeft: 10, fontWeight: "600" }}>
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 40,
              width: "auto",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 280,
                  height: 50,
                  borderColor: "lightgrey",
                  borderWidth: 1,
                  borderRadius: 10,
                }}
              >
                <AntDesign name="apple1" size={24} color="black" />
                <Text
                  style={{ marginLeft: 10, fontWeight: "600", fontSize: 15 }}
                >
                  Continue with Apple
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 35,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "lightgrey",
                marginLeft: 30,
              }}
            ></View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              or
            </Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "lightgrey",
                marginRight: 30,
              }}
            ></View>
          </View>

          <View
            style={{
              height: 40,
              width: "auto",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 280,
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
                  Sign in with password
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 30, flexDirection: "row" }}>
            <Text style={{ color: "grey", fontWeight: "bold" }}>
              Don't have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate("SignUpScreen")}>
              <Text style={{ marginLeft: 5, fontWeight: "bold" }}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthOptionsScreen;
