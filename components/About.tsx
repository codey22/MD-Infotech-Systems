"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full px-4 md:px-8 py-24 surface-gloss section-dark-gloss section-shimmer">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Us</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Crafting premium digital experiences with engineering precision.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We craft high-impact products with modern stacks, scalable cloud, and strong
            fundamentals. Our approach blends performance, security, and artistry.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            From elegant frontends to resilient backends, our teams deliver quality
            with rigorous reviews, automation, and measurable outcomes.
          </p>
        </div>
        <div className="relative tilt-3d rounded-2xl border border-white/10 glass p-2">
          <Image
            src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=3840&auto=format&fit=crop"
            alt="AI and code visuals"
            width={3840}
            height={2160}
            className="rounded-xl object-cover shadow-xl"
            priority
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/15" />
        </div>
      </div>
    </section>
  );
}
