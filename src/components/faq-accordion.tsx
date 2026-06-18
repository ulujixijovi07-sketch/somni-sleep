"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="faq">
      {items.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-q"
            onClick={() => toggle(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(index);
              }
            }}
            aria-expanded={openIndices.has(index)}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            {item.question}
          </div>
          {openIndices.has(index) && (
            <div className="faq-a">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
