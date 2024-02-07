import React from "react";
import { View, Text, Image, TextInput, Button } from "react-native";
import SloganAndImageComp from "./SloganAndLogo";
import EmailLogin from "./EmailLogin";

export default function Login() {
    return (
        <View classname="flex">
            <View classname="flex-col">
                <SloganAndImageComp />
                <EmailLogin />
            </View>
        </View>
    );
}