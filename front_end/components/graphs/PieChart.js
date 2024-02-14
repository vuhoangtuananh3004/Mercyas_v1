import { Text, View } from 'react-native'
import { PieChart as WPieChart } from "react-native-gifted-charts";
import React from 'react'

const PieChart = (props) => {
    return (
        <View className="flex-1">
            <View className="h-5/6 w-fill flex-1 justify-center items-center">
                <WPieChart
                    showText
                    textColor="black"
                    radius={85}
                    textSize={8}
                    focusOnPress
                    showTextBackground
                    textBackgroundRadius={16}
                    textBackgroundColor='#ccc'
                    data={props.data}
                />
            </View>
            <View className="h-1/6">
                <Text>Inital: $1000</Text>
                <Text>Balance: $2000</Text>
            </View>
        </View>
    )
}

export default PieChart
