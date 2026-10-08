import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '10kW Hybrid Solar Installation Kitengela Kenya | Sunware Energy',
  description: 'Sunware Energy designed and installed a 10kW hybrid solar system — 6.15 kWp of panels with 10kWh of lithium battery storage — for a private residential home in Kitengela, Kajiado County.',
  alternates: { canonical: 'https://sunwareenergy.com/portfolio/kitengela' },
  openGraph: {
    title: '10kW Hybrid Solar Installation Kitengela Kenya | Sunware Energy',
    description: 'Sunware Energy designed and installed a 10kW hybrid solar system — 6.15 kWp of panels with 10kWh of lithium battery storage — for a private residential home in Kitengela, Kajiado County.',
    url: 'https://sunwareenergy.com/portfolio/kitengela',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10kW Hybrid Solar Installation Kitengela Kenya | Sunware Energy',
    description: 'Sunware Energy designed and installed a 10kW hybrid solar system — 6.15 kWp of panels with 10kWh of lithium battery storage — for a private residential home in Kitengela, Kajiado County.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
