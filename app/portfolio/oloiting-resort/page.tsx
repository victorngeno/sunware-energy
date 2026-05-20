"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function OloitingResortProject() {
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
              <Link href="/quote" onClick={() => setMobileOpen(false)} className="block text-gray-700 py-2">Get a Quote</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-gray-700 py-2">Contact</Link>
            </div>
          </div>
        )}

        <section className="py-12 bg-[#2ebc6e]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80 mb-2">Project Detail</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Off-Grid Solar Installation for Oloiting Resort</h1>
            <p className="mt-3 text-base sm:text-lg text-white/90">Oloiting, Kajiado County</p>
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
                  <p className="mt-2 text-lg font-semibold text-slate-900">2025</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-2xl">📍</div>
                  <p className="mt-4 text-sm text-slate-500 uppercase tracking-[0.25em]">Location</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Oloiting, Kajiado County</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-2xl">💼</div>
                  <p className="mt-4 text-sm text-slate-500 uppercase tracking-[0.25em]">Client Type</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Resort/Hospitality</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-2xl">🔋</div>
                  <p className="mt-4 text-sm text-slate-500 uppercase tracking-[0.25em]">System Type</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Dual Off-Grid Solar PV System</p>
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
                    src="https://www.youtube.com/embed/B9KBbDLKgTI"
                    title="Oloiting Resort solar project video"
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
            <h2 className="text-2xl font-bold text-slate-900">Reliable Off-Grid Power for Remote Hospitality</h2>
            <p className="mt-4 max-w-4xl text-slate-600 leading-8">
              Sunware Energy Limited completed a custom off-grid solar installation for a resort in Oloiting, Kajiado County, designed to provide reliable and sustainable power in a remote location. Two independent off-grid systems were implemented for enhanced flexibility, efficiency, and uninterrupted operation. The systems now provide the resort with clean, quiet, and dependable solar power — reducing reliance on fuel-powered alternatives while supporting a more sustainable hospitality experience.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">System Specifications</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">System 1</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">5kW Off-Grid Solar System | 5kWh Lithium Battery | 6 × 620W Solar Panels</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">System 2</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">3.3kW Off-Grid Solar System | 2.56kWh Lithium Battery | 4 × 620W Solar Panels</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Client Review</h2>
              <div className="mt-4">
                <p className="font-semibold">Resort Manager, Oloiting</p>
                <div className="flex items-center mt-2 text-amber-400">★★★★★</div>
                <p className="mt-4 text-slate-600">Being in a remote location, reliable power was always a challenge. Sunware Energy designed a smart dual-system solution that keeps our entire resort running on clean solar energy. Our guests enjoy uninterrupted power and we have cut our fuel costs significantly. Excellent work!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#2ebc6e] py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-extrabold">Interested in a Similar Installation?</h2>
            <p className="mt-3 text-base sm:text-lg text-white/90">Get a free customized quote for your resort or hospitality business today.</p>
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

      {/* Back to portfolio link */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/portfolio" className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow">← Back to Portfolio</Link>
      </div>

      {/* Floating WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="https://wa.me/254724659062" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.738 5.471 2.031 7.772L0 32l8.418-2.01A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.765-1.847l-.485-.287-5.001 1.194 1.234-4.863-.317-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.873c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.631-.199-.897.199-.266.398-1.03 1.294-1.263 1.56-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.2-1.974-1.183-1.054-1.981-2.356-2.213-2.754-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.067-.499-.033-.698-.1-.199-.897-2.162-1.229-2.96-.324-.777-.653-.672-.897-.684l-.765-.013c-.266 0-.698.1-1.063.499-.365.398-1.394 1.362-1.394 3.325s1.427 3.854 1.626 4.12c.199.266 2.808 4.286 6.802 6.014.951.411 1.693.656 2.271.839.954.304 1.823.261 2.51.158.765-.114 2.354-.962 2.686-1.891.332-.929.332-1.726.232-1.891-.1-.166-.365-.266-.763-.465z"/>
          </svg>
        </a>
      </div>
    </>
  )
}
"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function OloitingResortProject() {
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
              <Link href="/quote" onClick={() => setMobileOpen(false)} className="block text-gray-700 py-2">Get a Quote</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-gray-700 py-2">Contact</Link>
            </div>
          </div>
        )}

        <section className="py-12 bg-[#2ebc6e]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <Link href="/portfolio" className="inline-flex items-center text-white/90 hover:text-white transition mb-6">
              <span className="mr-2">←</span> Back to Portfolio
            </Link>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80 mb-2">Project Detail</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Off-Grid Solar Installation for Oloiting Resort</h1>
              <p className="mt-3 text-base sm:text-lg text-white/90">Oloiting, Kajiado County</p>
            </div>
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
                  <p className="mt-2 text-lg font-semibold text-slate-900">2025</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-2xl">📍</div>
                  <p className="mt-4 text-sm text-slate-500 uppercase tracking-[0.25em]">Location</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Oloiting, Kajiado County</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-2xl">💼</div>
                  <p className="mt-4 text-sm text-slate-500 uppercase tracking-[0.25em]">Client Type</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Resort/Hospitality</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-2xl">🔋</div>
                  <p className="mt-4 text-sm text-slate-500 uppercase tracking-[0.25em]">System Type</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Off-Grid Solar PV System</p>
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
                    src="https://www.youtube.com/embed/B9KBbDLKgTI"
                    title="Oloiting Resort off-grid solar project video"
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
            <h2 className="text-2xl font-bold text-slate-900">Sustainable Power for Remote Resort Operations</h2>
            <p className="mt-4 max-w-4xl text-slate-600 leading-8">
              Sunware Energy Limited completed a custom off-grid solar installation for a resort in Oloiting, Kajiado County, designed to provide reliable and sustainable power in a remote location. To meet the diverse energy needs of the property, two independent off-grid systems were implemented for enhanced flexibility, efficiency, and uninterrupted operation. The systems now provide the resort with clean, quiet, and dependable solar power — reducing reliance on fuel-powered alternatives while supporting a more sustainable hospitality experience.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Solar System Specifications</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {/* System 1 */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-6 pb-4 border-b border-slate-300">
                    <h3 className="text-lg font-bold text-slate-900">System 1</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">Capacity</p>
                      <p className="mt-2 text-base font-semibold text-slate-900">5kW Off-Grid Solar System</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">Battery Storage</p>
                      <p className="mt-2 text-base font-semibold text-slate-900">5kWh Lithium Battery Backup</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">Solar Panels</p>
                      <p className="mt-2 text-base font-semibold text-slate-900">6 × 620W High-Efficiency Solar Panels</p>
                    </div>
                  </div>
                </div>

                {/* System 2 */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-6 pb-4 border-b border-slate-300">
                    <h3 className="text-lg font-bold text-slate-900">System 2</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">Capacity</p>
                      <p className="mt-2 text-base font-semibold text-slate-900">3.3kW Off-Grid Solar System</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">Battery Storage</p>
                      <p className="mt-2 text-base font-semibold text-slate-900">2.56kWh Lithium Battery Backup</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-[0.2em]">Solar Panels</p>
                      <p className="mt-2 text-base font-semibold text-slate-900">4 × 620W Solar Panels</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Client Review</h2>
            <div className="rounded-3xl border border-slate-200 p-8 bg-slate-50 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⭐</div>
                <div>
                  <p className="text-base text-slate-600 leading-8 mb-4">
                    "Being in a remote location, reliable power was always a challenge for us. Sunware Energy designed a smart dual-system solution that keeps our entire resort running on clean solar energy. Our guests now enjoy uninterrupted power and we've cut our fuel costs significantly. Excellent work!"
                  </p>
                  <p className="text-lg font-semibold text-slate-900">Resort Manager, Oloiting</p>
                </div>
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
