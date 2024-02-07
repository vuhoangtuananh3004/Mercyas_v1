import React from "react";
import { View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";

export default function EmailLogin() {
    return (
        <View classname="flex">
            <View className="flex-row gap-10">
                <View>
                    <TextInput className="border-2 border-solid border-black text-center h-[40px] w-[240px] "
                        placeholder="Your Email" />
                </View>
                <View>
                    <TouchableOpacity className="h-[40px] w-[80px]" >
                        <Image source={require("../../assets/login/RightArrow.png")} className="bg-yellow-400 h-[40px] w-[80px]" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}