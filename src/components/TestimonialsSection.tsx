"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    author: {
      name: "Fabrizio Fernandez",
      username: "@fabrizio34",
      avatar: "/man.png",
    },
    text: `Testing out <span class="text-primary">@launchui&apos;s</span> responsive design. That&apos;s the template we&apos;ve all been waiting for. My mobile-first heart is doing a happy dance.`,
  },
  {
    author: {
      name: "Felix Beaumont",
      username: "@felixbeau",
      avatar: "/man.png",
    },
    text: `Digging into <span class="text-primary">@launchui</span>. Those shadows are giving me serious design envy.`,
  },
  {
    author: {
      name: "Esme Rothschild",
      username: "@esmerothArt",
      avatar: "/man.png",
    },
    text: `UI is slick. That globe graphic though. Makes me feel like I&apos;m building websites for the world with <span class="text-primary">@launchui</span>!`,
  },
  {
    author: {
      name: "Darius Flynn",
      username: "@flynnn",
      avatar: "/man.png",
    },
    text: `Exploring <span class="text-primary">@launchui&apos;s</span> sleek UI. It&apos;s like a dark mode enthusiast&apos;s playground.`,
  },
  {
    author: {
      name: "Kai Nakamura",
      username: "@NakaWaves",
      avatar: "/man.png",
    },
    text: `Just made my first website with <span class="text-primary">@launchui</span>. Flexibility is speaking my language. No drama, just seamless integration.`,
  },
];

export default function TestimonialsSection() {
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-background container self-center text-foreground mt-32 sm:mt-24 md:mt-8 "
    >
      <div className="mx-auto flex  flex-col items-center gap-4 sm:gap-16">
        <motion.div
          className="flex flex-col items-center gap-4 px-4 sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Loved by designers and<br className="hidden md:block" /> developers across the planet
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            Here&apos;s what people are saying about Launch UI
          </p>
        </motion.div>
        <div className=" flex flex-col items-center justify-center sm:hidden mt-8">
          <div className="grid grid-cols-1 gap-4 w-full ">
            {testimonials.slice(0, 3).map((testimonial, i) => (
              <TestimonialCard
                key={i}
                author={testimonial.author}
                text={testimonial.text}
                index={i}
              />
            ))}
          </div>
        </div>
        <div className="relative w-full flex-col gap-8 items-center justify-center overflow-visible mt-8 hidden sm:flex">
          <div className="relative w-full flex items-center justify-center overflow-hidden">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] min-w-full">
                {loopedTestimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`row1-${i}`}
                    author={testimonial.author}
                    text={testimonial.text}
                    index={i}
                  />
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background via-background/80 to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background via-background/80 to-transparent z-20" />
          </div>
          <div className="relative w-full flex items-center justify-center overflow-hidden">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row group-hover:[animation-play-state:paused] min-w-full translate-x-32 md:translate-x-48">
                {loopedTestimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`row2-${i}`}
                    author={testimonial.author}
                    text={testimonial.text}
                    index={i}
                  />
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background via-background/80 to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background via-background/80 to-transparent z-20" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

type TestimonialAuthor = {
  name: string;
  username: string;
  avatar: string;
};

type TestimonialCardProps = {
  author: TestimonialAuthor;
  text: string;
  index?: number;
};

function TestimonialCard({ author, text, index }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col gap-3 min-w-[260px] max-w-[350px] backdrop-blur-md mx-2"
      style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.18)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index || 0) * 0.07, ease: "easeOut" }}
    >
      <div className="flex gap-3">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-10 h-10 rounded-full object-cover border border-white/20"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-white text-sm">{author.name}</span>
          <span className="text-xs text-gray-400">{author.username}</span>
        </div>
      </div>
      <p className="text-gray-200 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />
    </motion.div>
  );
} 