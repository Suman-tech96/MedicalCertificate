import { BrandConfig } from "./types";

export const drcertificateConfig: BrandConfig = {
  id: "drcertificate",
  name: "DrCertificate",
  domain: "drcertificate.com",
  tagline: "Medical certificates, without the unnecessary hassle.",
  meta: {
    title: "DrCertificate — Medical certificates, without the unnecessary hassle",
    description:
      "Apply online for a doctor-reviewed medical certificate. A certified doctor reviews every request, and approved certificates are sent to your email.",
  },
  logo: {
    markText: "Dr",
    wordmark: "Dr. Certificate",
    subtitle: "South East Asia",
  },
  theme: {
    primary: "#1e489d",
    primaryHover: "#183b82",
    primaryDark: "#071735",
    accent: "#02b58e",
    accentHover: "#05795f",
    ctaBg: "#1e489d",
    ctaHover: "#183b82",
    ctaText: "#ffffff",
    surface: "#f3f6fa",
    surfaceAlt: "#eef2fa",
    border: "#dce3ee",
    ink: "#0f1c33",
    inkMuted: "#3d4a5f",
    heroBg: "linear-gradient(180deg, #eef2fa 0%, #f6f8fd 65%, #ffffff 100%)",
    heroText: "#0f1c33",
    heroMuted: "#3d4a5f",
    badgeBg: "#e8f7f2",
    badgeText: "#05795f",
  },
  applyUrl: "https://forms.drcertificate.com/",
  primaryCtaLabel: "Apply now",
  secondaryCtaLabel: "Explore services",
  supportEmail: "care@drcertificate.com",
  nav: [
    { label: "Services", href: "services" },
    { label: "How it works", href: "how-it-works" },
    { label: "Pricing", href: "pricing" },
    { label: "Rules & Legal", href: "legal" },
    { label: "FAQs", href: "faq" },
  ],
  hero: {
    eyebrow: "Online medical certificates · Reviewed by certified doctors",
    headline: "Medical certificates, without the unnecessary hassle.",
    subheadline:
      "Fill in a short online form from your phone or laptop. A certified doctor checks your details. When approved, your certificate is sent to your email.",
    bullets: [
      "Certified doctor review (MBBS, MD or MS)",
      "About 30 minutes from payment to decision",
      "Emailed as a PDF if approved",
      "100% online — apply from your phone or laptop",
    ],
    trustNote:
      "DrCertificate connects people aged 16 and over in 10 South East Asian countries with independent certified doctors.",
  },
  servicesSection: {
    eyebrow: "Services",
    heading: "Choose the certificate you need",
    subheading:
      "Four types of medical certificate, each issued only after a certified doctor has reviewed your request. Check what your employer, college or airline asks for before you apply.",
    items: [
      {
        title: "Sick leave certificate",
        description:
          "Documents a period of illness for your workplace, college or school, subject to their policies.",
        highlights: ["Office leave", "College or school absence"],
        ctaLabel: "Apply now",
        ctaHref: "https://forms.drcertificate.com/",
      },
      {
        title: "Medical fitness certificate",
        description:
          "For jobs, university admission, travel, airlines or other purposes where a doctor's opinion on your fitness is asked for.",
        highlights: [
          "Joining a new job",
          "College admission",
          "Sports and physical activities",
        ],
        ctaLabel: "Apply now",
        ctaHref: "https://forms.drcertificate.com/",
      },
      {
        title: "Unfit to fly certificate",
        description:
          "For when illness, injury or another health concern means you shouldn't travel by air.",
        highlights: ["Illness before a flight", "Injury or recovery"],
        ctaLabel: "Apply now",
        ctaHref: "https://forms.drcertificate.com/",
      },
      {
        title: "General medical certificate",
        description:
          "For other personal or official needs where a doctor's certificate is requested.",
        highlights: [
          "Personal records",
          "Official or administrative requests",
        ],
        ctaLabel: "Apply now",
        ctaHref: "https://forms.drcertificate.com/",
      },
    ],
    footnote:
      "Every request is assessed individually. Issuing a certificate, its content and its duration are at the reviewing doctor's discretion. All documents are addressed to the organisation they are submitted to and are valid for single use only.",
  },
  pricingSection: {
    heading: "What does an online medical certificate cost?",
    subheading:
      "The price depends on your country, and you pay once through Stripe when you submit the form.",
    rows: [
      { label: "Singapore", value: "25 SGD" },
      { label: "Philippines", value: "399 pesos" },
      { label: "Malaysia", value: "30 MYR" },
      { label: "Other served countries", value: "Depends on the country" },
    ],
    note: "The fee pays for an independent doctor to review your request. Paying does not guarantee a certificate. Payments are non-refundable, and a declined request is not refunded (except for a verified technical fault reported within 24 hours).",
  },
  howItWorks: {
    eyebrow: "How it works",
    heading: "Three simple steps, with a doctor checking every request",
    subheading:
      "No waiting room and no paperwork to carry. Requests usually take about 30 minutes from payment to decision.",
    steps: [
      {
        number: "1",
        title: "Fill in the online application",
        description:
          "Add your details and the reason for your request. You may be asked to share vitals or other measurements through a secure link sent by email.",
      },
      {
        number: "2",
        title: "A certified doctor reviews your request",
        description:
          "The doctor assesses the information you provide and decides whether a certificate is medically appropriate. They may decline a request.",
      },
      {
        number: "3",
        title: "Get your certificate by email, if approved",
        description:
          "Approved certificates are sent electronically as a PDF to the email address you provide.",
      },
    ],
  },
  doctorsSection: {
    eyebrow: "Who issues your certificate",
    heading: "Certified doctors (MBBS, MD or MS)",
    subheading:
      "All doctors on the platform are registered medical council doctors. Doctors' approval rate is more than 98% of all requests; about 2% are declined when details do not match or symptoms are inconsistent.",
    doctors: [
      {
        name: "Dr Urooj Arshad",
        specialty: "M.B.B.S, General Medicine",
        registration: "IMC | GMC 430548",
      },
    ],
    extraNote:
      "For fitness cases, doctors are available 9 am to 9 pm IST from Monday to Saturday, and 10 am to 8 pm IST on Sunday.",
  },
  legalSection: {
    heading: "Important rules & what our certificates cannot be used for",
    subheading:
      "Please check with your employer, school or airline whether they accept an online medical certificate before you pay.",
    points: [
      "DrCertificate is for people aged 16 or older in the 10 South East Asian countries served.",
      "Our certificates cannot be used for submission in India, for legal purposes, or for insurance.",
      "Doctors on DrCertificate do not diagnose, treat or prescribe. Consultations happen by digital chat only, with no video or in-person visits.",
      "DrCertificate does not offer recovery or caretaker certificates. The form covers sick leave, unfit to travel, work from home and medical fitness.",
      "Payments are non-refundable, including when a request is declined, except for a verified technical fault reported within 24 hours.",
      "In most South East Asian countries, sick leave and work from home notes cover up to 7 days for generic symptoms, and fitness notes are generally valid for 30 days. The doctor decides.",
      "Data is stored on encrypted servers and generally deleted or anonymised 15 days after the transaction unless the law requires longer.",
    ],
    emergencyNotice:
      "Not for emergencies. If you have chest pain, trouble breathing, heavy bleeding or other urgent symptoms, go to the nearest emergency department or call local emergency services.",
  },
  coverageSection: {
    heading: "Where the service is available",
    subheading:
      "Available today across 10 countries in South East Asia. Each country has its own certificate pages, and available services can differ.",
    countries: [
      "Singapore",
      "Indonesia",
      "Philippines",
      "Thailand",
      "Vietnam",
      "Malaysia",
      "Cambodia",
      "Laos",
      "Myanmar",
      "Brunei",
    ],
  },
  faqSection: {
    heading: "Common questions",
    subheading: "Clear answers before you submit your request.",
    items: [
      {
        question: "What is an online doctor certificate?",
        answer:
          "An online doctor certificate is a document from a doctor about your health status. It can record illness or physical fitness. With DrCertificate, a certified doctor (MBBS, MD or MS) reviews your request and decides whether to issue one. Acceptance depends on the organisation you submit it to, so check first.",
      },
      {
        question: "When will I receive my medical certificate?",
        answer:
          "It usually takes about 30 minutes. For fitness cases, doctors review requests from 9 am to 9 pm IST Monday to Saturday, and 10 am to 8 pm IST on Sunday. If the doctor approves your request, your certificate is sent to your email as a PDF.",
      },
      {
        question: "Are these medical certificates genuine?",
        answer:
          "A certified doctor (MBBS, MD or MS) issues each certificate after reviewing your request, and the doctor may decline it. An approved certificate is a PDF with the doctor's registration number, digital signature and date. Acceptance depends on the organisation you submit it to, so check first.",
      },
      {
        question: "What happens if the doctor does not issue my certificate?",
        answer:
          "If the doctor declines your request, your payment is not refunded, because the fee pays for the doctor's review and not a guaranteed certificate. Doctors decline about 2% of requests, usually when the name and ID do not match or when the symptoms and details shared are inconsistent.",
      },
      {
        question: "Who can use DrCertificate?",
        answer:
          "DrCertificate is for people aged 16 or older in the 10 South East Asian countries the platform serves. Certificates are not for submission in India, not for legal purposes and not for insurance. The service suits non-emergency situations only, and it offers chat consultations, not video or in-person visits.",
      },
      {
        question: "Does DrCertificate offer recovery or caretaker certificates?",
        answer:
          "DrCertificate does not offer recovery or caretaker certificates, and the application form has no option for them. The form covers four options only: sick leave, unfit to travel, work from home and medical fitness. If you need a recovery or caretaker note, ask a local clinic.",
      },
      {
        question: "Can a certificate be corrected after it is issued?",
        answer:
          "No, a certificate cannot be corrected once issued, unless the error came from the medical team. Check your name, ID and dates carefully on the form before paying. Payments are non-refundable, except for a verified technical fault reported within 24 hours.",
      },
      {
        question: "How long is a medical certificate valid?",
        answer:
          "In most South East Asian countries, sick leave and work from home notes cover up to 7 days for generic symptoms, and fitness notes are generally valid for 30 days. The doctor decides the dates on your certificate, and your employer or school applies its own rules.",
      },
    ],
  },
  bottomCta: {
    heading: "Ready to apply? It only takes a few minutes.",
    subheading:
      "A certified doctor reviews every request. If approved, your certificate is sent to your email.",
  },
  footer: {
    description:
      "Doctor-reviewed online medical certificates. Apply online; a certified doctor decides on every request.",
    columns: [
      {
        heading: "Certificates",
        links: [
          { label: "Sick leave", href: "services" },
          { label: "Medical fitness", href: "services" },
          { label: "Unfit to fly", href: "services" },
          { label: "General medical", href: "services" },
        ],
      },
      {
        heading: "Information",
        links: [
          { label: "How it works", href: "how-it-works" },
          { label: "Pricing", href: "pricing" },
          { label: "Countries", href: "coverage" },
          { label: "FAQs", href: "faq" },
        ],
      },
      {
        heading: "Legal & Contact",
        links: [
          { label: "care@drcertificate.com", href: "mailto:care@drcertificate.com" },
          { label: "Rules & eligibility", href: "legal" },
        ],
      },
    ],
    legalLine:
      "DrCertificate connects you with certified doctors online. Issuing a certificate is always at the reviewing doctor's discretion, and acceptance depends on the policies of the organisation you submit it to. Not for emergencies.",
    copyright:
      "© 2026 DrCertificate is held by Health Venture OU, KMC Armstrong Corporate Center, H.V. Dela Costa, Salcedo Village, Makati City, 1227 Metro Manila, Philippines",
  },
};
