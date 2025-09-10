import { Temporal } from "temporal-polyfill";
import { temporalValidators } from "./temporalValidator.js";
export const PlainDateTime = Temporal.PlainDateTime;
const validators = temporalValidators(PlainDateTime);
/**
 * Validates or coerces a string to a {@link Temporal.PlainDateTime}.
 */
export const zPlainDateTime = validators.coerce;
/**
 * Validates that the value is an instance of {@link Temporal.PlainDateTime}.
 */
export const zPlainDateTimeInstance = validators.instance;
//# sourceMappingURL=plainDateTime.js.map