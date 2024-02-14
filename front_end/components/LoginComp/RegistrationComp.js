import React from "react";
import { View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";

export default function RegistrationComp() {

    return (
        <View classname="flex-1 justify-center items-centerr">
            <View className="flex-row justify-start gap-5">
                <View className="flex flex-col">
                    <Text>First Name</Text>
                    <TextInput className="h-[30px] w-[160px] rounded-l-lg rounded-r-lg border-2 border-black shadow-xl shadow-black drop-shadow-xl"/>
                </View>
                <View className="flex flex-col justify-start">
                    <Text>Last Name</Text>
                    <TextInput className="h-[30px] w-[120px] justify-center items-center rounded-l-lg rounded-r-lg border-2 border-black shadow-xl shadow-black drop-shadow-xl"/>
                </View>
            </View>
            <View className="flex-row justify-start gap-5">
                <View className="flex flex-col justify-start">
                    <Text>Address</Text>
                    <TextInput className="h-[30px] w-[300px] justify-center items-center rounded-l-lg rounded-r-lg border-2 border-black shadow-xl shadow-black drop-shadow-xl"/>
                </View>
            </View>
            <View className="flex-row justify-start gap-10">
                <View className="flex flex-col justify-start">
                    <Text>City</Text>
                    <TextInput className="h-[30px] w-[60px] justify-center items-center rounded-l-lg rounded-r-lg border-2 border-black shadow-xl shadow-black drop-shadow-xl"/>
                </View>
                <View className="flex flex-col justify-start">
                    <Text>State</Text>
                    <TextInput className="h-[30px] w-[60px] justify-center items-center rounded-l-lg rounded-r-lg border-2 border-black shadow-xl shadow-black drop-shadow-xl"/>
                </View>
                <View className="flex flex-col justify-start">
                    <Text>Zip Code</Text>
                    <TextInput className="h-[30px] w-[100px] justify-center items-center rounded-l-lg rounded-r-lg border-2 border-black shadow-xl shadow-black drop-shadow-xl"></TextInput>
                </View>
            </View>
            <View className="flex flex-row justify-center mt-2">
                <TouchableOpacity className="bg-blue-300/40 p-3 w-[260px] justify-center items-center rounded-l-full rounded-r-full border-2 border-black shadow-md shadow-slate-400/70 drop-shadow-md">
                    <Text className="font-bold tracking-widest">SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}