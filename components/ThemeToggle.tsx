"use client";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/5 text-sm backdrop-blur-md transition md:hover:scale-105 md:hover:shadow-xl-glow"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500/20 via-transparent to-orange-500/20 blur-md" />
      <svg
        className="relative h-5 w-5 text-gray-800 dark:text-gray-200 transition-transform group-hover:rotate-12"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isDark ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 3v2m0 14v2m7-9h2M3 12H1m15.364 6.364 1.414 1.414M6.222 6.222 4.808 4.808m12.728 0 1.414 1.414M6.222 17.778l-1.414 1.414"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21.752 15.002A9.718 9.718 0 0112 21.75 9.75 9.75 0 1112 2.25c.34 0 .675.02 1.004.058A7.5 7.5 0 0021.752 15.002z"
          />
        )}
      </svg>
    </button>
  );
}
