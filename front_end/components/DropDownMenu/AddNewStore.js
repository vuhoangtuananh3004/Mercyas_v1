import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
function AddNewStore() {
  return (
    <View className="flex flex-row  border-2 rounded-l-full rounded-r-full bg-purple-200">
      <TextInput
        className="text-center h-[36px] w-[240px]"
        placeholder="Type New Store Name"
      />
      <TouchableOpacity
        className="flex h-[36px] w-[60px] bg-green-400 rounded-l-full items-center justify-center"
        onPress={() => console.log("work")}
      >
        <Text className="text-2xl font-bold">+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex h-[36px] w-[60px] bg-red-400 rounded-r-full items-center justify-center"
        onPress={() => console.log("work")}
      >
        <Text className="text-2xl font-bold">-</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddNewStore;
