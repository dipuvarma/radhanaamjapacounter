"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * FAQSection — Reusable FAQ accordion component.
 * @param {Array} faqs - Array of { q: string, a: string }
 * @param {string} [headingId] - ID for the h2 heading (for aria-labelledby)
 */
export default function FAQSection({ faqs = [], headingId = "faq-heading" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      aria-labelledby={headingId}
      className="w-full py-16 px-4"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#F37420] font-semibold text-sm uppercase tracking-widest mb-2">
            Got Questions?
          </p>
          <h2
            id={headingId}
            className="text-2xl sm:text-3xl font-bold text-[#4A1C00]"
          >
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#F37420] rounded-full mx-auto mt-3" />
        </div>

        {/* Accordion */}
        <div className="space-y-3" role="list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                role="listitem"
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "border-[#F37420]/50 shadow-md shadow-amber-100"
                    : "border-[#FDE68A]"
                } bg-[#FFFDF9] overflow-hidden`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${headingId}-${i}`}
                  id={`faq-question-${headingId}-${i}`}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 cursor-pointer focus:outline-2 focus:outline-offset-1 focus:outline-amber-500 rounded-2xl"
                >
                  <span className="font-semibold text-[#4A1C00] text-sm sm:text-base pr-2">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#F37420] text-xl font-bold shrink-0 leading-none"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${headingId}-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${headingId}-${i}`}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[#78350F] text-sm leading-relaxed border-t border-[#FDE68A] pt-3">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
