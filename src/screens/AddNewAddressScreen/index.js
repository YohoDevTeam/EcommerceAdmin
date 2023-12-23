import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { COLORS, SIZES, icons } from "../../constants";
import {
  Header,
  FormInput,
  IconButton,
  TextButton,
  TextIconButton,
} from "../../components";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Location from "expo-location";
import { utils } from "../../utils";
import { Ionicons } from "@expo/vector-icons";

const AddNewAddressScreen = ({ navigation }) => {
  const [pincode, setPincode] = React.useState("");
  const [pincodeError, setPincodeError] = React.useState("");
  const [state, setState] = React.useState("");
  const [stateError, setStateError] = React.useState("");
  const [city, setCity] = React.useState("");
  const [cityError, setCityError] = React.useState("");
  const [houseName, setHouseName] = React.useState("");
  const [houseNameError, setHouseNameError] = React.useState("");
  const [roadName, setRoadName] = React.useState("");
  const [roadNameError, setRoadNameError] = React.useState("");
  const [location, setLocation] = useState(null);
  const [address, setaddress] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const fullAddress = houseName + " " + roadName + " " + city + " " + state;

  function isEnableSaveAddress() {
    return (
      pincode != "" &&
      state != "" &&
      city != "" &&
      houseName != "" &&
      roadName != ""
    );
  }

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status == "granted") {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const geoCodedLocation = await Location.reverseGeocodeAsync({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      });
      setaddress(geoCodedLocation);
      geoCodedLocation.map(
        (add) => (
          setCity(add.city),
          setPincode(add.postalCode),
          setState(add.region),
          setRoadName(add.street + " " + add.district),
          setHouseName(add.name)
        )
      );
    } else {
      Alert.alert(
        "Enable location access",
        "Permission to access location was denied"
      );
      setErrorMsg("Permission to access location was denied");
      return;
    }
  };

  const handleSaveAddress = async () => {
    navigation.goBack();
  };

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  function renderHeader() {
    return (
      <Header
        title="Add Address"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        }
      />
    );
  }
  function renderForm() {
    return (
      <View style={{}}>
        {/*Full Name */}

        {/**Pin Code */}
        <View style={{ marginTop: SIZES.base, flexDirection: "row" }}>
          <FormInput
            label="Pincode (Required)*"
            keyboardType="number-pad"
            containerStyle={{
              flex: 1,
            }}
            value={pincode}
            maxLength={19}
            onChange={(value) => {
              setPincode(value);
            }}
            appendComponent={
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={
                    pincode == "" || (pincode != "" && pincodeError == "")
                      ? icons.correct
                      : icons.cancel
                  }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor:
                      pincode == ""
                        ? COLORS.gray
                        : pincode != "" && pincodeError == ""
                        ? COLORS.green
                        : COLORS.red,
                  }}
                />
              </View>
            }
          />
          <TextIconButton
            containerStyle={{
              flex: 1,
              height: 50,
              paddingHorizontal: SIZES.radius,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
              marginHorizontal: SIZES.base,
              marginTop: 32,
            }}
            label="Use my location"
            labelStyle={{
              fontSize: 14,
              color: "white",
              alignText: "center",
            }}
            icon={icons.location1}
            iconPosition="LEFT"
            iconStyle={{
              tintColor: "white",
              marginRight: 10,
            }}
            onPress={getCurrentLocation}
          />
        </View>

        {/**state / City */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
          }}
        >
          <FormInput
            label="State (Required)*"
            value={state}
            placeholder="State"
            maxLength={30}
            containerStyle={{
              flex: 1,
            }}
            onChange={(value) => {
              utils.validateInput(value, 5, setStateError);
              setState(value);
            }}
            appendComponent={
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={
                    state == "" || (state != "" && stateError == "")
                      ? icons.correct
                      : icons.cancel
                  }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor:
                      state == ""
                        ? COLORS.gray
                        : state != "" && stateError == ""
                        ? COLORS.green
                        : COLORS.red,
                  }}
                />
              </View>
            }
          />
          <FormInput
            label="City (Required)*"
            value={city}
            maxLength={30}
            containerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
            }}
            onChange={(value) => {
              utils.validateInput(value, 3, setCityError);
              setCity(value);
            }}
            appendComponent={
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={
                    city == "" || (city != "" && cityError == "")
                      ? icons.correct
                      : icons.cancel
                  }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor:
                      city == ""
                        ? COLORS.gray
                        : city != "" && cityError == ""
                        ? COLORS.green
                        : COLORS.red,
                  }}
                />
              </View>
            }
          />
        </View>

        {/**House No */}
        <FormInput
          label="House No., Building Name (Required)*"
          value={houseName}
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(value) => {
            utils.validateInput(value, 1, setHouseNameError);
            setHouseName(value);
          }}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  houseName == "" || (houseName != "" && houseNameError == "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    houseName == ""
                      ? COLORS.gray
                      : houseName != "" && houseNameError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        {/**RoadName Area */}
        <FormInput
          label="Road name,Area, Colony (Required)*"
          value={roadName}
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(value) => {
            setRoadName(value);
          }}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  roadName == "" || (roadName != "" && roadNameError == "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    roadName == ""
                      ? COLORS.gray
                      : roadName != "" && roadNameError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
      </View>
    );
  }
  function renderFooter() {
    return (
      <TextButton
        label="Save Address"
        disabled={isEnableSaveAddress() ? false : true}
        onPress={() =>
          Alert.alert("Confirm Address", fullAddress, [
            {
              text: "CANCEL",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "CONFIRM", onPress: handleSaveAddress },
          ])
        }
        buttonContainerStyle={{
          height: 55,
          alignItems: "center",
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: isEnableSaveAddress()
            ? COLORS.primary
            : COLORS.transparentPrimary,
        }}
      />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderHeader()}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: SIZES.padding,
        }}
      >
        <KeyboardAwareScrollView
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          {renderForm()}
        </KeyboardAwareScrollView>
        {renderFooter()}
      </ScrollView>
    </View>
  );
};

export default AddNewAddressScreen;
