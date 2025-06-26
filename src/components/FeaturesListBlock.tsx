"use client";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/icons/scan-face.svg",
    title: "Accessibility first",
    desc: "Fully WCAG 2.0 compliant, made with best a11y practices",
  },
  {
    icon: "/icons/monitor-smartphone.svg",
    title: "Responsive design",
    desc: "Looks and works great on any device and screen size",
  },
  {
    icon: "/icons/eclipse.svg",
    title: "Light and dark mode",
    desc: "Seamless switching between color schemes, 6 themes included",
  },
  {
    icon: "/icons/blocks.svg",
    title: "Easy to customize",
    desc: "Flexible options to match your product or brand",
  },
  {
    icon: "/icons/fast-forward.svg",
    title: "Top-level performance",
    desc: "Made for lightning-fast load times and smooth interactions",
  },
  {
    icon: "/icons/rocket.svg",
    title: "Production ready",
    desc: "Thoroughly tested and launch-prepared",
  },
  {
    icon: "/icons/languages.svg",
    title: "Made for localisation",
    desc: "Easy to implement support for multiple languages and regions",
  },
  {
    icon: "/icons/square-pen.svg",
    title: "CMS friendly",
    desc: "Built to work with your any headless content management system",
  },
];

export default function FeaturesListBlock() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full mx-auto container self-center px-4 md:px-8 mt-32"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-24 text-center leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Everything you need.<br />
        Nothing you don&apos;t.
      </motion.h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-start gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
          >
            <div className="flex gap-2 items-center">
              <img
                src={f.icon}
                alt={i + " logo"}
                className="w-6 h-6"
              />
              <span className="font-semibold text-white">{f.title}</span>
            </div>
            <span className="text-gray-400 text-sm">{f.desc}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 