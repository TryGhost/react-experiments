import { getCountryFromGeolocationJSON } from "../../utils/geolocation";
import { styled } from "../stitches";

const Text = styled("div", {
  fontSize: "$13",

  variants: {
    present: {
      false: {
        color: "$washedOut",
      },
    },
  },
});

export const MemberLocation = ({ geolocationJSON }) => {
  const country = getCountryFromGeolocationJSON(geolocationJSON);

  return <Text present={!!country}>{country || "Unknown"}</Text>;
};
