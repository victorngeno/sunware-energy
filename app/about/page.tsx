"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
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
              <Link href="/about" className="text-white hover:underline underline-offset-4">About</Link>
              <Link href="/quote" className="text-white hover:underline">Get a Quote</Link>
              <Link href="/services" className="text-white hover:underline">Services</Link>
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

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2ebc6e] to-[#0a7c6e] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold">About Us</h1>
          <p className="mt-4 text-lg max-w-3xl text-white/90">Sunware Energy Limited — dedicated to delivering high-efficiency photovoltaic solutions across Kenya.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Background</h2>
              <p className="mt-4 text-gray-700">Sunware Energy Limited is a specialized solar energy firm in Kenya dedicated to providing high-efficiency photovoltaic (PV) solutions. The company has established itself as a reliable partner for residential and commercial solar integrations, focusing on delivering clean energy infrastructure that reduces long-term operational costs for its clients.</p>

              <h3 className="mt-8 text-xl font-semibold text-gray-900">Mission</h3>
              <p className="mt-2 text-gray-700">To provide sustainable, reliable, and affordable solar energy solutions that empower Kenyan households and businesses while reducing the national carbon footprint.</p>

              <h3 className="mt-8 text-xl font-semibold text-gray-900">Vision</h3>
              <p className="mt-2 text-gray-700">To be the leading provider of innovative renewable energy technologies in East Africa, fostering a future where clean energy is accessible to everyone.</p>
            </div>

            <aside className="space-y-6">
              <div className="bg-gray-50 border rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900">Team</h4>
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm w-64 text-center flex flex-col items-center justify-start min-h-[320px]">
                    <Image src="/Victor passport photo new.jpg" alt="Victor Ngeno" width={150} height={150} className="rounded-full object-cover" />
                    <div className="mt-4 font-bold text-gray-900">Victor Ngeno</div>
                    <div className="mt-1 text-[#2ebc6e]">Sales and Marketing Manager</div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm w-64 text-center flex flex-col items-center justify-start min-h-[320px]">
                    <Image src="/Kip passport photo.png" alt="Kiplangat Cheruiyot" width={150} height={150} className="rounded-full object-cover" />
                    <div className="mt-4 font-bold text-gray-900">Kiplangat Cheruiyot</div>
                    <div className="mt-1 text-[#2ebc6e]">Technical Manager</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-700">
                  <span className="font-medium">Installation Team:</span> 15+ technicians specializing in system deployment and maintenance
                </div>
              </div>

              <div className="bg-gray-50 border rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900">Partnerships</h4>
                <p className="mt-2 text-gray-700">Sunware Energy Limited maintains strategic collaborations with key industry players including Kenya Solar Installers.</p>
              </div>

              <div className="bg-gray-50 border rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900">Contact</h4>
                <p className="mt-2 text-gray-700"><span className="font-medium">Phone:</span> +254 724 659 062</p>
                <p className="mt-1 text-gray-700"><span className="font-medium">Location:</span> Samtech Plaza, Utawala, Eastern Bypass, Nairobi, Kenya</p>
                <div className="mt-4">
                  <a href="https://api.whatsapp.com/send?phone=254724659062&text=Hello%20Sunware%20Energy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-[#2ebc6e] hover:bg-[#0a7c6e] text-white font-semibold shadow">
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </aside>
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
