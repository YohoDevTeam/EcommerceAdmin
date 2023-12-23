import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FormInput } from "../../../components";
import { icons, COLORS, FONTS, SIZES } from "../../../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import utils from "./../../../../assets/utils/Utils";
import * as SecureStore from "expo-secure-store";
import { useAuthContext } from "../../../../context/AuthContext/AuthContext";

const SignInScreen = ({ navigation }) => {
  const { setToken } = useAuthContext();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);

  function isEnableSignIn() {
    return email != "" && password != "" && emailError == "";
  }

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  const handleSignIn = async (event) => {
    save("token", "ThisisToken");
    setToken("ThisisToken");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: SIZES.padding,
      }}
    >
      <KeyboardAwareScrollView keyboardDismissMode="on-drag">
        <View style={{ flex: 1 }}>
          <View style={{}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: "center", marginTop: 60 }}>
            <View style={{}}>
              <Text
                style={{
                  ...FONTS.largeTitle,
                }}
              >
                Login to your{" "}
              </Text>
              <Text
                style={{
                  ...FONTS.largeTitle,
                }}
              >
                Account
              </Text>
            </View>

            <View style={{ marginTop: 20 }}>
              <FormInput
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="Email"
                value={email}
                onChange={(value) => {
                  utils.validateEmail(value, setEmailError);
                  setEmail(value);
                }}
                errorMsg={emailError}
                appendComponent={
                  <View
                    style={{
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={
                        email == "" || (email != "" && emailError == "")
                          ? icons.correct
                          : icons.cancel
                      }
                      style={{
                        height: 20,
                        width: 20,
                        tintColor:
                          email == ""
                            ? COLORS.gray
                            : email != "" && emailError == ""
                            ? COLORS.green
                            : COLORS.red,
                      }}
                    />
                  </View>
                }
                prependComponent={
                  <View
                    style={{
                      justifyContent: "center",
                      marginRight: 10,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="email"
                      size={18}
                      color="black"
                    />
                  </View>
                }
              />
              <FormInput
                placeholder="Password"
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
            </View>

            <View style={{ alignItems: "center", marginTop: 30 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  height: 50,
                  width: "100%",
                  alignItems: "center",
                  borderRadius: 20,
                  justifyContent: "center",
                }}
                disabled={isEnableSignIn() ? false : true}
                onPress={handleSignIn}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              <Text style={{ color: "#97999c", fontWeight: "500" }}>
                Don't have an account ?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUpScreen")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingLeft: 6,
                    color: COLORS.primary,
                  }}
                >
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
