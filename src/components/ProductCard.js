import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, icons } from "../constants";

const ProductCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ flex: 1, marginHorizontal: 10, marginVertical: 10 }}
      onPress={() => navigation.navigate("ProductDetailedScreen", { item })}
    >
      <View
        style={{
          backgroundColor: "white",
          height: 160,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
        }}
      >
        <Image
          source={{
            uri: item.images[0],
          }}
          style={{ height: 100, width: 100 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ marginTop: 10, marginLeft: 5, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }} numberOfLines={2}>
          {item.name}
        </Text>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: COLORS.primary,
              marginTop: 5,
            }}
          >
            {item.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
