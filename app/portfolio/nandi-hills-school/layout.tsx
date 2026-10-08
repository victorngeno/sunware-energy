import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '10kW Solar Installation Nandi Hills School | Sunware Energy Kenya',
  description: 'Sunware Energy installed a 10kW hybrid solar system for a secondary school in Nandi Hills, Kenya. Off-grid solar with KPLC backup reducing electricity costs for the institution.',
  alternates: { canonical: 'https://sunwareenergy.com/portfolio/nandi-hills-school' },
  openGraph: {
    title: '10kW Solar Installation Nandi Hills School | Sunware Energy Kenya',
    description: 'Sunware Energy installed a 10kW hybrid solar system for a secondary school in Nandi Hills, Kenya. Off-grid solar with KPLC backup reducing electricity costs for the institution.',
    url: 'https://sunwareenergy.com/portfolio/nandi-hills-school',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10kW Solar Installation Nandi Hills School | Sunware Energy Kenya',
    description: 'Sunware Energy installed a 10kW hybrid solar system for a secondary school in Nandi Hills, Kenya. Off-grid solar with KPLC backup reducing electricity costs for the institution.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
