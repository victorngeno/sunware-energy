import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Sunware Energy Limited | Solar Company Nairobi Kenya',
  description: 'Contact Sunware Energy Limited at Samtech Plaza, Utawala, Eastern Bypass, Nairobi. Call +254 724 659 062 for a free solar consultation anywhere in Kenya.',
  alternates: { canonical: 'https://sunwareenergy.com/contact' },
  openGraph: {
    title: 'Contact Sunware Energy Limited | Solar Company Nairobi Kenya',
    description: 'Contact Sunware Energy Limited at Samtech Plaza, Utawala, Eastern Bypass, Nairobi. Call +254 724 659 062 for a free solar consultation anywhere in Kenya.',
    url: 'https://sunwareenergy.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Sunware Energy Limited | Solar Company Nairobi Kenya',
    description: 'Contact Sunware Energy Limited at Samtech Plaza, Utawala, Eastern Bypass, Nairobi. Call +254 724 659 062 for a free solar consultation anywhere in Kenya.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
