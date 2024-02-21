import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function PhoneNumsVerification({
  screen,
  setScreen,
  navigation,
}) {
  const arrayList = [1, 2, 3, 4, 5, 6];
  const phoneNumberArray = Array(6);
  const [isNumber, setIsNumber] = useState(false);

  const handleLogin = () => {
    navigation.navigate("TabNavigation");
  };
  const verifyBtn = (
    <TouchableOpacity
      onPress={handleLogin}
      className={`bg-yellow-200/80 h-[50px] w-[200px] ${
        isNumber ? "" : "opacity-40"
      } justify-center items-center rounded-full border-2 border-black shadow-md shadow-slate-400/70 drop-shadow-md `}
      disabled={!isNumber}
    >
      <Text className="font-bold tracking-widest">VERIFY</Text>
    </TouchableOpacity>
  );
  const goBack = (
    <TouchableOpacity
      onPress={()=> setScreen("EmailLogin")}
      className={`bg-green-200/80 h-[50px] w-[200px] justify-center items-center rounded-full border-2 border-black shadow-md shadow-slate-400/70 drop-shadow-md `}
    >
      <Text className="font-bold tracking-widest">GO BACK</Text>
    </TouchableOpacity>
  );

  const handlePhoneNums = (value, index) => {
    let count = 0;
    phoneNumberArray[index] = value;
    phoneNumberArray.map((value, index) => {
      if (value == arrayList[index]) {
        count++;
        if (count == arrayList.length) {
          setIsNumber(true);
        }
      }
    });
  };

  return (
    <View classname="flex">
      <View className="flex-row gap-3">
        {arrayList.map((_, index) => (
          <TextInput
            key={index}
            keyboardType="numeric"
            maxLength={1}
            placeholder="--"
            className="border-2 border-solid border-black text-center h-[50px] w-[40px]"
            onChangeText={(input) => handlePhoneNums(input, index)}
          />
        ))}
      </View>
      <View className="flex-row justify-center mt-5">{verifyBtn}</View>
      <View className="flex-row justify-center mt-5">{goBack}</View>
    </View>
  );
}
