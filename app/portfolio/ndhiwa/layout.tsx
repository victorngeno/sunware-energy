import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Solar & Solar Water Pumping in Ndhiwa, Homa Bay County | Sunware Energy',
  description: 'Sunware Energy installed two solar systems in Ndhiwa: a 7.38kWp home system with a 10kW hybrid inverter and 10kWh lithium battery, plus a 4.92kWp solar water pumping system. View the full project.',
  alternates: { canonical: 'https://sunwareenergy.com/portfolio/ndhiwa' },
  openGraph: {
    title: 'Home Solar & Solar Water Pumping in Ndhiwa, Homa Bay County | Sunware Energy',
    description: 'Sunware Energy installed two solar systems in Ndhiwa: a 7.38kWp home system with a 10kW hybrid inverter and 10kWh lithium battery, plus a 4.92kWp solar water pumping system. View the full project.',
    url: 'https://sunwareenergy.com/portfolio/ndhiwa',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Solar & Solar Water Pumping in Ndhiwa, Homa Bay County | Sunware Energy',
    description: 'Sunware Energy installed two solar systems in Ndhiwa: a 7.38kWp home system with a 10kW hybrid inverter and 10kWh lithium battery, plus a 4.92kWp solar water pumping system. View the full project.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
