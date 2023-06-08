export const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const dateAndTimeDisplay = (date) => {
  // Display the formatted date and time
  return (
    date.toLocaleDateString("en-US") +
    " " +
    dayNames[date.getDay()] +
    " " +
    date.toLocaleTimeString("en-US")
  );
};
