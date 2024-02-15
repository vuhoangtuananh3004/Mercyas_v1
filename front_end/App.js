import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Scan from "./screens/Scan";
import Login from "./screens/Login";
import Manually from "./components/ScanReceipt/Manually"

import RegistrationComp from "./components/LoginComp/RegistrationComp";
import ScanReceipt from "./screens/ScanReceipt";
const Stack = createNativeStackNavigator();

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
