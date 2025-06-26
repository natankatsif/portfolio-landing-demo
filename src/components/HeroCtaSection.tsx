"use client"
import { motion } from "framer-motion";
import Button from "./Button";

export default function HeroCtaSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col items-center justify-center my-48 relative"
    >
      <motion.h1
        className="text-3xl sm:text-5xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Start building
      </motion.h1>
      <motion.div
        className="flex gap-4 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        <Button variant="white">Get started</Button>
        <a
          href="https://github.com/natankatsif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            Github
          </Button>
        </a>
      </motion.div>
      {/* Glow-эффект */}
      <div className="absolute -bottom-[390px] w-[800px] h-[350px] bg-gradient-to-t from-brand to-transparent rounded-full blur-3xl z-0 pointer-events-none" />
    </motion.section>
  );
} 