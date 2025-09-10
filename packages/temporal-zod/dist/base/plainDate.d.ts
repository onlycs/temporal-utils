import { Temporal } from "temporal-polyfill";
import type { z } from "zod";
import type { ZodTemporal } from "./temporalValidator.js";
export declare const PlainDate: typeof Temporal.PlainDate;
/**
 * Validates or coerces a string to a {@link Temporal.PlainDate}.
 */
export declare const zPlainDate: ZodTemporal<typeof PlainDate>;
/**
 * Validates that the value is an instance of {@link Temporal.PlainDate}.
 */
export declare const zPlainDateInstance: z.ZodType<Temporal.PlainDate>;
//# sourceMappingURL=plainDate.d.ts.map