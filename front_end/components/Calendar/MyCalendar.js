import React, { useState } from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";
export default function MyCalendar() {
  const currentDate = new Date().toISOString().split("T")[0];
  
  const [isSelected, setSelected] = useState(currentDate);
  const markedDates = {
    [isSelected]: { selected: true, marked: true, selectedColor: "blue" }, // Use computed property names syntax
  };

  const selectDate = (day) => {
    console.log(day);
    setSelected(day.dateString);
  };
  return (
    <View>
      <Calendar
        className="w-[360px]"
        // Initially visible month. Default = Date()
        current={currentDate}
        // Callback for a day press
        onDayPress={selectDate}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={"MMMM yyyy"}
        // Do not show days of other months in month page.
        hideExtraDays={false}
        // If firstDay=1, week starts from Monday.
        firstDay={1}
        markedDates={markedDates}
      />
    </View>
  );
}
