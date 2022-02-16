import { getCountryFromGeolocationJSON } from "../../utils/geolocation";

export const MemberLocation = (geolocationJSON) =>
  getCountryFromGeolocationJSON(geolocationJSON) || "Unknown";
