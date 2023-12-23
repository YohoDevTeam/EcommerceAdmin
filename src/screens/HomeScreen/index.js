import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, ImageCarousel } from "../../components";
import { SIZES, COLORS, constansts } from "../../constants";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import ProductCard from "../../components/ProductCard";

const HomeScreen = ({ navigation }) => {
  function renderSearch() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          marginHorizontal: SIZES.radius,
          marginBottom: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: "white",
          elevation: 3,
          justifyContent: "space-between",
          marginTop: SIZES.radius,
        }}
        onPress={() => navigation.navigate("SearchScreen")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <EvilIcons name="search" size={28} color="black" />
          <Text style={{ marginLeft: 10, color: "grey" }}>Search...</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView
      style={{
        paddingVertical: SIZES.base,
        backgroundColor: "#fbfbfb",
        flex: 1,
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Header
              containerStyle={{
                height: 50,
                paddingHorizontal: SIZES.base,
                paddingHorizontal: SIZES.radius,
                alignItems: "center",
                padding: 5,
              }}
              title={"Mohammed Thasthakir"}
              address={"mohammed@gmail.com"}
              leftComponent={
                <TouchableOpacity
                  style={{
                    width: 45,
                    height: 45,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: COLORS.gray2,
                    borderRadius: 40,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://avatar.iran.liara.run/public/5",
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 40,
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              }
              rightComponent={
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      borderRadius: SIZES.radius,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={() => navigation.navigate("WishListScreen")}
                  >
                    <AntDesign name="hearto" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              }
            />
            {renderSearch()}

            <ImageCarousel images={constansts.carousel} />
            <View
              style={{
                marginHorizontal: SIZES.base,
                marginTop: SIZES.padding,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {constansts.categories?.map((item, index) => (
                  <View
                    style={{ alignItems: "center", marginRight: 15 }}
                    key={index}
                  >
                    <TouchableOpacity
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 60,
                        height: 60,
                        padding: 10,
                        borderRadius: 40,
                        backgroundColor: "white",
                      }}
                      onPress={() =>
                        navigation.navigate("CategoryProductsScreen", {
                          id: item?.category_id,
                        })
                      }
                    >
                      <Image
                        source={{
                          uri: item.images,
                        }}
                        style={{ width: 50, height: 50 }}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 12,
                        color: "black",
                        marginTop: 5,
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: SIZES.radius,
                  marginVertical: SIZES.padding,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Most Popular
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("MostPopularScreen")}
                >
                  <Text style={{ fontWeight: "bold", color: COLORS.primary }}>
                    show all
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        }
        numColumns={2}
        data={constansts.products}
        style={{}}
        nestedScrollEnabled
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
