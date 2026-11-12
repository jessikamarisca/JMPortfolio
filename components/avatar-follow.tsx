"use client";

import { useEffect, useRef, useState } from "react";

// One image per gaze direction; the cursor picks the closest. "blink" fires on a random timer.
const POSES = ["center", "left", "right", "up", "down", "up-left", "up-right", "down-left", "down-right", "blink"] as const;
type Pose = (typeof POSES)[number];

function poseFor(x: number, y: number): Pose {
  const T = 0.25;
  const h = x < -T ? "left" : x > T ? "right" : "";
  const v = y < -T ? "up" : y > T ? "down" : "";
  return ([v, h].filter(Boolean).join("-") || "center") as Pose;
}

export function AvatarFollow({ size = "clamp(180px, 22vw, 300px)" }: { size?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [pose, setPose] = useState<Pose>("center");

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let blinking = false;
    let raf = 0;
    let blinkTimer = 0;
    let pointer: { x: number; y: number } | null = null;

    function onMove(e: PointerEvent) {
      pointer = { x: e.clientX, y: e.clientY };
    }

    function tick() {
      // Measured every frame, not on pointermove: scrolling moves the face without moving the cursor
      if (pointer) {
        const r = el!.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height * 0.42;
        target.x = Math.max(-1, Math.min(1, (pointer.x - cx) / (innerWidth / 2)));
        target.y = Math.max(-1, Math.min(1, (pointer.y - cy) / (innerHeight / 2)));
      }
      pos.x += (target.x - pos.x) * 0.08;
      pos.y += (target.y - pos.y) * 0.08;
      if (!reduce) el!.style.transform = `rotateY(${pos.x * 12}deg) rotateX(${-pos.y * 8}deg)`;
      if (!blinking) setPose(poseFor(target.x, target.y));
      raf = requestAnimationFrame(tick);
    }

    function scheduleBlink() {
      blinkTimer = window.setTimeout(() => {
        if (!reduce) {
          blinking = true;
          setPose("blink");
          window.setTimeout(() => { blinking = false; }, 140);
        }
        scheduleBlink();
      }, 2500 + Math.random() * 3000);
    }

    addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    scheduleBlink();
    return () => {
      removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
      clearTimeout(blinkTimer);
    };
  }, []);

  return (
    <div aria-hidden="true" style={{ width: size, aspectRatio: "1", perspective: 900, flex: "0 0 auto" }}>
      <div ref={box} style={{ position: "relative", width: "100%", height: "100%", willChange: "transform" }}>
        {POSES.map((p) => (
          // All poses stay mounted and decoded; switching visibility is instant, so no frame shows the background.
          // eslint-disable-next-line @next/next/no-img-element
          <img key={p} src={`/images/home/avatar/${p}.webp`} alt="" draggable={false}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", visibility: p === pose ? "visible" : "hidden" }} />
        ))}
      </div>
    </div>
  );
}
