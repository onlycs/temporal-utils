# superjson-temporal

<a href="https://www.npmjs.com/package/superjson-temporal"><img alt="NPM version" src="https://img.shields.io/npm/v/superjson-temporal.svg?style=for-the-badge&labelColor=000000"></a>

SuperJSON serializers/deserializers for Temporal types.

This depends on the [temporal-polyfill](https://www.npmjs.com/package/temporal-polyfill) package.

## Usage

```typescript
import { registerSuperJSONTemporal } from "superjson-temporal";
import { default as SuperJSON } from "superjson";

registerSuperJSONTemporal(SuperJSON);
```

This will automatically add serializers/deserializers for Temporal types to SuperJSON.

## License

Apache-2.0
