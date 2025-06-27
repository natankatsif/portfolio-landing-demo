"use client";
import { motion } from "framer-motion";
import React from "react";
import Button from "./Button";

const plans = [
  {
    name: "Free",
    subtitle: "For everyone starting out on a website for their big idea",
    price: "0",
    priceNote: "free",
    priceNote2: "for everyone",
    button: "Get started for free",
    buttonStyle: "default",
    highlight: false,
    features: [
      "9 landing page sections",
      "36 components",
      "5 custom animations",
    ],
    allAccess: false,
  },
  {
    name: "Pro",
    icon: "/icons/user.svg",
    subtitle: "For early-stage founders, solopreneurs and indie devs",
    price: "0",
    priceNote: "one-time payment",
    priceNote2: "plus local taxes",
    button: "Get all-access",
    buttonStyle: "white",
    highlight: true,
    features: [
      "66 landing page sections",
      "126 components",
      "16 illustrations",
      "15 custom animations",
    ],
    allAccess: false,
  },
  {
    name: "Team",
    icon: "/icons/user.svg",
    subtitle: "For teams and agencies working on cool products together",
    price: "0",
    priceNote: "one-time payment",
    priceNote2: "plus local taxes",
    button: "Get all-access",
    buttonStyle: "default",
    highlight: false,
    features: ["All templates available for your team"],
    allAccess: true,
  },
];

export default function PricingSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-20 md:py-32 bg-background text-foreground"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-5xl font-semibold mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Choose the plan that fits your needs. No hidden fees.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row md:mt-24 gap-8 md:gap-10 justify-center items-stretch max-w-4xl md:max-w-8xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={
              `flex-1 rounded-2xl p-8 flex flex-col relative overflow-hidden ` +
              `${plan.highlight ? "border-0 bg-gradient-to-b from-amber-100/10 to-zinc-900/10 shadow-xl" : ""} ` +
              `transition-all ${plan.name === "Free" ? "hidden lg:flex" : ""} min-w-[260px] max-w-full md:max-w-[370px] lg:max-w-[400px]`
            }
          >
            {plan.highlight ? (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-gradient-to-b from-brand/30 to-transparent rounded-full blur-2xl z-0" />
            ) : (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[120%] h-24 bg-white/10 rounded-full blur-2xl z-0" />
            )}
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex flex-col items-start min-h-[80px] mb-4">
                <div className="flex items-center gap-2 mb-2 text-zinc-300">
                  {plan.icon && (
                    <img
                      src={plan.icon}
                      alt={idx + " logo"}
                      className="w-6 h-6"
                    />
                  )}
                  <span className="text-lg font-semibold text-white">
                    {plan.name}
                  </span>
                </div>
                <div className="text-sm text-zinc-400 whitespace-pre-line">
                  {plan.subtitle}
                </div>
              </div>
              <div className="flex flex-col min-h-[120px] mb-4">
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-5xl font-extrabold text-white">
                    <span className="text-sm text-muted">$ </span>
                    {plan.price}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-base text-white ">
                      {plan.priceNote}
                    </span>
                    <span className="text-base text-zinc-400 bm-1">
                      {plan.priceNote2}
                    </span>
                  </div>
                </div>
                <Button
                  variant={plan.buttonStyle === "white" ? "white" : "default"}
                >
                  {plan.button}
                </Button>
                <div className="text-xs text-zinc-400">
                  Free and open-source forever
                </div>
              </div>
              <div className="border-b border-zinc-700 mb-4" />
              <ul className="space-y-3 text-sm text-white/90 flex-1">
                {plan.features.map((f, i) => (
                  <li
                    key={f}
                    className="flex items-start gap-2"
                  >
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 18 18"
                      className="mt-0.5"
                    >
                      <circle
                        cx="9"
                        cy="9"
                        r="9"
                        fill="#fff"
                        fillOpacity="0.08"
                      />
                      <path
                        d="M5.5 9.5l2 2 5-5"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
