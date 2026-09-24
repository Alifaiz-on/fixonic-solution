import type { Metadata } from "next";

import ServiceOverview from "../components/ServiceOverview";
import { serviceData } from "../serviceData";
import ServiceProblem from "../components/ServiceProblem";
import ServiceSolutions from "../components/ServiceSolutions";
import ServicePricing from "../components/ServicePricing";
import ServiceInnerCTA from "../components/ServiceInnerCTA";
import ServiceSchema from "../../components/ServiceSchema";

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service page was not found.",
    };
  }

  const canonicalUrl = `https://www.fixonicsolutions.com/services/${slug}`;
  const seoTitle = (service as any).seoTitle || service.title;
  const seoDescription = (service as any).seoDescription || service.description;

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${seoTitle} | Fixonic Solutions`,
      description: seoDescription,
      url: canonicalUrl,
      siteName: "Fixonic Solutions",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: service.problemImage || "/images/logo.png",
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seoTitle} | Fixonic Solutions`,
      description: seoDescription,
      images: [service.problemImage || "/images/logo.png"],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    return (
      <main>
        <h1>Service Not Found</h1>
      </main>
    );
  }

  return (
    <main>
      <ServiceSchema
        title={service.title}
        description={service.description}
        slug={slug}
      />

      <ServiceOverview
        title={service.title}
        description={service.description}
        icons={service.icons}
      />

      <ServiceProblem data={service} />

      <ServiceSolutions data={service} />

      <ServicePricing data={service} />

      <ServiceInnerCTA data={service} />
    </main>
  );
}