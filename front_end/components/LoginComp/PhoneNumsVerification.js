import React from "react";
import { View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";

export default function PhoneNumsVerification() {
    const arrayList = [1, 2, 3, 4, 5, 6];
    return (
        <View classname="flex -space-y-20 justify-center">
            <View className="flex-row justify-center gap-1 mt-5">
                {arrayList.map(
                    (value, index) => (
                        <TextInput key={index} placeholder="-" className="border-2 border-solid border-black text-center h-[40px] w-[40px]"></TextInput>
                    ))}
            </View>
            <View className="flex-row justify-center gap-1 mt-5">
                <TouchableOpacity className="bg-yellow-300 h-[50px] w-[200px] justify-center items-center rounded-l-lg rounded-r-lg border-2 border-black shadow-xl shadow-black drop-shadow-xl">
                    <Text className="font-bold tracking-widest">VERIFY</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}