import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SIZES } from "../../constants";
import { Entypo } from "@expo/vector-icons";
import { OrderItem } from "../../components";

const CheckoutScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{ flexDirection: "row", marginTop: 15, marginHorizontal: 10 }}
        >
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Checkout</Text>
        </View>
        <TouchableOpacity
          style={{ flexDirection: "row", marginTop: 15, marginHorizontal: 20 }}
        >
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            size={26}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginVertical: SIZES.padding,
          marginHorizontal: SIZES.radius,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Shipping Address
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            backgroundColor: "white",
            borderRadius: 15,
            height: 90,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ justifyContent: "center" }}>
              <Entypo name="location" size={28} color="black" />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: 30,
                    width: 70,
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>Home</Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: 27,
                    width: 70,
                    backgroundColor: "#e7e7e7",
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontSize: 12 }}>Default</Text>
                </View>
              </View>
              <View style={{ paddingLeft: 8, paddingTop: 8 }}>
                <Text style={{ fontSize: 12 }}>
                  636905 Sunbrook Park PC 5679
                </Text>
              </View>
            </View>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Ionicons name="md-stop-circle" size={28} color="black" />
          </View>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: SIZES.radius,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Order List
        </Text>
        <OrderItem />

        <OrderItem />
      </View>

      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View
          style={{
            backgroundColor: "white",

            flexDirection: "row",
            paddingVertical: 15,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 15,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: 50,
              backgroundColor: "black",
              borderRadius: 25,
            }}
            onPress={() => navigation.navigate("CheckOutScreen")}
          >
            <Text
              style={{
                marginLeft: 10,
                fontWeight: "600",
                fontSize: 15,
                color: "white",
              }}
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
