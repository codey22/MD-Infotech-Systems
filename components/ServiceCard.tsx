"use client";
import { ReactNode } from "react";

export default function ServiceCard({
  title,
  description,
  active = false,
  comingSoon = false,
  icon,
}: {
  title: string;
  description: string;
  active?: boolean;
  comingSoon?: boolean;
  icon?: ReactNode;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-6 transition tilt-3d ${
        active
          ? "bg-white shadow-xl border-gray-200 dark:bg-white/10 dark:border-white/20 dark:backdrop-blur-xl dark:shadow-xl-glow"
          : "bg-gray-50 border-gray-200 dark:bg-black/20 dark:border-white/10 dark:backdrop-blur-xl"
      }`}
    >
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className={`absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl ${active ? "bg-brand-500/25 dark:bg-brand-500/35" : "bg-gray-300/40 dark:bg-gray-500/25"}`} />
        <div className={`absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl ${active ? "bg-orange-500/25 dark:bg-orange-500/35" : "bg-gray-300/40 dark:bg-gray-500/25"}`} />
      </div>
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-gray-900 dark:bg-white/10 dark:text-white">
          {icon}
        </div>
        <div>
          <h3 className={`text-lg font-semibold ${active ? "text-gray-900 dark:text-white" : "text-gray-800 dark:text-white/80"}`}>{title}</h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-white/70">{description}</p>
        </div>
      </div>
      {comingSoon && (
        <div className="pointer-events-none absolute inset-0 flex items-end justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="m-4 rounded-full border border-gray-300 dark:border-white/25 bg-black/10 dark:bg-black/40 px-4 py-1 text-xs font-medium text-gray-800 dark:text-white/90">
            Coming Soon
          </span>
        </div>
      )}
    </div>
  );
}
