import React from "react";
import useToggle from "../../hooks/useToggle";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";
import { AccordionProps } from "./types";
import { Provider as AccordionProvider } from "../../context/AccordionContext";

const Accordion: React.FC<AccordionProps> = ({ children, header }) => {
  const { status: expanded, toggleStatus: toggleExpanded } = useToggle();

  const value = {
    expanded,
    toggleExpanded
  };

  return (
    <AccordionProvider value={value}>
      <div>
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
