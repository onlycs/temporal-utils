import { Temporal } from "temporal-polyfill";
import type { z } from "zod";
import type { ZodTemporal } from "./temporalValidator.js";
export declare const PlainDateTime: typeof Temporal.PlainDateTime;
/**
 * Validates or coerces a string to a {@link Temporal.PlainDateTime}.
 */
export declare const zPlainDateTime: ZodTemporal<typeof PlainDateTime>;
/**
 * Validates that the value is an instance of {@link Temporal.PlainDateTime}.
 */
export declare const zPlainDateTimeInstance: z.ZodType<Temporal.PlainDateTime>;
//# sourceMappingURL=plainDateTime.d.ts.map