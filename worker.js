// Existing WayForPay buttons link to these legacy PDF addresses.
const offerRedirects = new Map([
  [
    '/wp-content/uploads/2025/10/dogovor_publichnoj_oferty_po_polzovaniyu_uslugami-arapov.pdf',
    '/ru/public-agreement',
  ],
  ['/wp-content/uploads/2025/10/dpo-arapov-navchannya.pdf', '/public-agreement-ua'],
  ['/wp-content/uploads/2025/10/public-offer-agreement-arapov-education.pdf', '/en/public-agreement-en'],
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const offerPath = offerRedirects.get(url.pathname);
    if (offerPath) {
      url.pathname = offerPath;
      return Response.redirect(url.toString(), 302);
    }

    if (url.pathname === '/') {
      url.pathname = '/course-ua';
      return Response.redirect(url.toString(), 301);
    }

    const assetResponse = await env.ASSETS.fetch(request);

    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    const indexUrl = new URL('/index.html', request.url);
    const indexResponse = await env.ASSETS.fetch(
      new Request(indexUrl, request)
    );

    return new Response(indexResponse.body, {
      status: 404,
      headers: indexResponse.headers,
    });
  },
};
