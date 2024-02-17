import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import SloganAndLogo from "../components/LoginComp/SloganAndLogo";
import RegistrationComp from "../components/LoginComp/RegistrationComp";
import EmailLogin from "../components/LoginComp/EmailLogin";
import PhoneNumsVerification from "../components/LoginComp/PhoneNumsVerification";

export default function Login() {
  const [screen, setScreen] = useState('EmailLogin');
  let content;
  switch (screen) {
    case 'EmailLogin':
      content = <EmailLogin screen={screen} setScreen={setScreen} />
      break;
    case 'RegistrationComp':
      content = <RegistrationComp screen={screen} setScreen={setScreen} />
      break;
    case 'PhoneNumsVerification':
      content = <PhoneNumsVerification screen={screen} setScreen={setScreen} />
      break;
    default:
      break;
  }
  return (
    <View className="flex-1 items-center justify-center">
      <SloganAndLogo />
      {content}
    </View>
  );
}
