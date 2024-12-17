"use client";
import "./style.css";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionComponent({ items, course = false }) {
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
      {items.map((item, index) => {
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
              {item.content.map((content, contentIndex) => (
                <p key={contentIndex} className="flex items-start">
                  <svg width="40" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <g clip-path="url(#clip0_61_1788)">
                      <path d="M21.7611 11.1222V12.0054C21.7598 14.0755 21.0895 16.0899 19.85 17.7479C18.6104 19.406 16.8682 20.619 14.8829 21.2059C12.8978 21.7929 10.776 21.7224 8.83412 21.005C6.89225 20.2876 5.2343 18.9616 4.10755 17.225C2.98081 15.4884 2.44563 13.434 2.58185 11.3682C2.71805 9.30258 3.51835 7.33627 4.86338 5.76259C6.20841 4.1889 8.0261 3.09217 10.0454 2.63594C12.0647 2.17971 14.1773 2.38844 16.0683 3.231M21.7611 4.3199L12.1611 13.9295L9.28103 11.0495" stroke="#6F6B6B" stroke-width="1.92" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_61_1788">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[#black]"> {content}</span>
                 
                </p>
              ))}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
