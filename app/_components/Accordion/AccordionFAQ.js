"use client";
import "./style.css";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionComponentFAQ({ items = [], course = false }) {
  const [openItem, setOpenItem] = useState(null);

  const handleAccordionChange = (value) => {
    setOpenItem(value); // Update open item when accordion changes
  };

  return (
    <Accordion
      type={course ? "multiple" : "single"}
      collapsible
      className="w-full"
      onValueChange={handleAccordionChange}
    >
      {items &&items.map((item, index) => {
        const isOpen = openItem === `item-${index + 1}`; // Check if the current item is open
        return (
          <AccordionItem
            value={`item-${index + 1}`}
            key={index}
            className={` ${isOpen ? "accordion-open" : "accordion-close"} ${course ? "accordion-course" : ""}`} // Apply different styles if open
          >
            <AccordionTrigger className={"accordion-title"}>
              {item.title}
            </AccordionTrigger>
            <AccordionContent className={"accordion-desc"}>
              {item.content.map((point, index) => (
                <p key={index} className="flex items-start">
                 
                  <span className="text-[#fff]">{point}</span>
                </p>
              ))}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
