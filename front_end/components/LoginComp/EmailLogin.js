import React from "react";
import { View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";

export default function EmailLogin() {
    return (
        <View classname="flex">
            <View className="flex-row gap-2">
                <View>
                    <TextInput className="border-2 border-solid border-black text-center h-[40px] w-[240px] "
                        placeholder="Your Email" />
                </View>
                <View>
                    <TouchableOpacity className="h-[40px] w-[80px]" >
                        <Image source={require("../../assets/login/RightArrow.png")} className="bg-yellow-300 h-[40px] w-[80px] rounded-l-lg rounded-r-lg" />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex-row">
                <Text>This should be a checkbox</Text>
            </View>
        </View>
    );
}