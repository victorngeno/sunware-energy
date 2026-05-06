"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    slug: 'imaarisha-sacco',
    category: 'Commercial',
    title: '5kW Solar Installation for Imaarisha SACCO Offices – Fort Ternan, Kericho County',
    completed: 'February 2026',
    location: 'Fort-Tenan, Kericho',
    clientType: 'Private Commercial',
    systemType: 'Hybrid Solar PV System (Battery Backup)',
    videoId: 'sQFQgeaXkXI',
  },
  {
    id: 2,
    slug: 'kiu-river',
    category: 'Residential',
    title: 'Residential Solar & Solar Water Heating Installation at Kiu River, Kahawa Sukari',
    completed: 'December 2025',
    location: 'Kiu River Rd, Nairobi',
    clientType: 'Private Residential Home',
    systemType: 'Hybrid Solar PV System (Battery Backup)',
    videoId: '4veMRN0YSvE',
  },
  {
    id: 3,
    slug: 'langata-water-pumping',
    category: 'Water Pumping',
    title: 'Langata Solar Water Pumping System Installation',
    completed: 'November 2025',
    location: 'Langata, Nairobi',
    clientType: 'Business Enterprise',
    systemType: '15 kWp PV + 11 kW Solar Pump Inverter',
    videoId: 'oWzTBRIu8hs',
  },
  {
    id: 4,
    slug: 'kileleshwa',
    category: 'Residential',
    title: 'Residential Hybrid Solar Installation – Kileleshwa, Nairobi',
    completed: 'July 2025',
    location: 'Kileleshwa, Nairobi',
    clientType: 'Private Residential Home',
    systemType: 'Hybrid Solar PV System (Grid + Battery Backup)',
    videoId: 'y347iZdXGDo',
  },
  {
    id: 5,
    slug: 'nandi-hills-school',
    category: 'Schools',
    title: '10kW Hybrid Solar Installation – Nandi Hills, Kenya',
    completed: 'July 2025',
    location: 'Nandi Hills',
    clientType: 'Educational Institution (Secondary School)',
    systemType: 'Hybrid Solar PV System (Off-grid with KPLC backup)',
    videoId: '5u2OQJvGHXs',
  },
  {
    id: 6,
    slug: 'knh-hospital',
    category: 'Hospitals',
    title: '30kWh Hybrid Backup System – Kenyatta National Hospital',
    completed: 'August 2025',
    location: 'Upperhill, Nairobi',
    clientType: 'Hospital',
    systemType: 'Power Backup Solution',
    videoId: 'Fyh8Nsv1eKE',
  },
  {
    id: 7,
    slug: 'migori',
    category: 'Residential',
    title: '12kW Residential Hybrid Solar System – Migori',
    completed: 'September 2025',
    location: 'Migori, Kenya',
    clientType: 'Residential',
    systemType: 'Off-grid/Hybrid Solar + Battery Backup',
    videoId: 'VpDZiJ_QeEw',
  },
]

const categories = ['All', 'Commercial', 'Residential', 'Water Pumping', 'Schools', 'Hospitals']

const categoryColors: { [key: string]: string } = {
  Commercial: 'bg-blue-500',
  Residential: 'bg-amber-500',
  'Water Pumping': 'bg-cyan-500',
  Schools: 'bg-purple-500',
  Hospitals: 'bg-red-500',
}

export default function Portfolio() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(p => p.category === selectedCategory)

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

        {/* Mobile dropdown */}
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

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-[#2ebc6e]/10 to-[#0a7c6e]/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2ebc6e] mb-2">Project Portfolio</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">Real installations. Real results. Across Kenya.</h1>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full font-medium transition ${
                    selectedCategory === cat
                      ? 'bg-[#2ebc6e] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map(project => (
                <article key={project.id} className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition border border-gray-200">
                  {/* Video Area */}
                  <div className="relative w-full aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${project.videoId}`}
                      title={`${project.title} video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full absolute inset-0"
                    />
                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 ${categoryColors[project.category] || 'bg-gray-500'} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}>
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">{project.title}</h3>

                    {/* Details */}
                    <div className="space-y-3 mb-6 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="text-lg">📅</span>
                        <div>
                          <p className="text-gray-600 text-xs uppercase tracking-wide">Completed</p>
                          <p className="font-semibold text-gray-900">{project.completed}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-lg">📍</span>
                        <div>
                          <p className="text-gray-600 text-xs uppercase tracking-wide">Location</p>
                          <p className="font-semibold text-gray-900">{project.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-lg">💼</span>
                        <div>
                          <p className="text-gray-600 text-xs uppercase tracking-wide">Client Type</p>
                          <p className="font-semibold text-gray-900">{project.clientType}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-lg">🔋</span>
                        <div>
                          <p className="text-gray-600 text-xs uppercase tracking-wide">System Type</p>
                          <p className="font-semibold text-gray-900">{project.systemType}</p>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    {project.slug ? (
                      <Link href={`/portfolio/${project.slug}`} className="block w-full bg-[#2ebc6e] hover:bg-[#27b95b] text-white font-semibold py-2 px-4 rounded-lg text-center transition">
                        View Details
                      </Link>
                    ) : (
                      <button className="w-full bg-[#2ebc6e] hover:bg-[#27b95b] text-white font-semibold py-2 px-4 rounded-lg transition">
                        View Details
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No projects found in this category.</p>
              </div>
            )}
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
