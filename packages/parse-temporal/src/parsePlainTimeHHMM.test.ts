import { Temporal } from "temporal-polyfill";
import { describe, expect, it } from "vitest";

import { parsePlainTimeHHMM } from "./parsePlainTimeHHMM.js";

describe("parsePlainTimeHHMM", () => {
  it("should work for normal times", () => {
    const time = "1225";
    expect(parsePlainTimeHHMM(time)).toEqual(
      Temporal.PlainTime.from({
        hour: 12,
        minute: 25,
      }),
    );
  });

  it("should allow for separators", () => {
    const time = "12:25";
    expect(parsePlainTimeHHMM(time)).toEqual(
      Temporal.PlainTime.from({
        hour: 12,
        minute: 25,
      }),
    );
  });

  it("should work for times in 12AM", () => {
    const time = "56";
    expect(parsePlainTimeHHMM(time)).toEqual(
      Temporal.PlainTime.from({
        hour: 0,
        minute: 56,
      }),
    );
  });

  it("should fail on invalid times", () => {
    expect(() => parsePlainTimeHHMM("5682")).toThrow();
  });
});
