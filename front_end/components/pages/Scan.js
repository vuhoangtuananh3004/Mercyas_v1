import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import SwitchButton from '../ScanReceipt/SwitchButton'
import Checkbox from 'expo-checkbox';

const Scan = () => {
    const [isStore, setStore] = useState(false);
    const [isDate, setDate] = useState(false);
    const [isTotal, setTotal] = useState(false);
    return (
        <SafeAreaView className="flex-1 items-center">
            <SwitchButton />

            <View className="px-2 mt-4">
                <Text className="text-center">
                    Kindly position the receipt within the designated frame
                </Text>
            </View>

            <View className="px-2 mt-4 w-4/5 h-4/6 border border-sky-500">
                <Text className>This is the frame</Text>
            </View>
            <View className="flex flex-row w-full justify-evenly mt-4">
                <View className="flex flex-row gap-2">
                    <Checkbox value={isStore} onValueChange={setStore} />
                    <Text>Store</Text>
                </View>
                <View className="flex flex-row gap-2">
                    <Checkbox value={isDate} onValueChange={setDate} />
                    <Text>Date</Text>
                </View>
                <View className="flex flex-row gap-2">
                    <Checkbox value={isTotal} onValueChange={setTotal} />
                    <Text>Total</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Scan