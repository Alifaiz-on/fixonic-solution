type ServiceSchemaProps = {
  title: string;
  description: string;
  slug?: string;
};

export default function ServiceSchema({
  title,
  description,
  slug,
}: ServiceSchemaProps) {
  const serviceUrl = slug
    ? `https://www.fixonicsolutions.com/services/${slug}`
    : "https://www.fixonicsolutions.com/services";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": title,
        "description": description,
        "url": serviceUrl,
        "provider": {
          "@type": "Organization",
          "name": "Fixonic Solutions",
          "url": "https://www.fixonicsolutions.com",
          "logo": "https://www.fixonicsolutions.com/images/logo.png",
        },
        "areaServed": {
          "@type": "Worldwide",
        },
        "serviceType": title,
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.fixonicsolutions.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.fixonicsolutions.com/services",
          },
          ...(slug
            ? [
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": title,
                  "item": serviceUrl,
                },
              ]
            : []),
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}