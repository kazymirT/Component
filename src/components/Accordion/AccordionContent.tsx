import React from "react";
import { AccordionContentProps } from "./types";
import { useAccordionContext } from "../../hooks/useAccordionContext";

const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => {
  const { expanded } = useAccordionContext();


  return <>{expanded && children}</>;
};

export default AccordionContent;
