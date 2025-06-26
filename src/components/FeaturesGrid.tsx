"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturesGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full container mx-auto px-4 md:px-8 mt-40"
    >
      <motion.h2
        className="text-4xl md:text-5xl text-center font-bold text-white mb-12 "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Build a better website, faster.
      </motion.h2>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 w-full justify-between">
          <motion.div
            className="lg:w-[calc(45%-8px)] md:w-[calc(50%-8px)] w-full flex flex-col bg-white/5 pt-8 rounded-xl relative overflow-hidden h-[500px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-0 w-full h-full bg-gradient-to-t from-brand to-transparent opacity-10 blur-2xl pointer-events-none"/>
            <div className="flex flex-col z-10 max-w-[460px]">
              <p className="font-bold text-xl px-8">
                100+ sections and components
              </p>
              <p className="text-sm text-muted px-8 pt-2">
                All the elements you need t build a modern, responsive, and
                accessible landing page.
              </p>
            </div>
            <Image
              src="/globe.png"
              alt="Globe"
              width={512}
              height={336}
              className="absolute bottom-0 left-0 w-full z-0 "
            />
          </motion.div>

          <motion.div
            className="lg:w-[calc(55%-8px)] md:w-[calc(50%-8px)] w-full flex flex-col bg-white/5 pt-8 rounded-xl relative overflow-hidden h-[500px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-0 w-full h-full bg-gradient-to-t from-brand to-transparent opacity-10 blur-2xl pointer-events-none"/>
            <div className="flex flex-col z-10 max-w-[460px]">
              <p className="font-bold text-xl px-8">You&apos;re in control</p>
              <p className="text-sm text-muted px-8 pt-2">
                This is not a component library. It&apos;s a collection of re-usable
                components that you can copy and paste into your apps.
              </p>
            </div>
            <Image
              src="/glowing.png"
              alt="glowing icon"
              width={200}
              height={336}
              className="absolute bottom-0 w-86 self-center z-0 "
            />
          </motion.div>
        </div>
        <div className="flex w-full md:flex-row gap-4 md:gap-0 flex-col justify-between mt-4">
          <motion.div
            className="lg:w-[calc(55%-8px)] md:w-[calc(50%-8px)] w-full flex flex-col bg-white/5 pt-8 rounded-xl relative overflow-hidden h-[500px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-0 w-full h-full bg-gradient-to-t from-brand to-transparent opacity-10 blur-2xl pointer-events-none"/>
            <div className="flex flex-col z-10 max-w-[460px]">
              <p className="font-bold text-xl px-8">
                Fits right into your stack
              </p>
              <p className="text-sm text-muted px-8 pt-2">
                Built with modern web technologies and tools that fit right into any React project.<br/>
                No bloat, no extra dependencies, no risk of conflicts.
              </p>
            </div>
            <Image
              src="/feuturesglow.png"
              alt="Globe"
              width={512}
              height={336}
              className="absolute lg:bottom-0 bottom-10 left-0 w-full z-0 "
            />
          </motion.div>
          <motion.div
            className="lg:w-[calc(45%-8px)] md:w-[calc(50%-8px)] w-full flex flex-col bg-white/5 pt-8 rounded-xl relative overflow-hidden h-[500px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-0 w-full h-full bg-gradient-to-t from-brand to-transparent opacity-10 blur-2xl pointer-events-none"/>
            <div className="flex flex-col z-10 max-w-[460px]">
              <p className="font-bold text-xl px-8">
                Data-agnostic
              </p>
              <p className="text-sm text-muted px-8 pt-2">
                All the data is separate from components so you can edit it in seconds or make it dynamic.<br/>
                Easily connect to a CMS of your choice.
              </p>
            </div>
            <Image
              src="/messages.png"
              alt="Globe"
              width={512}
              height={336}
              className="absolute bottom-10 self-center w-[85%] z-0 "
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
