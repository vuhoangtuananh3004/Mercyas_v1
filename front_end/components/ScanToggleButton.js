import { Pressable, Text } from 'react-native'
import React from 'react'

const ScanToggleButton = (props) => {
    const { onPress, title = 'Scan' } = props;
  return (
    <Pressable className="bg-black text-center rounded-l-full content-center items-center py-3 pl-4" onPress={onPress} >
      <Text className="text-white text-base font-bold leading-5 tracking-wide">{title}</Text>
    </Pressable>
  )
}

export default ScanToggleButton

