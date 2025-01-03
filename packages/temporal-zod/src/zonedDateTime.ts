import { Temporal } from "temporal-polyfill";

import type { ZodTemporal } from "./temporalValidator.js";
import { temporalValidator } from "./temporalValidator.js";

export const ZonedDateTime: typeof Temporal.ZonedDateTime =
  Temporal.ZonedDateTime;

export type ZonedDateTime = Temporal.ZonedDateTime;

/**
 * Validates or coerces a string to a `Temporal.ZonedDateTime`.
 */
export const zZonedDateTime: ZodTemporal<typeof ZonedDateTime> =
  temporalValidator(ZonedDateTime);
