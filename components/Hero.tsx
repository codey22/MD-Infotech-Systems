"use client";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/*  Background Video */}
      <HeroVideo />

      {/*  Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/25 dark:bg-black/50" />

      {/*  HUD / Effects */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-gradient-to-tr from-brand-500/20 to-brand-500/35 blur-3xl animate-pulse-soft" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-gradient-to-tr from-brand-500/15 to-brand-500/30 blur-3xl animate-slow-spin" />
      </div>

      {/*  Main Content */}
      <div className="relative z-30 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center">
        <div className="relative mb-6 flex flex-col items-center gap-4">
          <div className="relative h-28 w-28 md:h-32 md:w-32">
            
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            MD Infotech Systems
          </h1>
        </div>

        <p className="max-w-2xl text-white/90 md:text-lg">
          Premium engineering for modern web, backend, and AI experiences.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="#services"
            className="animated-border relative rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-xl"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="relative rounded-full border border-white/30 px-6 py-3 text-white/90 hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>

        <div className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-500/20 to-brand-500/30 blur-3xl" />
      </div>
    </section>
  );
}
