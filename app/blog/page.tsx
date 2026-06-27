import Link from 'next/link'

export default function BlogPage() {
  return (
    <main>
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#2ebc6e]">Sunware Energy</Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#2ebc6e]">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-[#2ebc6e]">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-[#2ebc6e]">Services</Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-[#2ebc6e]">Portfolio</Link>
            <Link href="/blog" className="text-[#2ebc6e] font-semibold">Blog</Link>
            <Link href="/quote" className="text-gray-700 hover:text-[#2ebc6e]">Get a Quote</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#2ebc6e]">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="bg-[#ecfdf4] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-[#047857]">Blog</h1>
          <p className="mt-3 text-gray-700">Solar tips, guides and insights for Kenyan homes and businesses</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="border rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Pricing Guide</span>
                <div className="text-sm text-gray-500">May 2026 • 5 min read</div>
              </div>
              <h2 className="mt-4 text-xl font-semibold">How Much Does Solar Installation Cost in Kenya in 2026?</h2>
              <p className="mt-2 text-gray-600">A clear breakdown of typical system sizes, component costs, and real-world estimates to help you budget your solar project.</p>
              <div className="mt-4 flex items-center justify-between">
                <Link href="/blog/solar-installation-cost-kenya-2026" className="inline-block bg-[#2ebc6e] text-white px-4 py-2 rounded">Read More</Link>
                <Link href="/quote" className="text-sm text-gray-600">Get a Free Quote</Link>
              </div>
            </article>

            <article className="border rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Buyer's Guide</span>
                <div className="text-sm text-gray-500">June 2026 • 7 min read</div>
              </div>
              <h2 className="mt-4 text-xl font-semibold">Selecting the Best Solar Battery Type and Brand for Your Home or Property</h2>
              <p className="mt-2 text-gray-600">Lithium or gel? Deye or Dyness? Here's how to choose the right solar battery type and brand for your home or property in Kenya.</p>
              <div className="mt-4 flex items-center justify-between">
                <Link href="/blog/selecting-best-solar-battery-kenya" className="inline-block bg-[#2ebc6e] text-white px-4 py-2 rounded">Read More</Link>
                <Link href="/quote" className="text-sm text-gray-600">Get a Free Quote</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
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
