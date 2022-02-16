export const getCountryFromGeolocationJSON = (json) => {
  try {
    return JSON.parse(json).country;
  } catch {
    return null;
  }
};
