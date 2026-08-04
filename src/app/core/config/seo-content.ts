// core/config/seo-content.ts
//
// Единый источник SEO-данных для всех языковых версий сайта.
// Используется в связке с SeoService: this.seo.set(SEO_CONTENT.course.ru)
//
// Заполнено на основе реального HTML оригинального сайта (arapov.education)
// по состоянию на момент выгрузки. Проверяй актуальность, если контент
// на оригинале поменяется.

import { SeoConfig } from '../services/seoserv';

export const BASE_URL = 'https://arapov.education'; // поменяй на свой домен
const OG_IMAGE = `${BASE_URL}/assets/images/course-og.png`; // перезалей картинку к себе, не тяни с чужого домена
const SITE_NAME = 'Arapov Education';

// ---------- Курс (лендинг) ----------

const courseRu: SeoConfig = {
  title: 'Курс по трейдингу с наставником | Arapov Trade - Arapov Education',
  description:
    'Интенсивный курс из 10 занятий: освоите торговую систему, изучите основы анализа рынка и совершите первые сделки под руководством наставника.',
  canonical: `${BASE_URL}/ru/course`,
  ogImage: OG_IMAGE,
  ogImageWidth: 782,
  ogImageHeight: 359,
  locale: 'ru_RU',
  htmlLang: 'ru-RU',
  siteName: SITE_NAME,
  publishedTime: '2025-10-05T23:07:46+00:00',
  modifiedTime: '2026-04-24T14:27:37+00:00',
  readingTime: '4 минуты',
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/course` },
    { hreflang: 'en', href: `${BASE_URL}/en/course-en` },
    { hreflang: 'uk', href: `${BASE_URL}/course-ua` },
  ],
  jsonLd: buildArticleJsonLd({
    url: `${BASE_URL}/ru/course`,
    headline: 'Курс по трейдингу с наставником | Arapov Trade - Arapov Education',
    description:
      'Интенсивный курс из 10 занятий: освоите торговую систему, изучите основы анализа рынка и совершите первые сделки под руководством наставника.',
    inLanguage: 'ru-RU',
    published: '2025-10-05T23:07:46+00:00',
    modified: '2026-04-24T14:27:37+00:00',
  }),
};

const courseEn: SeoConfig = {
  title: 'Professional Trading Course With A Mentor | Arapov Trade - Arapov Education',
  description:
    'Comprehensive Trading Course by Igor Arapov. Get a ready-to-use trading system and start your professional journey',
  canonical: `${BASE_URL}/en/course-en`,
  ogImage: OG_IMAGE,
  ogImageWidth: 782,
  ogImageHeight: 359,
  locale: 'en_US',
  htmlLang: 'en-US',
  siteName: SITE_NAME,
  publishedTime: '2025-10-07T23:19:47+00:00',
  modifiedTime: '2026-04-24T14:31:34+00:00',
  readingTime: '5 minutes',
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/course` },
    { hreflang: 'en', href: `${BASE_URL}/en/course-en` },
    { hreflang: 'uk', href: `${BASE_URL}/course-ua` },
  ],
  jsonLd: buildArticleJsonLd({
    url: `${BASE_URL}/en/course-en`,
    headline: 'Professional Trading Course With A Mentor | Arapov Trade - Arapov Education',
    description:
      'Comprehensive Trading Course by Igor Arapov. Get a ready-to-use trading system and start your professional journey',
    inLanguage: 'en-US',
    published: '2025-10-07T23:19:47+00:00',
    modified: '2026-04-24T14:31:34+00:00',
  }),
};

const courseUa: SeoConfig = {
  title: 'Професійний курс з трейдингу з наставником | Arapov Trade - Arapov Education',
  description:
    'Інтенсивний курс із 10 занять: опануєте торгову систему, вивчите основи аналізу ринку та зробите перші угоди під керівництвом наставника.',
  canonical: `${BASE_URL}/course-ua`,
  ogImage: OG_IMAGE,
  ogImageWidth: 782,
  ogImageHeight: 359,
  locale: 'uk_UA', // на оригинале почему-то стоит en_US в og:locale (баг WP-плагина) — тут ставим правильный uk_UA
  htmlLang: 'uk-UA',
  siteName: SITE_NAME,
  publishedTime: '2025-10-16T15:57:17+00:00',
  modifiedTime: '2026-04-24T14:32:49+00:00',
  readingTime: '4 хвилини',
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/course` },
    { hreflang: 'en', href: `${BASE_URL}/en/course-en` },
    { hreflang: 'uk', href: `${BASE_URL}/course-ua` },
  ],
  jsonLd: buildArticleJsonLd({
    url: `${BASE_URL}/course-ua`,
    headline: 'Професійний курс з трейдингу з наставником | Arapov Trade - Arapov Education',
    description:
      'Інтенсивний курс із 10 занять: опануєте торгову систему, вивчите основи аналізу ринку та зробите перші угоди під керівництвом наставника.',
    inLanguage: 'uk-UA',
    published: '2025-10-16T15:57:17+00:00',
    modified: '2026-04-24T14:32:49+00:00',
  }),
};

// ---------- Privacy Policy ----------
// TODO: открой /privacy-policy/, /en/privacy-policy-en/, /ua/privacy-policy-ua/
// на оригинале через DevTools -> Elements -> <head> и вставь точный title/description.
// Ниже — заготовка со структурой, чтобы не забыть ни одно поле.

const privacyPolicyRu: SeoConfig = {
  title: 'TODO: точный title со страницы /privacy-policy',
  description: 'TODO: точный description со страницы /privacy-policy',
  canonical: `${BASE_URL}/ru/privacy-policy`,
  ogImage: OG_IMAGE,
  locale: 'ru_RU',
  htmlLang: 'ru-RU',
  siteName: SITE_NAME,
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/privacy-policy` },
    { hreflang: 'en', href: `${BASE_URL}/en/privacy-policy-en` },
    { hreflang: 'uk', href: `${BASE_URL}/ua/privacy-policy-ua` },
  ],
};

