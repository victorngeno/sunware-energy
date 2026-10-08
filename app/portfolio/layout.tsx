import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Project Portfolio Kenya | Sunware Energy Limited',
  description: 'View our completed solar installations across Kenya including residential, commercial, schools, hospitals and water pumping projects in Nairobi, Kericho, Nandi Hills, Migori and more.',
  alternates: { canonical: 'https://sunwareenergy.com/portfolio' },
  openGraph: {
    title: 'Solar Project Portfolio Kenya | Sunware Energy Limited',
    description: 'View our completed solar installations across Kenya including residential, commercial, schools, hospitals and water pumping projects in Nairobi, Kericho, Nandi Hills, Migori and more.',
    url: 'https://sunwareenergy.com/portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Project Portfolio Kenya | Sunware Energy Limited',
    description: 'View our completed solar installations across Kenya including residential, commercial, schools, hospitals and water pumping projects in Nairobi, Kericho, Nandi Hills, Migori and more.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
