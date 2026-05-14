import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    twitterCard?: string;
    schema?: object;
    faqSchema?: { question: string; answer: string }[];
    breadcrumbSchema?: { name: string; item?: string }[];
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    ogType = 'website',
    ogImage = '/og-image.png',
    twitterCard = 'summary_large_image',
    schema,
    faqSchema,
    breadcrumbSchema
}) => {
    const siteUrl = 'https://adsyncro.co.uk';
    const fullTitle = `AdSyncro | ${title}`;
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "AdSyncro",
        "url": "https://adsyncro.co.uk",
        "logo": "https://adsyncro.co.uk/logo.png",
        "image": "https://adsyncro.co.uk/og-image.png",
        "telephone": "+44 7523 812314",
        "email": "info@adsyncro.co.uk",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "London",
            "addressLocality": "London",
            "addressCountry": "GB"
        },
        "priceRange": "££",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.instagram.com/adsyncro_/",
            "https://www.linkedin.com/company/adsyncro"
        ]
    };

    const faqJsonLd = faqSchema ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqSchema.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    } : null;

    const breadcrumbJsonLd = breadcrumbSchema ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbSchema.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            ...(crumb.item ? { "item": crumb.item } : {})
        }))
    } : null;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            {/* OpenGraph Tags */}
            <meta property="og:site_name" content="AdSyncro" />
            <meta property="og:locale" content="en_GB" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={fullTitle} />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:site" content="@adsyncro_" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

            {/* Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>

            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}

            {faqJsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(faqJsonLd)}
                </script>
            )}

            {breadcrumbJsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbJsonLd)}
                </script>
            )}

            {/* Mobile Optimization */}
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
            <meta name="theme-color" content="#ffffff" />

            {/* Preconnect to Font & CDN */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Helmet>
    );
};

export default SEO;
