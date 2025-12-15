"use client";
import { useEffect, useRef } from "react";

const PLAYLIST = [
  "/12575398_3840_2160_30fps.mp4",
  "/3129576-uhd_3840_2160_30fps.mp4",
  "/3129671-uhd_3840_2160_30fps.mp4",
  "/3129977-uhd_3840_2160_30fps.mp4",
  "/3141208-uhd_3840_2160_25fps.mp4",
];

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const playIndex = (i: number) => {
      indexRef.current = i % PLAYLIST.length;
      video.src = PLAYLIST[indexRef.current];
      video.load();
      video.play().catch(() => {});
    };

    const handleEnded = () => {
      playIndex(indexRef.current + 1);
    };

    const handleError = () => {
      playIndex(indexRef.current + 1);
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("error", handleError);
    video.addEventListener("stalled", handleError);
    video.addEventListener("abort", handleError);

    playIndex(0);

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("error", handleError);
      video.removeEventListener("stalled", handleError);
      video.removeEventListener("abort", handleError);
    };
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden
      className="absolute inset-0 h-full w-full object-cover z-0"
    />
  );
}
