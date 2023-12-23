import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { useAuthContext } from "../../../context/AuthContext/AuthContext";
import { COLORS } from "../../constants";

const SelectAddressScreen = ({ navigation }) => {
  const [address, setAddress] = useState();
  const { setSelectedDeleveryAddress } = useAuthContext();

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
            <View style={{}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>
              Select Address
            </Text>
          </View>
          <TouchableOpacity
            style={{ alignItems: "center", marginTop: 20 }}
            onPress={() => navigation.navigate("AddNewAddressScreen")}
          >
            <View
              style={{
                width: "100%",
                backgroundColor: COLORS.primary,
                marginBottom: 10,
                height: 50,
                width: "90%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
              }}
            >
              <View>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Add New Address
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {address?.map((item, index) => (
            <TouchableOpacity
              key={index}
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
              onPress={() => {
                setSelectedDeleveryAddress(item);
                navigation.goBack();
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ justifyContent: "center" }}>
                  <Entypo name="location" size={28} color="black" />
                </View>
                <View style={{ paddingLeft: 10 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
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
                    </View>
                  </View>
                  <View
                    style={{ paddingLeft: 8, paddingTop: 8, flexShrink: 1 }}
                  >
                    <Text
                      style={{ fontSize: 12, flexShrink: 1 }}
                      numberOfLines={1}
                    >
                      `{item.street},{item.city}, {item.state},
                      {item.postal_code}`
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectAddressScreen;
