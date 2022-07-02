import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";
import { useActionData } from "@remix-run/react";
import type { ActionData } from "~/types";

export function FormError() {
  const form = useActionData<ActionData<any>>();
  if (!form?.error) return null;
  return (
    <Alert status="error" rounded="xl">
      <AlertIcon />
      <AlertDescription>{form?.error}</AlertDescription>
    </Alert>
  );
}
