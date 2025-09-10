import { Temporal } from "temporal-polyfill";
import { temporalValidators } from "./temporalValidator.js";
export const PlainMonthDay = Temporal.PlainMonthDay;
const validators = temporalValidators(PlainMonthDay);
/**
 * Validates or coerces a string to a {@link Temporal.PlainMonthDay}.
 */
export const zPlainMonthDay = validators.coerce;
/**
 * Validates that the value is an instance of {@link Temporal.PlainMonthDay}.
 */
export const zPlainMonthDayInstance = validators.instance;
//# sourceMappingURL=plainMonthDay.js.map