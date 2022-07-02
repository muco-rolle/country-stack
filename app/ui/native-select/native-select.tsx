import type { SelectProps } from "@chakra-ui/react";
import {
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Select,
} from "@chakra-ui/react";
import { IconSelector } from "@tabler/icons";
import type { ForwardedRef } from "react";

export type NativeSelectProps = SelectProps & {
  /** Form label */
  label?: string;

  /** Data used to render options */
  data: (string | { value: string; label?: string })[];

  /** Form error */
  error?: string;
};

export const NativeSelect = forwardRef(
  (props: NativeSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const { label, id, data, isRequired, error, ...restProps } = props;

    const formattedData = data.map((item) =>
      typeof item === "string" ? { label: item, value: item } : item
    );

    const options = formattedData.map((item) => (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    ));

    return (
      <FormControl id={id} isRequired={isRequired} isInvalid={!!error}>
        {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
        <Select
          id={id}
          iconColor="gray.500"
          icon={<IconSelector />}
          ref={ref}
          {...restProps}
        >
          {options}
        </Select>
        {error && (
          <FormErrorMessage>
            <FormErrorIcon />
            {error}
          </FormErrorMessage>
        )}
      </FormControl>
    );
  }
);

NativeSelect.displayName = "NativeSelect";
