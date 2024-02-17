import React from "react";
import { View, Text } from "react-native";
import Manually from "./components/ScanReceipt/Manually";
import ScanReceipt from "./components/ScanReceipt/ScanReceipt";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginComp/Login"
import Home from "./components/pages/Home";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
