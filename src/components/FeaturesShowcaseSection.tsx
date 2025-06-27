'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    key: "sections",
    title: "Choose your sections",
    desc: "Choose among 100+ components to build a landing page suited to the needs of your product.",
    icon: "/icons/blocks.svg",
    image: "/hero.png", // замени на свой путь
  },
  {
    key: "content",
    title: "Add your content",
    desc: "Fill the blanks with screenshots, videos, and other content featuring your product.",
    icon: "/icons/square-pen-thin.svg",
    image: "/hero.png",
  },
  {
    key: "customize",
    title: "Customize",
    desc: "Make design yours in no time by changing the variables that control colors, typography, and other styles.",
    icon: "/icons/palette.svg",
    image: "/hero.png",
  },
];

export default function FeaturesShowcaseSection() {
  const [active, setActive] = useState("sections");
  const current = features.find(f => f.key === active) || features[0];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-auto mt-32 container self-center  bg-background text-foreground"
    >
      <motion.div
        className="flex flex-col text-center items-center gap-4 px-4 sm:gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          Make the right impression
        </h2>
        <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
          Launch UI makes it easy to build an unforgetable website that resonates with professional design-centric audiences.
        </p>
      </motion.div>
      <div className="w-full h-full lg:mt-32 mt-12 flex flex-col lg:flex-row items-start justify-center md:gap-12 gap-8 px-4 md:px-8">
        <motion.div
          className="flex flex-col gap-4 lg:gap-6 w-full  lg:max-w-none  md:justify-start md:items-start md:self-start"
          style={{ minHeight: 240 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {features.map((f, i) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`flex items-start gap-3 px-6 py-5  rounded-2xl  transition-all text-left w-full
                ${active === f.key ? "bg-gradient-to-t from-white/5 to-white/10" : ""}`}
            >
              <img
                src={f.icon}
                alt={f.key + " logo"}
                className="w-6 h-6"
              />
              <span className="flex flex-col">
                <span className={`font-semibold text-white text-base mb-1 ${active === f.key ? "" : "opacity-80"}`}>{f.title}</span>
                <span className="text-sm text-gray-400 leading-snug">{f.desc}</span>
              </span>
            </button>
          ))}
        </motion.div>
        <motion.div
          className="relative h-full flex flex-col items-center justify-center w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative z-10 w-full h-full min-h-[40vw] md:min-h-[380px] rounded-2xl flex items-end justify-center overflow-hidden">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/4 w-[50%] h-[110%] rounded-2xl bg-brand opacity-40 blur-3xl z-0 pointer-events-none" />
            <img
              src={current.image}
              alt={current.title}
              className="w-[95%] mt-12  rounded-t-2xl object-cover border border-white/10 relative z-10"
              style={{objectPosition: 'bottom'}}
            />
            <div className="absolute inset-0 rounded-2xl bg-white/5 z-0" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
} 