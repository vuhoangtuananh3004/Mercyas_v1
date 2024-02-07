import React from "react";
import { View, Text, Image } from "react-native";

export default function SloganAndImageComp() {
    return (
        <View className="flex flex-col items-center">
            <Text className="">Slogan Hello</Text>
            <Image source={require("../../assets/footer/home.png")}  style={{ width: 280, height: 280 }}></Image>
        </View>
    );
}