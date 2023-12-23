import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ProductCard from "../../components/ProductCard";
import { constansts } from "../../constants";

const CategoryProductsScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 15,

        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{ flexDirection: "row", marginTop: 30, marginHorizontal: 10 }}
        >
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Products</Text>
        </View>
        <TouchableOpacity
          style={{ flexDirection: "row", marginTop: 30, marginHorizontal: 20 }}
        ></TouchableOpacity>
      </View>

      <FlatList
        numColumns={2}
        data={constansts.products}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 10 }}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default CategoryProductsScreen;
