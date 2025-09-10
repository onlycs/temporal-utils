import { Temporal } from "temporal-polyfill";
import { temporalValidators } from "./temporalValidator.js";
export const PlainDate = Temporal.PlainDate;
const validators = temporalValidators(PlainDate);
/**
 * Validates or coerces a string to a {@link Temporal.PlainDate}.
 */
export const zPlainDate = validators.coerce;
/**
 * Validates that the value is an instance of {@link Temporal.PlainDate}.
 */
export const zPlainDateInstance = validators.instance;
//# sourceMappingURL=plainDate.js.map