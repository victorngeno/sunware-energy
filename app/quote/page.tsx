"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Quote() {
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

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2ebc6e] to-[#0a7c6e] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold">Get a Free Quote</h1>
          <p className="mt-3 text-white/90 max-w-2xl">Tell us about your needs and we'll prepare a tailored, no-obligation quote.</p>
        </div>
      </section>

      {/* Quote form */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <div className="bg-gray-50 border rounded-lg p-6 shadow-sm">
              <form className="space-y-8" action="#" method="post">

                {/* SECTION 1 - THE BASICS */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Section 1 — The Basics</h2>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input id="fullName" name="fullName" type="text" required className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ebc6e]" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input id="phone" name="phone" type="tel" placeholder="e.g. 0724 659 062" required className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ebc6e]" />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">Town / City</label>
                      <input id="city" name="city" type="text" placeholder="e.g. Nairobi, Mombasa, Kisumu" className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ebc6e]" />
                    </div>
                  </div>
                </div>

                {/* SECTION 2 - THE NEED */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Section 2 — The Need</h2>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="need" className="block text-sm font-medium text-gray-700">I am looking for</label>
                      <select id="need" name="need" className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ebc6e]">
                        <option>Residential Solar (Home)</option>
                        <option>Commercial/Industrial (Business)</option>
                        <option>Solar Water Pumping (Farm/Borehole)</option>
                        <option>Battery Backup Only (Uninterrupted Power)</option>
                      </select>
                    </div>

                    <div>
                      <span className="block text-sm font-medium text-gray-700">Current Electricity Setup</span>
                      <div className="mt-2 space-y-2">
                        <label className="inline-flex items-center">
                          <input type="radio" name="setup" value="single" className="h-4 w-4 text-[#2ebc6e] border-gray-300" defaultChecked />
                          <span className="ml-2 text-gray-700">Single Phase (Standard Home)</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" name="setup" value="three" className="h-4 w-4 text-[#2ebc6e] border-gray-300" />
                          <span className="ml-2 text-gray-700">Three Phase (Commercial/Large Estate)</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" name="setup" value="offgrid" className="h-4 w-4 text-[#2ebc6e] border-gray-300" />
                          <span className="ml-2 text-gray-700">Off-Grid (No KPLC connection)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 3 - THE SIZING */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Section 3 — The Sizing</h2>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="bill" className="block text-sm font-medium text-gray-700">Average Monthly KPLC Bill (KSh)</label>
                      <select id="bill" name="bill" className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ebc6e]">
                        <option>0-5,000</option>
                        <option>5,000-15,000</option>
                        <option>15,000-50,000</option>
                        <option>50,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Key Appliances to Power</label>
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <label className="inline-flex items-center">
                          <input type="checkbox" name="appliances" value="Lights & TV" className="h-4 w-4 text-[#2ebc6e]" />
                          <span className="ml-2 text-gray-700">Lights & TV</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="checkbox" name="appliances" value="Fridge/Freezer" className="h-4 w-4 text-[#2ebc6e]" />
                          <span className="ml-2 text-gray-700">Fridge/Freezer</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="checkbox" name="appliances" value="Water Heater/Iron Box" className="h-4 w-4 text-[#2ebc6e]" />
                          <span className="ml-2 text-gray-700">Water Heater / Iron Box</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="checkbox" name="appliances" value="Water Pump/Borehole" className="h-4 w-4 text-[#2ebc6e]" />
                          <span className="ml-2 text-gray-700">Water Pump / Borehole</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="checkbox" name="appliances" value="Microwave" className="h-4 w-4 text-[#2ebc6e]" />
                          <span className="ml-2 text-gray-700">Microwave</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="other" className="block text-sm font-medium text-gray-700">Any other appliances?</label>
                      <input id="other" name="other" type="text" className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ebc6e]" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#2ebc6e] hover:bg-[#0a7c6e] text-white font-semibold">Request My Free Quote</button>
                </div>

              </form>
            </div>
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
