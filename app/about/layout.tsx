import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Sunware Energy Limited Kenya',
  description: 'Learn about Sunware Energy Limited - an EPRA licensed solar company based in Nairobi, Kenya. Meet our team and learn about our mission to provide affordable solar energy solutions across Kenya.',
  alternates: { canonical: 'https://sunwareenergy.com/about' },
  openGraph: {
    title: 'About Us | Sunware Energy Limited Kenya',
    description: 'Learn about Sunware Energy Limited - an EPRA licensed solar company based in Nairobi, Kenya. Meet our team and learn about our mission to provide affordable solar energy solutions across Kenya.',
    url: 'https://sunwareenergy.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Sunware Energy Limited Kenya',
    description: 'Learn about Sunware Energy Limited - an EPRA licensed solar company based in Nairobi, Kenya. Meet our team and learn about our mission to provide affordable solar energy solutions across Kenya.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
