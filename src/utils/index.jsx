const formatNumberWithCommas = (number) => {
  return new Intl.NumberFormat("en-US").format(number);
};

const languages = (string) => {
  return string.map((lang) => lang.name).join(", ");
};

const getCountryNameByAlpha3Code = (data, alpha3Code) => {
  const country = data.find((country) => country.alpha3Code === alpha3Code);
  return country ? country.name : "Country not found";
};

export { languages, formatNumberWithCommas, getCountryNameByAlpha3Code };
