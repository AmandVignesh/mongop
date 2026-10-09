import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Globe } from "lucide-react";
import { IMAGES } from "@/data/content";
import { CTAButton, ease } from "@/components/primitives";

const headline = ["From Indian Farms", "To Global Markets"];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      id="home"
      ref={ref}
      className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-deep pb-20 md:items-center md:pb-0"
    >
      {/* Parallax background image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.img
          src={IMAGES.hero}
          alt="Premium Indian agricultural products — mangoes, spices, rice and tamarind ready for international export"
          width={1600}
          height={900}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease }}
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-deep/90 to-transparent md:hidden" />

      {/* Subtle animated globe — professional, not playful */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-[10%] hidden text-gold/20 lg:block"
      >
        <Globe className="h-20 w-20" />
      </motion.div>

      {/* Hero content */}
      <motion.div style={{ y: textY }} className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Eyebrow label */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-deep/30 px-4 py-2 text-[0.65rem] font-semibold tracking-[0.25em] text-gold uppercase backdrop-blur"
        >
          INDIAN AGRICULTURE · GLOBAL TRADE
        </motion.span>

        {/* Main headline */}
        <h1 className="mt-6 text-[3rem] leading-[0.95] font-medium text-ivory sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">
          {headline.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-2">
              <motion.span
                className={i === 1 ? "block italic text-gold" : "block"}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6 + i * 0.18, duration: 1.1, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Supporting headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.9, ease }}
          className="mt-4 text-base font-medium text-gold/80 tracking-wide md:text-lg"
        >
          Premium Agricultural Products from India
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease }}
          className="mt-4 max-w-xl text-sm text-ivory/75 md:text-base leading-relaxed"
        >
          CG Brothers Exports Private Limited connects Indian agricultural sourcing with international buyers through
          quality-focused product selection, buyer-specific packaging, export documentation coordination, and shipment
          planning.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.9, ease }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <CTAButton href="#contact">Request a Quote</CTAButton>
          <CTAButton variant="ghostLight" href="#products">
            Explore Products
          </CTAButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
