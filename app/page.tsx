"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
    <main className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 shadow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10">{/* h-10 = 40px to match navbar height */}
                <Link href="/">
                  <Image src="/Sunware Logo.png" alt="Sunware Energy logo" width={80} height={40} className="object-contain h-full w-auto" />
                </Link>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:underline">Home</Link>
              <Link href="/about" className="text-white hover:underline">About</Link>
              <Link href="/quote" className="text-white hover:underline">Get a Quote</Link>
              <Link href="/services" className="text-white hover:underline">Services</Link>
              <Link href="/contact" className="text-white hover:underline">Contact</Link>
            </nav>
            <div className="md:hidden">
              {/* Mobile menu button */}
              <button type="button" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)} aria-controls="mobile-menu" aria-expanded={mobileOpen} className="text-white focus:outline-none">☰</button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden bg-gradient-to-r from-[#2ebc6e] to-[#0a7c6e]">
          <div className="px-6 pt-2 pb-4 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block text-white py-2">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-white py-2">About</Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="block text-white py-2">Services</Link>
            <Link href="/quote" onClick={() => setMobileOpen(false)} className="block text-white py-2">Get a Quote</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-white py-2">Contact</Link>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="bg-gradient-to-b from-yellow-50 to-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">Reliable solar power for homes and businesses in Kenya</h1>
              <p className="mt-6 text-lg text-gray-700">Sunware Energy Limited delivers premium solar installation, maintenance and consultancy services to help you save on energy costs and reduce your carbon footprint.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow">Get a free quote</Link>
                <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-orange-300 bg-white text-orange-600 font-semibold">Our Services</Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
                <img src="/Imarisha Fort tenan image 1.jpeg" alt="Solar project - Imarisha Fort" width={800} height={550} className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] object-cover rounded-2xl shadow-sm" onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
  <section id="services" className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
          <p className="mt-2 text-gray-600">Comprehensive solar services from planning to long-term support.</p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">

            <article className="bg-white border rounded-lg shadow-sm hover:shadow-md transition">
                <div className="overflow-hidden rounded-t-lg">
                <Image src="/solar-panels-943999_1280-1024x768.webp" alt="Residential solar" width={600} height={300} className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[300px] object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mt-4 text-lg font-bold">Residential Solar Solution</h3>
                <p className="mt-2 text-gray-700">We design and install custom home solar systems that match your energy usage — whether you want to cut your bills or go fully off-grid. From 1-bedroom apartments to large homes, we've got you covered.</p>
              </div>
            </article>

            <article className="bg-white border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="overflow-hidden rounded-t-lg">
                <Image src="/Commercial-installation-1-1024x770.webp" alt="Commercial solar" width={600} height={300} className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[300px] object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mt-4 text-lg font-bold">Commercial Solar Solution</h3>
                <p className="mt-2 text-gray-700">Our commercial solar systems are designed for businesses, factories, and institutions across Kenya. We handle everything from site survey to installation, so you can focus on running your business — not your electricity bill.</p>
              </div>
            </article>

            <article className="bg-white border rounded-lg shadow-sm hover:shadow-md transition">
                <div className="overflow-hidden rounded-t-lg">
                <Image src="/20251117_134715.webp" alt="Solar water pumping" width={600} height={300} className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[300px] object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mt-4 text-lg font-bold">Solar Water Pumping Solutions</h3>
                <p className="mt-2 text-gray-700">We offer a full range of solar water pumping solutions, from small shallow well systems to boreholes. Our services include drilling, equipping boreholes, and solarizing them for efficient water pumping.</p>
              </div>
            </article>

            <article className="bg-white border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="overflow-hidden rounded-t-lg">
                <Image src="/energy-auditing-services-500x500-1.webp" alt="Energy audit" width={600} height={300} className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[300px] object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mt-4 text-lg font-bold">Energy Audit</h3>
                <p className="mt-2 text-gray-700">We provide a full range of energy audits, from walk-through assessments to detailed economic-grade evaluations that identify energy efficiency improvements and cost savings.</p>
              </div>
            </article>

            <article className="bg-white border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="overflow-hidden rounded-t-lg">
                <Image src="/20251216_163426.webp" alt="Solar water heating" width={600} height={300} className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[300px] object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mt-4 text-lg font-bold">Solar Water Heating Solutions</h3>
                <p className="mt-2 text-gray-700">Heat water using the sun — for free. Our solar water heaters reduce water heating costs by up to 80%. Ideal for homes, hotels, hospitals, and rental properties.</p>
              </div>
            </article>

            <article className="bg-white border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="overflow-hidden rounded-t-lg">
                <Image src="/Panel-Cleaning-at-Unga-house-1.webp" alt="Panel cleaning" width={600} height={300} className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[300px] object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mt-4 text-lg font-bold">Cleaning and Maintenance Services</h3>
                <p className="mt-2 text-gray-700">Our professional cleaning and maintenance service keeps your system performing at its peak all year round. We offer one-off cleans and regular maintenance packages across Kenya.</p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="about" className="py-16 bg-gradient-to-r from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Why choose Sunware Energy?</h2>
          <p className="mt-2 text-gray-600">Local expertise, proven performance and customer-first service.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border rounded-lg text-center">
              <div className="text-4xl">⚡</div>
              <h4 className="mt-4 font-semibold">Reliable Performance</h4>
              <p className="mt-2 text-gray-600">High-quality components and certified installers.</p>
            </div>

            <div className="p-6 bg-white border rounded-lg text-center">
              <div className="text-4xl">🌍</div>
              <h4 className="mt-4 font-semibold">Sustainable Impact</h4>
              <p className="mt-2 text-gray-600">Reduce emissions and lower energy bills.</p>
            </div>

            <div className="p-6 bg-white border rounded-lg text-center">
              <div className="text-4xl">📈</div>
              <h4 className="mt-4 font-semibold">Cost Savings</h4>
              <p className="mt-2 text-gray-600">Competitive pricing and tailored financing options.</p>
            </div>

            <div className="p-6 bg-white border rounded-lg text-center">
              <div className="text-4xl">🤝</div>
              <h4 className="mt-4 font-semibold">Trusted Support</h4>
              <p className="mt-2 text-gray-600">Responsive maintenance and customer care across Kenya.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">Get in touch</h2>
          <p className="mt-2 text-gray-600">Reach out for a free consultation or site survey.</p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://api.whatsapp.com/send?phone=254700000000&text=Hello%20Sunware%20Energy%2C%20I%27d%20like%20a%20quote" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 .5C6.48.5 1.8 4.9.59 10.1c-.21.9-.29 1.83-.22 2.75L0 17l3.35-.88c1.07-.28 2.17-.42 3.29-.42 5.52 0 10.2-4.4 11.41-9.6.25-1.08.25-2.17.09-3.05zM12 1.5c4.97 0 9 3.46 9.86 8.06.15.64.16 1.31.03 1.96-.97 4.07-4.9 7.04-9.78 7.04-1.07 0-2.12-.17-3.11-.5L6 20l1.47-3.77C6.06 14.95 5.5 13.55 5.5 12c0-3.04 1.41-5.79 3.66-7.39C10.98 3.01 11.48 2.5 12 1.5z"/></svg>
              Message us on WhatsApp
            </a>

            <a href="mailto:info@sunware.co.ke" className="inline-flex items-center px-6 py-3 rounded-md border border-orange-300 bg-white text-orange-600 font-semibold">Email us</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <div className="font-bold">Sunware Energy Limited</div>
            <div className="text-sm text-gray-300">© {new Date().getFullYear()} Sunware Energy Limited. All rights reserved.</div>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
            <a href="#" className="text-gray-300 hover:text-white">Terms</a>
            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
    
    {/* Floating WhatsApp button */}
    <div className="fixed bottom-6 right-6 z-50">
      <a href="https://wa.me/254724659062" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.738 5.471 2.031 7.772L0 32l8.418-2.01A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.765-1.847l-.485-.287-5.001 1.194 1.234-4.863-.317-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.873c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.631-.199-.897.199-.266.398-1.03 1.294-1.263 1.56-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.2-1.974-1.183-1.054-1.981-2.356-2.213-2.754-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.067-.499-.033-.698-.1-.199-.897-2.162-1.229-2.96-.324-.777-.653-.672-.897-.684l-.765-.013c-.266 0-.698.1-1.063.499-.365.398-1.394 1.362-1.394 3.325s1.427 3.854 1.626 4.12c.199.266 2.808 4.286 6.802 6.014.951.411 1.693.656 2.271.839.954.304 1.823.261 2.51.158.765-.114 2.354-.962 2.686-1.891.332-.929.332-1.726.232-1.891-.1-.166-.365-.266-.763-.465z"/>
        </svg>
        <span className="absolute -left-36 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-sm px-3 py-1 rounded-md shadow-lg transition-opacity">Chat with us</span>
      </a>
    </div>
    </>
  )
}
