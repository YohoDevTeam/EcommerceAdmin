import React, {  useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "../BottomTabs";
import {
  AuthOptionsScreen,
  ForgetPasswordOtpVerificationScreen,
  ForgetPasswordScreen,
  ForgetPasswordSetNewPasswordScreen,
  SignInScreen,
  SignUpScreen,
  SearchScreen,
  WishListScreen,
  NotificationScreen,
  TrackOrderScreen,
  CheckOutScreen,
  ChooseShippingScreen,
  CategoryProductsScreen,
  ProductDetailedScreen,
  PrivacyPolicyScreen,
  AddNewAddressScreen,
  AddPromoScreen,
  AddressScreen,
  FAQScreen,
  ShippingAddressScreen,
  SpecialOffersScreen,
  EditProfileScreen,
  ContactUsScreen,
  HelpCenterScreen,
  InviteFriendsScreen,
  MostPopularScreen,
  ProfileScreen,
  ReviewScreen,
  SelectAddressScreen,
  EditAddressScreen,
} from "../screens";
import OnboardingScreen from "../screens/Onboarding"
import { useAuthContext } from "../../context/AuthContext/AuthContext";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const { token,} = useAuthContext();
  const [logedIn, setLogedIn] = useState();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {token ? (
        <>
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name=" ReviewScreen" component={ReviewScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen
            name="ShippingAddressScreen"
            component={ShippingAddressScreen}
          />
          <Stack.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
          />

          <Stack.Screen name="WishListScreen" component={WishListScreen} />

          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen
            name="EditAddressScreen"
            component={EditAddressScreen}
          />

          <Stack.Screen
            name="CategoryProductsScreen"
            component={CategoryProductsScreen}
          />
          <Stack.Screen
            name="ForgetPasswordOtpVerificationScreen"
            component={ForgetPasswordOtpVerificationScreen}
          />

          <Stack.Screen
            name="ForgetPasswordScreen"
            component={ForgetPasswordScreen}
          />

          <Stack.Screen
            name="ForgetPasswordSetNewPasswordScreen"
            component={ForgetPasswordSetNewPasswordScreen}
          />
          <Stack.Screen
            name="AuthOptionsScreen"
            component={AuthOptionsScreen}
          />
          <Stack.Screen
            name="AddNewAddressScreen"
            component={AddNewAddressScreen}
          />
          <Stack.Screen name="AddressScreen" component={AddressScreen} />

          <Stack.Screen
            name="NotificationScreen"
            component={NotificationScreen}
          />
          <Stack.Screen name="TrackOrderScreen" component={TrackOrderScreen} />

          <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} />
          <Stack.Screen
            name="ChooseShippingScreen"
            component={ChooseShippingScreen}
          />
          <Stack.Screen
            name="ProductDetailedScreen"
            component={ProductDetailedScreen}
          />
          <Stack.Screen
            name="PrivacyPolicyScreen"
            component={PrivacyPolicyScreen}
          />
          <Stack.Screen name="FAQScreen" component={FAQScreen} />
          <Stack.Screen name="AddPromoScreen" component={AddPromoScreen} />
          <Stack.Screen
            name="SpecialOffersScreen"
            component={SpecialOffersScreen}
          />

          <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
          <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
          <Stack.Screen
            name="InviteFriendsScreen"
            component={InviteFriendsScreen}
          />
          <Stack.Screen
            name="MostPopularScreen"
            component={MostPopularScreen}
          />
          <Stack.Screen
            name="SelectAddressScreen"
            component={SelectAddressScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
