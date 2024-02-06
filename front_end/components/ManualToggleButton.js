import React from 'react'
import { Pressable, Text, View } from 'react-native'

const ManualToggleButton = (props) => {
    const { onPress, title = 'Manual' } = props;
  return (
    <Pressable className="bg-black text-center rounded-r-full content-center items-center py-3 pr-4" onPress={onPress}>
      <Text className="text-white text-base font-bold leading-5 tracking-wide">{title}</Text>
    </Pressable>
  )
}

export default ManualToggleButton

