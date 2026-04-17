"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
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
          <h1 className="text-3xl sm:text-4xl font-extrabold">Contact Us</h1>
          <p className="mt-3 text-white/90 max-w-2xl">We're here to help — reach out for quotes, site surveys or any questions about our services.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Contact details card */}
            <div className="bg-gray-50 border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Contact details</h2>
              <p className="mt-4 text-gray-700"><span className="font-medium">Phone:</span> +254 724 659 062</p>
              <p className="mt-2 text-gray-700"><span className="font-medium">Email:</span> <a href="mailto:info@sunwareenergy.co.ke" className="text-[#0a7c6e]">info@sunwareenergy.co.ke</a></p>
              <p className="mt-2 text-gray-700"><span className="font-medium">Location:</span> Samtech Plaza, Utawala, Eastern Bypass, Nairobi, Kenya</p>

              <div className="mt-6">
                <a href="https://wa.me/254724659062" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-[#2ebc6e] hover:bg-[#0a7c6e] text-white font-semibold shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 .5C6.48.5 1.8 4.9.59 10.1c-.21.9-.29 1.83-.22 2.75L0 17l3.35-.88c1.07-.28 2.17-.42 3.29-.42 5.52 0 10.2-4.4 11.41-9.6.25-1.08.25-2.17.09-3.05zM12 1.5c4.97 0 9 3.46 9.86 8.06.15.64.16 1.31.03 1.96-.97 4.07-4.9 7.04-9.78 7.04-1.07 0-2.12-.17-3.11-.5L6 20l1.47-3.77C6.06 14.95 5.5 13.55 5.5 12c0-3.04 1.41-5.79 3.66-7.39C10.98 3.01 11.48 2.5 12 1.5z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-gray-50 border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
              <form className="mt-4 grid grid-cols-1 gap-4" action="#" method="post">
                <label className="sr-only" htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" required placeholder="Full Name" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ebc6e]" />

                <label className="sr-only" htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" required placeholder="Email Address" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ebc6e]" />

                <label className="sr-only" htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" required placeholder="Phone Number" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ebc6e]" />

                <label className="sr-only" htmlFor="service">Service Interested In</label>
                <select id="service" name="service" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ebc6e]">
                  <option>Residential Solar</option>
                  <option>Commercial Solar</option>
                  <option>Solar Water Pumping</option>
                  <option>Energy Audit</option>
                  <option>Solar Water Heating</option>
                  <option>Maintenance</option>
                </select>

                <label className="sr-only" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Message" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ebc6e]"></textarea>

                <div className="text-right">
                  <button type="submit" className="inline-flex items-center px-6 py-2 rounded-md bg-[#2ebc6e] hover:bg-[#0a7c6e] text-white font-semibold">Send Message</button>
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
    </main>
  )
}
