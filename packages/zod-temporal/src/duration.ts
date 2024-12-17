import { Temporal } from "temporal-polyfill";
import type { z } from "zod";

import { temporalValidator } from "./temporalValidator.js";

export const Duration: typeof Temporal.Duration = Temporal.Duration;

export const zDuration: z.ZodType<
  Temporal.Duration,
  z.ZodTypeDef,
  Temporal.Duration | string
> = temporalValidator(Duration);
