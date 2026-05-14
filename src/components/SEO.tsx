import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
}

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [, key, name] = selector.match(/\[(\w+)="([^"]+)"\]/) || [];
    if (key && name) el.setAttribute(key, name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const SEO = ({ title, description, image, url, type = "website", jsonLd }: SEOProps) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const canonical = url || window.location.href;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[property="og:url"]', "content", canonical);
    if (image) setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[name="twitter:card"]', "content", image ? "summary_large_image" : "summary");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    if (image) setMeta('meta[name="twitter:image"]', "content", image);
    setLink("canonical", canonical);

    let ldEl: HTMLScriptElement | null = null;
    if (jsonLd) {
      ldEl = document.createElement("script");
      ldEl.type = "application/ld+json";
      ldEl.text = JSON.stringify(jsonLd);
      ldEl.setAttribute("data-seo", "blog");
      document.head.appendChild(ldEl);
    }

    return () => {
      document.title = prevTitle;
      if (ldEl) ldEl.remove();
    };
  }, [title, description, image, url, type, jsonLd]);

  return null;
};

export default SEO;
