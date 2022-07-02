import type { StackProps } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import type { FormProps as RemixFormProps } from "@remix-run/react";
import { Form as RemixForm } from "@remix-run/react";
import type { ForwardedRef } from "react";
import { forwardRef } from "react";

type FormProps = Omit<StackProps, "onChange"> & RemixFormProps & {};
type RefProps = ForwardedRef<HTMLFormElement> | null;
export const Form = forwardRef((props: FormProps, ref: RefProps) => {
  return (
    <Stack
      as={RemixForm}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
      {...props}
    >
      {props.children}
    </Stack>
  );
});

Form.displayName = "Form";
