import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-gifted-charts'

const HistogramChart = (props) => {
  const nearestThousandMax = Math.ceil(Math.max(...props.data.map((v) => v.value)) / 10000) * 10000
  return (
    <View className="flex-1">
      <View className="h-5/6 ">
        <BarChart
          horizontal
          barWidth={30}
          maxValue={nearestThousandMax}
          noOfSections={4}
          barBorderRadius={6}
          width={150}
          // frontColor="lightgray"
          data={props.data}
          yAxisThickness={0}
          xAxisThickness={0}
          hideRules
          textSize={4}
          intactTopLabel
          // showReferenceLine1
          // referenceLine1Position={-420}
          shiftX={-45}
        // referenceLine1Config={{
        //   color: 'gray',
        //   dashWidth: 2,
        //   dashGap: 3,
        // }}
        />
      </View>
      <View className="h-1/6">
        <Text >Total: $1000</Text>
      </View>
    </View>
  )
}

export default HistogramChart