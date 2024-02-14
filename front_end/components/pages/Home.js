import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import PieChart from '../graphs/PieChart'
import LineChart from '../graphs/LineChart'
import HistogramChart from '../graphs/HistogramChart'


data = {
    "id": 1,
    "net_incomes":
        [
            {
                "iid": 1,
                "value": 12345,
                "date": "2024-01-23T12:00:00.000Z"
            },
            {
                "iid": 2,
                "value": 44124,
                "date": "2024-01-24T12:00:00.000Z"
            },
            {
                "iid": 3,
                "value": 98423,
                "date": "2024-01-25T12:00:00.000Z"
            }
        ],
    "expenses":
        [
            {
                "eid": 1,
                "value": 4222,
                "date": "2024-02-01T12:00:00.000Z"
            },
            {
                "eid": 2,
                "value": 11332,
                "date": "2024-02-02T12:00:00.000Z"
            },
            {
                "eid": 3,
                "value": 5121,
                "date": "2024-02-03T12:00:00.000Z"
            }
        ],
    "savings":
        [
            {
                "sid": 1,
                "value": 9130,
                "date": "2024-02-10T12:00:00.000Z"
            },
            {
                "sid": 2,
                "value": 5901,
                "date": "2024-02-20T12:00:00.000Z"
            },
            {
                "sid": 3,
                "value": 7123,
                "date": "2024-02-30T12:00:00.000Z"
            }
        ]
}
const presetColor = ["#00315C", "#58508A", "#BC5111", "#FA6361"]
const Home = () => {
    const net_incomes = data.net_incomes
    const expenses = data.expenses
    const savings = data.savings
    const incomes_only = net_incomes.map((value, index, array) => (
        {
            key: value.iid,
            value: value.value,
            dataPointText: value.value
        }
    ))
    const expenses_only = expenses.map((value, index, array) => (
        {
            key: value.eid,
            value: value.value,
            dataPointText: value.value
        }
    ))
    const savings_only = savings.map((value, index, array) => (
        {
            key: value.sid,
            value: value.value,
            topLabelComponent: () => (
                <Text className="text-blue-500 text-xs w-full">
                    {"$" + Number(Math.round(value.value / 1000 + 'e1') + 'e-1') + "k"}
                </Text>
            ),
            frontColor: presetColor[index % presetColor.length],
        }
    ))
    const total_incomes = incomes_only.reduce((preVal, curVal, curIdx) =>
        preVal + curVal.value
        , 0)
    const total_expenses = expenses_only.reduce((preVal, curVal, curIdx) =>
        preVal + curVal.value
        , 0)
    const total_savings = savings_only.reduce((preVal, curVal, curIdx) =>
        preVal + curVal.value
        , 0)
    const raw_pie_data = [total_incomes, total_expenses, total_savings]
    const pie_data = raw_pie_data.map((val, idx) => (
        {
            value: val,
            color: presetColor[idx % presetColor.length],
            text: Number(Math.round(val / (total_incomes + total_expenses + total_savings) * 100 + 'e1') + 'e-1') + "%"
        }
    ))

    return (
        <SafeAreaView className="flex-1 items-center">
            <View className="flex flex-row justify-evenly h-2/6 mt-8 px-4">
                <PieChart data={pie_data} />
                <HistogramChart data={savings_only} />
            </View>
            <View className="mt-5 flex justify-center items-center h-1/2 w-full ">
                <LineChart incomes={incomes_only} expenses={expenses_only} />
            </View>
        </SafeAreaView>
    )
}

export default Home
