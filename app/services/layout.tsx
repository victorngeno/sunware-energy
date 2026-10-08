import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Services Kenya | Sunware Energy Limited',
  description: 'We offer residential solar installation, commercial solar, solar water pumping, energy audits, solar water heating and maintenance services across Kenya.',
  alternates: { canonical: 'https://sunwareenergy.com/services' },
  openGraph: {
    title: 'Solar Services Kenya | Sunware Energy Limited',
    description: 'We offer residential solar installation, commercial solar, solar water pumping, energy audits, solar water heating and maintenance services across Kenya.',
    url: 'https://sunwareenergy.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Services Kenya | Sunware Energy Limited',
    description: 'We offer residential solar installation, commercial solar, solar water pumping, energy audits, solar water heating and maintenance services across Kenya.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
