"use client";
import "./style.css";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionComponent({ items }) {
  const [openItem, setOpenItem] = useState(null);

  const handleAccordionChange = (value) => {
    setOpenItem(value); // Update open item when accordion changes
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-white"
      onValueChange={handleAccordionChange}
    >
      {items.map((item, index) => {
        const isOpen = openItem === `item-${index + 1}`; // Check if the current item is open

        return (
          <AccordionItem
            value={`item-${index + 1}`}
            key={index}
            className={` ${isOpen ? "accordion-open" : "accordion-close"}`} // Apply different styles if open
          >
            <AccordionTrigger className={"accordion-title"}>
              {item.title}
            </AccordionTrigger>
            <AccordionContent className={"accordion-desc"}>
              {item.content}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
