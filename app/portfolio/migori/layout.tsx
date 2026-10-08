import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '12kW Hybrid Solar Installation Migori Kenya | Sunware Energy',
  description: 'Sunware Energy designed and installed a 12kW off-grid hybrid solar system in Migori, Kenya. Powers a full residential home and adjacent small business with clean solar energy.',
  alternates: { canonical: 'https://sunwareenergy.com/portfolio/migori' },
  openGraph: {
    title: '12kW Hybrid Solar Installation Migori Kenya | Sunware Energy',
    description: 'Sunware Energy designed and installed a 12kW off-grid hybrid solar system in Migori, Kenya. Powers a full residential home and adjacent small business with clean solar energy.',
    url: 'https://sunwareenergy.com/portfolio/migori',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '12kW Hybrid Solar Installation Migori Kenya | Sunware Energy',
    description: 'Sunware Energy designed and installed a 12kW off-grid hybrid solar system in Migori, Kenya. Powers a full residential home and adjacent small business with clean solar energy.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
