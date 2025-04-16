"use client";

import useCountries from "@/hooks/useCountries";
import React from "react";
import Select from "react-select";

export type SelectCountryType = {
  label: string;
  value: string;
};

interface SelectCountryProps {
  value?: SelectCountryType;
  onChange: (value: SelectCountryType) => void;
}

const SelectCountry: React.FC<SelectCountryProps> = ({ value, onChange }) => {
  const { getAll, getAllByValue } = useCountries();

  return (
    <>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as SelectCountryType)}
      />
    </>
  );
};

export default SelectCountry;
