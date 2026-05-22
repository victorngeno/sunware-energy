import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://sunwareenergy.com', lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: 'https://sunwareenergy.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://sunwareenergy.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://sunwareenergy.com/portfolio', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://sunwareenergy.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://sunwareenergy.com/calculator', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://sunwareenergy.com/portfolio/imaarisha-sacco', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://sunwareenergy.com/portfolio/kiu-river', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://sunwareenergy.com/portfolio/langata-water-pumping', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://sunwareenergy.com/portfolio/kileleshwa', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://sunwareenergy.com/portfolio/nandi-hills-school', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://sunwareenergy.com/portfolio/knh-hospital', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://sunwareenergy.com/portfolio/migori', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://sunwareenergy.com/portfolio/oloiting-resort', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]
}
