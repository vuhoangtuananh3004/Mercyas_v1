import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import PieChart from '../components/graphs/PieChart'
import LineChart from '../components/graphs/LineChart'
import HistogramChart from '../components/graphs/HistogramChart'

const Home = () => {
    return (
        <SafeAreaView className="flex-1 items-center">
            <View className="border border-red-500 flex flex-row justify-evenly h-2/6 mt-8 px-4">
                <PieChart />
                <HistogramChart />
            </View>
            <View className="border border-red-500 mt-5 flex justify-center items-center h-1/2 w-full ">
                <LineChart />
            </View>
        </SafeAreaView>
    )
}

export default Home
