import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";

import type { LinkProps as RemixLinkProps } from "@remix-run/react";
import { Link as RemixLink } from "@remix-run/react";
type AppLinkProps = RemixLinkProps & ChakraLinkProps & {};

export function AppLink({ to, children, ...restProps }: AppLinkProps) {
  return (
    <ChakraLink as={RemixLink} to={to} {...restProps}>
      {children}
    </ChakraLink>
  );
}
