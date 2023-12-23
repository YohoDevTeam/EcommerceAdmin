import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import { useAuthContext } from "../../../context/AuthContext/AuthContext";

const ProfileScreen = ({ navigation }) => {
  const { setAppLoad, setToken } = useAuthContext();
  const [image, setImage] = useState(null);

  async function deleteValueFor(key) {
    let result = await SecureStore.deleteItemAsync(key);
  }

  const handleLogOut = async () => {
    let key = "token";
    deleteValueFor(key);
    setAppLoad(key);
    setToken(null);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 15,
        }}
      >
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Profile</Text>
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 30 }}>
        <View>
          <Image
            source={{
              uri: "https://avatar.iran.liara.run/public/5",
            }}
            style={{ borderRadius: 100, height: 130, width: 130 }}
            resizeMode="contain"
          />
        </View>

        {image && (
          <View style={{ marginTop: 10 }}>
            <Button title="Save Image" onPress={uploadImage} />
          </View>
        )}
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Mohammed Thasthakir
          </Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={{ fontWeight: "500" }}>email@gmail.com</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 30,
        }}
        onPress={() => navigation.navigate("EditProfileScreen")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginLeft: 2 }}>
            <SimpleLineIcons name="people" size={20} color="black" />
          </View>
          <View style={{ marginLeft: 11 }}>
            <Text style={{ fontWeight: "500", fontSize: 17 }}>
              Edit Profile
            </Text>
          </View>
        </View>
        <View>
          <View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate("AddressScreen")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginLeft: 1 }}>
            <SimpleLineIcons name="location-pin" size={20} color="black" />
          </View>
          <View style={{ marginLeft: 12 }}>
            <Text style={{ fontWeight: "500", fontSize: 17 }}>Address</Text>
          </View>
        </View>
        <View>
          <View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
          </View>
        </View>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={handleLogOut}
        >
          <View style={{ marginLeft: 4 }}>
            <MaterialIcons name="logout" size={24} color="#cd2032" />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 17,
                color: "#cd2032",
              }}
            >
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
