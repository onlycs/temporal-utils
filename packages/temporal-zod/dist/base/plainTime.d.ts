import { Temporal } from "temporal-polyfill";
import type { z } from "zod";
import type { ZodTemporal } from "./temporalValidator.js";
export declare const PlainTime: typeof Temporal.PlainTime;
/**
 * Validates or coerces a string to a {@link Temporal.PlainTime}.
 */
export declare const zPlainTime: ZodTemporal<typeof PlainTime>;
/**
 * Validates that the value is an instance of {@link Temporal.PlainTime}.
 */
export declare const zPlainTimeInstance: z.ZodType<Temporal.PlainTime>;
//# sourceMappingURL=plainTime.d.ts.map