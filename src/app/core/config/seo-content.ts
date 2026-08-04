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
const OG_IMAGE = `${BASE_URL}/assets/images/arapov-copytrade-3-300x195.jpg`; // перезалей картинку к себе, не тяни с чужого домена
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
    { hreflang: 'x-default', href: `${BASE_URL}/course-ua` },
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
    { hreflang: 'x-default', href: `${BASE_URL}/course-ua` },
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
    { hreflang: 'x-default', href: `${BASE_URL}/course-ua` },
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
  title: 'Политика Конфиденциальности - Arapov Education',
  description:
    'Политика конфиденциальности описывает порядок сбора, хранения и защиты персональных данных пользователей. Узнайте, как мы обеспечиваем вашу безопасность.',
  canonical: `${BASE_URL}/ru/privacy-policy`,
  ogImage: OG_IMAGE, // на оригинале для RU-версии og:image не задан вообще, используем дефолтную
  locale: 'ru_RU',
  htmlLang: 'ru-RU',
  siteName: SITE_NAME,
  publishedTime: '2025-09-06T17:01:05+00:00',
  modifiedTime: '2026-02-14T18:37:24+00:00',
  readingTime: '5 минут',
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/privacy-policy` },
    { hreflang: 'en', href: `${BASE_URL}/en/privacy-policy-en` },
    { hreflang: 'uk', href: `${BASE_URL}/privacy-policy-ua` },
    { hreflang: 'x-default', href: `${BASE_URL}/privacy-policy-ua` },
  ],
};


const privacyPolicyEn: SeoConfig = {
  title: 'Privacy Policy EN - Arapov Education',
  description:
    "The Privacy Policy describes the procedure for collecting, storing, and protecting users' personal data. Learn how we ensure your security.",
  canonical: `${BASE_URL}/en/privacy-policy-en`,
  ogImage: `${BASE_URL}/wp-content/uploads/2025/09/privacy-policy.jpg`, // TODO: перезалить к себе в assets
  ogImageWidth: 1920,
  ogImageHeight: 1080,
  locale: 'en_US',
  htmlLang: 'en-US',
  siteName: SITE_NAME,
  publishedTime: '2025-09-10T18:09:00+00:00',
  modifiedTime: '2026-02-14T18:34:33+00:00',
  readingTime: '6 minutes',
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/privacy-policy` },
    { hreflang: 'en', href: `${BASE_URL}/en/privacy-policy-en` },
    { hreflang: 'uk', href: `${BASE_URL}/privacy-policy-ua` },
    { hreflang: 'x-default', href: `${BASE_URL}/privacy-policy-ua` },
  ],
};


const privacyPolicyUa: SeoConfig = {
  title: 'Політика конфіденційності - Arapov Education',
  description:
    'Політика конфіденційності описує порядок збору, зберігання та захисту персональних даних користувачів. Дізнайтеся, як ми забезпечуємо вашу безпеку.',
  canonical: `${BASE_URL}/privacy-policy-ua`,
  ogImage: OG_IMAGE, // на оригинале og:locale для UA-версии тоже стоит en_US (тот же баг), og:image не задан
  locale: 'uk_UA',
  htmlLang: 'uk-UA',
  siteName: SITE_NAME,
  publishedTime: '2025-10-16T15:18:52+00:00',
  modifiedTime: '2026-02-14T18:34:59+00:00',
  readingTime: '5 хвилин',
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/privacy-policy` },
    { hreflang: 'en', href: `${BASE_URL}/en/privacy-policy-en` },
    { hreflang: 'uk', href: `${BASE_URL}/privacy-policy-ua` },
    { hreflang: 'x-default', href: `${BASE_URL}/privacy-policy-ua` },
  ],
};

// ---------- Disclaimer ----------
// TODO: аналогично, забери точные title/description с оригинала:
// /disclaimer-ru/, /en/disclaimer-en/, /ua/disclaimer-ua/

const disclaimerRu: SeoConfig = {
  title: 'Отказ от ответственности - Arapov Education',
  description:
    'Отказ от ответственности содержит правовую информацию и ограничения по использованию материалов сайта. Пожалуйста, внимательно ознакомьтесь с условиями.',
  canonical: `${BASE_URL}/ru/disclaimer-ru`,
  ogImage: OG_IMAGE, // на оригинале og:image не задан
  locale: 'ru_RU',
  htmlLang: 'ru-RU',
  siteName: SITE_NAME,
  publishedTime: '2025-09-06T17:32:11+00:00',
  modifiedTime: '2026-02-14T18:37:54+00:00',
  readingTime: '1 минута',
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/disclaimer-ru` },
    { hreflang: 'en', href: `${BASE_URL}/en/disclaimer-en` },
    { hreflang: 'uk', href: `${BASE_URL}/disclaimer-ua` },
    { hreflang: 'x-default', href: `${BASE_URL}/disclaimer-ua` },
  ],
};


