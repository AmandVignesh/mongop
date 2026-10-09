import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { TrustStrip, Varieties } from "@/sections/Varieties";
import { Process, Season, Story, WhyUs } from "@/sections/Story";
import { FinalCTA, Gallery, Products, Testimonials } from "@/sections/Showcase";
import { Contact, Footer } from "@/sections/Contact";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "CG Brothers Exports Private Limited | Agricultural Products from India",
      },
      {
        name: "description",
        content:
          "CG Brothers Exports Private Limited — Premium Indian agricultural products including fruits, vegetables, spices, tamarind, rice, grains, pulses, seeds and processed products. B2B export enquiries welcome.",
      },
      {
        property: "og:title",
        content:
          "CG Brothers Exports Private Limited | From Indian Farms to Global Markets",
      },
      {
        property: "og:description",
        content:
          "Agricultural products sourced from India for international buyers. Request a quote for fruits, vegetables, spices, tamarind, grains, pulses and more.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Story />
      <Varieties />
      <WhyUs />
      <Season />
      <Process />
      <Products />
      <Testimonials />
      <Gallery />
      <Contact />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
