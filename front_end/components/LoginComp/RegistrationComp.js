import React from "react";
import { View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";

export default function RegistrationComp() {
    return (
        <View classname="flex flex-row justify-center space-y-10">
            <View className="flex-row justify-start gap-5">
                <View className="flex flex-col justify-start">
                    <Text>First Name</Text>
                    <TextInput className="h-[30px] w-[120px] justify-center items-center rounded-l-lg rounded-r-lg border-2 border-black shadow-xl shadow-black drop-shadow-xl"></TextInput>
                </View>
                <View className="flex flex-col justify-start">
                    <Text>Last Name</Text>
                    <TextInput className="h-[30px] w-[120px] justify-center items-center rounded-l-lg rounded-r-lg border-2 border-black shadow-xl shadow-black drop-shadow-xl"></TextInput>
                </View>
            </View>
            <View className="flex-row justify-start gap-5">
                <View className="flex flex-col justify-start">
                    <Text>Address</Text>
                    <TextInput className="h-[30px] w-[260px] justify-center items-center rounded-l-lg rounded-r-lg border-2 border-black shadow-xl shadow-black drop-shadow-xl"></TextInput>
                </View>
            </View>
            <View className="flex-row justify-start gap-10">
                <View className="flex flex-col justify-start">
                    <Text>City</Text>
                    <TextInput className="h-[30px] w-[50px] justify-center items-center rounded-l-lg rounded-r-lg border-2 border-black shadow-xl shadow-black drop-shadow-xl"></TextInput>
                </View>
                <View className="flex flex-col justify-start">
                    <Text>State</Text>
                    <TextInput className="h-[30px] w-[50px] justify-center items-center rounded-l-lg rounded-r-lg border-2 border-black shadow-xl shadow-black drop-shadow-xl"></TextInput>
                </View>
                <View className="flex flex-col justify-start">
                    <Text>Zip Code</Text>
                    <TextInput className="h-[30px] w-[80px] justify-center items-center rounded-l-lg rounded-r-lg border-2 border-black shadow-xl shadow-black drop-shadow-xl"></TextInput>
                </View>
            </View>
            <View className="flex flex-row justify-start mt-2">
                <TouchableOpacity className="bg-teal-300 h-[50px] w-[260px] justify-center items-center rounded-l-lg rounded-r-lg border-2 border-black shadow-xl shadow-black drop-shadow-xl">
                    <Text className="font-bold tracking-widest">SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}