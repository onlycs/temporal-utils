import { Temporal } from "temporal-polyfill";
import { z } from "zod";
import { temporalValidators } from "./temporalValidator.js";
export const Instant = Temporal.Instant;
const validators = temporalValidators(Instant);
/**
 * Validates or coerces a string or Date to a {@link Temporal.Instant}.
 */
export const zInstant = z.union([
    validators.coerce,
    z
        .date()
        .transform((value) => Temporal.Instant.fromEpochMilliseconds(value.getTime())),
]);
/**
 * Validates that the value is an instance of {@link Temporal.Instant}.
 */
export const zInstantInstance = validators.instance;
//# sourceMappingURL=instant.js.map