export const SITE_URL = "https://honeywelledugh.com";
export const SITE_NAME = "Honeywell School";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
export const PHONE_MAIN = "+233244362657";
export const PHONE_OYARIFA = "+233559419530";
export const SITE_EMAIL = "honeywellschools@gmail.com";
export const MOTTO = "Love and Education That Enrich for a Life Time";

export function pageUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function seoPage(opts: { title: string; description: string; path: string }) {
  const url = pageUrl(opts.path);
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "en_GH" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "theme-color", content: "#041a36" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  name: SITE_NAME,
  slogan: MOTTO,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: OG_IMAGE,
  email: SITE_EMAIL,
  telephone: PHONE_MAIN,
  foundingDate: "2014",
  founder: [
    { "@type": "Person", name: "Doris Archampong" },
    { "@type": "Person", name: "Naana Pokua Biney" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "226 Osibisa Close, Off Noi Fetreke Street, Airport Residential Area",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  location: [
    {
      "@type": "Place",
      name: "Honeywell School — Airport Residential Area",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "226 Osibisa Close, Off Noi Fetreke Street, Airport Residential Area, GPS GA-119-9300",
        addressLocality: "Accra",
        addressCountry: "GH",
      },
      telephone: PHONE_MAIN,
    },
    {
      "@type": "Place",
      name: "Honeywell School — Palm Valley Estates, Oyarifa",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Palm Valley Estates, Oyarifa",
        addressLocality: "Accra",
        addressCountry: "GH",
      },
      telephone: PHONE_OYARIFA,
    },
  ],
  openingHours: "Mo-Fr 06:30-17:30",
  sameAs: [
    "https://web.facebook.com/honeywellschool",
    "https://www.instagram.com/honeywellschool/",
    "https://www.tiktok.com/@honeywell.schools",
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What ages does Honeywell School accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We welcome children from 6 months to 5 years — call 024 436 2657 or 055 941 9530 and we will help with class placement.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for admission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Admission forms are picked up from the school premises. Submit the completed form with your child's birth certificate and health/immunization cards, then book a school visit.",
      },
    },
    {
      "@type": "Question",
      name: "Can I tour the campus before enrolling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Appointments may be booked by phone — call 024 436 2657 or 055 941 9530 — and we will arrange a weekday visit to either branch.",
      },
    },
    {
      "@type": "Question",
      name: "What are the school hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "School begins at 6:30 a.m. and closes at 5:30 p.m., Monday to Friday.",
      },
    },
    {
      "@type": "Question",
      name: "How are fees structured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Registration is paid once per child, and tuition is charged each term. The school year has three terms. Contact the administrator for the current fee schedule.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Honeywell School located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Branch 1 is at 226 Osibisa Close, Off Noi Fetreke Street, Airport Residential Area, Accra (GPS GA-119-9300). Branch 2 is at Palm Valley Estates, Oyarifa, Accra.",
      },
    },
  ],
};

const breadcrumbLabels: Record<string, string> = {
  "/about": "About",
  "/programs": "Programs & Curriculum",
  "/admissions": "Admissions",
  "/campus": "Campus & Facilities",
  "/team": "Meet the Team",
  "/gallery": "Photo Gallery",
  "/tour": "School Tour",
  "/contact": "Contact Admissions",
};

export function breadcrumbSchema(pathname: string) {
  const label = breadcrumbLabels[pathname];
  if (!label) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: pageUrl("/") },
      { "@type": "ListItem", position: 2, name: label, item: pageUrl(pathname) },
    ],
  };
}
