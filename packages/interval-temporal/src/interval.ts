import type { TemporalComparable } from "./comparators.js";

/**
 * A start/end time range.
 */
export interface Interval<T extends TemporalComparable> {
  start: T;
  end: T;
}
