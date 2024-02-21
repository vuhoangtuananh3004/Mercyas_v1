import React from "react";
import { View, Text, Image } from "react-native";

export default function SloganAndLogo() {
  //     <View className="flex flex-col relative h-[240px] w-[240px] justify-center items-center">
  //     <Text className="absolute bottom-80 z-10 ">Give us your money</Text>
  //     <Image source={require("../../assets/login/Logo.jpg")} className="absolute -top-10 h-[280px] w-[240px] -z-10 opacity-90"></Image>
  // </View>
  return (
    <View className="flex p-10 items-center">
        <Image
          source={require("../../assets/login/logo_1.png")}
          style={{width:280, height:280}}
        />
        <Text className='text-center text-yellow-800 font-extrabold tracking-widest' >Snap, Track, Thrive Your Finances Simplified</Text>
    </View>
  );
}
