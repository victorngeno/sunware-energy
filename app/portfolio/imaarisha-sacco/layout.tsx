import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5kW Solar Installation Kericho | Imaarisha SACCO | Sunware Energy',
  description: 'Sunware Energy completed a 5kW hybrid solar installation for Imaarisha SACCO offices in Fort Ternan, Kericho County. Includes 620W panels, 5kW inverter and 10kWh lithium battery.',
  alternates: { canonical: 'https://sunwareenergy.com/portfolio/imaarisha-sacco' },
  openGraph: {
    title: '5kW Solar Installation Kericho | Imaarisha SACCO | Sunware Energy',
    description: 'Sunware Energy completed a 5kW hybrid solar installation for Imaarisha SACCO offices in Fort Ternan, Kericho County. Includes 620W panels, 5kW inverter and 10kWh lithium battery.',
    url: 'https://sunwareenergy.com/portfolio/imaarisha-sacco',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5kW Solar Installation Kericho | Imaarisha SACCO | Sunware Energy',
    description: 'Sunware Energy completed a 5kW hybrid solar installation for Imaarisha SACCO offices in Fort Ternan, Kericho County. Includes 620W panels, 5kW inverter and 10kWh lithium battery.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
