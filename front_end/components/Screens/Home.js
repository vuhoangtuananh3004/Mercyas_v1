import React from "react";
import { View, Text, Image, Button, TextInput } from "react-native";

function Home() {

  const clickButton = () => {
    
  }
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Logan</Text>
      <Image source={require("../../assets/adaptive-icon.png")} />
      <View className="flex flex-row">
        <View><TextInput/></View>
  
      </View>
    </View>
  );
}

export default Home;
