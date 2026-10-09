import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

export const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * CG Brothers Exports — Professional wordmark with abstract leaf/globe mark.
 */
export function Logo({ light }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      {/* Abstract agricultural brand mark: leaf + globe arc */}
      <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" aria-hidden>
        {/* Globe arc representing international trade */}
        <circle cx="18" cy="18" r="14" className="fill-none stroke-gold" strokeWidth="1.5" opacity="0.6" />
        {/* Leaf shape representing agriculture */}
        <path
          d="M18 8 C24 10 28 15 26 22 C22 28 14 28 11 22 C8 16 12 8 18 8Z"
          className="fill-gold"
          opacity="0.85"
        />
        {/* Stem */}
        <path d="M18 28 L18 33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={light ? "stroke-ivory" : "stroke-forest"} opacity="0.6" />
        {/* Vein */}
        <path d="M18 14 C20 18 19 22 17 26" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" fill="none" />
      </svg>
      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-xl font-semibold tracking-tight", light ? "text-ivory" : "text-deep")}>
          CG Brothers
        </span>
        <span className={cn("text-[0.6rem] font-sans font-medium tracking-[0.18em] uppercase", light ? "text-ivory/60" : "text-muted-foreground")}>
          Exports Pvt Ltd
        </span>
      </span>
    </span>
  );
}

type BtnProps = {
  children: ReactNode;
  message?: string;
  variant?: "gold" | "outline" | "forest" | "ghostLight";
  className?: string;
  href?: string;
};

export function CTAButton({ children, message, variant = "gold", className, href }: BtnProps) {
  const external = !href || href.startsWith("http");
  const styles = {
    gold: "bg-gradient-gold text-deep shadow-glow hover:brightness-105",
    forest: "bg-forest text-ivory hover:bg-deep",
    outline: "border border-forest/25 text-forest hover:bg-forest hover:text-ivory",
    ghostLight: "border border-ivory/40 text-ivory hover:bg-ivory hover:text-deep",
  }[variant];
  return (
    <motion.a
      whileTap={{ scale: 0.97 }}
      href={href ?? whatsappLink(message)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200",
        styles,
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </motion.a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
  light,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={cn("mt-4 text-4xl leading-[1.05] font-medium md:text-6xl", light ? "text-ivory" : "text-deep")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-5 text-base md:text-lg", light ? "text-ivory/70" : "text-muted-foreground")}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
