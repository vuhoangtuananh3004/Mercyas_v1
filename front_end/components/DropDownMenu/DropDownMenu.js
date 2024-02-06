import React, { useState } from "react";
import { View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import AddNewStore from "./AddNewStore";
import AddStoreReceiptItems from "./AddStoreReceiptItems";

export default function DropDownMenu() {
  const [isNewStore, setNewStore] = useState(false);
  const items = [
    { label: "Kohl", value: "Kohl" },
    { label: "Add New Store", value: "Add New Store" },
  ];
  const pickerSelectStyles = {
    inputIOS: {
      fontSize: 16,
      textAlign: "center",
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 2,
      borderColor: "black",
      borderRadius: 24,
      color: "black",
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      textAlign: "center",
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: "purple",
      borderRadius: 24,
      color: "black",
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  };
  const valueChange = (value) => {
    value == "Add New Store" ? setNewStore(true) : setNewStore(false);
    console.log(value);
  };

  return (
    <View className="flex justify-center items-center ">
      {isNewStore ? (
        <AddNewStore />
      ) : (
        <View className="flex flex-cols w-full">
          <RNPickerSelect
            onValueChange={valueChange}
            items={items}
            style={{ ...pickerSelectStyles }} // Optionally customize the styles
            placeholder={{ label: "Select Store" }}
          />
          <AddStoreReceiptItems />
        </View>
      )}
    </View>
  );
}
