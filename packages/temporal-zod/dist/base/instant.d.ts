import { Temporal } from "temporal-polyfill";
import { z } from "zod";
export declare const Instant: typeof Temporal.Instant;
/**
 * Validates or coerces a string or Date to a {@link Temporal.Instant}.
 */
export declare const zInstant: z.ZodUnion<readonly [import("./temporalValidator.js").ZodTemporal<typeof Temporal.Instant>, z.ZodPipe<z.ZodDate, z.ZodTransform<Temporal.Instant, Date>>]>;
/**
 * Validates that the value is an instance of {@link Temporal.Instant}.
 */
export declare const zInstantInstance: z.ZodType<Temporal.Instant>;
//# sourceMappingURL=instant.d.ts.map