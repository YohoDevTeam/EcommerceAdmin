import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const NotificationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 20,
              marginLeft: 15,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 10 }}>
              Notification
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flex: 1, marginTop: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 20 }}>
          Today
        </Text>

        <TouchableOpacity
          style={{
            marginHorizontal: 20,
            marginTop: 15,
            elevation: 1,
            backgroundColor: "white",
            borderRadius: 15,
          }}
        >
          <View style={{ width: "100%", height: 90, justifyContent: "center" }}>
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
                  backgroundColor: "black",
                  borderRadius: 25,
                }}
              >
                <MaterialCommunityIcons
                  name="brightness-percent"
                  size={24}
                  color="white"
                />
              </View>

              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  30% Special Discount
                </Text>
                <Text style={{ fontWeight: "400" }}>
                  {" "}
                  Special promotion only valid today
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Yesterday
        </Text>

        <TouchableOpacity
          style={{
            marginHorizontal: 20,
            marginTop: 15,
            elevation: 1,
            backgroundColor: "white",
            borderRadius: 15,
          }}
        >
          <View style={{ width: "100%", height: 90, justifyContent: "center" }}>
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
                  backgroundColor: "black",
                  borderRadius: 25,
                }}
              >
                <Ionicons name="md-wallet-outline" size={24} color="white" />
              </View>

              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold" }}>
                  Top Up E-Wallet Successful !
                </Text>
                <Text style={{ fontWeight: "400" }}>
                  {" "}
                  You have to top up your e-wallet
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginHorizontal: 20,
            marginTop: 15,
            elevation: 1,
            backgroundColor: "white",
            borderRadius: 15,
          }}
        >
          <View style={{ width: "100%", height: 90, justifyContent: "center" }}>
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
                  backgroundColor: "black",
                  borderRadius: 25,
                }}
              >
                <Ionicons name="md-location-sharp" size={24} color="white" />
              </View>

              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  New Services Available
                </Text>
                <Text style={{ fontWeight: "400" }}>
                  {" "}
                  Now you can track orders in real time
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Yesterday
        </Text>

        <TouchableOpacity
          style={{
            marginHorizontal: 20,
            marginTop: 15,
            elevation: 1,
            backgroundColor: "white",
            borderRadius: 15,
          }}
        >
          <View style={{ width: "100%", height: 90, justifyContent: "center" }}>
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
                  backgroundColor: "black",
                  borderRadius: 25,
                }}
              >
                <AntDesign name="creditcard" size={24} color="white" />
              </View>

              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  Credit Card Connected
                </Text>
                <Text style={{ fontWeight: "400" }}>
                  {" "}
                  Credit Card has been linked
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginHorizontal: 20,
            marginTop: 15,
            elevation: 1,
            backgroundColor: "white",
            borderRadius: 15,
          }}
        >
          <View style={{ width: "100%", height: 90, justifyContent: "center" }}>
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
                  backgroundColor: "black",
                  borderRadius: 25,
                }}
              >
                <AntDesign name="user" size={24} color="white" />
              </View>

              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  Account Setup Successful
                </Text>
                <Text style={{ fontWeight: "400" }}>
                  {" "}
                  your account has been created !
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
