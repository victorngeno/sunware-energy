import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Solar System Calculator Kenya | Sunware Energy',
  description: 'Use our free solar calculator to estimate the right solar system size for your home or business in Kenya. Get instant results based on your appliances and usage.',
  alternates: { canonical: 'https://sunwareenergy.com/calculator' },
  openGraph: {
    title: 'Free Solar System Calculator Kenya | Sunware Energy',
    description: 'Use our free solar calculator to estimate the right solar system size for your home or business in Kenya. Get instant results based on your appliances and usage.',
    url: 'https://sunwareenergy.com/calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Solar System Calculator Kenya | Sunware Energy',
    description: 'Use our free solar calculator to estimate the right solar system size for your home or business in Kenya. Get instant results based on your appliances and usage.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
