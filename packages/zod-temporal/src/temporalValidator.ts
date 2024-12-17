import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class, @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
declare abstract class Class {
  constructor(..._: unknown[]);
}

export type ZodTemporal<
  TClass extends typeof Class & {
    from: (arg: string) => InstanceType<TClass>;
  },
> = z.ZodType<
  InstanceType<TClass>,
  z.ZodTypeDef,
  InstanceType<TClass> | string
>;

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
