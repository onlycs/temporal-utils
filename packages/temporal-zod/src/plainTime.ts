import { Temporal } from "temporal-polyfill";

import type { ZodTemporal } from "./temporalValidator.js";
import { temporalValidator } from "./temporalValidator.js";

export const PlainTime: typeof Temporal.PlainTime = Temporal.PlainTime;

/**
 * Validates or coerces a string to a `Temporal.PlainTime`.
 */
export const zPlainTime: ZodTemporal<typeof PlainTime> =
  temporalValidator(PlainTime);
