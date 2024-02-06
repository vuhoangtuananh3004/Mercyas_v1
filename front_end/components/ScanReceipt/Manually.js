import React from "react";
import { Text, View } from "react-native";
import MyCalendar from "../Calendar/MyCalendar";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

export default function Manually() {
  return (
    <View className="mt-5">
      <MyCalendar />
      <DropDownMenu/>
    </View>
  );
}
