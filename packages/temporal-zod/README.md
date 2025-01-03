# temporal-zod

<a href="https://www.npmjs.com/package/temporal-zod"><img alt="NPM version" src="https://img.shields.io/npm/v/temporal-zod.svg?style=for-the-badge&labelColor=000000"></a>

Zod validators for Temporal types.

This depends on the [temporal-polyfill](https://www.npmjs.com/package/temporal-polyfill) package.

## Usage

### With tRPC

If you are using [tRPC](https://trpc.io/), you likely use Zod to validate your inputs and outputs. However, when using it with [Tanstack Query](https://tanstack.com/query), since the Temporal types get mapped to an object, you should ensure that you are using the instance of the Temporal type rather than the one with type coercion. Otherwise, the query cache will not work as expected.

To do this, use the instance matcher of the Temporal type rather than the one with type coercion.

That is:

```typescript
// wrong
const procedure = myProcedure.input(
  z.object({
    plainDate: zPlainDate,
  }),
);

// correct
const procedure = myProcedure.input(
  z.object({
    plainDate: zPlainDateInstance,
  }),
);
```

## License

Apache-2.0
