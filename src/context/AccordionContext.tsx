import { createContext } from "react";
import { AccordionContextType } from "./types";

export const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const { Provider } = AccordionContext;