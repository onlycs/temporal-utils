import { Temporal } from "temporal-polyfill";
import { describe, expect, it } from "vitest";

import { parsePlainDate } from "./parsePlainDate.js";

describe("parsePlainDate", () => {
  it("should parse a date", () => {
    expect(parsePlainDate("Nov 12, 2024", "MDY")).toEqual(
      new Temporal.PlainDate(2024, 11, 12),
    );
  });

  it("should parse 23-NOV-24", () => {
    expect(parsePlainDate("23-NOV-24", "DMY")).toEqual(
      new Temporal.PlainDate(2024, 11, 23),
    );
  });

  it("should parse Oct 12, 2024", () => {
    expect(parsePlainDate("Oct 12, 2024", "MDY")).toEqual(
      new Temporal.PlainDate(2024, 10, 12),
    );
  });
});
