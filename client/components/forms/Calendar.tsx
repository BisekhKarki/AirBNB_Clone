"use client";
import React from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface DatePickerProps {
  value: Range;
  onChange: (value: Range) => void;
  bookedDates?: Date[];
}

const DatePicker = ({ value, onChange, bookedDates }: DatePickerProps) => {
  return (
    <DateRange
      className="w-full border border-gray-400 rounded-xl mb-4"
      rangeColors={["#262626"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={bookedDates}
    />
  );
};

export default DatePicker;
