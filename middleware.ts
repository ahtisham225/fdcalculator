import { NextRequest, NextResponse } from 'next/server';

const BOT_AGENTS = [
  'googlebot',
  'bingbot',
  'yandex',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest/0.',
  'developers.google.com/+/web/snippet',
  'slackbot',
  'vkshare',
  'w3c_validator',
  'redditbot',
  'applebot',
  'whatsapp',
  'flipboard',
  'tumblr',
  'bitlybot',
  'skypeuripreview',
  'nuzzel',
  'discordbot',
  'google page speed',
  'qwantify',
  'pinterestbot',
  'bitrix link preview',
  'xing-contenttabreceiver',
  'chrome-lighthouse',
  'telegrambot',
];

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)).*)',
  ],
};

export default async function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  
  const isBot = BOT_AGENTS.some((bot) => userAgent.includes(bot));
  
  if (!isBot) {
    return NextResponse.next();
  }

  const prerenderToken = process.env.PRERENDER_TOKEN;
  
  if (!prerenderToken) {
    console.warn('PRERENDER_TOKEN not set, serving original content to bot');
    return NextResponse.next();
  }

  const url = request.url;
  const prerenderUrl = `https://service.prerender.io/${url}`;

  try {
    const response = await fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': prerenderToken,
      },
    });

    if (!response.ok) {
      console.error(`Prerender returned ${response.status}`);
      return NextResponse.next();
    }

    const html = await response.text();
    
    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Prerendered': 'true',
      },
    });
  } catch (error) {
    console.error('Prerender error:', error);
    return NextResponse.next();
  }
}
