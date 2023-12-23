import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const CartItem = ({ onRemovePress, data }) => {
  return (
    <View>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 15,
          elevation: 1,
          backgroundColor: "white",
          borderRadius: 15,
          padding: 20,

          flexDirection: "row",
        }}
      >
        <View style={{}}>
          <Image
            source={{
              uri: data?.images[0],
            }}
            resizeMode="contain"
            style={{ width: 100, height: 110, borderRadius: 15 }}
          />
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 5,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 10,
                marginTop: "auto",
                flexShrink: 1,
              }}
              numberOfLines={3}
            >
              {data.name}
            </Text>
            <TouchableOpacity onPress={onRemovePress}>
              <MaterialIcons
                name="delete-outline"
                size={24}
                color="black"
                style={{ fontWeight: "100" }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: "auto",
              marginLeft: 10,
              alignItems: "center",
              paddingLeft: 5,
            }}
          >
            <Text
              style={{
                marginTop: 5,
                color: "gray",
                fontSize: 12,
              }}
              numberOfLines={2}
            >
              {data.description}
            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "bold", paddingLeft: 5 }}>
              {data.price}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#E7E7E7",
                borderRadius: 20,
                paddingHorizontal: 8,
              }}
            >
              <TouchableOpacity>
                <AntDesign name="minus" size={23} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  marginHorizontal: 8,
                  paddingVertical: 5,
                  fontWeight: "bold",
                }}
              >
                1
              </Text>
              <TouchableOpacity>
                <Entypo name="plus" size={23} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
