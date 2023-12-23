import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { FormInput, TextButton } from "../../components";
import { COLORS, FONTS, SIZES, icons, images } from "../../constants";
import { useRoute } from "@react-navigation/native";

const type = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Others", value: "Others" },
];

const EditProfileScreen = ({ navigation }) => {
  const route = useRoute();
  const [fullName, setFullName] = useState("Mohammed Thasthakir");
  const [nickName, setnickName] = useState("Mohammed");
  const [gender, setgender] = useState("male");
  const [username, setUsername] = React.useState("Mohammed Thasthakir");
  const [phoneNumber, setPhoneNumber] = React.useState("7686567876");
  const [usernameError, setUsernameError] = React.useState("");
  const [nickNameError, setNickNameError] = React.useState("");
  const [phoneNumberError, setPhoneNumberError] = React.useState("");


  function renderInputs() {
    return (
      <View style={{ marginTop: 20 }}>
        <FormInput
          label="Full Name"
          value={username}
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(value) => {
            setUsername(value);
          }}
          errorMsg={usernameError}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  username === "" || (username != "" && usernameError == "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    username == ""
                      ? COLORS.gray
                      : username != "" && usernameError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
        <FormInput
          label="Nick Name"
          value={nickName}
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(value) => {
            setnickName(value);
          }}
          errorMsg={nickNameError}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  nickName === "" || (nickName != "" && nickNameError == "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    nickName == ""
                      ? COLORS.gray
                      : nickName != "" && nickNameError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput
          label="Phone Number"
          keyboardType="number-pad"
          autoCompleteType="email"
          value={phoneNumber}
          onChange={(value) => {
            setPhoneNumber(value);
          }}
          errorMsg={phoneNumberError}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  phoneNumber == "" ||
                  (phoneNumber != "" && phoneNumberError == "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    phoneNumber == ""
                      ? COLORS.gray
                      : phoneNumber != "" && phoneNumberError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <View
          style={{
            marginTop: SIZES.radius,
            marginBottom: SIZES.radius,
          }}
        >
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
          >
            Gender
          </Text>

          <View style={styles.container}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={type}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Gender"
              searchPlaceholder="Search..."
              value={gender}
              onChange={(item) => {
                setgender(item.value);
              }}
            />
          </View>
        </View>

        <TextButton
          label="Update"
          disabled={false}
          onPress={handleEditProfile}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
        />
      </View>
    );
  }

  const handleEditProfile = async () => {
    navigation.goBack();
  };



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 10 }}
      >
        <View style={{ marginRight: 10 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Edit Profile</Text>
      </View>
      <View style={{ paddingHorizontal: SIZES.padding }}>{renderInputs()}</View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: { marginTop: SIZES.base },
  dropdown: {
    height: 55,
    backgroundColor: COLORS.lightGray2,
    borderRadius: 10,
    padding: 10,
  },
  placeholderStyle: {
    fontSize: 16,
    color: COLORS.gray,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    shadowColor: "#000",
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
    color: COLORS.white,
  },
});
