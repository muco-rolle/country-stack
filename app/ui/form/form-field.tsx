import type { InputProps } from "@chakra-ui/react";
import { useActionData } from "@remix-run/react";
import type { ReactElement } from "react";
import { cloneElement } from "react";
import type { ActionData } from "~/types";
import { TextInput } from "../text-input/text-input";

type FormFieldProps = Omit<InputProps, "defaultValue"> & {
  name: string;
  label: string;
  element?: ReactElement;
  defaultValue?: any;
};

export function FormField({ label, element, ...props }: FormFieldProps) {
  const form = useActionData<ActionData<any>>();
  const clonedElement =
    element &&
    cloneElement(element, {
      defaultValue: form?.data?.[props.name] || "",
      id: props.id || props.name,
      label: label,
      ...props,
    });

  return (
    clonedElement || (
      <TextInput
        id={props.name}
        isRequired={props.isRequired}
        isInvalid={!!form?.errors?.[props.name]}
        label={label}
        defaultValue={form?.data?.[props.name]}
        error={form?.errors?.[props.name]?.[0]}
        {...props}
      />
    )
  );
}
