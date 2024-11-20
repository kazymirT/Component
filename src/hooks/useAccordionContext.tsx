import { useContext } from "react";
import { AccordionContext } from "../context/AccordionContext";

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordionContext must be used within an AccordionProvider");
  }
  return context;
};
