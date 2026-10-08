import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residential Solar Installation Nairobi | Kiu River | Sunware Energy',
  description: 'Sunware Energy completed a residential solar and solar water heating installation at Kiu River, Kahawa Sukari, Nairobi. 8kW solar PV system with 5kWh battery and 300L solar water heater.',
  alternates: { canonical: 'https://sunwareenergy.com/portfolio/kiu-river' },
  openGraph: {
    title: 'Residential Solar Installation Nairobi | Kiu River | Sunware Energy',
    description: 'Sunware Energy completed a residential solar and solar water heating installation at Kiu River, Kahawa Sukari, Nairobi. 8kW solar PV system with 5kWh battery and 300L solar water heater.',
    url: 'https://sunwareenergy.com/portfolio/kiu-river',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Solar Installation Nairobi | Kiu River | Sunware Energy',
    description: 'Sunware Energy completed a residential solar and solar water heating installation at Kiu River, Kahawa Sukari, Nairobi. 8kW solar PV system with 5kWh battery and 300L solar water heater.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
