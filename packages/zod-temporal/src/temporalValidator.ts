import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class, @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
declare abstract class Class {
  constructor(..._: unknown[]);
}

/**
 * A Zod validator for a Temporal class which also parses string inputs.
 */
export type ZodTemporal<
  TClass extends typeof Class & {
    from: (arg: string) => InstanceType<TClass>;
  },
> = z.ZodType<
  InstanceType<TClass>,
  z.ZodTypeDef,
  InstanceType<TClass> | string
>;

/**
 * Creates a Zod validator for a Temporal class.
 *
 * @param cls - The Temporal class to validate.
 * @returns A Zod validator for the Temporal class.
 */
export function temporalValidator<
  TClass extends typeof Class & {
    from: (arg: string) => InstanceType<TClass>;
  },
>(cls: TClass): ZodTemporal<TClass> {
  return z.union([
    z.instanceof(cls),
    z.string().transform((value, ctx) => {
      try {
        return cls.from(value);
      } catch (error: unknown) {
        ctx.addIssue({
          code: z.ZodIssueCode.invalid_date,
          message: `Invalid ${cls.name}: ${(error as { message?: string }).message ?? "unknown error"}`,
        });
        return z.NEVER;
      }
    }),
  ]);
}
