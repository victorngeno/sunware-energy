"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-[#2ebc6e] to-[#0a7c6e] shadow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10">
                <Link href="/">
                  <Image src="/Sunware Logo.png" alt="Sunware Energy logo" width={80} height={40} className="object-contain h-full w-auto" />
                </Link>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:underline">Home</Link>
              <Link href="/about" className="text-white hover:underline">About</Link>
              <Link href="/services" className="text-white hover:underline">Services</Link>
              <Link href="/quote" className="text-white hover:underline">Get a Quote</Link>
              <Link href="/contact" className="text-white hover:underline">Contact</Link>
            </nav>

            <div className="md:hidden">
              <button aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} className="text-white focus:outline-none">☰</button>
            </div>
          </div>
        </div>
      </header>
      {mobileOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#2ebc6e] to-[#0a7c6e]">
          <div className="px-6 pt-2 pb-4 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block text-white py-2">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-white py-2">About</Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="block text-white py-2">Services</Link>
            <Link href="/quote" onClick={() => setMobileOpen(false)} className="block text-white py-2">Get a Quote</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-white py-2">Contact</Link>
          </div>
        </div>
      )}
      <section className="bg-gradient-to-r from-[#2ebc6e] to-[#0a7c6e] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold">Our Services</h1>
          <p className="mt-3 text-white/90 max-w-2xl">Comprehensive solar services tailored for homes, businesses and communities across Kenya.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <article className="bg-white border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="overflow-hidden rounded-t-lg">
                <Image src="/solar-panels-943999_1280-1024x768.webp" alt="Residential solar" width={600} height={300} className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[300px] object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#e6f6ef]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2ebc6e]" fill="none" viewBox="0 0 24 24" stroke="#2ebc6e">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v10l3-3 4 4v4H5v-4l4-4 3 3V3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Residential Solar Solution</h3>
                </div>
                <p className="mt-4 text-gray-700">We design and install custom home solar systems that match your energy usage — whether you want to cut your bills or go fully off-grid. From 1-bedroom apartments to large homes, we've got you covered.</p>
              </div>
            </article>

            <article className="bg-white border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="overflow-hidden rounded-t-lg">
                <Image src="/Commercial-installation-1-1024x770.webp" alt="Commercial solar" width={600} height={300} className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[300px] object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#e6f6ef]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2ebc6e]" fill="none" viewBox="0 0 24 24" stroke="#2ebc6e">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4l3 9 4-16 3 9h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Commercial Solar Solution</h3>
                </div>
                <p className="mt-4 text-gray-700">Our commercial solar systems are designed for businesses, factories, and institutions across Kenya. We handle everything from site survey to installation, so you can focus on running your business — not your electricity bill.</p>
              </div>
            </article>

            <article className="bg-white border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="overflow-hidden rounded-t-lg">
                <Image src="/20251117_134715.webp" alt="Solar water pumping" width={600} height={300} className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[300px] object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#e6f6ef]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2ebc6e]" viewBox="0 0 24 24" fill="#2ebc6e">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 4.25 4.04 7.74 6.09 9.29.57.46 1.41.46 1.98 0C14.96 16.74 19 13.25 19 9c0-3.87-3.13-7-7-7zM7 20v2h10v-2H7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Solar Water Pumping Solutions</h3>
                </div>
                <p className="mt-4 text-gray-700">We offer a full range of solar water pumping solutions, from small shallow well systems to boreholes. Our services include drilling, equipping boreholes, and solarizing them for efficient water pumping.</p>
              </div>
            </article>

            <article className="bg-white border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="overflow-hidden rounded-t-lg">
                <Image src="/energy-auditing-services-500x500-1.webp" alt="Energy audit" width={600} height={300} className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[300px] object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#e6f6ef]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2ebc6e]" fill="none" viewBox="0 0 24 24" stroke="#2ebc6e">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10M7 11h8" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Energy Audit</h3>
                </div>
                <p className="mt-4 text-gray-700">We provide a full range of energy audits, from walk-through assessments to detailed economic-grade evaluations. These audits identify energy efficiency improvements, uncover cost savings, and enhance energy management.</p>
              </div>
            </article>

            <article className="bg-white border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="overflow-hidden rounded-t-lg">
                <Image src="/20251216_163426.webp" alt="Solar water heating" width={600} height={300} className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[300px] object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#e6f6ef]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2ebc6e]" viewBox="0 0 24 24" fill="#2ebc6e">
                      <path d="M3 6h18v2H3zM5 10h14v10H5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Solar Water Heating Solutions</h3>
                </div>
                <p className="mt-4 text-gray-700">Heat water using the sun — for free. Our solar water heaters reduce water heating costs by up to 80%, making them one of the fastest ROI solar investments you can make. Ideal for homes, hotels, hospitals, and rental properties.</p>
              </div>
            </article>

            <article className="bg-white border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="overflow-hidden rounded-t-lg">
                <Image src="/Panel-Cleaning-at-Unga-house-1.webp" alt="Panel cleaning" width={600} height={300} className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[300px] object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#e6f6ef]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2ebc6e]" fill="none" viewBox="0 0 24 24" stroke="#2ebc6e">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Cleaning and Maintenance Services</h3>
                </div>
                <p className="mt-4 text-gray-700">Our professional cleaning and maintenance service keeps your system performing at its peak all year round. We offer one-off cleans and regular maintenance packages across Kenya.</p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gradient-to-r from-[#f7fdf8] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Sunware Energy?</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white border rounded-lg text-center">
              <div className="text-4xl">⚡</div>
              <h4 className="mt-4 font-semibold">Proven Reliability</h4>
              <p className="mt-2 text-gray-600">High-quality components and certified installers ensure dependable performance.</p>
            </div>

            <div className="p-6 bg-white border rounded-lg text-center">
              <div className="text-4xl">🌍</div>
              <h4 className="mt-4 font-semibold">Local Expertise</h4>
              <p className="mt-2 text-gray-600">Deep knowledge of Kenyan sites, regulations and climate-optimised designs.</p>
            </div>

            <div className="p-6 bg-white border rounded-lg text-center">
              <div className="text-4xl">📈</div>
              <h4 className="mt-4 font-semibold">Cost-effective Solutions</h4>
              <p className="mt-2 text-gray-600">Competitive pricing and tailored financing to maximise ROI.</p>
            </div>

            <div className="p-6 bg-white border rounded-lg text-center">
              <div className="text-4xl">🤝</div>
              <h4 className="mt-4 font-semibold">Full Support</h4>
              <p className="mt-2 text-gray-600">From planning and installation to maintenance and training, we’ve got you covered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Ready to Go Solar */}
      <section className="bg-gradient-to-r from-[#2ebc6e] to-[#0a7c6e] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-extrabold">Ready to Go Solar?</h2>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">Get a free customized quote for your home or business today.</p>
          <div className="mt-6">
            <Link href="/quote" className="inline-flex items-center px-6 py-3 rounded-md bg-white text-[#0a7c6e] font-semibold hover:bg-white/90">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a7c6e] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <div className="font-bold">Sunware Energy Limited</div>
            <div className="text-sm text-white/80">© {new Date().getFullYear()} Sunware Energy Limited. All rights reserved.</div>
          </div>

            <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a href="#" className="text-white/80 hover:text-white">Privacy</a>
            <a href="#" className="text-white/80 hover:text-white">Terms</a>
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
          </div>
        </div>
      </footer>
    
    {/* Floating WhatsApp button */}
    <div className="fixed bottom-6 right-6 z-50">
      <a href="https://wa.me/254724659062" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="group relative flex items-center justify-center w-14 h-14 bg-[#2ebc6e] hover:bg-[#0a7c6e] text-white rounded-full shadow-lg animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12 .5C6.48.5 1.8 4.9.59 10.1c-.21.9-.29 1.83-.22 2.75L0 17l3.35-.88c1.07-.28 2.17-.42 3.29-.42 5.52 0 10.2-4.4 11.41-9.6.25-1.08.25-2.17.09-3.05zM12 1.5c4.97 0 9 3.46 9.86 8.06.15.64.16 1.31.03 1.96-.97 4.07-4.9 7.04-9.78 7.04-1.07 0-2.12-.17-3.11-.5L6 20l1.47-3.77C6.06 14.95 5.5 13.55 5.5 12c0-3.04 1.41-5.79 3.66-7.39C10.98 3.01 11.48 2.5 12 1.5z" />
        </svg>
        <span className="absolute -left-36 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-sm px-3 py-1 rounded-md shadow-lg transition-opacity">Chat with us</span>
      </a>
    </div>
    </main>
  )
}