const disclaimerEn: SeoConfig = {
  title: 'Disclaimer - Arapov Education',
  description:
    "The Disclaimer contains legal information and limitations on the use of the site's materials. Please read the terms carefully.",
  canonical: `${BASE_URL}/en/disclaimer-en`,
  ogImage: `${BASE_URL}/wp-content/uploads/2025/09/disclaimer.jpg`, // TODO: перезалить к себе в assets
  ogImageWidth: 1920,
  ogImageHeight: 1080,
  locale: 'en_US',
  htmlLang: 'en-US',
  siteName: SITE_NAME,
  publishedTime: '2025-09-10T18:21:46+00:00',
  modifiedTime: '2026-02-14T18:35:40+00:00',
  readingTime: '1 minute',
  alternates: [
     { hreflang: 'ru', href: `${BASE_URL}/ru/disclaimer-ru` },
    { hreflang: 'en', href: `${BASE_URL}/en/disclaimer-en` },
    { hreflang: 'uk', href: `${BASE_URL}/disclaimer-ua` },
    { hreflang: 'x-default', href: `${BASE_URL}/disclaimer-ua` },
  ],
};


const disclaimerUa: SeoConfig = {
  title: 'Відмова від відповідальності — Arapov Education',
  description:
    'Відмова від відповідальності містить правову інформацію та обмеження щодо використання матеріалів сайту. Будь ласка, уважно ознайомтеся з умовами.',
  canonical: `${BASE_URL}/disclaimer-ua`,
  ogImage: OG_IMAGE, // на оригинале og:locale стоит en_US (тот же баг плагина), og:image не задан
  locale: 'uk_UA',
  htmlLang: 'uk-UA',
  siteName: SITE_NAME,
  publishedTime: '2025-10-16T14:27:26+00:00',
  modifiedTime: '2026-02-14T18:36:04+00:00',
  readingTime: '1 хвилина',
  alternates: [
     { hreflang: 'ru', href: `${BASE_URL}/ru/disclaimer-ru` },
    { hreflang: 'en', href: `${BASE_URL}/en/disclaimer-en` },
    { hreflang: 'uk', href: `${BASE_URL}/disclaimer-ua` },
    { hreflang: 'x-default', href: `${BASE_URL}/disclaimer-ua` },
  ],
};
// public agreement

const agreementRu: SeoConfig = {
  title: 'Договор публичной офферты сайта Arapov Education',
  description:
    'Договор публичной офферты определяет условия предоставления услуг и права пользователей. Ознакомьтесь с официальным документом перед использованием сайта.',
  canonical: `${BASE_URL}/ru/public-agreement`,
  ogImage: OG_IMAGE,
  locale: 'ru_RU',
  htmlLang: 'ru-RU',
  siteName: SITE_NAME,
  publishedTime: '2025-09-06T16:49:59+00:00',
  modifiedTime: '2026-02-15T04:17:21+00:00',
  readingTime: '9 минут',
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/public-agreement` },
    { hreflang: 'en', href: `${BASE_URL}/en/public-agreement-en` },
    { hreflang: 'uk', href: `${BASE_URL}/public-agreement-ua` },
    { hreflang: 'x-default', href: `${BASE_URL}/public-agreement-ua` },
  ],
};


const agreementEN: SeoConfig = {
  title: 'Public Offer Agreement - Arapov Education',
  description:
    'The Public Offer Agreement defines the terms of service provision and user rights. Please review the official document before using the website.',
  canonical: `${BASE_URL}/en/public-agreement-en`,
  ogImage: `${BASE_URL}/wp-content/uploads/2025/09/public-offer.jpg`, // TODO: перезалить к себе в assets
  ogImageWidth: 1920,
  ogImageHeight: 1080,
  locale: 'en_US',
  htmlLang: 'en-US',
  siteName: SITE_NAME,
  publishedTime: '2025-09-10T17:19:30+00:00',
  modifiedTime: '2026-02-15T04:35:32+00:00',
  readingTime: '11 minutes',
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/public-agreement` },
    { hreflang: 'en', href: `${BASE_URL}/en/public-agreement-en` },
    { hreflang: 'uk', href: `${BASE_URL}/ua/public-agreement-ua` },
    { hreflang: 'x-default', href: `${BASE_URL}/ua/public-agreement-ua` },
  ],
};


const agreementUa: SeoConfig = {
  // TODO: на оригинале нет отдельного украинского перевода этого документа —
  // текст и title/description ниже дублируют русскую версию, как и на сайте.
  title: 'Договор публичной офферты сайта Arapov Education',
  description:
    'Договор публичной офферты определяет условия предоставления услуг и права пользователей. Ознакомьтесь с официальным документом перед использованием сайта.',
  canonical: `${BASE_URL}/ua/public-agreement-ua`,
  ogImage: OG_IMAGE,
  locale: 'uk_UA',
  htmlLang: 'uk-UA',
  siteName: SITE_NAME,
  publishedTime: '2026-02-15T04:21:34+00:00',
  modifiedTime: '2026-02-15T04:22:13+00:00',
  readingTime: '9 minutes',
  alternates: [
    { hreflang: 'ru', href: `${BASE_URL}/ru/public-agreement` },
    { hreflang: 'en', href: `${BASE_URL}/en/public-agreement-en` },
    { hreflang: 'uk', href: `${BASE_URL}/ua/public-agreement-ua` },
    { hreflang: 'x-default', href: `${BASE_URL}/ua/public-agreement-ua` },
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
  agreement: {
    ru: agreementRu,
    en: agreementEN,
    ua: agreementUa,
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
          url: `${BASE_URL}/assets/images/favicon.png`,
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
