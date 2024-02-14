import React from "react";
import { View, SafeAreaView } from "react-native";

import SwitchButton from "../components/ScanReceipt/SwitchButton";
import Manually from "../components/ScanReceipt/Manually";
export default function ScanReceipt() {
  return (
    <SafeAreaView className="flex w-full items-center">
      <SwitchButton/>
      <Manually/>
    </SafeAreaView>
  );
}
