# format-temporal

<a href="https://www.npmjs.com/package/format-temporal"><img alt="NPM version" src="https://img.shields.io/npm/v/format-temporal.svg?style=for-the-badge&labelColor=000000"></a>

A formatting function for [Temporal](https://www.npmjs.com/package/temporal-spec) types.

Several Temporal types don't support the `toLocaleString` method (i.e., `Temporal.ZonedDateTime`, `Temporal.PlainYearMonth`, and `Temporal.PlainMonthDay`), so this package provides a `formatTemporal` function that formats a Temporal type using the `Intl.DateTimeFormat` API.

## Usage

```typescript
import { formatTemporal } from "format-temporal";

const plainYearMonth = Temporal.PlainYearMonth.from("2023-05");
const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
});
const result = formatTemporal(plainYearMonth, formatter);
console.log(result); // "May 2023"
```

## License

Apache-2.0
