import type { IconProps, InputProps } from "@chakra-ui/react";
import {
  Fade,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import type { TablerIcon } from "@tabler/icons";
import { forwardRef } from "react";

export type TextInputProps = InputProps & {
  label?: string;
  icon?: TablerIcon;
  iconStyles?: IconProps;
  error?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const { id, label, error, icon, iconStyles, isRequired, ...restProps } =
      props;

    return (
      <FormControl id={id} isRequired={isRequired} isInvalid={!!error}>
        {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
        <InputGroup>
          {icon && (
            <InputLeftElement pointerEvents="none">
              {iconStyles ? (
                <Icon as={icon} {...iconStyles} />
              ) : (
                <Icon color="gray.300" boxSize="6" as={icon} />
              )}
            </InputLeftElement>
          )}

          <Input ref={ref} {...restProps} />
        </InputGroup>
        {error && (
          <Fade in={true}>
            <FormErrorMessage>
              <FormErrorIcon />
              {error}
            </FormErrorMessage>
          </Fade>
        )}
      </FormControl>
    );
  }
);

TextInput.displayName = "TextInput";
