import { Temporal } from "temporal-polyfill";

/**
 * Parses a date in MM/DD/YYYY to a {@link Temporal.PlainDate}.
 * @param date
 * @returns
 */
export const parseMMDDYYYYToPlainDate = (date: string): Temporal.PlainDate => {
  const [monthStr, dayStr, yearStr] = date.split(/[^\d]/);
  if (!monthStr || !dayStr || !yearStr) {
    throw new Error(`Invalid date string: ${date}`);
  }
  const month = parseInt(monthStr);
  const day = parseInt(dayStr);
  const year = parseInt(yearStr);
  return Temporal.PlainDate.from(
    {
      year,
      month,
      day,
    },
    { overflow: "reject" },
  );
};
