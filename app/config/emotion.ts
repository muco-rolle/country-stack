import createCache from "@emotion/cache";
import { createContext } from "react";
import type { ClientStyleContextData, ServerStyleContextData } from "~/types";

/**
 * 1. Client Style Context
 * 2. Server Style Context
 * 3. Emotion Cache
 **********************************************/

/*** 1. Server Style Context */
export const ClientStyleContext = createContext<ClientStyleContextData | null>(
  null
);

/*** 2. Server Style Context */
export const ServerStyleContext = createContext<
  ServerStyleContextData[] | null
>(null);

/*** 3.Emotion Cache */
export function createEmotionCache() {
  return createCache({ key: "css" });
}
