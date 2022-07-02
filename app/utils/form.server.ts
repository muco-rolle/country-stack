import type { z } from "zod";
import type { ValidForm } from "~/types";

/**
 * Validate Form Data
 * @param schema
 * @param formData
 * @returns
 */
export async function validate<Schema extends z.ZodType<any>>(
  schema: Schema,
  formData: FormData
): Promise<ValidForm<Schema>> {
  const data = Object.fromEntries(formData);
  const validations = schema.safeParse(data);

  if (!validations.success) {
    const errors = validations.error.flatten().fieldErrors as {
      [Property in keyof z.infer<Schema>]: string[];
    };
    return { errors, data };
  }
  return { data: validations.data };
}
