import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  const data = await request.json()

  const { fullName, email, phone, city, need, setup, sizeOption, recommendedSystemSize, batteryCapacity } = data

  if (!fullName || !email || !phone) {
    return NextResponse.json({ error: 'Full name, email and phone number are required.' }, { status: 400 })
  }

  // Both are required rather than defaulted: a wrong-but-plausible default
  // sender just yields an opaque 403 from Resend at send time.
  const missing = ['RESEND_API_KEY', 'QUOTE_FROM_EMAIL'].filter((key) => !process.env[key])

  if (missing.length > 0) {
    console.error(`Email is not configured, missing: ${missing.join(', ')}`)
    return NextResponse.json({ error: 'Email is not configured. Please call us instead.' }, { status: 500 })
  }

  const lines = [
    `Full Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Town/City: ${city || '-'}`,
    `Looking for: ${need || '-'}`,
    `Current Electricity Setup: ${setup || '-'}`,
    `System size known: ${sizeOption === 'know' ? 'Yes' : 'No'}`,
  ]

  if (sizeOption === 'know') {
    lines.push(`Recommended System Size: ${recommendedSystemSize || '-'} kW`)
    lines.push(`Battery Capacity: ${batteryCapacity || '-'} kWh`)
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: process.env.QUOTE_FROM_EMAIL!,
    to: process.env.QUOTE_TO_EMAIL || 'info@sunwareenergy.com',
    subject: `New Quote Request from ${fullName}`,
    replyTo: email,
    text: lines.join('\n'),
  })

  if (error) {
    console.error('Failed to send quote email:', error)
    return NextResponse.json({ error: 'Failed to send quote request. Please try again later.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
