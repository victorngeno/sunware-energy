import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Off-Grid Solar Installation Kajiado | Oloiting Resort | Sunware Energy',
  description: 'Sunware Energy completed a dual off-grid solar installation for a resort in Oloiting, Kajiado County. Two independent solar systems providing clean reliable power in a remote location.',
  alternates: { canonical: 'https://sunwareenergy.com/portfolio/oloiting-resort' },
  openGraph: {
    title: 'Off-Grid Solar Installation Kajiado | Oloiting Resort | Sunware Energy',
    description: 'Sunware Energy completed a dual off-grid solar installation for a resort in Oloiting, Kajiado County. Two independent solar systems providing clean reliable power in a remote location.',
    url: 'https://sunwareenergy.com/portfolio/oloiting-resort',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Off-Grid Solar Installation Kajiado | Oloiting Resort | Sunware Energy',
    description: 'Sunware Energy completed a dual off-grid solar installation for a resort in Oloiting, Kajiado County. Two independent solar systems providing clean reliable power in a remote location.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
