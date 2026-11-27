export type BrandId = "drcertificate" | "getmedicalcertificate";

export interface BrandTheme {
  primary: string;
  primaryHover: string;
  primaryDark: string;
  accent: string;
  accentHover: string;
  ctaBg: string;
  ctaHover: string;
  ctaText: string;
  surface: string;
  surfaceAlt: string;
  border: string;
  ink: string;
  inkMuted: string;
  heroBg: string;
  heroText: string;
  heroMuted: string;
  badgeBg: string;
  badgeText: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  priceTag?: string;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface PricingRow {
  label: string;
  value: string;
}

export interface DoctorProfile {
  name: string;
  specialty: string;
  registration: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface BrandConfig {
  id: BrandId;
  name: string;
  domain: string;
  tagline: string;
  meta: {
    title: string;
    description: string;
  };
  logo: {
    markText: string;
    wordmark: string;
    subtitle?: string;
  };
  theme: BrandTheme;
  applyUrl: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  supportEmail?: string;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    bullets: string[];
    trustNote: string;
  };
  stats?: StatItem[];
  servicesSection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: ServiceItem[];
    footnote?: string;
  };
  pricingSection: {
    heading: string;
    subheading: string;
    rows: PricingRow[];
    note: string;
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    subheading: string;
    steps: StepItem[];
  };
  doctorsSection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    doctors: DoctorProfile[];
    extraNote?: string;
  };
  legalSection: {
    heading: string;
    subheading: string;
    points: string[];
    emergencyNotice: string;
  };
  coverageSection: {
    heading: string;
    subheading: string;
    countries: string[];
  };
  testimonials?: {
    heading: string;
    items: TestimonialItem[];
  };
  faqSection: {
    heading: string;
    subheading: string;
    items: FaqItem[];
  };
  bottomCta: {
    heading: string;
    subheading: string;
  };
  footer: {
    description: string;
    columns: FooterColumn[];
    legalLine: string;
    copyright: string;
  };
}
