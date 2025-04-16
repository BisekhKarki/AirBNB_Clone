import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
}));

const useCountries = () => {
  const getAll = () => formattedCountries;
  const getAllByValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  };

  return {
    getAll,
    getAllByValue,
  };
};

export default useCountries;
