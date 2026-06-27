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
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 py-4">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/Sunware Logo.png" alt="Sunware Energy logo" width={100} height={40} className="object-contain h-10 w-auto" />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-[#2ebc6e] transition">Home</Link>
              <Link href="/about" className="text-white hover:text-[#2ebc6e] transition">About</Link>
              <Link href="/portfolio" className="text-white hover:text-[#2ebc6e] transition">Portfolio</Link>
              <Link href="/blog" className="text-white hover:text-[#2ebc6e] transition">Blog</Link>
              <Link href="/quote" className="text-white hover:text-[#2ebc6e] transition">Get a Quote</Link>
              <Link href="/services" className="text-white hover:text-[#2ebc6e] transition">Services</Link>
              <Link href="/contact" className="text-white hover:text-[#2ebc6e] transition">Contact</Link>
            </nav>
            <div className="md:hidden">
              {/* Mobile menu button */}
              <button type="button" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)} aria-controls="mobile-menu" aria-expanded={mobileOpen} className="text-white focus:outline-none text-2xl">☰</button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden bg-black/90 backdrop-blur-xl text-white">
            <div className="px-6 pt-2 pb-4 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block text-white py-2">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-white py-2">About</Link>
            <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="block text-white py-2">Portfolio</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block text-white py-2">Blog</Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="block text-white py-2">Services</Link>
            <Link href="/quote" onClick={() => setMobileOpen(false)} className="block text-white py-2">Get a Quote</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-white py-2">Contact</Link>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative min-h-[90vh] md:min-h-[95vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/Oloiting 6.jpeg" alt="Solar installation background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex min-h-[90vh] md:min-h-[95vh] items-center pt-32 md:pt-40">
          <div className="w-full max-w-3xl mx-auto text-center md:text-left">
            <h1 className="sr-only">THE LEADING SOLAR INSTALLER IN KENYA</h1>
            <p className="text-sm uppercase tracking-[0.28em] text-[#2ebc6e] mb-4">THE LEADING SOLAR INSTALLER IN KENYA</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl mx-auto md:mx-0">
              Reliable <span className="text-[#2ebc6e] underline decoration-[#2ebc6e]/40 decoration-4 underline-offset-8">solar power</span> for homes and businesses across Kenya.
            </h1>
            <p className="mt-6 text-sm sm:text-base text-slate-200/90 max-w-xl mx-auto md:mx-0">
              Sunware Energy Limited delivers premium solar installation, maintenance and consultancy services to help you save on energy costs and reduce your carbon footprint.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/quote" className="inline-flex items-center justify-center rounded-full bg-[#2ebc6e] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-xl shadow-[#2ebc6e]/20 hover:bg-[#27b95b] transition">
                Get a Free Quote <span className="ml-2">→</span>
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:border-[#2ebc6e] hover:text-[#2ebc6e] transition">
                View Services
              </Link>
              <Link href="/calculator" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold text-white hover:text-[#2ebc6e] transition">
                Try our Solar Calculator <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-sm text-slate-200">
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2ebc6e]/15 text-[#2ebc6e]">✓</span>
                <span>3+ Years Experience</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2ebc6e]/15 text-[#2ebc6e]">✓</span>
                <span>50+ Installations</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2ebc6e]/15 text-[#2ebc6e]">✓</span>
                <span>Licensed Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA: Solar Calculator */}
      <section className="bg-gradient-to-r from-[#ecfdf5] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="bg-white border rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Not sure what system size you need?</h3>
              <p className="mt-1 text-gray-600">Try our quick solar calculator and get a recommended system size and battery suggestion in minutes.</p>
            </div>
            <div>
              <Link href="/calculator" className="inline-flex items-center px-6 py-3 bg-[#2ebc6e] hover:bg-[#27b95b] text-white rounded-md font-semibold shadow">Try Our Solar Calculator</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
  <section id="services" className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
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
      <section id="about" className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-base font-semibold uppercase tracking-[0.35em] text-[#2ebc6e] mb-4">Why Sunware Energy</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">Clean energy solutions, delivered with expertise.</h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#2ebc6e]" />

          <div className="mt-12 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            <article className="group rounded-3xl bg-[#1e293b] p-8 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_-30px_rgba(46,188,110,0.35)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2ebc6e]/10 text-[#2ebc6e] shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M12 2a9 9 0 0 0-9 9c0 4.98 4.02 9 9 9a9 9 0 0 0 0-18Zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm.75-10.75h-1.5v4.5h1.5v-4.5Zm0 6.75h-1.5v1.5h1.5v-1.5Z"/></svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">3+ Years of Proven Experience</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">With over 3 years of hands-on solar installations across Kenya, we bring technical expertise and practical insight to every residential and commercial project we deliver.</p>
              <div className="mt-8 h-1 w-16 rounded-full bg-[#2ebc6e]" />
            </article>

            <article className="group rounded-3xl bg-[#1e293b] p-8 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_-30px_rgba(46,188,110,0.35)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2ebc6e]/10 text-[#2ebc6e] shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M4 4h16v2H4V4Zm4 4h8v2H8V8Zm-4 4h16v2H4v-2Zm4 4h8v2H8v-2Z"/></svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">EPRA Licensed & Certified</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">Sunware Energy holds EPRA Class C1 (Solar PV Contractor), V1 (Design & Installation) and V2 (Importer/Manufacturer) licences — giving you full confidence that your installation meets Kenya's energy regulatory standards.</p>
              <div className="mt-8 h-1 w-16 rounded-full bg-[#2ebc6e]" />
            </article>

            <article className="group rounded-3xl bg-[#1e293b] p-8 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_-30px_rgba(46,188,110,0.35)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2ebc6e]/10 text-[#2ebc6e] shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M12 2a7 7 0 0 0-7 7v3a7 7 0 0 0 7 7 7 7 0 0 0 7-7v-3a7 7 0 0 0-7-7Zm0 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0v-3a5 5 0 0 1 5-5Z"/></svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Your Energy Goals, Our Priority</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">Every client has unique energy needs. We listen first, then design a system that fits your budget, lifestyle and long-term goals — backed by dedicated after-sales support.</p>
              <div className="mt-8 h-1 w-16 rounded-full bg-[#2ebc6e]" />
            </article>

            <article className="group rounded-3xl bg-[#1e293b] p-8 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_-30px_rgba(46,188,110,0.35)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2ebc6e]/10 text-[#2ebc6e] shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M4 7h16v2H4V7Zm0 4h16v2H4v-2Zm0 4h10v2H4v-2Z"/></svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">End-to-End Solar Support</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">From initial consultation and system design to installation and ongoing maintenance, we walk with you at every stage of your solar journey — so your investment keeps delivering.</p>
              <div className="mt-8 h-1 w-16 rounded-full bg-[#2ebc6e]" />
            </article>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-base font-semibold uppercase tracking-[0.35em] text-[#2ebc6e] mb-4">Our Process</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">How we deliver your solar solution, from survey to switch-on.</h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#2ebc6e]" />

          <div className="relative mt-14">
            <div className="hidden lg:block absolute inset-x-0 top-28 h-px bg-[#2ebc6e]/30" />
            <div className="grid gap-6 lg:grid-cols-4">
            <div className="relative rounded-3xl bg-white p-8 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.15)]">
              <div className="flex flex-col items-center gap-4">
                <span className="text-3xl font-extrabold text-[#2ebc6e]">1</span>
              </div>
              <h3 className="mt-8 text-xl font-bold text-slate-900">Site Survey</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">We begin by visiting your property to assess your energy needs, roof structure, shading, and electrical setup. Our engineers gather real site data to ensure every recommendation is accurate and tailored to your specific situation.</p>
            </div>

            <div className="relative rounded-3xl bg-white p-8 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.15)]">
              <div className="flex flex-col items-center gap-4">
                <span className="text-3xl font-extrabold text-[#2ebc6e]">2</span>
              </div>
              <h3 className="mt-8 text-xl font-bold text-slate-900">System Design</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">Using your load profile and site assessment data, we design a solar system sized precisely for your needs — selecting high-performance panels, inverters and batteries that balance output, longevity and cost-effectiveness.</p>
            </div>

            <div className="relative rounded-3xl bg-white p-8 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.15)]">
              <div className="flex flex-col items-center gap-4">
                <span className="text-3xl font-extrabold text-[#2ebc6e]">3</span>
              </div>
              <h3 className="mt-8 text-xl font-bold text-slate-900">Installation & Commissioning</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">Our EPRA-licensed technicians execute the approved design with precision — handling all mounting, wiring and system integration before conducting full commissioning tests to verify your system is performing optimally.</p>
            </div>

            <div className="relative rounded-3xl bg-white p-8 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.15)]">
              <div className="flex flex-col items-center gap-4">
                <span className="text-3xl font-extrabold text-[#2ebc6e]">4</span>
              </div>
              <h3 className="mt-8 text-xl font-bold text-slate-900">After-Sales Support & Maintenance</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">Our relationship doesn't end at installation. We offer scheduled maintenance, performance monitoring and responsive technical support to keep your system running efficiently for years to come.</p>
            </div>
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 pb-20 sm:pb-16 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <div className="font-bold">Sunware Energy Limited</div>
            <div className="text-sm text-gray-300">© {new Date().getFullYear()} Sunware Energy Limited. All rights reserved.</div>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-4 pr-16 sm:pr-0">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
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
