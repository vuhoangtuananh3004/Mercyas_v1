import { Text, View } from 'react-native'
import { LineChart as WLineChart } from "react-native-gifted-charts";
import React from 'react'

const LineChart = (props) => {
    return (
        <View className="flex-1 w-full p-4">
            <View>
                <WLineChart
                    data={props.incomes}
                    height={300}
                    noOfSections={7}
                    spacing={100}
                    initialSpacing={50}
                    color="black"
                    textColor="green"
                    dataPointsHeight={6}
                    dataPointsWidth={6}
                    dataPointsColor="green"
                    textShiftY={5}
                    textShiftX={-30}
                    textFontSize={10}
                    focusEnabled
                    // adjustToWidth={true}
                    secondaryData={props.expenses.map(v => (
                        {
                            value: v.value,
                            dataPointText: v.dataPointText
                        }
                    ))}
                    secondaryLineConfig={
                        {
                            color: 'blue',
                            dataPointsColor: "red",
                            textColor: "red",
                        }}
                    secondaryYAxis={{
                        yAxisColor: 'blue',
                        yAxisIndicesColor: 'blue',
                    }}
                />
            </View>
            <View>
                <Text>Infomation section</Text>
            </View>
        </View>
    )
}

export default LineChart
