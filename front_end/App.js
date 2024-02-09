import React from "react";
import { View, Text } from "react-native";
import Manually from "./components/ScanReceipt/Manually";
import ScanReceipt from "./components/ScanReceipt/ScanReceipt";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginComp/Login"
import Scan from "./components/pages/Scan"
export default function App() {
  // <ScanReceipt />
  // <Footer />
  return (
    <View className="flex-1">
      <Scan/>
    </View>
  );
}
