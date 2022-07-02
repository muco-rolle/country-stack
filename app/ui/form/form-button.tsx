import type { ButtonProps } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useTransition } from "@remix-run/react";

export function FormButton(props: ButtonProps) {
  const transition = useTransition();

  return (
    <Button
      type="submit"
      isLoading={transition.state === "submitting"}
      isDisabled={transition.state === "submitting"}
      {...props}
    />
  );
}
