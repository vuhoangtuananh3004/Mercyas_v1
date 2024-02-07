import React from "react";
import { View, Text, Image } from "react-native";

export default function SloganAndImageComp() {
    return (
        <View className="flex flex-col relative h-[240px] w-[240px] justify-center items-center">
            <Text className="absolute bottom-80 z-10 ">Give us your money</Text>
            <Image source={require("../../assets/login/Logo.jpg")} className="absolute -top-10 h-[280px] w-[240px] -z-10 opacity-90"></Image>
        </View>
    );
}