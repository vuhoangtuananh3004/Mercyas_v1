import React, { useState } from "react";
import { View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";

export default function PhoneNumsVerification({ screen, setScreen }) {
    const arrayList = [1, 2, 3, 4, 5, 6];
    const phoneNumberArray = Array(6);
    // const [phoneNumber, setPhoneNumber] = useState();
    const [isNumber, setIsNumber] = useState(false);
    const invalidMessage = <Text className='text-red-600 text-[8px]'>Invalid Phone Number</Text>;
    const verifyBtn =
        <TouchableOpacity className="bg-yellow-200/80 h-[50px] w-[200px] justify-center items-center rounded-l-full rounded-r-full border-2 border-black shadow-md shadow-slate-400/70 drop-shadow-md">
            <Text className="font-bold tracking-widest">VERIFY</Text>
        </TouchableOpacity>;
    //Curry Function
    const handlePhoneNums = (index) => (value) => {
        // Access both value and index here
        console.log("Hello");
        console.log("Value:", value.event.value, "Index:", index.event.value);
        // if (isNaN(value)) {
        //     setIsNumber(false);
        // } else {
        //     setIsNumber(true);
        // }
        phoneNumberArray.splice(index, 1, value);
        for (item of phoneNumberArray) {
            if (!isNaN(item)) {
                setIsNumber(true);
            }
        }

        console.log(phoneNumberArray.forEach(item => console.log(item)));
    };


    return (
        <View classname="flex -space-y-20 justify-center">
            <View className="flex-row justify-center gap-5 mt-5">
                {arrayList.map(
                    (_, index) => (
                        <TextInput key={index} keyboardType="numeric" maxLength={1} placeholder="-" className="border-2 border-solid border-black text-center h-[60px] w-[50px]" 
                        onChangeText={handlePhoneNums(index)}></TextInput>
                    ))}
            </View>
            <View className="flex-row justify-center gap-1 mt-5">
                {isNumber ? verifyBtn : invalidMessage}
            </View>
        </View>
    );
}