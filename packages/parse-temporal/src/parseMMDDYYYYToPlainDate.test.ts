import { Temporal } from "temporal-polyfill";
import { describe, expect, it } from "vitest";

import { parseMMDDYYYYToPlainDate } from "./parseMMDDYYYYToPlainDate.js";

describe("parseMMDDYYYYToPlainDate", () => {
  it("should work for normal dates", () => {
    const date = "12/21/2024";
    expect(parseMMDDYYYYToPlainDate(date)).toEqual(
      Temporal.PlainDate.from({
        year: 2024,
        month: 12,
        day: 21,
      }),
    );
  });

  it("should fail on invalid dates", () => {
    expect(() => parseMMDDYYYYToPlainDate("12/32/2024")).toThrow();
  });
});
