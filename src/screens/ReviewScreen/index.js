import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ReviewScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{ flexDirection: "row", marginTop: 30, marginHorizontal: 10 }}
        >
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            4.8 (4,974 reviews)
          </Text>
        </View>
        <TouchableOpacity
          style={{ flexDirection: "row", marginTop: 30, marginHorizontal: 20 }}
        >
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 30, marginHorizontal: 20 }}
      >
        <View style={{ marginHorizontal: 5 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderRadius: 15,
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="star" size={15} color="black" />
            <Text
              style={{ fontSize: 13, fontWeight: "500", paddingHorizontal: 4 }}
            >
              All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderRadius: 15,
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="star" size={15} color="black" />
            <Text
              style={{ fontSize: 13, fontWeight: "500", paddingHorizontal: 4 }}
            >
              1
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderRadius: 15,
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="star" size={15} color="black" />
            <Text
              style={{ fontSize: 15, fontWeight: "500", paddingHorizontal: 4 }}
            >
              2
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderRadius: 15,
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="star" size={15} color="black" />
            <Text
              style={{ fontSize: 13, fontWeight: "500", paddingHorizontal: 4 }}
            >
              3
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderRadius: 15,
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="star" size={15} color="black" />
            <Text
              style={{ fontSize: 13, fontWeight: "500", paddingHorizontal: 4 }}
            >
              4
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderRadius: 15,
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="star" size={15} color="black" />
            <Text
              style={{ fontSize: 13, fontWeight: "500", paddingHorizontal: 4 }}
            >
              5
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={{ marginHorizontal: 15, marginTop: 30 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                source={{
                  uri: "https://w7.pngwing.com/pngs/184/409/png-transparent-elon-musk-thumbnail.png",
                }}
                style={{ height: 40, width: 40, borderRadius: 100 }}
              />
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Darlene Robertson</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginHorizontal: 5 }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderRadius: 15,
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="star" size={12} color="black" />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    paddingHorizontal: 4,
                  }}
                >
                  5
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <MaterialCommunityIcons
                name="dots-horizontal-circle-outline"
                size={24}
                color="black"
              />
            </View>
          </View>
        </View>

        <View>
          <Text
            style={{
              marginTop: 10,
              fontSize: 13,
              opacity: 0.7,
              marginHorizontal: 10,
            }}
          >
            The item Was good,my son likes it very much and play every day 100
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            marginHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="heart-sharp" size={18} color="black" />
            <Text style={{ fontSize: 13, paddingLeft: 5 }}>726</Text>
          </View>
          <Text style={{ paddingLeft: 20, fontSize: 13, opacity: 0.6 }}>
            6 days ago
          </Text>
        </View>
      </View>

      <View style={{ marginHorizontal: 15, marginTop: 30 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                source={{
                  uri: "https://w7.pngwing.com/pngs/221/316/png-transparent-laptop-nature-desktop-high-definition-video-1080p-nature-electronics-leaf-landscape-thumbnail.png",
                }}
                style={{ height: 40, width: 40, borderRadius: 100 }}
              />
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Darlene Robertson</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginHorizontal: 5 }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderRadius: 15,
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="star" size={12} color="black" />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    paddingHorizontal: 4,
                  }}
                >
                  5
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <MaterialCommunityIcons
                name="dots-horizontal-circle-outline"
                size={24}
                color="black"
              />
            </View>
          </View>
        </View>

        <View>
          <Text
            style={{
              marginTop: 10,
              fontSize: 13,
              opacity: 0.7,
              marginHorizontal: 10,
            }}
          >
            The item Was good,my son likes it very much and play every day 100
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            marginHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="heart-sharp" size={18} color="black" />
            <Text style={{ fontSize: 13, paddingLeft: 5 }}>726</Text>
          </View>
          <Text style={{ paddingLeft: 20, fontSize: 13, opacity: 0.6 }}>
            6 days ago
          </Text>
        </View>
      </View>

      <View style={{ marginHorizontal: 15, marginTop: 30 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                source={{
                  uri: "https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg",
                }}
                style={{ height: 40, width: 40, borderRadius: 100 }}
              />
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Darlene Robertson</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginHorizontal: 5 }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderRadius: 15,
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="star" size={12} color="black" />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    paddingHorizontal: 4,
                  }}
                >
                  5
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <MaterialCommunityIcons
                name="dots-horizontal-circle-outline"
                size={24}
                color="black"
              />
            </View>
          </View>
        </View>

        <View>
          <Text
            style={{
              marginTop: 10,
              fontSize: 13,
              opacity: 0.7,
              marginHorizontal: 10,
            }}
          >
            The item Was good,my son likes it very much and play every day 100
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            marginHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="heart-sharp" size={18} color="black" />
            <Text style={{ fontSize: 13, paddingLeft: 5 }}>726</Text>
          </View>
          <Text style={{ paddingLeft: 20, fontSize: 13, opacity: 0.6 }}>
            6 days ago
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReviewScreen;
