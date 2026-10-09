// ============================================================
// CG BROTHERS EXPORTS PRIVATE LIMITED — Business Configuration
// Update these values with verified client-provided details.
// ============================================================

export const SITE = {
  BUSINESS_NAME: "CG Brothers Exports Private Limited",
  BUSINESS_NAME_SHORT: "CG Brothers Exports",
  TAGLINE: "From Indian Farms to Global Markets",
  WHATSAPP_NUMBER: "91XXXXXXXXXX", // PLACEHOLDER: Replace with verified WhatsApp number (country code + digits only)
  PHONE_NUMBER: "+91 XXXXX XXXXX", // PLACEHOLDER: Replace with verified phone number
  EMAIL_ADDRESS: "info@cgbrothersexports.com", // PLACEHOLDER: Replace with verified email address
  WEBSITE_URL: "https://cgbrothersexports.com", // PLACEHOLDER: Replace with actual domain when confirmed
  INSTAGRAM_URL: "https://instagram.com/", // PLACEHOLDER: Replace with verified Instagram profile URL
  FACEBOOK_URL: "https://facebook.com/", // PLACEHOLDER: Replace with verified Facebook profile URL
  LINKEDIN_URL: "https://linkedin.com/", // PLACEHOLDER: Replace with verified LinkedIn profile URL
  BUSINESS_ADDRESS: "India", // PLACEHOLDER: Replace with verified business address
  DEFAULT_MESSAGE: "Hello, I would like to enquire about your agricultural products for export.",
};

export function whatsappLink(message: string = SITE.DEFAULT_MESSAGE) {
  return `https://wa.me/${SITE.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Quality", href: "#quality" },
  { label: "Export Markets", href: "#markets" },
  { label: "Our Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const FOOTER_PRODUCT_LINKS = [
  { label: "Fresh Fruits", href: "#products" },
  { label: "Fresh Vegetables", href: "#products" },
  { label: "Indian Spices", href: "#products" },
  { label: "Tamarind & Products", href: "#products" },
  { label: "Rice & Grains", href: "#products" },
  { label: "Pulses & Legumes", href: "#products" },
  { label: "Seeds", href: "#products" },
  { label: "Processed Products", href: "#products" },
];
