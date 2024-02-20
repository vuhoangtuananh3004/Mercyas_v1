import React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import ScanReceipt from "../screens/ScanReceipt";
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  const tabStyle = {
    backgroundColor: "#f0f2f0",
    padding: 20,
    borderTopWidth: 1,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -2, // Negative value to apply shadow above the tab bar
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  };
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#f0f2f0",
            padding: 20,
            borderTopWidth: 1,
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: -1, // Negative value to apply shadow above the tab bar
            },
            shadowOpacity: 0.1,
            shadowRadius: 2,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "ScanReceipt") {
              iconName = focused ? "barcode" : "barcode-outline";
            } else if (route.name === "Calendar") {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (route.name === "Setting") {
              iconName = focused ? "cog" : "cog-outline";
            } else {
              iconName = "home";
            }
            let iconColor = focused ? "#FFA500" : "black";
            return <Ionicons name={iconName} size={size} color={iconColor} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ScanReceipt" component={ScanReceipt} />
        <Tab.Screen name="Calendar" component={ScanReceipt} />
        <Tab.Screen name="Setting" component={ScanReceipt} />
      </Tab.Navigator>
  );
}
