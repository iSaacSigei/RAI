import React, { useEffect } from 'react';

const SEOMetaTags = ({ 
  title = "RAI Alliance - Responsible AI Education & Advocacy",
  description = "Join RAI Alliance in promoting responsible AI development. Learn ethical AI practices through our courses for students, businesses, kids, and developers.",
  keywords = "responsible AI, ethical AI, AI education, AI courses, artificial intelligence ethics, AI training, responsible technology"
}) => {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }, [title, description, keywords]);

  return null;
};

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: "RAI Alliance - Responsible AI Education & Advocacy",
    description: "Join RAI Alliance in promoting responsible AI development. Learn ethical AI practices through our courses for students, businesses, kids, and developers.",
    keywords: "responsible AI, ethical AI, AI education, AI courses, artificial intelligence ethics, AI training, responsible technology",
    url: "https://raialliance.org"
  },
  
  about: {
    title: "About RAI Alliance - Our Mission for Responsible AI",
    description: "Learn about RAI Alliance's mission to promote responsible AI development and use, ensuring AI respects human rights and promotes social good.",
    keywords: "about RAI Alliance, responsible AI mission, ethical AI vision, AI advocacy organization",
    url: "https://raialliance.org/about"
  },
  
  courses: {
    title: "Responsible AI Courses - Learn Ethical AI Practices",
    description: "Explore our comprehensive AI courses for students, businesses, kids, and developers. Learn responsible AI implementation and ethical practices.",
    keywords: "AI courses, responsible AI training, ethical AI education, AI for students, AI for business, AI for developers",
    url: "https://raialliance.org/courses"
  },
  
  blog: {
    title: "RAI Alliance Blog - Responsible AI Insights & News",
    description: "Stay updated with the latest insights, news, and best practices in responsible AI development and ethical technology implementation.",
    keywords: "AI blog, responsible AI news, ethical AI insights, AI best practices, artificial intelligence articles",
    url: "https://raialliance.org/blog"
  },
  
  events: {
    title: "RAI Alliance Events - Responsible AI Conferences & Workshops",
    description: "Join our events, conferences, and workshops focused on responsible AI development, ethical technology, and AI education.",
    keywords: "AI events, responsible AI conferences, AI workshops, ethical AI seminars, AI education events",
    url: "https://raialliance.org/events"
  },
  
  contact: {
    title: "Contact RAI Alliance - Get in Touch",
    description: "Contact RAI Alliance for partnerships, collaborations, or inquiries about responsible AI education and advocacy programs.",
    keywords: "contact RAI Alliance, AI partnership, responsible AI collaboration, AI education inquiry",
    url: "https://raialliance.org/contact"
  },
  
  team: {
    title: "RAI Alliance Team - Meet Our AI Ethics Experts",
    description: "Meet the dedicated team behind RAI Alliance, working to promote responsible AI development and ethical technology practices worldwide.",
    keywords: "RAI Alliance team, AI ethics experts, responsible AI advocates, AI education leaders",
    url: "https://raialliance.org/team"
  },
  
  resources: {
    title: "Responsible AI Resources - Tools & Guidelines",
    description: "Access comprehensive resources, tools, and guidelines for implementing responsible AI practices in your organization or projects.",
    keywords: "AI resources, responsible AI tools, ethical AI guidelines, AI implementation resources",
    url: "https://raialliance.org/resources"
  }
};

export default SEOMetaTags;