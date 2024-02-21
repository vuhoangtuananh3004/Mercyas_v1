import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

function SwitchButton(props) {
    const [isSwitch, setSwitch] = useState(false)

    const switchButton = () => {
        setSwitch(!isSwitch)
        props.onClickManual && props.onClickManual()
    }
    
  return (
    <View className="relative mt-10">
      <View className="flex flex-row justify-around items-center h-[36px] w-[260px] border-2 border-black rounded-[24px]">
        <Text className="text-xl font-bold">Scan</Text>
        <Text className="text-xl font-bold">Manual</Text>
      </View>
      <TouchableOpacity className={`absolute transition duration-400 delay-200 ${!isSwitch ? '' : 'translate-x-[130px]'}  bg-green h-full w-[130px] bg-green-400/40 rounded-[24px]`} onPress={switchButton}/>
    </View>
  );
}

export default SwitchButton;
