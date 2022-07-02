import type { z } from "zod";

export type Errors<T> = {
  [Property in keyof T]: string[];
};

export type ValidForm<Schema extends z.ZodType<any>> = {
  data: z.infer<Schema>;
  errors?: Errors<Schema>;
};

export type ActionData<T> = {
  error?: string;
  errors?: Errors<T>;
  data?: T;
};
