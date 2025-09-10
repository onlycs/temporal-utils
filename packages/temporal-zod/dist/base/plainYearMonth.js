import { Temporal } from "temporal-polyfill";
import { temporalValidators } from "./temporalValidator.js";
export const PlainYearMonth = Temporal.PlainYearMonth;
const validators = temporalValidators(PlainYearMonth);
/**
 * Validates or coerces a string to a {@link Temporal.PlainYearMonth}.
 */
export const zPlainYearMonth = validators.coerce;
/**
 * Validates that the value is an instance of {@link Temporal.PlainYearMonth}.
 */
export const zPlainYearMonthInstance = validators.instance;
//# sourceMappingURL=plainYearMonth.js.map