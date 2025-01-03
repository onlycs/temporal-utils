# temporal-utils

A collection of TypeScript utilities for the [TC39 Temporal proposal](https://tc39.es/proposal-temporal/).

All packages rely on the use of [temporal-polyfill](https://github.com/fullcalendar/temporal-polyfill). Packages use `instanceof` checks to determine if a type is supported, so one must ensure to use that exact polyfill.

## Packages

- [format-temporal](./packages/format-temporal/) - A formatting function for Temporal types.
- [zod-temporal](./packages/zod-temporal/) - Zod validators for Temporal types.
- [superjson-temporal](./packages/superjson-temporal/) - SuperJSON serializers for Temporal types.
- [temporal-interval](./packages/temporal-interval/) - An interval type for Temporal.

## License

Apache-2.0
