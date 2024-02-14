import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import SloganAndLogo from "../components/LoginComp/SloganAndLogo";
import RegistrationComp from "../components/LoginComp/RegistrationComp";
import EmailLogin from "../components/LoginComp/EmailLogin";

export default function Login() {
  const [screen, setScreen] = useState('EmailLogin');
  let content;
  switch (screen) {
    case 'EmailLogin':
      content = <EmailLogin screen={screen} setScreen={setScreen}/>
      break;
    case 'RegistrationComp':
      content = <RegistrationComp/>
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
