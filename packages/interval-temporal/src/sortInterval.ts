import type { TemporalComparable } from "./comparators.js";
import { sortedTuple } from "./comparators.js";
import type { Interval } from "./interval.js";

export const sortInterval = <T extends TemporalComparable>(
  interval: Interval<T>,
): Interval<T> => {
  const [start, end] = sortedTuple(interval.start, interval.end);
  return { start, end };
};
