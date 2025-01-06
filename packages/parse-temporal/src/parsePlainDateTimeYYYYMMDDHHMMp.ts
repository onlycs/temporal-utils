import { Temporal } from "temporal-polyfill";

/**
 * Parses a date like 2025/01/04 12:50 PM
 * @param date
 */
export const parsePlainDateTimeYYYYMMDDHHMMp = (
  date: string,
): Temporal.PlainDateTime => {
  const [datePart, timePart, amOrPm] = date.split(/\s+/);
  if (!datePart || !timePart || !amOrPm) {
    throw new Error("Invalid date of extraction");
  }
  const [year, month, day] = datePart.split("/").map(Number);
  if (year === undefined || month === undefined || day === undefined) {
    throw new Error("Invalid date of extraction");
  }
  const [hours, minutes] = timePart.split(":").map(Number);
  if (hours === undefined || minutes === undefined) {
    throw new Error("Invalid date of extraction");
  }
  return Temporal.PlainDateTime.from({
    year,
    month,
    day,
    hour: hours + (amOrPm === "PM" ? 12 : 0),
    minute: minutes,
  });
};
