import React from "react";
import { View, Text } from "react-native";
import Manually from "./components/ScanReceipt/Manually";
import ScanReceipt from "./components/ScanReceipt/ScanReceipt";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginComp/Login";

export default function App() {
  return (
    <View className="flex-1 flex-row items-center justify-center">
      {/* <ScanReceipt /> */}
      <Login/>
      {/* <Footer /> */}
    </View>
  );
}
