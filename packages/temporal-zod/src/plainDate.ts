import { Temporal } from "temporal-polyfill";
import { z } from "zod";

import type { ZodTemporal } from "./temporalValidator.js";
import { temporalValidator } from "./temporalValidator.js";

export const PlainDate: typeof Temporal.PlainDate = Temporal.PlainDate;

/**
 * Validates or coerces a string to a {@link Temporal.PlainDate}.
 */
export const zPlainDate: ZodTemporal<typeof PlainDate> =
  temporalValidator(PlainDate);

/**
 * Validates that the value is an instance of `Temporal.PlainDate`.
 */
export const zPlainDateInstance: z.ZodType<Temporal.PlainDate> =
  z.instanceof(PlainDate);
