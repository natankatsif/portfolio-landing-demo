"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SeparatorSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col items-center justify-center gap-10 mt-48 px-4 md:px-0 relative"
    >
      <motion.div
        className="flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-center text-5xl md:text-7xl font-bold bg-gradient-to-br from-white via-gray-300 to-gray-400 bg-clip-text text-transparent leading-tight max-w-4xl">
          Quality you can trust.
          <br />
          And build on.
        </h1>
        <p className="text-center text-lg md:text-2xl text-gray-300 max-w-2xl mt-4">
          Landing page kit template with React, Shadcn/ui and Tailwind that you
          can copy/paste into your project.
        </p>
      </motion.div>
      <motion.div
        className="relative flex flex-col items-center mt-12 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-4/6 z-0 w-[75vw] h-[40vw] rounded-full bg-brand/40 opacity-40 blur-3xl"></div>
        <div className="relative w-full flex justify-center items-center">
          <img
            src="/mars.png"
            alt="Hero"
            className="lg:w-[80vw] w-[100vw] h-auto rounded-2xl object-cover z-10 shadow-xl"
          />
          <div className="absolute left-0 bottom-0 w-full h-full z-20 pointer-events-none rounded-2xl bg-gradient-to-t from-[#09090B] to-transparent"></div>
        </div>
      </motion.div>
    </motion.section>
  );
}
