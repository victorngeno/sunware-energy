"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ImaarishaSaccoProject() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <main className="min-h-screen bg-white text-gray-800">
        {/* Navbar */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/">
                  <Image src="/Sunware Logo.png" alt="Sunware Energy logo" width={100} height={40} className="object-contain h-10 w-auto" />
                </Link>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-[#2ebc6e] transition">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-[#2ebc6e] transition">About</Link>
                <Link href="/services" className="text-gray-700 hover:text-[#2ebc6e] transition">Services</Link>
                <Link href="/portfolio" className="text-[#2ebc6e] font-semibold transition">Portfolio</Link>
                <Link href="/blog" className="text-gray-700 hover:text-[#2ebc6e] transition">Blog</Link>
                <Link href="/quote" className="text-gray-700 hover:text-[#2ebc6e] transition">Get a Quote</Link>
                <Link href="/contact" className="text-gray-700 hover:text-[#2ebc6e] transition">Contact</Link>
              </nav>
              <div className="md:hidden">
                <button type="button" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)} aria-controls="mobile-menu" aria-expanded={mobileOpen} className="text-gray-700 focus:outline-none text-2xl">☰</button>
              </div>
            </div>
          </div>
        </header>

        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden bg-gray-50">
            <div className="px-6 pt-2 pb-4 space-y-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block text-gray-700 py-2">Home</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-gray-700 py-2">About</Link>
              <Link href="/services" onClick={() => setMobileOpen(false)} className="block text-gray-700 py-2">Services</Link>
              <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="block text-[#2ebc6e] font-semibold py-2">Portfolio</Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="block text-gray-700 py-2">Blog</Link>
              <Link href="/quote" onClick={() => setMobileOpen(false)} className="block text-gray-700 py-2">Get a Quote</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-gray-700 py-2">Contact</Link>
            </div>
          </div>
        )}

        <section className="py-12 bg-[#2ebc6e]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80 mb-2">Project Detail</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">5kW Solar Installation for Imaarisha SACCO Offices</h1>
            <p className="mt-3 text-base sm:text-lg text-white/90">Fort Ternan, Kericho County</p>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Overview</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-2xl">📅</div>
                  <p className="mt-4 text-sm text-slate-500 uppercase tracking-[0.25em]">Completed</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">February 2026</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-2xl">📍</div>
                  <p className="mt-4 text-sm text-slate-500 uppercase tracking-[0.25em]">Location</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Fort-Tenan, Kericho</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-2xl">💼</div>
                  <p className="mt-4 text-sm text-slate-500 uppercase tracking-[0.25em]">Client Type</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Private Commercial</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-2xl">🔋</div>
                  <p className="mt-4 text-sm text-slate-500 uppercase tracking-[0.25em]">System Type</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Hybrid Solar PV System (Battery Backup)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="bg-[#0a7c6e] px-6 py-5">
                <h2 className="text-lg font-semibold text-white">Project Video</h2>
              </div>
              <div className="p-6">
                <div className="aspect-video w-full overflow-hidden rounded-3xl bg-black shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/sQFQgeaXkXI"
                    title="Imaarisha SACCO solar project video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">Reliable Solar Power for Offices in Kericho County</h2>
            <p className="mt-4 max-w-4xl text-slate-600 leading-8">
              Sunware Energy Limited completed a 5kW solar installation for Imaarisha SACCO offices in Fort Ternan, Kericho County. The project was designed to provide reliable, clean, and cost-effective electricity for the SACCO's daily office operations. With solar power and battery storage, the organization can continue operating even during grid interruptions, while significantly lowering long-term electricity expenses.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Solar System Specifications</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">Solar Panels</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">10 × 620W high-efficiency photovoltaic panels</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">Total Solar Capacity</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">6.2kW</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">Inverter</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">5kW Inverter</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">Battery Storage</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">10kWh lithium battery bank</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">Benefits of This Installation</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">Lower Electricity Costs</h3>
                <p className="mt-3 text-slate-600 leading-7">Solar power significantly reduces monthly electricity bills by generating free energy from the sun.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">Protection from Power Outages</h3>
                <p className="mt-3 text-slate-600 leading-7">With lithium battery storage, critical office operations can continue even during power interruptions.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">Clean Renewable Energy</h3>
                <p className="mt-3 text-slate-600 leading-7">Solar systems provide environmentally friendly energy while reducing carbon emissions.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">Long-Term Investment</h3>
                <p className="mt-3 text-slate-600 leading-7">Solar systems typically operate for over 20 years, making them a strong long-term investment for businesses.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#2ebc6e] py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-extrabold">Interested in a Similar Installation?</h2>
            <p className="mt-3 text-base sm:text-lg text-white/90">Get a free customized quote for your home or business today.</p>
            <div className="mt-8">
              <Link href="/quote" className="inline-flex items-center justify-center rounded-full bg-[#0a7c6e] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[#0a7c6e]/25 hover:bg-[#0a6c5e] transition">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left">
              <div className="font-bold">Sunware Energy Limited</div>
              <div className="text-sm text-gray-300">© {new Date().getFullYear()} Sunware Energy Limited. All rights reserved.</div>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-white">Terms</a>
              <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
