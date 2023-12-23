import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";

const RemoveCartItem = ({ onRemovePress, data }) => {
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
              }}
            >
              {data.name}
            </Text>
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
                color: "gray",
                fontSize: 12,
                marginTop: 5,
              }}
              numberOfLines={2}
            >
              {data.description}
            </Text>
          </View>

          <View
            style={{
              marginTop: "auto",
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
              <Text
                style={{
                  marginHorizontal: 8,
                  paddingVertical: 5,
                  fontWeight: "bold",
                }}
              >
                {1}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RemoveCartItem;
