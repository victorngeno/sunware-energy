import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dual Residential Solar Installation — Tigoni, Kiambu County | Sunware Energy',
  description: 'Sunware Energy completed a 12.4kWp dual residential solar installation in Tigoni with a 16kW hybrid inverter and 32kWh lithium battery storage. View the full project.',
  alternates: { canonical: 'https://sunwareenergy.com/portfolio/tigoni' },
  openGraph: {
    title: 'Dual Residential Solar Installation — Tigoni, Kiambu County | Sunware Energy',
    description: 'Sunware Energy completed a 12.4kWp dual residential solar installation in Tigoni with a 16kW hybrid inverter and 32kWh lithium battery storage. View the full project.',
    url: 'https://sunwareenergy.com/portfolio/tigoni',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dual Residential Solar Installation — Tigoni, Kiambu County | Sunware Energy',
    description: 'Sunware Energy completed a 12.4kWp dual residential solar installation in Tigoni with a 16kW hybrid inverter and 32kWh lithium battery storage. View the full project.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
