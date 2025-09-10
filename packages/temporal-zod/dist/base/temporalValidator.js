import { z } from "zod";
/**
 * Creates Zod validators for a Temporal class.
 *
 * @param cls - The Temporal class to validate.
 * @returns Two Zod validators for the Temporal class: `coerce` for coercing strings to the Temporal class, and `instance` for validating that the value is an instance of the Temporal class.
 */
export function temporalValidators(cls) {
    const instance = z.instanceof(cls);
    return {
        instance,
        coerce: z.union([
            instance,
            z.string().transform((value, ctx) => {
                try {
                    return cls.from(value);
                }
                catch (error) {
                    ctx.addIssue(`Invalid ${cls.name}: ${error.message ?? "unknown error"}`);
                    return z.NEVER;
                }
            }),
        ]),
    };
}
//# sourceMappingURL=temporalValidator.js.map