import { Temporal } from "temporal-polyfill";
import { temporalValidators } from "./temporalValidator.js";
export const PlainTime = Temporal.PlainTime;
const validators = temporalValidators(PlainTime);
/**
 * Validates or coerces a string to a {@link Temporal.PlainTime}.
 */
export const zPlainTime = validators.coerce;
/**
 * Validates that the value is an instance of {@link Temporal.PlainTime}.
 */
export const zPlainTimeInstance = validators.instance;
//# sourceMappingURL=plainTime.js.map