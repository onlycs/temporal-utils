import { Temporal } from "temporal-polyfill";

import type { ZodTemporal } from "./temporalValidator.js";
import { temporalValidator } from "./temporalValidator.js";

export const Duration: typeof Temporal.Duration = Temporal.Duration;

/**
 * Validates or coerces a string to a {@link Temporal.Duration}.
 */
export const zDuration: ZodTemporal<typeof Duration> =
  temporalValidator(Duration);
