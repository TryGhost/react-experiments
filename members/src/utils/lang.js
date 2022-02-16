export const getInitialsFromName = (name) =>
  name
    .split(" ", 2)
    .map((component) => (component.length > 0 ? component[0] : ""))
    .join("");

export const formatNumber = (number) => Number(number).toLocaleString();
