import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import ProductCard from "../../components/ProductCard";

const SpecialOffersScreen = () => {
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
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Special Offers
          </Text>
        </View>
        <TouchableOpacity
          style={{ flexDirection: "row", marginTop: 30, marginHorizontal: 20 }}
        >
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 10 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 5 }}
        >
          <View style={{ marginHorizontal: 5 }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  borderWidth: 1,
                  paddingVertical: 4,
                }}
              >
                All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 5 }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  borderWidth: 1,
                  paddingVertical: 4,
                }}
              >
                Clothes
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 5 }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  borderWidth: 1,
                  paddingVertical: 4,
                }}
              >
                Shoes
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 5 }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  borderWidth: 1,
                  paddingVertical: 4,
                }}
              >
                Bags
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 5 }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  borderWidth: 1,
                  paddingVertical: 4,
                }}
              >
                Electronics
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 5 }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  borderWidth: 1,
                  paddingVertical: 4,
                }}
              >
                Jewlery
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <FlatList
        numColumns={2}
        data={[{}, {}, {}, {}]}
        style={{}}
        renderItem={({ item }) => <ProductCard />}
      />
    </SafeAreaView>
  );
};

export default SpecialOffersScreen;
