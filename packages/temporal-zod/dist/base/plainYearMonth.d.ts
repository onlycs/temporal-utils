import { Temporal } from "temporal-polyfill";
import type { z } from "zod";
import type { ZodTemporal } from "./temporalValidator.js";
export declare const PlainYearMonth: typeof Temporal.PlainYearMonth;
/**
 * Validates or coerces a string to a {@link Temporal.PlainYearMonth}.
 */
export declare const zPlainYearMonth: ZodTemporal<typeof PlainYearMonth>;
/**
 * Validates that the value is an instance of {@link Temporal.PlainYearMonth}.
 */
export declare const zPlainYearMonthInstance: z.ZodType<Temporal.PlainYearMonth>;
//# sourceMappingURL=plainYearMonth.d.ts.map