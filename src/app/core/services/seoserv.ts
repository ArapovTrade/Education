import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  locale: string; // ru_RU / en_US / uk_UA
  htmlLang: string; // ru-RU / en-US / uk-UA — для <html lang="">
  siteName: string; // "Arapov CopyTrade"
  publishedTime?: string; // ISO дата
  modifiedTime?: string;
  readingTime?: string; // "4 минуты"
  alternates: { hreflang: string; href: string }[];
  jsonLd?: object;
}

@Injectable({
  providedIn: 'root',
})
export class Seoserv {
  private meta = inject(Meta);
  private title = inject(Title);
  private doc = inject(DOCUMENT);

  set(config: SeoConfig): void {
    // <html lang="">
    this.doc.documentElement.setAttribute('lang', config.htmlLang);

    this.title.setTitle(config.title);

    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({
      name: 'robots',
      content: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    });

    // Open Graph
    this.meta.updateTag({ property: 'og:locale', content: config.locale });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: config.canonical });
    this.meta.updateTag({ property: 'og:site_name', content: config.siteName });
    this.meta.updateTag({ property: 'og:image', content: config.ogImage });
    if (config.ogImageWidth) {
      this.meta.updateTag({ property: 'og:image:width', content: String(config.ogImageWidth) });
    }
    if (config.ogImageHeight) {
      this.meta.updateTag({ property: 'og:image:height', content: String(config.ogImageHeight) });
    }
    if (config.publishedTime) {
      this.meta.updateTag({ property: 'article:published_time', content: config.publishedTime });
    }
    if (config.modifiedTime) {
      this.meta.updateTag({ property: 'article:modified_time', content: config.modifiedTime });
      this.meta.updateTag({ property: 'og:updated_time', content: config.modifiedTime });
    }

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.ogImage });
    if (config.readingTime) {
      this.meta.updateTag({ name: 'twitter:label1', content: 'Время чтения' });
      this.meta.updateTag({ name: 'twitter:data1', content: config.readingTime });
    }

    this.setLink('canonical', config.canonical);
    this.setAlternates(config.alternates);

    if (config.jsonLd) {
      this.setJsonLd(config.jsonLd);
    }
  }

  private setLink(rel: string, href: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', rel);
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private setAlternates(alternates: { hreflang: string; href: string }[]): void {
    this.doc.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    alternates.forEach((alt) => {
      const link = this.doc.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', alt.hreflang);
      link.setAttribute('href', alt.href);
      this.doc.head.appendChild(link);
    });
  }

  private setJsonLd(data: object): void {
    // убираем предыдущий, если был (важно при client-side навигации)
    this.doc.getElementById('structured-data')?.remove();

    const script = this.doc.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
