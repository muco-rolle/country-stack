import type { InputProps } from "@chakra-ui/react";
import {
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from "@chakra-ui/react";
import type { TablerIcon } from "@tabler/icons";
import { IconEye, IconEyeOff, IconLock } from "@tabler/icons";
import * as React from "react";

export type PasswordFieldProps = InputProps & {
  /** Form error */
  error?: string;

  /** Form label */
  label?: string;

  icon?: TablerIcon;
};

export const PasswordField = React.forwardRef<
  HTMLInputElement,
  PasswordFieldProps
>((props, ref) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const mergeRef = useMergeRefs(inputRef, ref);

  const { id, size, label, icon, error, ...restProps } = props;

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <FormControl id={id} isRequired isInvalid={!!error}>
      {label && (
        <FormLabel htmlFor={id || "password"}>
          {label || "Mot de passe"}
        </FormLabel>
      )}
      <InputGroup size={size}>
        {icon && (
          <InputLeftElement pointerEvents="none">
            <Icon as={IconLock} color="gray.300" boxSize="6" />
          </InputLeftElement>
        )}
        <InputRightElement>
          <IconButton
            size={"sm"}
            variant="ghost"
            colorScheme="gray"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={
              isOpen ? (
                <Icon
                  as={IconEyeOff}
                  boxSize={size === "lg" ? "6" : "5"}
                  color="gray.700"
                />
              ) : (
                <Icon
                  as={IconEye}
                  boxSize={size === "lg" ? "6" : "5"}
                  color="gray.700"
                />
              )
            }
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id={id}
          ref={mergeRef}
          type={isOpen ? "text" : "password"}
          autoComplete="current-password"
          placeholder="Mot de passe"
          required
          {...restProps}
        />
      </InputGroup>
      {error && (
        <FormErrorMessage>
          <FormErrorIcon />
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
});

PasswordField.displayName = "PasswordField";
