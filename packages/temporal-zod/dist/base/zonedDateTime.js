import { Temporal } from "temporal-polyfill";
import { temporalValidators } from "./temporalValidator.js";
export const ZonedDateTime = Temporal.ZonedDateTime;
const validators = temporalValidators(ZonedDateTime);
/**
 * Validates or coerces a string to a {@link Temporal.ZonedDateTime}.
 */
export const zZonedDateTime = validators.coerce;
/**
 * Validates that the value is an instance of {@link Temporal.ZonedDateTime}.
 */
export const zZonedDateTimeInstance = validators.instance;
//# sourceMappingURL=zonedDateTime.js.map