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
import { FormInput } from "../../../components";
import { utils } from "../../../utils";
import { icons, SIZES, FONTS, COLORS } from "../../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ForgetPasswordSetNewPasswordScreen = ({navigation}) => {
  const img2 = require("../../../../assets/images/img2.png");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);
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
            Set New Password
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 50, justifyContent: "center" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={img2}
            style={{ width: "100%", height: 200 }}
            resizeMode="contain"
          />
        </View>
       

        <View style={{ marginLeft: 20, marginTop: 25 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Create Your New Password
          </Text>
        </View>
        <View style={{ marginTop: 10,marginHorizontal:SIZES.radius }}>
         
          <FormInput
            placeholder="New Password"
            value={password}
            secureTextEntry={!showPass}
            autoCompleteType="password"
            containerStyle={{}}
            onChange={(value) => setPassword(value)}
            appendComponent={
              <TouchableOpacity
                style={{
                  width: 40,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                onPress={() => setShowPass(!showPass)}
              >
                <Image
                  source={showPass ? icons.eye_close : icons.eye}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.gray,
                  }}
                />
              </TouchableOpacity>
            }
            prependComponent={
              <View
                style={{
                  justifyContent: "center",
                  marginRight: 10,
                }}
              >
                <MaterialIcons name="lock" size={18} color="black" />
              </View>
            }
          />
          <FormInput
            placeholder="Confirm New Password"
            value={confirmPassword}
            secureTextEntry={!showConfirmPass}
            autoCompleteType="password"
            containerStyle={{}}
            onChange={(value) => setConfirmPassword(value)}
            appendComponent={
              <TouchableOpacity
                style={{
                  width: 40,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                onPress={() => setShowConfirmPass(!showConfirmPass)}
              >
                <Image
                  source={showConfirmPass ? icons.eye_close : icons.eye}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.gray,
                  }}
                />
              </TouchableOpacity>
            }
            prependComponent={
              <View
                style={{
                  justifyContent: "center",
                  marginRight: 10,
                }}
              >
                <MaterialIcons name="lock" size={18} color="black" />
              </View>
            }
          />
        </View>

        <TouchableOpacity
          style={{
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 20,
            
          }}
          onPress={() =>
            navigation.navigate("BottomTabs")
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

export default ForgetPasswordSetNewPasswordScreen;
