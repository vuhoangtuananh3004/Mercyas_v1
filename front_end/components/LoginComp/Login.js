import React from "react";
import { View, Text, Image, TextInput, Button } from "react-native";
import SloganAndImageComp from "./SloganAndLogo";
import EmailLogin from "./EmailLogin";
import PhoneNumsVerification from "./PhoneNumsVerification";

export default function Login() {
    return (
        <View classname="flex-1">
            <View classname="flex flex-col">
                <SloganAndImageComp />
                {/* <EmailLogin /> */}
                <PhoneNumsVerification />
            </View>
        </View>
    );
}