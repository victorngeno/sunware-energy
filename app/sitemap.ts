import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://sunwareenergy.com'

  const urls = [
    { loc: '/', changefreq: 'daily', priority: '1.0' },
    { loc: '/about', changefreq: 'monthly', priority: '0.8' },
    { loc: '/services', changefreq: 'monthly', priority: '0.9' },
    { loc: '/portfolio', changefreq: 'weekly', priority: '0.8' },
    { loc: '/contact', changefreq: 'monthly', priority: '0.8' },
    { loc: '/calculator', changefreq: 'monthly', priority: '0.7' },
    { loc: '/portfolio/imaarisha-sacco', changefreq: 'monthly', priority: '0.6' },
    { loc: '/portfolio/kiu-river', changefreq: 'monthly', priority: '0.6' },
    { loc: '/portfolio/langata-water-pumping', changefreq: 'monthly', priority: '0.6' },
    { loc: '/portfolio/kileleshwa', changefreq: 'monthly', priority: '0.6' },
    { loc: '/portfolio/nandi-hills-school', changefreq: 'monthly', priority: '0.6' },
    { loc: '/portfolio/knh-hospital', changefreq: 'monthly', priority: '0.6' },
    { loc: '/portfolio/migori', changefreq: 'monthly', priority: '0.6' },
    { loc: '/portfolio/oloiting-resort', changefreq: 'monthly', priority: '0.6' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((u) => {
        return `<url><loc>${baseUrl}${u.loc}</loc><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`
      })
      .join('')}
  </urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
