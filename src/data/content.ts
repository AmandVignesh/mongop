import heroAgri from "@/assets/hero-agri.jpg";
import catFruits from "@/assets/cat-fruits.jpg";
import catVegetables from "@/assets/cat-vegetables.jpg";
import catSpices from "@/assets/cat-spices.jpg";
import catTamarind from "@/assets/cat-tamarind.jpg";
import catRice from "@/assets/cat-rice.jpg";
import catPulses from "@/assets/cat-pulses.jpg";
import catSeeds from "@/assets/cat-seeds.jpg";
import catProcessed from "@/assets/cat-processed.jpg";
// Legacy images reused for gallery
import orchard from "@/assets/orchard.jpg";
import harvest from "@/assets/harvest.jpg";
import crates from "@/assets/crates.jpg";
import basket from "@/assets/basket.jpg";

export const IMAGES = {
  hero: heroAgri,
  about: orchard,
  harvest,
  crates,
  basket,
};

// ─── Agricultural Product Categories ───────────────────────────────────────
// Edit, add or remove categories from this central data file.
export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  items: string[];
  image: string;
  enquiryLabel: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "fresh-fruits",
    name: "Fresh Fruits",
    description:
      "Premium Indian mangoes, seasonal fruits, and buyer-specific fruit requirements sourced from across India.",
    items: ["Mangoes (Alphonso, Kesar, Banganapalli)", "Seasonal tropical fruits", "Buyer-specific fruit requirements"],
    image: catFruits,
    enquiryLabel: "Fresh Fruits",
  },
  {
    id: "fresh-vegetables",
    name: "Fresh Vegetables",
    description:
      "Fresh Indian vegetables and seasonal produce prepared to buyer specifications for international shipment.",
    items: ["Fresh vegetables", "Seasonal produce", "Buyer-specified varieties"],
    image: catVegetables,
    enquiryLabel: "Fresh Vegetables",
  },
  {
    id: "indian-spices",
    name: "Indian Spices",
    description:
      "Quality Indian spices including chilli, turmeric, coriander and other available varieties for bulk export.",
    items: ["Red Chilli", "Turmeric", "Coriander", "Other available spices"],
    image: catSpices,
    enquiryLabel: "Indian Spices",
  },
  {
    id: "tamarind",
    name: "Tamarind & Products",
    description:
      "Whole tamarind, seeds, pulp and processed tamarind products for food industry and bulk procurement buyers.",
    items: ["Whole tamarind", "Tamarind seeds", "Tamarind pulp", "Processed tamarind products"],
    image: catTamarind,
    enquiryLabel: "Tamarind & Tamarind Products",
  },
  {
    id: "rice-grains",
    name: "Rice & Grains",
    description:
      "Indian rice varieties, millets and other grains sourced for international food distributors and bulk buyers.",
    items: ["Rice varieties", "Millets", "Other grains"],
    image: catRice,
    enquiryLabel: "Rice & Grains",
  },
  {
    id: "pulses",
    name: "Pulses & Legumes",
    description:
      "Toor dal, chana, green gram and other pulses prepared and packed to international buyer requirements.",
    items: ["Toor dal", "Chana", "Green gram", "Other pulses"],
    image: catPulses,
    enquiryLabel: "Pulses & Legumes",
  },
  {
    id: "seeds",
    name: "Seeds",
    description:
      "Food-grade seeds and agricultural seeds subject to applicable export and destination requirements.",
    items: ["Food-use seeds", "Agricultural seeds (subject to applicable requirements)"],
    image: catSeeds,
    enquiryLabel: "Seeds",
  },
  {
    id: "processed",
    name: "Dehydrated & Processed",
    description:
      "Dehydrated agricultural products, processed products, and buyer-specific product requirements for food industry buyers.",
    items: ["Dehydrated agricultural products", "Processed agricultural products", "Buyer-specific requirements"],
    image: catProcessed,
    enquiryLabel: "Dehydrated & Processed Products",
  },
];

// ─── Export Process Steps ────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Buyer Enquiry",
    description: "Receive detailed enquiry with product, quantity, packaging, and destination specifications.",
  },
  {
    number: "02",
    title: "Product Sourcing",
    description: "Identify and engage suitable Indian agricultural suppliers for the specified requirements.",
  },
  {
    number: "03",
    title: "Specification Confirmation",
    description: "Align product specifications, quality parameters, and buyer requirements with the supplier.",
  },
  {
    number: "04",
    title: "Quality & Preparation",
    description: "Coordinate product inspection, grading, and sorting in accordance with agreed specifications.",
  },
  {
    number: "05",
    title: "Packaging",
    description: "Arrange appropriate packaging — bulk, cartons, bags or buyer-branded packaging as agreed.",
  },
  {
    number: "06",
    title: "Documentation",
    description: "Prepare commercial invoice, packing list, and coordinate export documentation requirements.",
  },
  {
    number: "07",
    title: "Shipment",
    description: "Arrange container loading and coordinate logistics — sea freight or air freight as appropriate.",
  },
  {
    number: "08",
    title: "Delivery",
    description: "Coordinate shipment tracking and communicate with the buyer through to destination arrival.",
  },
];

// ─── Export Market Regions ───────────────────────────────────────────────────
export const EXPORT_REGIONS = [
  {
    region: "Middle East",
    examples: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman"],
    note: "Target markets",
  },
  {
    region: "Asia",
    examples: ["Singapore", "Malaysia", "Bangladesh", "Sri Lanka"],
    note: "Target markets",
  },
  {
    region: "Europe",
    examples: ["UK", "Germany", "Netherlands", "France"],
    note: "Subject to product eligibility & import requirements",
  },
  {
    region: "North America",
    examples: ["USA", "Canada"],
    note: "Subject to product eligibility & import requirements",
  },
  {
    region: "Africa",
    examples: ["South Africa", "Kenya", "Tanzania", "Mauritius"],
    note: "Target markets",
  },
];

// ─── Why Choose CG Brothers ─────────────────────────────────────────────────
export const WHY_CHOOSE = [
  {
    title: "Indian Origin",
    text: "Products sourced directly from Indian agricultural regions known for quality produce.",
  },
  {
    title: "Quality Focused",
    text: "Product preparation and handling aligned to buyer-specified quality parameters.",
  },
  {
    title: "Reliable Sourcing",
    text: "Established supplier relationships across major Indian agricultural producing regions.",
  },
  {
    title: "Buyer-Specific Packaging",
    text: "Flexible packaging solutions tailored to individual buyer requirements and destination needs.",
  },
  {
    title: "Export Coordination",
    text: "Professional coordination of documentation, logistics and shipment planning.",
  },
  {
    title: "Long-Term Partnership",
    text: "Focused on building dependable, sustainable business relationships with international buyers.",
  },
];

// ─── Gallery Images ─────────────────────────────────────────────────────────
export const GALLERY = [
  { src: orchard, alt: "Agricultural farm sourcing — Indian fields at golden hour", span: "row-span-2" },
  { src: catSpices, alt: "Indian spices prepared for export", span: "" },
  { src: harvest, alt: "Agricultural produce harvest and field handling", span: "row-span-2" },
  { src: catFruits, alt: "Premium fresh fruits ready for export", span: "" },
  { src: crates, alt: "Agricultural products packed in export crates", span: "md:col-span-2" },
  { src: catPulses, alt: "Pulses and legumes sorted and quality-inspected", span: "" },
];
