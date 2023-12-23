import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, icons, FONTS, constansts } from "../../constants";
import { Header, OrderItem, TextButton } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";

const TrackOrderScreen = ({ navigation }) => {
  const [currentStep, setcurrentStep] = useState(2);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <View
        style={{
          flex: 1,
          borderColor: COLORS.white,
        }}
      >
        <View style={{ paddingHorizontal: SIZES.padding }}>
          <OrderItem />
          <View style={{ paddingTop: SIZES.padding }}>
            {constansts.track_order_status.map((item, index) => {
              return (
                <View key={`StatusList-${index}`}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: -5,
                    }}
                  >
                    <Image
                      source={icons.check_circle}
                      style={{
                        width: 30,
                        height: 30,
                        tintColor:
                          index <= currentStep
                            ? COLORS.primary
                            : COLORS.lightGray1,
                      }}
                    />
                    <View style={{ marginLeft: SIZES.radius }}>
                      <Text style={{ ...FONTS.h3 }}>{item.title}</Text>
                      <Text style={{ ...FONTS.body4 }}>{item.sub_title}</Text>
                    </View>
                  </View>
                  {index < constansts.track_order_status.length - 1 && (
                    <View>
                      {index < currentStep && (
                        <View
                          style={{
                            height: 50,
                            width: 3,
                            marginLeft: 15,
                            backgroundColor: COLORS.primary,
                            zIndex: -1,
                          }}
                        ></View>
                      )}
                      {index >= currentStep && (
                        <Image
                          source={icons.dotted_line}
                          resizeMode="cover"
                          style={{
                            width: 4,
                            height: 50,
                            marginLeft: 14,
                          }}
                        />
                      )}
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>

        <TextButton
          label="Need Help?"
          buttonContainerStyle={{
            borderRadius: SIZES.radius,
            marginHorizontal: SIZES.padding * 2,
            backgroundColor: COLORS.primary,
            marginVertical: SIZES.padding,
            height: 55,
          }}
          labelStyle={{
            color: COLORS.white,
            ...FONTS.h3,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export default TrackOrderScreen;
