import { Temporal } from "temporal-polyfill";

import type { ZodTemporal } from "./temporalValidator.js";
import { temporalValidator } from "./temporalValidator.js";

export const PlainDateTime: typeof Temporal.PlainDateTime =
  Temporal.PlainDateTime;

export const zPlainDateTime: ZodTemporal<typeof PlainDateTime> =
  temporalValidator(PlainDateTime);
