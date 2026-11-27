import { BrandConfig } from "./types";

export const getmedicalcertificateConfig: BrandConfig = {
    id: "getmedicalcertificate",
    name: "GetMedicalCertificate",
    domain: "getmedicalcertificate.com",
    tagline: "Get a medical certificate online - same day from €34.99",
    meta: {
        title:
            "Get a Medical Certificate Online - Same Day From €34.99 | Registered Doctors",
        description:
            "Get a medical certificate online from registered doctors. Sick leave notes, fitness, sports and general medical certificates. Same-day PDF from €34.99. Full refund if a doctor cannot issue.",
    },
    logo: {
        markText: "GMC",
        wordmark: "GetMedicalCertificate",
        subtitle: "Europe & EEA",
    },
    theme: {
        primary: "#470087",
        primaryHover: "#2f005c",
        primaryDark: "#241432",
        accent: "#7422c0",
        accentHover: "#470087",
        ctaBg: "#fe434d",
        ctaHover: "#e5323d",
        ctaText: "#ffffff",
        surface: "#f4ebfb",
        surfaceAlt: "#faf7fd",
        border: "#e6daf3",
        ink: "#241432",
        inkMuted: "#685876",
        heroBg: "linear-gradient(135deg, #470087 0%, #2f005c 100%)",
        heroText: "#ffffff",
        heroMuted: "#e6daf3",
        badgeBg: "#eee2f9",
        badgeText: "#470087",
    },
    applyUrl:
        "https://forms.getmedicalcertificate.com/healthworkstech/form/GetYourMedicalCertificateNow/formperma/Bj5SHi3vWq2NM-1azgtWfnE_NvPXUERoDzL63fw6ug8",
    primaryCtaLabel: "Apply now",
    secondaryCtaLabel: "How it works",
    nav: [
        { label: "Services", href: "#services" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Doctors", href: "#doctors" },
        { label: "Countries", href: "#coverage" },
        { label: "FAQ", href: "#faq" },
    ],
    hero: {
        eyebrow: "Telemedicine & medical certificates",
        headline: "Get a medical certificate online - same day from €34.99",
        subheadline:
            "Certificates from registered doctors, delivered the same-day as a PDF your employer or institution can verify.",
        bullets: [
            "Certificate types - sick leave, unfit to travel, work from home, fitness, sports fitness, good health",
            "Same-day delivery - usually within 30 minutes of a doctor approving your case",
            "Registered doctors - every case reviewed by a registered doctor and released with their stamp and signature",
            "Full refund if a doctor cannot issue",
        ],
        trustNote:
            "Recognised across 40+ countries in Europe & the EEA. Unique verification reference code on every certificate.",
    },
    stats: [
        { value: "480K+", label: "Consultations across the EU" },
        { value: "9 min", label: "Average wait time" },
        { value: "40+", label: "EU countries, including EEA" },
        { value: "24/7", label: "Doctors on call" },
    ],
    servicesSection: {
        eyebrow: "Certificate types",
        heading: "Every certificate type, in one place",
        subheading:
            "All types of medical certificate, each reviewed by a registered doctor. Pick the one that matches who is asking for it.",
        items: [
            {
                title: "Sick Leave Certificate",
                description:
                    "A doctor-signed sick note for work or school, reviewed by a registered doctor and delivered as a same-day PDF. Work from home certificate only needed by employees.",
                priceTag: "From €34.99",
                highlights: [
                    "Work or school absence due to illness",
                    "In the UK, usually from day 8",
                ],
                ctaLabel: "Apply now",
                ctaHref:
                    "https://forms.getmedicalcertificate.com/healthworkstech/form/GetYourMedicalCertificateNow/formperma/Bj5SHi3vWq2NM-1azgtWfnE_NvPXUERoDzL63fw6ug8",
            },
            {
                title: "Fitness Certificate",
                description:
                    "Medical clearance confirming you are fit for the gym, sports, travel, work, study or admission - issued online by a GMC registered doctor.",
                priceTag: "From €34.99",
                highlights: ["Gym, work, study or admission", "Includes good health clearance"],
                ctaLabel: "Apply now",
                ctaHref:
                    "https://forms.getmedicalcertificate.com/healthworkstech/form/GetYourMedicalCertificateNow/formperma/Bj5SHi3vWq2NM-1azgtWfnE_NvPXUERoDzL63fw6ug8",
            },
            {
                title: "Sports Fitness Certificate",
                description:
                    "Medical clearance to participate in sports - school sports, gym, martial arts, competitions and youth sport - issued online by a registered doctor, valid 12 months.",
                priceTag: "From €34.99",
                highlights: ["Valid 12 months", "Clubs, federations & competitions"],
                ctaLabel: "Apply now",
                ctaHref:
                    "https://forms.getmedicalcertificate.com/healthworkstech/form/GetYourMedicalCertificateNow/formperma/Bj5SHi3vWq2NM-1azgtWfnE_NvPXUERoDzL63fw6ug8",
            },
            {
                title: "Unfit to Travel & Work From Home",
                description:
                    "A GP's certificate stating you are unfit to travel for flight or booking cancellations, or a GP note suggesting work from home due to illness.",
                priceTag: "From €34.99",
                highlights: [
                    "Flight or hotel cancellations",
                    "Work from home accommodation",
                ],
                ctaLabel: "Apply now",
                ctaHref:
                    "https://forms.getmedicalcertificate.com/healthworkstech/form/GetYourMedicalCertificateNow/formperma/Bj5SHi3vWq2NM-1azgtWfnE_NvPXUERoDzL63fw6ug8",
            },
        ],
    },
    pricingSection: {
        heading: "Transparent pricing — €34.99",
        subheading:
            "The price includes the doctor's review, your certificate PDF, and same-day email delivery. There is nothing added at checkout.",
        rows: [
            { label: "Sick Leave Certificate", value: "€34.99" },
            { label: "Fitness Certificate", value: "€34.99" },
            { label: "Sports Fitness Certificate (valid 12 months)", value: "€34.99" },
            { label: "Unfit to Travel / Work From Home", value: "€34.99" },
        ],
        note: "Full refund if a doctor cannot issue. Every certificate includes the doctor's credentials, registration number, digital signature and a unique verification code.",
    },
    howItWorks: {
        eyebrow: "How it works",
        heading: "Three steps, one real clinical review — start to finish, no waiting room.",
        subheading:
            "Every visit follows the same clinical sequence, available in English, German, French, Spanish, Italian, Polish or Dutch.",
        steps: [
            {
                number: "01",
                title: "Fill out the form",
                description:
                    "A quick, secure questionnaire — your details, health issue, and the reason you need a certificate.",
            },
            {
                number: "02",
                title: "A doctor reviews your case",
                description:
                    "A licensed health professional reviews your case and reaches out for any additional detail they need.",
            },
            {
                number: "03",
                title: "Receive your certificate",
                description:
                    "Once approved, your signed digital medical certificate arrives as a PDF in your inbox.",
            },
        ],
    },
    doctorsSection: {
        eyebrow: "The doctors",
        heading: "Registered practitioners, not a call centre.",
        subheading:
            "Every doctor is independently verified against their national medical council before they see a single patient — across Ireland, Germany, France and beyond.",
        doctors: [
            {
                name: "Dr. Sinéad Whelan",
                specialty: "General Medicine · IE",
                registration: "IMC Reg. #114892",
            },
            {
                name: "Dr. Lukas Brandt",
                specialty: "Family Medicine · DE",
                registration: "ÄK Reg. #BE-33210",
            },
            {
                name: "Dr. Camille Dubois",
                specialty: "Psychiatry · FR",
                registration: "RPPS #10029384",
            },
            {
                name: "Dr. Anna Kowalska",
                specialty: "Occupational Health · PL",
                registration: "NIL Reg. #7741029",
            },
        ],
    },
    legalSection: {
        heading: "Privacy, verification & regional rules",
        subheading:
            "Your data is encrypted and handled under UK & EU GDPR and ISO 27001 standards.",
        points: [
            "Only the reviewing doctor has access to your medical information. You can ask us to erase your data at any time.",
            "Every certificate carries a unique reference code so any employer or institution can verify validity without revealing medical details.",
            "Full refund if a doctor cannot issue.",
            "In the UK you can self-certify for the first 7 calendar days and need a fit note from day 8. Elsewhere in Europe, the window is usually 2–3 days from the start of the absence.",
            "A parent or guardian can request a certificate for a child, and a carer can request one for the person they look after. Adults who can answer for themselves should complete it themselves.",
            "Some official processes — visas in particular — may additionally require translation or notarisation; confirm the exact requirement with whoever is asking for it.",
        ],
        emergencyNotice:
            "Not for medical emergencies — dial 112 for emergency services anywhere in the EU.",
    },
    coverageSection: {
        heading: "Recognised across 40+ countries in Europe & the EEA.",
        subheading:
            "Our registered doctors review each request according to the medical guidelines — so your certificate is valid where you actually need it.",
        countries: [
            "Albania",
            "Andorra",
            "Austria",
            "Belgium",
            "Bosnia & Herzegovina",
            "Bulgaria",
            "Croatia",
            "Cyprus",
            "Czechia",
            "Denmark",
            "Estonia",
            "Finland",
            "France",
            "Germany",
            "Greece",
            "Hungary",
            "Iceland",
            "Ireland",
            "Italy",
            "Latvia",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Malta",
            "Moldova",
            "Monaco",
            "Montenegro",
            "Netherlands",
            "North Macedonia",
            "Norway",
            "Poland",
            "Portugal",
            "Romania",
            "San Marino",
            "Serbia",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Sweden",
            "Switzerland",
            "Ukraine",
            "United Kingdom",
        ],
    },
    testimonials: {
        heading: "People who skipped the waiting room.",
        items: [
            {
                quote:
                    "Fifteen minutes from feeling awful to having a certificate my HR team in Berlin accepted without a single question.",
                author: "Hannah Schmidt",
                role: "Operations lead, Berlin",
                initials: "HS",
            },
            {
                quote:
                    "The reference code is what sold me - my landlord in Lisbon could verify my fitness note himself, no phone calls.",
                author: "Miguel Costa",
                role: "Freelance contractor, Lisbon",
                initials: "MC",
            },
            {
                quote:
                    "I've used it three times for my kids now. Same-day paediatric notes for school in Amsterdam - no clinic visit needed.",
                author: "Eva Jansen",
                role: "Parent of two, Amsterdam",
                initials: "EJ",
            },
        ],
    },
    faqSection: {
        heading: "Good questions, straight answers.",
        subheading: "Everything you need to know before applying.",
        items: [
            {
                question: "How much does an online medical certificate cost?",
                answer:
                    "Every certificate costs €34.99 - sick leave, fitness, sports fitness and unfit to travel. A sports fitness certificate stays valid for 12 months. The price includes the doctor's review, your certificate PDF, and same-day email delivery. There is nothing added at checkout.",
            },
            {
                question: "Can my employer reject a certificate issued online?",
                answer:
                    "A certificate from a registered doctor is valid whether the consultation happened online or in person, and employers generally accept it on that basis. Yours carries the doctor's name, registration number and signature, so an employer can confirm it is genuine rather than take it on trust. Acceptance for absences can still depend on your employer's own policy, so check your staff handbook.",
            },
            {
                question: "How long does it take?",
                answer:
                    "Most certificates are reviewed and issued within about 30 minutes. It can take longer at busy periods, or if the doctor needs more detail or a short video call before deciding. Your PDF arrives by email as soon as it is approved.",
            },
            {
                question: "Are online medical certificates valid?",
                answer:
                    "Yes. What makes a certificate valid is that a properly registered doctor made a genuine clinical assessment - not whether you were in the room. Every certificate includes the doctor's credentials, registration number, digital signature and a unique verification code.",
            },
            {
                question: "Which type of certificate do I need?",
                answer:
                    "It depends on who is asking. For work or school absence you need a sick leave certificate. For gym membership or general activity clearance, a fitness certificate. For training and competition, a sports fitness certificate. For flight and hotel cancellation, an unfit to travel certificate.",
            },
            {
                question: "Can I request a certificate for someone else?",
                answer:
                    "A parent or guardian can request one for a child, and a carer can request one for the person they look after. Complete the assessment on their behalf with accurate medical history. Where the person is an adult who can answer for themselves, they should complete it themselves.",
            },
            {
                question: "Does it work outside the UK?",
                answer:
                    "Yes. Our doctors are registered across Europe and the EEA, and certificates are recognised in 40+ countries. Some official processes - visas in particular - may additionally require translation or notarisation, so confirm the exact requirement with whoever is asking for it.",
            },
            {
                question: "When do I have to give the certificate to my employer?",
                answer:
                    "In the UK you can self-certify for the first 7 calendar days and need a fit note from day 8. Elsewhere the window is usually 2–3 days from the start of the absence. Same-day delivery means you can meet either deadline, but send it on as soon as it arrives.",
            },
        ],
    },
    bottomCta: {
        heading: "Feeling unwell? A doctor is one tap away.",
        subheading:
            "Join half a million people across Europe who skipped the waiting room. Your first consult takes less than ten minutes, start to certificate.",
    },
    footer: {
        description:
            "Care that comes to you. See a doctor and get certified from anywhere in Europe, any time - and let anyone verify it in seconds.",
        columns: [
            {
                heading: "Product",
                links: [
                    { label: "Services", href: "#services" },
                    { label: "How it works", href: "#how-it-works" },
                    { label: "FAQ", href: "#faq" },
                ],
            },
            {
                heading: "Company",
                links: [
                    { label: "Doctors", href: "#doctors" },
                    { label: "Coverage (40+ countries)", href: "#coverage" },
                ],
            },
            {
                heading: "Legal",
                links: [
                    { label: "Privacy & GDPR", href: "#legal" },
                    { label: "Refund & Cancellations", href: "#pricing" },
                ],
            },
        ],
        legalLine:
            "Not for medical emergencies - dial 112 for emergency services anywhere in the EU.",
        copyright: "© 2026 GetMedicalCertificate. All rights reserved.",
    },
};
