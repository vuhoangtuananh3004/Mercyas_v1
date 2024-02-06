import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

export default function Footer() {
  const menu = [
    { icon: require("../../assets/footer/home.png"), title: "Home" },
    { icon: require("../../assets/footer/notes.png"), title: "Input" },
    { icon: require("../../assets/footer/calendar.gif"), title: "Calendar" },
    { icon: require("../../assets/footer/settings.png"), title: "Setting" },
  ];
  return (
    <View className="absolute bottom-0 w-full h-[76px] border-t-2 border">
      <View className="flex flex-row justify-around items-center w-full h-full">
        {menu.map((value, index) => (
          <View>
            <Image source={value.icon} style={{ width: 32, height: 32 }} />
            <Text>{value.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
