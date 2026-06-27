"use client"

import React, { useState } from 'react'
import Link from 'next/link'

export default function PrivacyPolicyContent() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-gradient-to-r from-[#2ebc6e] to-[#0a7c6e] shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-white">Sunware Energy</Link>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:underline">Home</Link>
              <Link href="/about" className="text-white hover:underline">About</Link>
              <Link href="/services" className="text-white hover:underline">Services</Link>
              <Link href="/portfolio" className="text-white hover:underline">Portfolio</Link>
              <Link href="/blog" className="text-white hover:underline">Blog</Link>
              <Link href="/quote" className="text-white hover:underline">Get a Quote</Link>
              <Link href="/contact" className="text-white hover:underline">Contact</Link>
            </nav>

            <div className="md:hidden">
              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                className="text-white focus:outline-none"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#2ebc6e] to-[#0a7c6e]">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block text-white py-2">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-white py-2">About</Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="block text-white py-2">Services</Link>
            <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="block text-white py-2">Portfolio</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block text-white py-2">Blog</Link>
            <Link href="/quote" onClick={() => setMobileOpen(false)} className="block text-white py-2">Get a Quote</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-white py-2">Contact</Link>
          </div>
        </div>
      )}

      <section className="bg-gradient-to-r from-[#2ebc6e] to-[#0a7c6e] text-white">
        <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold">Privacy Policy</h1>
          <p className="mt-4 text-base sm:text-lg text-white/90">How we collect, use and protect your information</p>
          <p className="mt-3 text-sm text-white/80">Last updated: June 2026</p>
        </div>
      </section>

      <section className="py-10 sm:py-14 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <p className="text-base leading-8 text-slate-700">
              Sunware Energy Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website, sunwareenergy.com, or use our services. We handle your data in accordance with the Data Protection Act, 2019 of Kenya.
            </p>

            <div className="mt-10 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">1. Information We Collect</h2>
                <p className="text-base leading-8 text-slate-700">We collect information that you voluntarily provide to us when you fill out a form on our website. This includes:</p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
                  <li><strong>Contact form:</strong> your name, email address, phone number, and any message you send us.</li>
                  <li><strong>Quote request form:</strong> your name, email address, phone number, and details about your property or energy needs that you choose to share.</li>
                </ul>
                <p className="text-base leading-8 text-slate-700">We only collect this information when you choose to submit it. You are not required to provide personal information to browse our website.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">2. How We Use Your Information</h2>
                <p className="text-base leading-8 text-slate-700">We use the information you provide to:</p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
                  <li>Respond to your enquiries and contact requests</li>
                  <li>Prepare and send you solar system quotes</li>
                  <li>Provide customer support and after-sales service</li>
                  <li>Communicate with you about our products and services</li>
                  <li>Improve our website and the services we offer</li>
                </ul>
                <p className="text-base leading-8 text-slate-700">We do not sell, rent, or trade your personal information to third parties.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">3. How We Store and Protect Your Information</h2>
                <p className="text-base leading-8 text-slate-700">Information submitted through our forms is sent to our official email address (<a href="mailto:info@sunwareenergy.com" className="font-semibold text-emerald-700 hover:text-emerald-900">info@sunwareenergy.com</a>) and stored securely. We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">4. Cookies and Analytics</h2>
                <p className="text-base leading-8 text-slate-700">Our website may use cookies and similar technologies to improve your browsing experience. As our website grows, we may use analytics and advertising tools, including Google Analytics and the Meta (Facebook) Pixel, to understand how visitors use our site and to measure the effectiveness of our advertising. These tools may collect information such as your IP address, browser type, pages visited, and time spent on the site. This information is used in aggregate and does not personally identify you.</p>
                <p className="text-base leading-8 text-slate-700">You can control or disable cookies through your browser settings. Disabling cookies may affect some features of the website.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">5. Third-Party Services</h2>
                <p className="text-base leading-8 text-slate-700">We may use trusted third-party services (such as Google and Meta) to help us operate our website and advertising. These providers have their own privacy policies governing how they handle your data. We encourage you to review their policies:</p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
                  <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 hover:text-emerald-900">Google Privacy Policy</a></li>
                  <li><a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 hover:text-emerald-900">Meta Privacy Policy</a></li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">6. Your Rights</h2>
                <p className="text-base leading-8 text-slate-700">Under the Data Protection Act, 2019, you have the right to:</p>
                <ul className="list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict the processing of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-base leading-8 text-slate-700">To exercise any of these rights, please contact us using the details below.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">7. Data Retention</h2>
                <p className="text-base leading-8 text-slate-700">We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, including providing you with quotes and support, or as required by law.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">8. Changes to This Policy</h2>
                <p className="text-base leading-8 text-slate-700">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date. We encourage you to review this policy periodically.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">9. Contact Us</h2>
                <p className="text-base leading-8 text-slate-700">If you have any questions about this Privacy Policy or how we handle your personal data, please contact us:</p>
                <div className="rounded-2xl bg-slate-50 p-5 text-base leading-8 text-slate-700">
                  <p className="font-semibold text-slate-900">Sunware Energy Limited</p>
                  <p>Phone: +254 724 659 062</p>
                  <p>Email: <a href="mailto:info@sunwareenergy.com" className="font-semibold text-emerald-700 hover:text-emerald-900">info@sunwareenergy.com</a></p>
                  <p>Location: Samtech Plaza, Utawala, Eastern Bypass, Nairobi, Kenya</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a7c6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 sm:pb-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="font-bold">Sunware Energy Limited</div>
            <div className="text-sm text-white/80">© {new Date().getFullYear()} Sunware Energy Limited. All rights reserved.</div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pr-16 sm:pr-0 text-sm">
            <Link href="/privacy-policy" className="text-white/80 hover:text-white">Privacy Policy</Link>
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
