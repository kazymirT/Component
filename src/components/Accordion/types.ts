import { ReactNode } from "react";

export interface AccordionProps {
  children: ReactNode;
  header: string;
}

export interface AccordionContentProps {
  children: ReactNode;
}

export interface AccordionHeaderProps {
  children: string;
}