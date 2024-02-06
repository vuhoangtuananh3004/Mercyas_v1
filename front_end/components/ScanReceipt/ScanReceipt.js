import React from "react";
import { View, SafeAreaView } from "react-native";
import Manually from "./Manually";
import SwitchButton from "./SwitchButton";

export default function ScanReceipt() {
  return (
    <SafeAreaView className="flex w-full items-center">
      <SwitchButton/>
      <Manually />
    </SafeAreaView>
  );
}
