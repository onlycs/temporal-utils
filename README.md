# temporal-utils

A collection of TypeScript utilities for the [TC39 Temporal proposal](https://tc39.es/proposal-temporal/).

All packages rely on the use of [temporal-polyfill](https://github.com/fullcalendar/temporal-polyfill). Packages use `instanceof` checks to determine if a type is supported, so one must ensure to use that exact polyfill.

## Documentation

For more detailed documentation, see the [API docs](https://temporal.ianm.com).

## Packages

- [format-temporal](https://github.com/macalinao/temporal-utils/tree/master/packages/format-temporal) - A formatting function for Temporal types.
- [interval-temporal](https://github.com/macalinao/temporal-utils/tree/master/packages/interval-temporal) - An interval type for Temporal.
- [parse-temporal](https://github.com/macalinao/temporal-utils/tree/master/packages/parse-temporal) - Parse Temporal types from strings.
- [superjson-temporal](https://github.com/macalinao/temporal-utils/tree/master/packages/superjson-temporal) - SuperJSON serializers for Temporal types.
- [temporal-quarter-fns](https://github.com/macalinao/temporal-utils/tree/master/packages/temporal-quarter-fns) - Functions for working with quarters in Temporal.
- [temporal-zod](https://github.com/macalinao/temporal-utils/tree/master/packages/temporal-zod) - Zod validators for Temporal types.

## License

Apache-2.0
