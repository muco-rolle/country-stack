import { theme } from "@chakra-ui/react";

export const foundations = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },

  styles: {
    global: {},
  },

  fonts: {
    ...theme.fonts,
  },
};
