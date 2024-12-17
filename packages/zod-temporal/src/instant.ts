import { Temporal } from "temporal-polyfill";
import { z } from "zod";

import { temporalValidator } from "./temporalValidator.js";

export const Instant: typeof Temporal.Instant = Temporal.Instant;

export const zInstant: z.ZodType<
  Temporal.Instant,
  z.ZodTypeDef,
  Temporal.Instant | string | Date
> = z.union([
  temporalValidator(Instant),
  z
    .date()
    .transform((value) =>
      Temporal.Instant.fromEpochMilliseconds(value.getTime()),
    ),
]);
