import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SIZES, COLORS, FONTS } from "../../constants";
import { useRoute } from "@react-navigation/native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const ProductDetailedScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = route.params?.item;
  const [selectedImage, setSelectedImage] = useState(data?.images[0]);
  const handleAddToCart = async () => {
    navigation.navigate("Cart");
  };

  function renderHeader() {
    return (
      <View
        style={{
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          paddingTop: SIZES.padding,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.white,
              borderRadius: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderImage() {
    return (
      <View style={{ padding: SIZES.padding }}>
        <Image
          style={{ width: "100%", height: 200 }}
          resizeMode="contain"
          source={{
            uri: selectedImage,
          }}
        />

        <View
          style={{
            flexDirection: "row",

            marginTop: 20,
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data?.images?.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "transparent",
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor:
                    selectedImage == item ? COLORS.primary : COLORS.lightGray2,
                  padding: 10,
                  marginRight: 6,
                }}
                onPress={() => setSelectedImage(item)}
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="contain"
                  source={{ uri: item }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          paddingTop: SIZES.padding,
          paddingBottom: SIZES.radius,
          height: 90,
          width: "100%",
          flex: 1,
          backgroundColor: "white",
          elevation: 10,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            height: 70,
            backgroundColor: "black",
            borderRadius: 40,
            marginHorizontal: SIZES.base,
            flexDirection: "row",
            padding: 5,
          }}
        >
          <View
            style={{
              flex: 1,
              padding: 10,
              justifyContent: "center",
              marginLeft: SIZES.padding,
            }}
          >
            <Text style={{ color: "grey", fontWeight: "bold" }}>Price</Text>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {data.price}
            </Text>
          </View>
          <TouchableOpacity style={{ flex: 1 }} onPress={handleAddToCart}>
            <View
              style={{
                backgroundColor: COLORS.primary,
                flex: 1,
                borderRadius: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Add to cart
              </Text>

              <AntDesign name="arrowright" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderProductDetails() {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: -20,
          padding: SIZES.padding,
          paddingBottom: SIZES.padding,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              marginTop: SIZES.base,
              ...FONTS.h2,
              fontWeight: "bold",
              flexShrink: 1,
            }}
            numberOfLines={4}
          >
            {data.name}
          </Text>

          <View>
            <MaterialIcons
              name="favorite"
              size={24}
              color={COLORS.primary}
              style={{ marginTop: SIZES.base }}
            />
          </View>
        </View>

        <View style={{ marginVertical: SIZES.padding }}>
          <Text style={{ color: COLORS.black, fontWeight: "bold" }}>
            DESCRIPTION
          </Text>

          <Text
            style={{
              marginTop: SIZES.base,
              marginBottom: 10,
              textAlign: "justify",
            }}
          >
            {data.description}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.background,
        }}
      >
        {renderHeader()}
        {renderImage()}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white" }}
      >
        <View>{renderProductDetails()}</View>
      </ScrollView>
      {renderFooter()}
    </SafeAreaView>
  );
};

export default ProductDetailedScreen;
