import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { OngoigCard } from "../../components";
import { constansts } from "../../constants";
const OrdersScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginHorizontal: 10,
          }}
        >
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Orders</Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginHorizontal: 20,
          }}
        ></TouchableOpacity>
      </View>

      <ScrollView>
        {constansts.products?.map((item, index) => (
          <OngoigCard key={index} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrdersScreen;
