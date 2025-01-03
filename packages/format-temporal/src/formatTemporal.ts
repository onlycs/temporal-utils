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
 * One should use this and avoid using {@link Intl.DateTimeFormat#format} directly, since
 * not all Temporal types are compatible with it.
 *
 * @param temporal
 * @param format
 * @returns
 */
export const formatTemporal = (
  temporal: TemporalFormattable,
  format: Intl.DateTimeFormat,
): string => {
  // Three types of Temporal objects cannot be directly formatted with Intl.DateTimeFormat#format:
  // - Temporal.ZonedDateTime
  // - Temporal.PlainYearMonth
  // - Temporal.PlainMonthDay
  // This function formats these other types by calling their `toLocaleString` method directly.

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
