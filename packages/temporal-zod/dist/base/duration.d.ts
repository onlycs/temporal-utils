import { Temporal } from "temporal-polyfill";
import type { z } from "zod";
import type { ZodTemporal } from "./temporalValidator.js";
export declare const Duration: typeof Temporal.Duration;
/**
 * Validates or coerces a string to a {@link Temporal.Duration}.
 */
export declare const zDuration: ZodTemporal<typeof Duration>;
/**
 * Validates that the value is an instance of {@link Temporal.Duration}.
 */
export declare const zDurationInstance: z.ZodType<Temporal.Duration>;
//# sourceMappingURL=duration.d.ts.map