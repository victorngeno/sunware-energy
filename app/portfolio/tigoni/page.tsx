"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function TigoniProject() {
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
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Dual Residential Solar Installation in Tigoni</h1>
            <p className="mt-3 text-base sm:text-lg text-white/90">Tigoni, Kiambu County</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 lg:px-8 mt-6">
          <Link href="/portfolio" className="text-[#2ebc6e] font-semibold inline-flex items-center">
            ← Back to Portfolio
          </Link>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Overview</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-2xl">📅</div>
                  <p className="mt-4 text-sm text-slate-500 uppercase tracking-[0.25em]">Completed</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">September 2026</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-2xl">📍</div>
                  <p className="mt-4 text-sm text-slate-500 uppercase tracking-[0.25em]">Location</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Tigoni, Kiambu County</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-2xl">💼</div>
                  <p className="mt-4 text-sm text-slate-500 uppercase tracking-[0.25em]">Client Type</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Residential (Dual Home)</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-2xl">🔋</div>
                  <p className="mt-4 text-sm text-slate-500 uppercase tracking-[0.25em]">System Type</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Hybrid (Solar + Battery + Grid)</p>
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
                    src="https://www.youtube.com/embed/VriQmxBeDgk"
                    title="Tigoni solar project video"
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
            <h2 className="text-2xl font-bold text-slate-900">One System Powering Two Homes in Tigoni</h2>
            <p className="mt-4 max-w-4xl text-slate-600 leading-8">
              Tigoni sits in the heart of Kiambu County — cool climate, green surroundings, and growing demand for reliable power. These two homeowners came to us with a shared goal: eliminate their dependence on the grid and stop paying for power they couldn&apos;t always count on.
            </p>
            <p className="mt-4 max-w-4xl text-slate-600 leading-8">
              We designed a single high-capacity hybrid solar system to serve both residences, maximizing efficiency and giving each household full energy independence with enough battery storage to run through the night and through any outage.
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
                  <p className="mt-2 text-lg font-semibold text-slate-900">20 × 620W high-efficiency panels</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">Total Capacity</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">12.4 kWp</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">Inverter</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">16kW hybrid inverter</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">Battery Storage</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">2 × 16kWh lithium batteries (32kWh total)</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">System Type</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Hybrid (solar + battery + grid)</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">Location</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Tigoni, Kiambu County</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">What This System Delivers</h2>
            <ul className="mt-6 max-w-4xl space-y-3 text-slate-600 leading-7">
              <li className="flex gap-3"><span className="text-[#2ebc6e] font-bold">✓</span><span>Full daytime operation on solar power for two households</span></li>
              <li className="flex gap-3"><span className="text-[#2ebc6e] font-bold">✓</span><span>32kWh of lithium battery storage for uninterrupted power after sunset and during blackouts</span></li>
              <li className="flex gap-3"><span className="text-[#2ebc6e] font-bold">✓</span><span>Automatic switching between solar, battery, and grid — zero manual intervention</span></li>
              <li className="flex gap-3"><span className="text-[#2ebc6e] font-bold">✓</span><span>Significant reduction in monthly electricity bills for both homes</span></li>
              <li className="flex gap-3"><span className="text-[#2ebc6e] font-bold">✓</span><span>Zero generator dependency — no fuel costs, no noise, no emissions</span></li>
            </ul>
          </div>
        </section>

        <section className="bg-slate-50 py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Project Highlights</h2>
              <p className="mt-4 max-w-4xl text-slate-600 leading-8">
                This project demonstrates what&apos;s possible when neighbours invest in solar together. By combining demand into one properly sized system, both households benefit from a higher-capacity inverter and deeper battery reserve than they would typically install individually — delivering better performance and better value.
              </p>
              <p className="mt-4 max-w-4xl text-slate-600 leading-8">
                The Sunware Energy team handled the full scope — site survey, system design, structural mounting, electrical wiring, battery installation, commissioning, and handover. The system was sized against actual consumption data to ensure every panel earns its place on the roof.
              </p>
              <p className="mt-4 max-w-4xl text-slate-600 leading-8">
                For homeowners in Tigoni and across Kiambu County, this is what modern energy looks like — clean, quiet, and always on.
              </p>
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
