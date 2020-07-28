//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGASECOND = 10**9;

export const gigasecond = (date) => {
  const newDate = new Date(date.valueOf());
  newDate.setUTCSeconds(date.getUTCSeconds() + GIGASECOND);
  return newDate;
};
