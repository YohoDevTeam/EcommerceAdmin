import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import RemoveCartItem from "../../components/RemoveCartItem";
import { COLORS, SIZES, FONTS, constansts } from "../../constants";
import { CartItem } from "./../../components";


const CartScreen = ({ navigation }) => {
  const [selectedCartItem, setSelectedCartItem] = useState();
  const refRBSheet = useRef();

  const handleRemoveCart = async () => {
    refRBSheet?.current?.close();
  };

  const handleCheckOut = async () => {
    navigation.navigate("Orders");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ marginBottom: 60 }}>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                marginTop: 20,
                marginLeft: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 10,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}
                >
                  My Cart
                </Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            backgroundColor: "white",
            borderRadius: 15,
            marginHorizontal: 20,
            height: 90,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ justifyContent: "center" }}>
              <Entypo name="location" size={28} color="black" />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      height: 30,
                      width: 70,
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Home
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ paddingLeft: 8, paddingTop: 8, flexShrink: 1 }}>
                <Text style={{ fontSize: 12, flexShrink: 1 }} numberOfLines={1}>
                  Egmore High Road, Chennai, Tamil Nadu, 600008
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {constansts.products?.map((item, index) => (
          <CartItem
            key={index}
            onRemovePress={() => {
              refRBSheet?.current?.open();
              // setShow(true);
              setSelectedCartItem(item);
            }}
            data={item}
          />
        ))}

        {/* {show && ( */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            height={400}
            customStyles={{
              wrapper: {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
              draggableIcon: {
                backgroundColor: "#000",
              },
              container: {
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              },
            }}
          >
            {/* <YourOwnComponent /> */}
            <View
              style={{
                // flex:1,
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 24 }}>
                Remove from Cart
              </Text>
            </View>
            <RemoveCartItem data={selectedCartItem} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              <View style={{ marginHorizontal: 10 }}>
                <TouchableOpacity onPress={() => refRBSheet?.current?.close()}>
                  <View
                    style={{
                      backgroundColor: "#E7E7E7",
                      height: 60,
                      width: 150,
                      borderRadius: 40,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "600", fontSize: 18 }}>
                      Cancel
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={{ elevation: 1 }}
                  onPress={handleRemoveCart}
                >
                  <View
                    style={{
                      backgroundColor: COLORS.primary,
                      height: 60,
                      width: 150,
                      borderRadius: 40,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "600",
                        fontSize: 18,
                        color: "white",
                      }}
                    >
                      Submit
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </RBSheet>
        </View>
        {/* )} */}
      </ScrollView>
      {constansts.products && (
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
              backgroundColor: "white",
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
              <Text style={{ color: "grey", fontWeight: "bold" }}>
                Total Price
              </Text>
              <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
                {"\u20B9"} 100000
              </Text>
            </View>
            <TouchableOpacity style={{ flex: 1 }} onPress={handleCheckOut}>
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
                  Place Order
                </Text>

                <AntDesign name="arrowright" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
