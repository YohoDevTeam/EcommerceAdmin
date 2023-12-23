import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
const OrderCard = ({ onPress }) => {
  return (
    <View>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 15,
          elevation: 1,
          backgroundColor: "white",
          borderRadius: 15,
          padding: 15,

          flexDirection: "row",
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNBB5-qUlbAdwqZvoi5_CSZKfaOiNn1SmhvCPxrzIwrXIiCU6",
            }}
            resizeMode="contain"
            style={{ width: 110, height: 120, borderRadius: 15 }}
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
              Werolla Cardigans
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              marginLeft: 10,
              alignItems: "center",
              paddingLeft: 5,
            }}
          >
            <FontAwesome name="circle" size={15} color="black" />
            <Text
              style={{
                marginLeft: 5,
                color: "gray",
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              Color | Size = M
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#e7e7e7",
                borderRadius: 20,
                paddingHorizontal: 8,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  marginHorizontal: 8,
                  paddingVertical: 5,
                  fontWeight: "bold",
                  color: "black",
                  fontSize: 13,
                }}
              >
                Complete
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 8,
              marginLeft: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold", paddingLeft: 5 }}>
              {" "}
              $385.00
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "black",
                borderRadius: 20,
                paddingHorizontal: 8,
              }}
              onPress={onPress}
            >
              <Text
                style={{
                  marginHorizontal: 1,
                  paddingVertical: 7,
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 11,
                }}
              >
                Leave Review
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
