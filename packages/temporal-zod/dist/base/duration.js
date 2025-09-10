import { Temporal } from "temporal-polyfill";
import { temporalValidators } from "./temporalValidator.js";
export const Duration = Temporal.Duration;
const validators = temporalValidators(Duration);
/**
 * Validates or coerces a string to a {@link Temporal.Duration}.
 */
export const zDuration = validators.coerce;
/**
 * Validates that the value is an instance of {@link Temporal.Duration}.
 */
export const zDurationInstance = validators.instance;
//# sourceMappingURL=duration.js.map