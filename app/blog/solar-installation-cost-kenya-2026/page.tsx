import Link from 'next/link'

export default function PostPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-bold text-[#2ebc6e]">Sunware Energy</Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-[#2ebc6e]">Home</Link>
            <Link href="/about" className="text-slate-700 hover:text-[#2ebc6e]">About</Link>
            <Link href="/services" className="text-slate-700 hover:text-[#2ebc6e]">Services</Link>
            <Link href="/portfolio" className="text-slate-700 hover:text-[#2ebc6e]">Portfolio</Link>
            <Link href="/blog" className="text-[#2ebc6e] font-semibold">Blog</Link>
            <Link href="/quote" className="text-slate-700 hover:text-[#2ebc6e]">Get a Quote</Link>
            <Link href="/contact" className="text-slate-700 hover:text-[#2ebc6e]">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-200">Pricing Guide</p>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">How Much Does Solar Installation Cost in Kenya in 2026?</h1>
            <p className="mt-6 max-w-3xl text-lg text-emerald-100">With electricity bills rising and power outages becoming more frequent across Kenya, more homeowners and businesses are turning to solar energy as a reliable, long-term solution. But one of the first questions everyone asks is: how much does solar installation cost in Kenya? At Sunware Energy Limited, we believe in complete price transparency. In this guide, we break down the real cost of solar systems in Kenya in 2026. <Link href="/quote" className="font-semibold text-white underline decoration-emerald-300">Get a Free Quote</Link> today or use our <Link href="/calculator" className="font-semibold text-white underline decoration-emerald-300">Solar Calculator</Link> to estimate your system size.</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-3 text-sm text-emerald-100">
                <span className="rounded-full bg-white/10 px-4 py-2">May 2026</span>
                <span className="rounded-full bg-white/10 px-4 py-2">5 min read</span>
                <span className="rounded-full bg-emerald-200/15 px-4 py-2 text-emerald-100">Pricing Guide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 -mt-10 mb-10">
        <div className="rounded-3xl border border-emerald-200/30 bg-emerald-50 p-6 shadow-xl">
          <div className="rounded-3xl bg-white p-6 md:p-8 shadow-lg">
            <div className="mb-8 rounded-3xl border border-emerald-200 bg-emerald-100 p-6">
              <h2 className="text-xl font-semibold text-emerald-900">Table of Contents</h2>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li><a href="#cost-factors" className="hover:text-emerald-900">What Affects the Cost of Solar in Kenya?</a></li>
                <li><a href="#system-prices" className="hover:text-emerald-900">Solar System Prices in Kenya 2026</a></li>
                <li><a href="#offgrid-vs-hybrid" className="hover:text-emerald-900">Off-Grid vs Hybrid — Which Should You Choose?</a></li>
                <li><a href="#worth-it" className="hover:text-emerald-900">Is Solar Worth It in Kenya?</a></li>
                <li><a href="#choose-company" className="hover:text-emerald-900">How to Choose the Right Solar Company in Kenya</a></li>
                <li><a href="#faqs" className="hover:text-emerald-900">Frequently Asked Questions</a></li>
                <li><a href="#quote-cta" className="hover:text-emerald-900">Get a Free Solar Quote Today</a></li>
              </ul>
            </div>

            <article className="space-y-10">
              <section id="cost-factors" className="space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">What Affects the Cost of Solar in Kenya?</h2>
                <p className="text-slate-700">Before diving into prices, here are the key factors that drive the cost:</p>
                <ul className="space-y-3 text-slate-700">
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm"> <strong>System size (kW)</strong> — The bigger the system, the more panels and equipment required</li>
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm"> <strong>Battery type and capacity</strong> — Lithium batteries cost more upfront but last longer and perform better than lead-acid</li>
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm"> <strong>Inverter type</strong> — Off-grid vs hybrid inverters are priced differently</li>
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm"> <strong>Number of solar panels</strong> — More panels = more power generation</li>
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm"> <strong>Installation complexity</strong> — Roof type, height, and location can affect installation costs</li>
                </ul>
              </section>

              <section id="system-prices" className="space-y-8">
                <h2 className="text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">Solar System Prices in Kenya 2026</h2>
                <p className="text-slate-700">All prices below include lithium battery storage, solar panels, inverter, and professional installation by our EPRA-licensed team.</p>

                <div className="grid gap-6">
                  <div className="rounded-[1.75rem] border-l-4 border-emerald-500 bg-white p-8 shadow-lg">
                    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">3kW Off-Grid Solar System</p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-900">KES 270,000</h3>
                      </div>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-700">
                      <p><strong>Ideal for:</strong> Small homes, apartments, small offices</p>
                      <p><strong>System includes:</strong> 4 × 620W solar panels, 2.56kWh lithium battery, 3kW inverter</p>
                      <p><strong>What it powers:</strong> Lights, TV, decoder, WiFi router, phone charging, small fridge</p>
                      <p><strong>Best for:</strong> Clients with no KPLC connection or frequent outages</p>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border-l-4 border-emerald-500 bg-white p-8 shadow-lg">
                    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">5kW Off-Grid Solar System</p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-900">KES 380,000</h3>
                      </div>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-700">
                      <p><strong>Ideal for:</strong> Medium homes, small businesses</p>
                      <p><strong>System includes:</strong> 6 × 620W solar panels, 5kWh lithium battery, 5kW inverter</p>
                      <p><strong>What it powers:</strong> All basic home appliances including fridge, TV, lights, and fans</p>
                      <p><strong>Best for:</strong> Clients in areas with unreliable or no grid power</p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.75rem] border-l-4 border-emerald-500 bg-white p-8 shadow-lg">
                    <span className="absolute right-6 top-6 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">Most Popular</span>
                    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">5kW Hybrid Solar System</p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-900">KES 440,000</h3>
                      </div>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-700">
                      <p><strong>Ideal for:</strong> Medium homes and offices on the KPLC grid</p>
                      <p><strong>System includes:</strong> 6 × 620W solar panels, 5kWh lithium battery, 5kW hybrid inverter</p>
                      <p><strong>What it powers:</strong> All home appliances with seamless switching between solar, battery and grid</p>
                      <p><strong>Best for:</strong> Clients who want to reduce electricity bills while keeping grid as backup</p>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border-l-4 border-emerald-500 bg-white p-8 shadow-lg">
                    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">8kW Hybrid Solar System</p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-900">KES 650,000</h3>
                      </div>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-700">
                      <p><strong>Ideal for:</strong> Large homes, small commercial premises</p>
                      <p><strong>System includes:</strong> 10 × 620W solar panels, 5kWh lithium battery, 8kW hybrid inverter</p>
                      <p><strong>What it powers:</strong> Full household load including water heater, washing machine, and multiple fridges</p>
                      <p><strong>Best for:</strong> High-consumption homes and small businesses</p>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border-l-4 border-emerald-500 bg-white p-8 shadow-lg">
                    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">10kW Hybrid Solar System</p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-900">KES 750,000</h3>
                      </div>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-700">
                      <p><strong>Ideal for:</strong> Large homes, schools, offices, commercial buildings</p>
                      <p><strong>System includes:</strong> 12 × 620W solar panels, 10kWh lithium battery, 10kW hybrid inverter</p>
                      <p><strong>What it powers:</strong> Heavy commercial loads, multiple air conditioners, large office equipment</p>
                      <p><strong>Best for:</strong> Businesses looking to significantly reduce their KPLC bills</p>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border-l-4 border-emerald-500 bg-white p-8 shadow-lg">
                    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">12kW Hybrid Solar System</p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-900">KES 850,000</h3>
                      </div>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-700">
                      <p><strong>Ideal for:</strong> Large commercial premises, factories, schools, hospitals</p>
                      <p><strong>System includes:</strong> 14 × 620W solar panels, 10kWh lithium battery, 12kW hybrid inverter</p>
                      <p><strong>What it powers:</strong> Full commercial operations including heavy machinery and multiple workstations</p>
                      <p><strong>Best for:</strong> Businesses with high energy demands seeking maximum independence from the grid</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="offgrid-vs-hybrid" className="space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">Off-Grid vs Hybrid — Which Should You Choose?</h2>
                <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 shadow-sm">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-emerald-900 text-white">
                      <tr>
                        <th className="px-6 py-4">Feature</th>
                        <th className="px-6 py-4">Off-Grid</th>
                        <th className="px-6 py-4">Hybrid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border-t px-6 py-4">Connected to KPLC grid</td>
                        <td className="border-t px-6 py-4 text-red-600">✗</td>
                        <td className="border-t px-6 py-4 text-emerald-600">✓</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border-t px-6 py-4">Uses battery at night</td>
                        <td className="border-t px-6 py-4 text-emerald-600">✓</td>
                        <td className="border-t px-6 py-4 text-emerald-600">✓</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border-t px-6 py-4">Falls back to grid if needed</td>
                        <td className="border-t px-6 py-4 text-red-600">✗</td>
                        <td className="border-t px-6 py-4 text-emerald-600">✓</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border-t px-6 py-4">Best for remote areas</td>
                        <td className="border-t px-6 py-4 text-emerald-600">✓</td>
                        <td className="border-t px-6 py-4 text-red-600">✗</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border-t px-6 py-4">Best for urban/suburban</td>
                        <td className="border-t px-6 py-4 text-red-600">✗</td>
                        <td className="border-t px-6 py-4 text-emerald-600">✓</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border-t px-6 py-4">Price</td>
                        <td className="border-t px-6 py-4">Lower</td>
                        <td className="border-t px-6 py-4">Higher</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="worth-it" className="space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">Is Solar Worth It in Kenya?</h2>
                <p className="text-slate-700">Solar is absolutely worth it in Kenya. Here is why:</p>
                <ul className="grid gap-4 sm:grid-cols-2">
                  <li className="rounded-3xl bg-slate-50 p-6 shadow-sm"> <strong>Payback period:</strong> Most systems pay for themselves within 3-5 years</li>
                  <li className="rounded-3xl bg-slate-50 p-6 shadow-sm"> <strong>System lifespan:</strong> Solar panels last 25+ years, lithium batteries 10+ years</li>
                  <li className="rounded-3xl bg-slate-50 p-6 shadow-sm"> <strong>Savings:</strong> Customers typically save 60-90% on their monthly electricity bills</li>
                  <li className="rounded-3xl bg-slate-50 p-6 shadow-sm"> <strong>Reliability:</strong> No more worrying about KPLC blackouts</li>
                </ul>
                <p className="text-slate-700"><strong>View our completed solar installations</strong> across Kenya to see real results from real clients — <Link href="/portfolio" className="font-semibold text-emerald-700">view our completed installations</Link>.</p>
              </section>

              <section id="choose-company" className="space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">How to Choose the Right Solar Company in Kenya</h2>
                <p className="text-slate-700">Not all solar companies are equal. Here is what to look for:</p>
                <ul className="space-y-3 text-slate-700">
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm">EPRA licensing — Ensure the company holds valid EPRA Class C1, V1 and V2 licences</li>
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm">Experience — Look for a proven track record of completed installations</li>
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm">After-sales support — A good company stays with you after installation</li>
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm">Transparent pricing — Avoid companies that hide costs or change prices after quoting</li>
                  <li className="rounded-2xl bg-slate-50 p-4 shadow-sm">Sunware Energy Limited is EPRA licensed and has completed 50+ installations across Kenya</li>
                </ul>
              </section>

              <section id="faqs" className="space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-500 pl-5">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <details className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <summary className="cursor-pointer text-lg font-semibold text-emerald-700">Q: Does the price include installation?</summary>
                    <p className="mt-3 text-slate-600">Yes. All our prices include professional installation by our EPRA-licensed engineers.</p>
                  </details>
                  <details className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <summary className="cursor-pointer text-lg font-semibold text-emerald-700">Q: Does the price include batteries?</summary>
                    <p className="mt-3 text-slate-600">Yes. All systems include lithium battery storage as specified.</p>
                  </details>
                  <details className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <summary className="cursor-pointer text-lg font-semibold text-emerald-700">Q: Can I pay in installments?</summary>
                    <p className="mt-3 text-slate-600">Contact us to discuss flexible payment options for your installation — <Link href="/contact" className="font-semibold text-emerald-700">Contact us</Link>.</p>
                  </details>
                  <details className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <summary className="cursor-pointer text-lg font-semibold text-emerald-700">Q: How long does installation take?</summary>
                    <p className="mt-3 text-slate-600">Most residential installations are completed within 1-2 days.</p>
                  </details>
                  <details className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <summary className="cursor-pointer text-lg font-semibold text-emerald-700">Q: Do you offer a warranty?</summary>
                    <p className="mt-3 text-slate-600">Yes. We offer warranty on both equipment and workmanship. Contact us for full warranty details.</p>
                  </details>
                </div>
              </section>

              <section id="quote-cta" className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-2xl">
                <div className="max-w-4xl">
                  <h2 className="text-3xl font-extrabold">Get a Free Solar Quote Today</h2>
                  <p className="mt-4 text-slate-300">Every home and business has unique energy needs. The prices above are starting guides — your actual system may be slightly different based on your specific energy consumption and location.</p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Link href="/quote" className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-400 sm:w-auto">Get a Free Quote</Link>
                    <Link href="/contact" className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/15 sm:w-auto">Contact Us</Link>
                  </div>
                  <div className="mt-8 space-y-2 text-sm text-slate-300">
                    <p>Phone: <span className="font-semibold text-white">+254 724 659 062</span></p>
                    <p>Email: <span className="font-semibold text-white">info@sunwareenergy.com</span></p>
                    <p>Location: <span className="font-semibold text-white">Samtech Plaza, Utawala, Eastern Bypass, Nairobi</span></p>
                  </div>
                </div>
              </section>

              <p className="text-sm text-slate-500">Footer note: Published by Sunware Energy Limited — EPRA Licensed Solar Installers in Kenya</p>
            </article>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-600">
          <div>© {new Date().getFullYear()} Sunware Energy Limited. All rights reserved.</div>
          <div className="mt-3 flex items-center justify-center gap-4">
            <Link href="/privacy-policy" className="text-[#2ebc6e] hover:text-[#0a7c6e]">Privacy Policy</Link>
            <Link href="/" className="text-[#2ebc6e] hover:text-[#0a7c6e]">Home</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
