import React, { useEffect } from 'react';

// Organization Schema
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RAI Alliance",
    "alternateName": "Responsible AI Alliance",
    "url": "https://raialliance.org",
    "logo": "https://raialliance.org/images/rai-logo.png",
    "description": "RAI Alliance promotes responsible AI development and use, ensuring AI respects human rights and promotes social good through education and advocacy.",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/raialliance",
      "https://linkedin.com/company/rai-alliance",
      "https://github.com/raialliance"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@raialliance.org"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global"
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

// Course Schema
export const CourseSchema = ({ course }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "RAI Alliance"
    },
    "educationalLevel": "Beginner to Advanced",
    "courseMode": "Online",
    "isAccessibleForFree": course.free,
    "timeRequired": course.duration,
    "inLanguage": "en",
    "about": {
      "@type": "Thing",
      "name": "Responsible AI"
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [course]);

  return null;
};

// Website Schema
export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RAI Alliance",
    "url": "https://raialliance.org",
    "description": "Responsible AI education and advocacy platform",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://raialliance.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

// Educational Organization Schema
export const EducationalOrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "RAI Alliance",
    "url": "https://raialliance.org",
    "description": "Educational organization focused on responsible AI training and advocacy",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Responsible AI Courses",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Responsible AI for Students",
          "description": "Ethical AI practices for students and future tech leaders"
        },
        {
          "@type": "Course",
          "name": "Responsible AI for Business",
          "description": "Implement AI responsibly in business settings"
        },
        {
          "@type": "Course",
          "name": "Responsible AI for Kids",
          "description": "Fun AI education for children"
        },
        {
          "@type": "Course",
          "name": "Responsible AI for Developers",
          "description": "Ethical AI principles for software developers"
        }
      ]
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};