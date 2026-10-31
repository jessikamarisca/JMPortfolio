"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/** Plays a muted loop while it's on screen; with reduced motion it waits for the viewer. */
function useAutoplay() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = ref.current;
    if (!video) return;
    // Reduced motion: no autoplay, let people play it themselves
    if (mq.matches) {
      video.controls = true;
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return ref;
}

export function PhoneVideo({ src, poster, label, lift }: { src: string; poster: string; label: string; lift?: boolean }) {
  const ref = useAutoplay();
  return (
    <div className={`phone${lift ? " lift" : ""}`}>
      <div className="scr" style={{ background: "#1c1c1e" }}>
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={label}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    </div>
  );
}

export function InlineVideo({ src, poster, label, width, height, style }: { src: string; poster: string; label: string; width: number; height: number; style?: CSSProperties }) {
  const ref = useAutoplay();
  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      style={{ width: "100%", height: "auto", display: "block", ...style }}
    />
  );
}
