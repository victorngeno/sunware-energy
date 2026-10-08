import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Water Pumping Installation Langata Nairobi | Sunware Energy',
  description: 'Sunware Energy installed a 15kWp solar water pumping system in Langata, Nairobi. Solar borehole pump solution eliminating grid electricity costs for water pumping.',
  alternates: { canonical: 'https://sunwareenergy.com/portfolio/langata-water-pumping' },
  openGraph: {
    title: 'Solar Water Pumping Installation Langata Nairobi | Sunware Energy',
    description: 'Sunware Energy installed a 15kWp solar water pumping system in Langata, Nairobi. Solar borehole pump solution eliminating grid electricity costs for water pumping.',
    url: 'https://sunwareenergy.com/portfolio/langata-water-pumping',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Water Pumping Installation Langata Nairobi | Sunware Energy',
    description: 'Sunware Energy installed a 15kWp solar water pumping system in Langata, Nairobi. Solar borehole pump solution eliminating grid electricity costs for water pumping.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
