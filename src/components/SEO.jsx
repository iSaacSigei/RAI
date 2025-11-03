import { useEffect } from 'react';

const BASE_URL = 'https://www.rai-alliance.org';

function setOrCreateMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    Object.keys(attrs).forEach((k) => {
      if (k !== 'content') el.setAttribute(k, attrs[k]);
    });
    document.head.appendChild(el);
  }
  if (attrs.content !== undefined) el.setAttribute('content', attrs.content);
}

function setOrCreateLink(rel, href) {
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function injectJsonLd(id, data) {
  let script = document.head.querySelector(`#${id}`);
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(data);
}

export default function SEO({
  title = 'RAI Alliance | Responsible AI for All',
  description = 'Courses, community, resources, and events to learn and build ethical, responsible AI.',
  path = '/',
  keywords = 'RAI, RAI Alliance, Responsible AI, Responsible AI course, AI courses, trustworthy AI, AI ethics',
  image = `${BASE_URL}/Logo.png`,
  type = 'website',
  breadcrumbs = [],
  structuredData = null,
}) {
  useEffect(() => {
    const url = `${BASE_URL}${path}`.replace(/\\+/g, '/');

    // Title
    document.title = title;

    // Canonical
    setOrCreateLink('canonical', url);

    // Primary Meta
    setOrCreateMeta('meta[name="description"]', { name: 'description', content: description });
    setOrCreateMeta('meta[name="keywords"]', { name: 'keywords', content: keywords });
    setOrCreateMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' });

    // Open Graph
    setOrCreateMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    setOrCreateMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    setOrCreateMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    setOrCreateMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    setOrCreateMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    setOrCreateMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'RAI Alliance' });

    // Twitter
    setOrCreateMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setOrCreateMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    setOrCreateMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    setOrCreateMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });

    // Breadcrumbs JSON-LD (optional)
    if (breadcrumbs && breadcrumbs.length > 0) {
      const itemList = breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: `${BASE_URL}${b.path}`,
      }));
      injectJsonLd('ld-breadcrumbs', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: itemList,
      });
    }

    // Page-specific structured data
    if (structuredData) {
      injectJsonLd('ld-structured', structuredData);
    }
  }, [title, description, path, keywords, image, type, JSON.stringify(breadcrumbs), JSON.stringify(structuredData)]);

  return null;
}

