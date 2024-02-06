import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
// import { styled } from 'nativewind'
import ScanToggleButton from '../ScanToggleButton'
import ManualToggleButton from '../ManualToggleButton'
import SwitchButton from '../ScanReceipt/SwitchButton'

// const StyledView = styled(SafeAreaView)
// const StyledText =  styled(Text)

const Scan = () => {
    return (
        <SafeAreaView className="flex flex-row">
            {/* <ScanToggleButton></ScanToggleButton>
            <ManualToggleButton></ManualToggleButton> */}
            <SwitchButton/>
        </SafeAreaView>
    )
}

export default Scan