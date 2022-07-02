import type { ActionFunction } from "@remix-run/node";
import { z } from "zod";
import { BadRequest, validate } from "~/utils";
import { HomeView } from "~/views/web";

export default function HomeRoute() {
  return <HomeView />;
}

export const action: ActionFunction = async ({ request }) => {
  const schema = z.object({
    email: z
      .string()
      .min(3, { message: "Email is required" })
      .email("Invalid email"),
  });
  const formData = await request.formData();
  const { errors, data } = await validate(schema, formData);

  if (errors) return BadRequest({ errors, data });

  return data;
};
