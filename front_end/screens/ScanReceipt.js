import React from "react";
import { View, SafeAreaView } from "react-native";

import SwitchButton from "../components/ScanReceipt/SwitchButton";
import Manually from "../components/ScanReceipt/Manually";
import Footer from "../components/Footer/Footer";
export default function ScanReceipt() {
  return (
    <SafeAreaView className="flex w-full items-center">
      <SwitchButton/>
      <Manually/>
      <Footer/>
    </SafeAreaView>
  );
}
