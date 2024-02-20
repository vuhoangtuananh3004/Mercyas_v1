import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function EmailLogin({ screen, setScreen }) {
  const [email, setEmail] = useState("");
  const [legitEmail, setLegitEmail] = useState(false);
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  };

  const handleEmail = (text) => {
    (text == 'Mercyas@gmail.com') ? setLegitEmail(false) : setLegitEmail(true)
    setEmail(text);
  };

  const loginBtn = () => {
    if (checked && legitEmail) {
      setScreen('PhoneNumsVerification')
    } else {
      setScreen('RegistrationComp');
    }
  }
  const message = <Text className='text-red-600 text-[8px]'>Invalid Email</Text>;
  return (
    <View classname="flex-1 justify-center items-center">
      <View className="flex">
        {legitEmail ? '' : message}
        <View className="flex-row gap-2">
          <TextInput
            className={`border-2 border-solid ${legitEmail ? "border-black" : "border-red-900"
              }  text-center h-[40px] w-[240px] `}
            placeholder="Your Email"
            onChangeText={handleEmail}
          />

          <TouchableOpacity
            disabled={!checked}
            className={`flex h-[40px] w-[50px] justify-center items-center border-2 rounded-l-lg rounded-r-lg ${checked ? "bg-yellow-500" : "bg-gray-200 opacity-10"
              } `}
            onPress={loginBtn}
          >
            <Image
              source={require("../../assets/login/RightArrow.png")}
              className=" h-[40px] w-[50px] rounded-l-lg rounded-r-lg"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row w-[320px] gap-2 mt-2">
        <Checkbox
          className="h-5 w-5"
          value={checked}
          onValueChange={toggleChecked}
        />
        <Text className="text-[8px] text-gray-400">
          By selecting this box, you agree to the terms and conditions of our
          service. This includes the use of your scanned recipes for
          personalization and improvement of our app features. Your data will be
          handled in accordance with our privacy policy, ensuring your personal
          information is protected and secure.
        </Text>
      </View>
    </View>
  );
}
