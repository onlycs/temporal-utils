import { Temporal } from "temporal-polyfill";
import type { z } from "zod";
import type { ZodTemporal } from "./temporalValidator.js";
export declare const ZonedDateTime: typeof Temporal.ZonedDateTime;
/**
 * Validates or coerces a string to a {@link Temporal.ZonedDateTime}.
 */
export declare const zZonedDateTime: ZodTemporal<typeof ZonedDateTime>;
/**
 * Validates that the value is an instance of {@link Temporal.ZonedDateTime}.
 */
export declare const zZonedDateTimeInstance: z.ZodType<Temporal.ZonedDateTime>;
//# sourceMappingURL=zonedDateTime.d.ts.map