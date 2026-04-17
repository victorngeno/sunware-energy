"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Calculator() {
  const [step, setStep] = useState(1)
  const [appliances, setAppliances] = useState<Array<any>>([
    { id: Date.now(), name: '', watt: '', qty: 1, hours: 0 },
  ])
  const [backup, setBackup] = useState<'day'|'daynight'>('day')

  function addAppliance(){
    setAppliances(a=>[...a, { id: Date.now()+Math.random(), name:'', watt:'', qty:1, hours:0 }])
  }

  function removeAppliance(id:number){
    setAppliances(a=>a.filter(x=>x.id!==id))
  }

  function updateAppliance(id:number, field:string, value:any){
    setAppliances(a=>a.map(x=> x.id===id ? {...x, [field]: value} : x))
  }

  function resetAll(){
    setAppliances([{ id: Date.now(), name: '', watt: '', qty: 1, hours: 0 }])
    setBackup('day')
    setStep(1)
  }

  // Calculations
  const totalDailyKWh = appliances.reduce((sum, it) => {
    const watt = Number(it.watt)||0
    const qty = Number(it.qty)||0
    const hours = Number(it.hours)||0
    return sum + (watt * qty * hours) / 1000
  }, 0)

  const totalPeakWatt = appliances.reduce((sum, it) => {
    const watt = Number(it.watt)||0
    const qty = Number(it.qty)||0
    return sum + watt * qty
  }, 0)

  // Panel kW = totalDailyKWh / 5, rounded up to nearest 0.5
  const panelKWRaw = totalDailyKWh / 5
  const panelKW = Math.ceil(panelKWRaw * 2) / 2

  const batteryKWh = backup === 'daynight' ? +(totalDailyKWh * 0.6).toFixed(2) : null

  // inverter size kW = peakWatt/1000 rounded up (nearest 0.1)
  const inverterKW = Math.ceil((totalPeakWatt/1000) * 10) / 10 || 0

  return (
    <>
    <main className="min-h-screen bg-white text-gray-800">
      {/* Navbar (same style as other pages) */}
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
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2ebc6e] to-[#0a7c6e] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold">Solar System Calculator</h1>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">Estimate the right solar system size for your home in 4 easy steps</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-10">
        <div className="bg-white border rounded-lg shadow-sm p-6">
          <div className="mb-4 text-sm text-gray-600">Step {step} of 4</div>
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className={`h-2 rounded-full bg-[#2ebc6e]`} style={{ width: `${(step-1)/3*100}%` }} />
            </div>
          </div>

          {/* Step content */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold">Step 1 — Add Your Appliances</h2>
              <p className="mt-2 text-sm text-gray-600">Add appliances, wattage and quantity. Use suggested wattages below as a guide.</p>

              <div className="mt-4 space-y-3">
                {appliances.map((ap, idx) => (
                  <div key={ap.id} className="grid grid-cols-12 gap-2 items-center">
                    <input value={ap.name} onChange={(e)=>updateAppliance(ap.id,'name', e.target.value)} placeholder={`Appliance ${idx+1}`} className="col-span-5 border rounded-md px-3 py-2" />
                    <input value={ap.watt} onChange={(e)=>updateAppliance(ap.id,'watt', e.target.value)} placeholder="Wattage (e.g. 100)" type="number" className="col-span-2 border rounded-md px-3 py-2" />
                    <input value={ap.qty} onChange={(e)=>updateAppliance(ap.id,'qty', Number(e.target.value))} type="number" min={1} className="col-span-2 border rounded-md px-3 py-2" />
                    <button onClick={()=>removeAppliance(ap.id)} type="button" className="col-span-1 text-red-600 font-bold">×</button>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <button onClick={addAppliance} type="button" className="inline-flex items-center px-4 py-2 bg-[#2ebc6e] text-white rounded-md">+ Add Appliance</button>
              </div>

              <div className="mt-6 text-sm text-gray-700 bg-gray-50 p-4 rounded">
                <strong>Suggested wattages:</strong>
                  <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <div>LED Bulb: 10W</div>
                  <div>Fluorescent Tube: 40W</div>
                  <div>TV (32-43\"): 80W</div>
                  <div>TV (50+\"): 150W</div>
                  <div>Decoder/DSTV: 30W</div>
                  <div>Home Theatre: 100W</div>
                  <div>Laptop: 65W</div>
                  <div>WiFi Router: 20W</div>
                  <div>Phone Charger: 10W</div>
                  <div>Fridge: 200W</div>
                  <div>Microwave: 1200W</div>
                  <div>Electric Kettle: 1800W</div>
                  <div>Iron Box: 1500W</div>
                  <div>Instant Water Heater: 3500W</div>
                  <div>Blender: 400W</div>
                  <div>Washing Machine: 2400W</div>
                  <div>Hair Dryer: 1500W</div>
                  <div>Air Conditioner: 900W</div>
                  <div>Water Pump: 750W</div>
                  <div>Security Light: 30W</div>
                  <div>Fan: 60W</div>
                  <div>Sound System: 200W</div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold">Step 2 — Usage Hours</h2>
              <p className="mt-2 text-sm text-gray-600">Enter hours per day for each appliance.</p>
              <div className="mt-4 space-y-3">
                {appliances.map(ap=> (
                  <div key={ap.id} className="flex items-center gap-4">
                    <div className="w-1/2">{ap.name || 'Unnamed appliance'}</div>
                    <input type="number" value={ap.hours} min={0} onChange={(e)=>updateAppliance(ap.id,'hours', Number(e.target.value))} className="w-1/2 border rounded-md px-3 py-2" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold">Step 3 — Backup Preference</h2>
              <div className="mt-4 space-y-3">
                <label className="inline-flex items-center gap-3">
                  <input type="radio" name="backup" checked={backup==='day'} onChange={()=>setBackup('day')} className="h-4 w-4 text-[#2ebc6e]" />
                  <span>Day use only (No battery backup needed)</span>
                </label>

                <label className="inline-flex items-center gap-3">
                  <input type="radio" name="backup" checked={backup==='daynight'} onChange={()=>setBackup('daynight')} className="h-4 w-4 text-[#2ebc6e]" />
                  <span>Day + Night use (Battery backup required)</span>
                </label>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-xl font-semibold">Step 4 — Your Results</h2>
              <div className="mt-4 bg-gray-50 p-6 rounded">
                <div className="text-lg font-bold">Total Daily Energy Consumption</div>
                <div className="text-2xl text-[#2ebc6e] font-extrabold">{totalDailyKWh.toFixed(2)} kWh</div>

                <div className="mt-4">
                  <div className="font-semibold">Recommended Solar Panel Capacity</div>
                  <div className="text-xl">{panelKW} kW</div>
                </div>

                <div className="mt-4">
                  <div className="font-semibold">Recommended Battery Capacity</div>
                  <div className="text-xl">{batteryKWh ? `${batteryKWh} kWh` : 'Not required'}</div>
                </div>

                <div className="mt-4">
                  <div className="font-semibold">Recommended Inverter Size</div>
                  <div className="text-xl">{inverterKW} kW</div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link href="/quote" className="inline-flex items-center px-6 py-3 bg-[#2ebc6e] text-white rounded-md font-semibold">Get a Quote Based on This</Link>
                  <button onClick={resetAll} className="inline-flex items-center px-6 py-3 border rounded-md">Recalculate</button>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-between">
            <button onClick={()=>setStep(s=>Math.max(1,s-1))} disabled={step===1} className="px-4 py-2 border rounded-md disabled:opacity-50">Back</button>
            {step<4 ? (
              <button onClick={()=>setStep(s=>Math.min(4,s+1))} className="px-4 py-2 bg-[#2ebc6e] text-white rounded-md">Next</button>
            ) : null}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a7c6e] text-white mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <div className="font-bold">Sunware Energy Limited</div>
            <div className="text-sm text-white/80">© {new Date().getFullYear()} Sunware Energy Limited. All rights reserved.</div>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <Link href="/contact" className="text-white/80 hover:text-white">Contact</Link>
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
