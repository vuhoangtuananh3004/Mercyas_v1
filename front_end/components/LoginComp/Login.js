import React from "react";
import { View, Text, Image, TextInput, Button } from "react-native";
import SloganAndImageComp from "./SloganAndLogo";
import EmailLogin from "./EmailLogin";
import PhoneNumsVerification from "./PhoneNumsVerification";
import RegistrationComp from "./RegistrationComp";

export default function Login() {
    return (
        <View classname="flex-1">
            <View classname="flex flex-col">
                <SloganAndImageComp />
                {/* <EmailLogin /> */}
                <RegistrationComp />
            </View>
        </View>
    );
}