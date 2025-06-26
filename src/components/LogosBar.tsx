"use client";
import { motion } from "framer-motion";

const tools = [
  {
    text: "Figma",
    icon: "/icons/figma.svg",
  },
  {
    text: "React.js",
    icon: "/icons/react.svg",
    version: "18.3.1",
  },
  {
    text: "Typescript",
    icon: "/icons/typescript.svg",
    version: "5.6.2",
  },
  {
    text: "Shadcn",
    icon: "/icons/shadcn.svg",
    version: "2.0.7",
  },
  {
    text: "Tailwind CSS",
    icon: "/icons/tailwind.svg",
    version: "3.4.11",
  },
];

export default function LogosBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center mt-24 gap-12 container self-center"
    >
      <span className="font-bold text-xl">Built with the best tools</span>
      <div className="flex flex-wrap justify-center items-center gap-4 w-full">
        {tools.map((tool, idx) => (
          <motion.div
            key={idx}
            className="flex  items-center gap-3 px-4 py-2 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
          >
            <img
              src={tool.icon}
              alt={tool.text + " logo"}
              className="w-6 h-6"
            />
            <p>{tool.text}</p>
            <p className="text-gray-400">{tool?.version}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
