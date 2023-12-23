import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ProductCard from "../../components/ProductCard";
import { constansts } from "../../constants";

const MostPopularScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 15,
        backgroundColor: "#fbfbfb",
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 10,
        }}
      >
        <View
          style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 10 }}
        >
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Most Popular</Text>
        </View>
        <TouchableOpacity
          style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 20 }}
          onPress={() => navigation.navigate("SearchScreen")}
        >
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={2}
        data={constansts.products}
        showsVerticalScrollIndicator={false}
        style={{}}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default MostPopularScreen;
