"use client";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="relative w-full px-4 md:px-8 py-24 surface-gloss section-dark-gloss section-shimmer">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Active offerings first; future capabilities below.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ServiceCard
          active
          title="Frontend Web Development"
          description="High-performance React/Next UIs with accessibility, animations, and DX."
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4h18v2H3zm2 4h14v12H5zm2 2v8h10v-8z"/></svg>}
        />
        <ServiceCard
          active
          title="Backend Web Development"
          description="Scalable APIs, databases, and observability with security best practices."
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 4-9 4-9-4 9-4zm0 10l9 4-9 4-9-4 9-4z"/></svg>}
        />
        <ServiceCard
          active
          title="Internship Programmes"
          description="Mentored tracks in modern web, backend, and DevOps with projects."
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7l9 5-9 5-9-5 9-5zm0 9v4l-6-3v-4l6 3z"/></svg>}
        />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <ServiceCard
          comingSoon
          title="App Development"
          description="Native and cross-platform apps with robust architecture."
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>}
        />
        <ServiceCard
          comingSoon
          title="Cloud Computing"
          description="Multi-cloud deployments, IaC, and cost-optimized infrastructure."
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h11a4 4 0 0 0 0-8h-1a5 5 0 0 0-9.7-1.6A4 4 0 0 0 6 19z"/></svg>}
        />
        <ServiceCard
          comingSoon
          title="Digital Marketing"
          description="Data-driven campaigns, SEO/SEM, and content strategy."
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4h18v4H3zm2 6h6v10H5zm8 0h8v10h-8z"/></svg>}
        />
      </div>
    </section>
  );
}
