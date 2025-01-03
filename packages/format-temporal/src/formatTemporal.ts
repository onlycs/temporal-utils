import type { Intl, Temporal } from "temporal-spec";

/**
 * A type that can be formatted using {@link formatTemporal}.
 */
export type TemporalFormattable =
  | Temporal.Instant
  | Temporal.PlainYearMonth
  | Temporal.PlainMonthDay
  | Temporal.PlainDateTime
  | Temporal.PlainDate
  | Temporal.PlainTime
  | Temporal.ZonedDateTime;

/**
 * Formats a {@link TemporalFormattable} with the provided {@link Intl.DateTimeFormat}.
 *
 * Three types of Temporal objects cannot be directly formatted with {@link Intl.DateTimeFormat#format}:
 * - {@link Temporal.ZonedDateTime}
 * - {@link Temporal.PlainYearMonth}
 * - {@link Temporal.PlainMonthDay}
 * This function formats these other types by calling their `toLocaleString` method directly.
 *
 * @param temporal The {@link TemporalFormattable} to format.
 * @param format The {@link Intl.DateTimeFormat} to use for formatting.
 * @returns
 */
export const formatTemporal = (
  temporal: TemporalFormattable,
  format: Intl.DateTimeFormat,
): string => {
  return temporal[Symbol.toStringTag] === "Temporal.ZonedDateTime"
    ? temporal.toLocaleString(undefined, {
        ...(format.resolvedOptions() as Intl.DateTimeFormatOptions),
        timeZone: undefined,
      })
    : temporal[Symbol.toStringTag] === "Temporal.PlainYearMonth"
      ? (temporal as Temporal.PlainYearMonth).toLocaleString(undefined, {
          ...(format.resolvedOptions() as Intl.DateTimeFormatOptions),
          calendar: (temporal as Temporal.PlainYearMonth).calendarId,
        })
      : temporal[Symbol.toStringTag] === "Temporal.PlainMonthDay"
        ? (temporal as Temporal.PlainMonthDay).toLocaleString(undefined, {
            ...(format.resolvedOptions() as Intl.DateTimeFormatOptions),
            calendar: (temporal as Temporal.PlainMonthDay).calendarId,
          })
        : format.format(temporal);
};
