import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Header = ({
  containerStyle,
  title,
  titleStyle,
  leftComponent,
  rightComponent,
  address,
  onPress,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        ...containerStyle,
      }}
    >
      {/**Left */}
      {leftComponent}
      {/**Title */}
      <View
        style={{
          flex: 1,
          marginLeft: 10,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={onPress}
        >
          <Text
            style={{
              color: "black",
              ...titleStyle,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>

          <Image
            style={{
              height: 12,
              width: 12,
              marginLeft: 3,
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            color: "grey",
            marginRight: 15,
            fontSize: 12,
            // fontWeight: "bold",
          }}
          numberOfLines={1}
        >
          {address}
        </Text>
      </View>
      {/**Right */}
      {rightComponent}
    </View>
  );
};
export default Header;
