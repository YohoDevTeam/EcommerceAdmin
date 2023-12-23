import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, constansts } from "../../constants";

const AddressScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
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
          Address
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        {constansts.addresses?.map((item, index) => (
          <View
            style={{
              padding: 20,
              backgroundColor: "white",
              borderRadius: 15,
              marginHorizontal: 20,
              marginTop: 10,
            }}
            key={index}
            onPress={() => setSelectedAddress(item)}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{}}
                onPress={() =>
                  navigation.navigate("EditAddressScreen", { data: item })
                }
              >
                <Entypo name="edit" size={22} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View>
                      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        {item.street}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ marginTop: 5 }}>
                  <Text style={{ fontSize: 12, flexShrink: 1 }}>
                    {item.street},{item.city}, {item.state},{item.pin_code}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressScreen;
