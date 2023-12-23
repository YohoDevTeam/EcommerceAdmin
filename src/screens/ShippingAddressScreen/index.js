import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ShippingAddressScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              marginHorizontal: 10,
            }}
          >
            <View style={{ marginRight: 10 }}>
              <TouchableOpacity>
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Shipping Address
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              backgroundColor: "white",
              borderRadius: 15,
              marginHorizontal: 20,
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
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Home
                    </Text>
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              backgroundColor: "white",
              borderRadius: 15,
              marginHorizontal: 20,
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
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Home
                    </Text>
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

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              backgroundColor: "white",
              borderRadius: 15,
              marginHorizontal: 20,
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
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Home
                    </Text>
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

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              backgroundColor: "white",
              borderRadius: 15,
              marginHorizontal: 20,
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
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Home
                    </Text>
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
          <TouchableOpacity style={{ alignItems: "center", marginTop: 20 }}>
            <View
              style={{
                width: "100%",
                backgroundColor: "#e7e7e7",
                marginBottom: 30,
                height: 50,
                width: "80%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Add New Address
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View
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
            >
              <TouchableOpacity>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShippingAddressScreen;
