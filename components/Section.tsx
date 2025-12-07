import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  background?: "white" | "muted";
  children: ReactNode;
}

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  background = "white",
  children
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-10 sm:py-16 ${
        background === "muted" ? "bg-emerald-50/40" : "bg-transparent"
      }`}
    >
      <div className="main-container">
        <div className="max-w-3xl">
          {eyebrow && <p className="section-heading">{eyebrow}</p>}
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
