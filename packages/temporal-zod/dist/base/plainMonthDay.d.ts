import { Temporal } from "temporal-polyfill";
import type { z } from "zod";
import type { ZodTemporal } from "./temporalValidator.js";
export declare const PlainMonthDay: typeof Temporal.PlainMonthDay;
/**
 * Validates or coerces a string to a {@link Temporal.PlainMonthDay}.
 */
export declare const zPlainMonthDay: ZodTemporal<typeof PlainMonthDay>;
/**
 * Validates that the value is an instance of {@link Temporal.PlainMonthDay}.
 */
export declare const zPlainMonthDayInstance: z.ZodType<Temporal.PlainMonthDay>;
//# sourceMappingURL=plainMonthDay.d.ts.map