const privacyPolicyEn: SeoConfig = {
  title: 'TODO: точный title со страницы /en/privacy-policy-en',
  description: 'TODO: точный description со страницы /en/privacy-policy-en',
  canonical: `${BASE_URL}/en/privacy-policy`,
  ogImage: OG_IMAGE,
  locale: 'en_US',
  htmlLang: 'en-US',
  siteName: SITE_NAME,
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/privacy-policy` },
    { hreflang: 'en', href: `${BASE_URL}/en/privacy-policy-en` },
    { hreflang: 'uk', href: `${BASE_URL}/ua/privacy-policy-ua` },
  ],
};

const privacyPolicyUa: SeoConfig = {
  title: 'TODO: точный title со страницы /ua/privacy-policy-ua',
  description: 'TODO: точный description со страницы /ua/privacy-policy-ua',
  canonical: `${BASE_URL}/ua/privacy-policy`,
  ogImage: OG_IMAGE,
  locale: 'uk_UA',
  htmlLang: 'uk-UA',
  siteName: SITE_NAME,
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/privacy-policy` },
    { hreflang: 'en', href: `${BASE_URL}/en/privacy-policy-en` },
    { hreflang: 'uk', href: `${BASE_URL}/ua/privacy-policy-ua` },
  ],
};

// ---------- Disclaimer ----------
// TODO: аналогично, забери точные title/description с оригинала:
// /disclaimer-ru/, /en/disclaimer-en/, /ua/disclaimer-ua/

const disclaimerRu: SeoConfig = {
  title: 'TODO: точный title со страницы /disclaimer-ru',
  description: 'TODO: точный description со страницы /disclaimer-ru',
  canonical: `${BASE_URL}/ru/disclaimer`,
  ogImage: OG_IMAGE,
  locale: 'ru_RU',
  htmlLang: 'ru-RU',
  siteName: SITE_NAME,
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/disclaimer` },
    { hreflang: 'en', href: `${BASE_URL}/en/disclaimer` },
    { hreflang: 'uk', href: `${BASE_URL}/ua/disclaimer` },
  ],
};

const disclaimerEn: SeoConfig = {
  title: 'TODO: точный title со страницы /en/disclaimer-en',
  description: 'TODO: точный description со страницы /en/disclaimer-en',
  canonical: `${BASE_URL}/en/disclaimer`,
  ogImage: OG_IMAGE,
  locale: 'en_US',
  htmlLang: 'en-US',
  siteName: SITE_NAME,
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/disclaimer` },
    { hreflang: 'en', href: `${BASE_URL}/en/disclaimer` },
    { hreflang: 'uk', href: `${BASE_URL}/ua/disclaimer` },
  ],
};

const disclaimerUa: SeoConfig = {
  title: 'TODO: точный title со страницы /ua/disclaimer-ua',
  description: 'TODO: точный description со страницы /ua/disclaimer-ua',
  canonical: `${BASE_URL}/ua/disclaimer`,
  ogImage: OG_IMAGE,
  locale: 'uk_UA',
  htmlLang: 'uk-UA',
  siteName: SITE_NAME,
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/disclaimer` },
    { hreflang: 'en', href: `${BASE_URL}/en/disclaimer` },
    { hreflang: 'uk', href: `${BASE_URL}/ua/disclaimer` },
  ],
};

// ---------- Экспорт единой структуры ----------

export const SEO_CONTENT = {
  course: {
    ru: courseRu,
    en: courseEn,
    ua: courseUa,
  },
  privacyPolicy: {
    ru: privacyPolicyRu,
    en: privacyPolicyEn,
    ua: privacyPolicyUa,
  },
  disclaimer: {
    ru: disclaimerRu,
    en: disclaimerEn,
    ua: disclaimerUa,
  },
} as const;

// ---------- Хелпер для JSON-LD (упрощённая схема Article, аналог Rank Math) ----------

function buildArticleJsonLd(params: {
  url: string;
  headline: string;
  description: string;
  inLanguage: string;
  published: string;
  modified: string;
}) {
  const personId = `${BASE_URL}/#person`;
  const websiteId = `${BASE_URL}/#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Person', 'Organization'],
        '@id': personId,
        name: SITE_NAME,
        logo: {
          '@type': 'ImageObject',
          '@id': `${BASE_URL}/#logo`,
          url: `${BASE_URL}/assets/images/favicon.ico`,
          caption: SITE_NAME,
          inLanguage: params.inLanguage,
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: BASE_URL,
        name: SITE_NAME,
        publisher: { '@id': personId },
        inLanguage: params.inLanguage,
      },
      {
        '@type': 'WebPage',
        '@id': `${params.url}#webpage`,
        url: params.url,
        name: params.headline,
        datePublished: params.published,
        dateModified: params.modified,
        isPartOf: { '@id': websiteId },
        inLanguage: params.inLanguage,
      },
      {
        '@type': 'Article',
        headline: params.headline,
        description: params.description,
        datePublished: params.published,
        dateModified: params.modified,
        publisher: { '@id': personId },
        isPartOf: { '@id': `${params.url}#webpage` },
        mainEntityOfPage: { '@id': `${params.url}#webpage` },
        inLanguage: params.inLanguage,
      },
    ],
  };
}