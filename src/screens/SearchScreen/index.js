import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SIZES, COLORS, constansts } from "../../constants";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCard from "../../components/ProductCard";

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = constansts.products?.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fbfbfb" }}>
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
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Search</Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginHorizontal: 20,
          }}
        ></TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          marginHorizontal: SIZES.radius,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
          elevation: 3,
        }}
      >
        {/**Icon */}

        <EvilIcons name="search" size={24} color="black" />

        {/**Text Input */}
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
          }}
          numberOfLines={1}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          placeholder="Search"
        />
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={filteredProducts}
        style={{ marginRight: 5 }}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
