export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.fixonicsolutions.com/#organization",
    "name": "Fixonic Solutions",
    "url": "https://www.fixonicsolutions.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.fixonicsolutions.com/images/logo.png",
      "width": 1200,
      "height": 630,
    },
    "description":
      "Fixonic Solutions is a full-service global digital marketing agency and custom web development partner delivering SEO, performance marketing, and AI automation for businesses worldwide.",
    "sameAs": [
      "https://www.facebook.com/fixonicsolutions",
      "https://www.instagram.com/fixonicsolutions/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "addressCountry": "PK"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Worldwide"
      }
    ],
    "knowsAbout": [
      "Global Digital Marketing",
      "Custom Web Development",
      "Search Engine Optimization (SEO)",
      "Performance Marketing",
      "AI Automation & Workflows",
      "UI/UX Design"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923154928521",
      "contactType": "customer service",
      "availableLanguage": ["English", "Urdu"]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.fixonicsolutions.com/#website",
    "url": "https://www.fixonicsolutions.com",
    "name": "Fixonic Solutions",
    "description": "Global Digital Marketing & Custom Web Development Agency",
    "publisher": {
      "@id": "https://www.fixonicsolutions.com/#organization"
    },
    "inLanguage": "en-US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}