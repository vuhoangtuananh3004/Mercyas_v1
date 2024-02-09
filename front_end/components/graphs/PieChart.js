import { Text, View } from 'react-native'
import React from 'react'

const PieChart = () => {
    return (
        <View className="border border-indigo-500 flex-1">
            <View className="border border-indigo-500 h-5/6">
                <Text>Graph section</Text>
            </View>
            <View className="border border-indigo-500 h-1/6">
                <Text>Inital: $1000</Text>
                <Text>Balance: $2000</Text>
            </View>
        </View>
    )
}

export default PieChart
