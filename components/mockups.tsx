import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

type Img = { src: string; alt: string; width: number; height: number };

export type Annotation = {
  label: string;
  box: { left: string; top: string; width: string; height: string };
  tag?: CSSProperties;
};

function Annotations({ items }: { items?: Annotation[] }) {
  if (!items) return null;
  return (
    <>
      {items.map((a) => (
        <span key={a.label} className="ann" style={a.box} aria-hidden="true">
          <span className="tag" style={a.tag ?? { left: 0, top: -30 }}>{a.label}</span>
        </span>
      ))}
    </>
  );
}

export function Phone({ img, lift, annotations, objectPosition, sizes = "240px", priority }: {
  img: Img;
  lift?: boolean;
  annotations?: Annotation[];
  objectPosition?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`phone${lift ? " lift" : ""}`}>
      <div className="scr">
        <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes={sizes} priority={priority} style={objectPosition ? { objectPosition } : undefined} />
      </div>
      <span className="island" aria-hidden="true" />
      <Annotations items={annotations} />
    </div>
  );
}

export function Browser({ img, old, annotations, sizes = "(max-width: 900px) 100vw, 900px", priority, style }: {
  img: Img;
  old?: boolean;
  annotations?: Annotation[];
  sizes?: string;
  priority?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div className={`browser${old ? " old" : ""}`} style={style}>
      <div className="bar" aria-hidden="true"><i /><i /><i /></div>
      <div className="view">
        <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes={sizes} priority={priority} />
        <Annotations items={annotations} />
      </div>
    </div>
  );
}

export function Labeled({ label, children, note }: { label: string; children: ReactNode; note?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
      <span style={{ fontSize: 14, fontWeight: 800 }}>{label}</span>
      {children}
      {note && <span style={{ maxWidth: 260, textAlign: "center", fontSize: 13, lineHeight: 1.4 }}>{note}</span>}
    </div>
  );
}
