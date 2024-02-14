import React from "react";
import { Text, View } from "react-native";
import MyCalendar from "../Calendar/MyCalendar";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import Footer from "../Footer/Footer";

export default function Manually() {
  return (
    <View className="mt-5">
      <MyCalendar />
      <DropDownMenu/>
 
    </View>
  );
}
