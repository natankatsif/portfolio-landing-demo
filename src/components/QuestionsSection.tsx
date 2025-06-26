'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    q: "What is Launch UI?",
    a: "Launch UI is a set of landing page templates and components designed to help you build beautiful, professional websites quickly and easily.",
  },
  {
    q: "Is Launch UI free to use?",
    a: "Yes! The Free plan is open-source and free forever. Pro and Team plans offer more features for a one-time payment.",
  },
  {
    q: "Can I use Launch UI for commercial projects?",
    a: "Absolutely. All plans allow you to use the components and templates in commercial projects.",
  },
  {
    q: "How do I get updates?",
    a: "Updates are included for all plans. You&apos;ll get access to new components and improvements as they are released.",
  },
  {
    q: "Do I need to know Figma or code?",
    a: "No coding or Figma experience is required to use the templates, but you can customize everything if you want.",
  },
];

export default function QuestionsSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full mt-0 lg:mt-0 md:py-3 text-foreground"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-5xl font-semibold mb-4">Questions and Answers</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Everything you need to know about Launch UI. Can&apos;t find the answer you&apos;re looking for? Reach out to our support team.
        </p>
      </motion.div>
      <div className="max-w-4xl mt-24 mx-auto flex flex-col gap-4">
        {questions.map((item, idx) => (
          <motion.div
            key={item.q}
            className="border-b border-zinc-800 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.09, ease: "easeOut" }}
          >
            <button
              className="w-full flex justify-between items-center px-6 py-2 text-left text-lg font-medium text-white focus:outline-none"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              <span>{item.q}</span>
              <svg
                className={`w-5 h-5 ml-4 transition-transform ${open === idx ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`px-6 pb-5 text-zinc-300 text-base transition-all duration-300 ease-in-out ${open === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
            >
              {item.a}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 