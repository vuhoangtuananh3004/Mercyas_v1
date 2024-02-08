import React from "react";
import { View } from "react-native";
import SloganAndLogo from "./SloganAndLogo";
import EmailLogin from "./EmailLogin";
import PhoneNumsVerification from "./PhoneNumsVerification";
import RegistrationComp from "./RegistrationComp";

export default function Login() {
  // <View classname="flex flex-col">
  // <SloganAndImageComp />
  // {/* <EmailLogin /> */}
  // <RegistrationComp />
  // </View>
  //   <EmailLogin />
  return (
    <View className="flex-1 justify-center items-center">
      <SloganAndLogo/>
      <RegistrationComp/>
    </View>
  );
}
