import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '30kWh Solar Backup System Nairobi Hospital | Sunware Energy',
  description: 'Sunware Energy installed a 30kWh hybrid power backup system at Kenyatta National Hospital, Upperhill, Nairobi. Ensuring uninterrupted power for critical medical equipment.',
  alternates: { canonical: 'https://sunwareenergy.com/portfolio/knh-hospital' },
  openGraph: {
    title: '30kWh Solar Backup System Nairobi Hospital | Sunware Energy',
    description: 'Sunware Energy installed a 30kWh hybrid power backup system at Kenyatta National Hospital, Upperhill, Nairobi. Ensuring uninterrupted power for critical medical equipment.',
    url: 'https://sunwareenergy.com/portfolio/knh-hospital',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '30kWh Solar Backup System Nairobi Hospital | Sunware Energy',
    description: 'Sunware Energy installed a 30kWh hybrid power backup system at Kenyatta National Hospital, Upperhill, Nairobi. Ensuring uninterrupted power for critical medical equipment.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
