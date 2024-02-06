import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function AddStoreReceiptItems() {
  return (
    <View className="flex flex-cols">
      <View className="flex flex-row h-[36px] items-center w-full border-b-2 mt-5">
        <View className="w-[60px] text-center border-r-2 border-gray-200">
          <Text className="text-center">ID</Text>
        </View>
        <View className="w-[120px] text-center border-r-2 border-gray-200">
          <Text className="text-center">Items</Text>
        </View>
        <View className="w-[60px] text-center border-r-2 border-gray-200">
          <Text className="text-center">Qty</Text>
        </View>
        <View className="w-[60px] text-center border-r-2 border-gray-200">
          <Text className="text-center">Price</Text>
        </View>
        <View className="w-[60px] text-center">
          <Text className="text-center">Del</Text>
        </View>
      </View>

      <View className="flex flex-row h-[36px] items-center w-full">
        <View className="w-[60px] text-center border-r-2 border-gray-200">
          <Text className="text-center">1</Text>
        </View>
        <View className="w-[120px] text-center border-r-2 border-gray-200">
          <Text className="text-center">Nike socks</Text>
        </View>
        <View className="w-[60px] text-center border-r-2 border-gray-200">
          <Text className="text-center">2</Text>
        </View>
        <View className="w-[60px] text-center border-r-2 border-gray-200">
          <Text className="text-center">22.44$</Text>
        </View>
        <View className="w-[60px] text-center">
          <Text className="text-center">X</Text>
        </View>
      </View>
    </View>
  );
}
