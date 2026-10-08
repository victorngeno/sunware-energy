import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hybrid Solar Installation Kileleshwa Nairobi | Sunware Energy',
  description: 'Sunware Energy completed a residential hybrid solar installation in Kileleshwa, Nairobi. Grid-tied solar with battery backup providing reliable power for a modern home.',
  alternates: { canonical: 'https://sunwareenergy.com/portfolio/kileleshwa' },
  openGraph: {
    title: 'Hybrid Solar Installation Kileleshwa Nairobi | Sunware Energy',
    description: 'Sunware Energy completed a residential hybrid solar installation in Kileleshwa, Nairobi. Grid-tied solar with battery backup providing reliable power for a modern home.',
    url: 'https://sunwareenergy.com/portfolio/kileleshwa',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hybrid Solar Installation Kileleshwa Nairobi | Sunware Energy',
    description: 'Sunware Energy completed a residential hybrid solar installation in Kileleshwa, Nairobi. Grid-tied solar with battery backup providing reliable power for a modern home.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
