export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Creator Finance Hub",
    "description": "Expert financial guidance for YouTubers, streamers, and digital creators.",
    "url": "https://creatorfinancehub.com", // Replace with your actual domain
    "logo": "https://creatorfinancehub.com/logo.png", // Replace with your actual logo
    "sameAs": [
      // Add your social media profiles here when you create them
      // "https://twitter.com/creatorfinancehub",
      // "https://linkedin.com/company/creatorfinancehub"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Creator Finance Hub",
    "url": "https://creatorfinancehub.com", // Replace with your actual domain
    "description": "Expert financial guidance for YouTubers, streamers, and digital creators. Learn about taxes, business banking, retirement planning, and scaling your creator business.",
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://creatorfinancehub.com/search?q={search_term_string}" // Implement search if needed
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://creatorfinancehub.com" // Replace with your actual domain
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://creatorfinancehub.com/blog" // Replace with your actual domain
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
    </>
  );
}
