import { Temporal } from "temporal-polyfill";
import { describe, expect, it } from "vitest";

import type { Interval } from "./interval.js";
import { normalizeIntervals } from "./normalizeIntervals.js";

const toPlainTimeIntervals = (
  ranges: { start: string; end: string }[],
): Interval<Temporal.PlainTime>[] =>
  ranges.map(({ start, end }) => ({
    start: Temporal.PlainTime.from(start),
    end: Temporal.PlainTime.from(end),
  }));

describe("normalizeIntervals", () => {
  it("should return an empty array when given an empty array", () => {
    const result = normalizeIntervals([]);
    expect(result).toEqual([]);
  });

  it("should return the same range when given a single range", () => {
    const input: Interval<Temporal.PlainTime>[] = toPlainTimeIntervals([
      { start: "09:00", end: "17:00" },
    ]);
    const result = normalizeIntervals(input);
    expect(result).toEqual(input);
  });

  it("should combine overlapping ranges", () => {
    const input = toPlainTimeIntervals([
      { start: "09:00", end: "12:00" },
      { start: "11:00", end: "14:00" },
      { start: "13:00", end: "17:00" },
    ]);
    const expected = toPlainTimeIntervals([{ start: "09:00", end: "17:00" }]);
    const result = normalizeIntervals(input);
    expect(result).toEqual(expected);
  });

  it("should not combine non-overlapping ranges", () => {
    const input = toPlainTimeIntervals([
      { start: "09:00", end: "11:00" },
      { start: "13:00", end: "15:00" },
      { start: "17:00", end: "19:00" },
    ]);
    const expected = toPlainTimeIntervals([
      { start: "09:00", end: "11:00" },
      { start: "13:00", end: "15:00" },
      { start: "17:00", end: "19:00" },
    ]);
    const result = normalizeIntervals(input);
    expect(result).toEqual(expected);
  });

  it("should sort ranges by start time", () => {
    const input = toPlainTimeIntervals([
      { start: "13:00", end: "15:00" },
      { start: "09:00", end: "11:00" },
      { start: "17:00", end: "19:00" },
    ]);
    const expected = toPlainTimeIntervals([
      { start: "09:00", end: "11:00" },
      { start: "13:00", end: "15:00" },
      { start: "17:00", end: "19:00" },
    ]);
    const result = normalizeIntervals(input);
    expect(result).toEqual(expected);
  });

  it("should handle adjacent ranges", () => {
    const input = toPlainTimeIntervals([
      { start: "09:00", end: "11:00" },
      { start: "11:00", end: "13:00" },
      { start: "13:00", end: "15:00" },
    ]);
    const expected = toPlainTimeIntervals([{ start: "09:00", end: "15:00" }]);
    const result = normalizeIntervals(input);
    expect(result).toEqual(expected);
  });

  it("works with contained ranges", () => {
    const input = toPlainTimeIntervals([
      { start: "09:00", end: "17:00" },
      { start: "12:00", end: "14:00" }, // Overlapping range
      { start: "18:00", end: "22:00" },
    ]);
    const expected = toPlainTimeIntervals([
      { start: "09:00", end: "17:00" },
      { start: "18:00", end: "22:00" },
    ]);
    const result = normalizeIntervals(input);
    expect(result).toEqual(expected);
  });
});
