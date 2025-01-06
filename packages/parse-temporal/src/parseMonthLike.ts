import { parseMonthFromName } from "./parseMonthFromName.js";

export const parseMonthLike = (monthLike: string): number => {
  const month = parseMonthFromName(monthLike) ?? parseInt(monthLike);
  if (isNaN(month)) {
    throw new Error(`Invalid month: ${monthLike}`);
  }
  return month;
};
