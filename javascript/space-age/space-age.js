//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const EARTH_YEARS = 365.25;

export const age = (planet, seconds) => {
  var earthYears = 0;
  switch (planet) {
    case "mercury":
      earthYears = 0.240867 * EARTH_YEARS
      break;
    case "venus":
      earthYears = 0.61519726 * EARTH_YEARS
      break;
    case "mars":
      earthYears = 1.8808158 * EARTH_YEARS
      break;
    case "jupiter":
      earthYears = 11.862615 * EARTH_YEARS
      break;
    case "saturn":
      earthYears = 29.447498 * EARTH_YEARS
      break;
    case "uranus":
      earthYears = 84.016846 * EARTH_YEARS
      break;
    case "neptune":
      earthYears = 164.79132 * EARTH_YEARS
      break;
    default:
      earthYears = EARTH_YEARS
      break;
  }

  return parseFloat((seconds / SECONDS_IN_MINUTE / MINUTES_IN_HOUR / HOURS_IN_DAY / earthYears).toFixed(2));

};
