import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 mt-12 px-4 md:px-0 relative">
      <div className="flex flex-col items-center z-10">
        <div className="appear inline-flex items-center px-4 py-1 border border-white/20 rounded-full text-xs font-semibold bg-white/5 text-white/80 mb-4">
          <span>New version of Launch UI is out!</span>
          <span className="ml-2 font-bold cursor-pointer text-white flex gap-1">
            Read more
            <ArrowRight size={16} className="text-white" />
          </span>
        </div>
        <h1 className="appear opacity-0 delay-100  text-center text-4xl md:text-7xl lg-8xl font-bold bg-gradient-to-br from-white via-gray-300 to-gray-400 bg-clip-text text-transparent leading-tight max-w-4xl">
          Give your big idea the website it deserves
        </h1>
        <p className="appear opacity-0 delay-300 text-center text-base md:text-xl text-muted max-w-2xl mt-4">
          Landing page kit template with React, Shadcn/ui and Tailwind that you
          can copy/paste into your project.
        </p>
        <div className="appear opacity-0 delay-500 flex gap-4 mt-8 justify-center">
          <Button variant="white">Get started</Button>
          <a
            href="https://github.com/natankatsif"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Github</Button>
          </a>
        </div>
      </div>
      <div className="relative flex flex-col items-center mt-12 w-full">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-4/6 z-0 w-[75vw] h-[40vw] rounded-full bg-brand opacity-40 blur-3xl"></div>{" "}
        <div className="relative w-full flex justify-center items-center">
          <Image
            src="/hero.png"
            alt="Hero"
            width={1248}
            height={700}
            className="appear opacity-0 delay-700 w-[80vw] h-auto rounded-2xl object-cover z-10 shadow-xl"
            priority
          />
          <div className="absolute left-0 bottom-0 w-full h-full z-20 pointer-events-none rounded-2xl bg-gradient-to-t from-[#09090B] to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
