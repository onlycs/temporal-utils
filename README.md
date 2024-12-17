# temporal-utils

A collection of TypeScript utilities for the [TC39 Temporal proposal](https://tc39.es/proposal-temporal/).

All packages rely on the use of [temporal-polyfill](https://github.com/fullcalendar/temporal-polyfill). Packages use `instanceof` checks to determine if a type is supported, so one must ensure to use that exact polyfill.

## Packages

- [zod-temporal](./packages/zod-temporal/README.md) - Zod validators for Temporal types.
- [superjson-temporal](./packages/superjson-temporal/README.md) - SuperJSON serializers for Temporal types.

## License

Apache-2.0
