import React from "react";
import { AccordionHeaderProps } from "./types";
import { useAccordionContext } from "../../hooks/useAccordionContext";

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children }) => {
  const { expanded, toggleExpanded } = useAccordionContext();


  return (
    <button onClick={toggleExpanded}>
      {children} <span>{expanded ? "-" : "+"}</span>
    </button>
  );
};

export default AccordionHeader;
