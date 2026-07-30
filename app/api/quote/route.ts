import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const data = await request.json()

  const { fullName, phone, city, need, setup, sizeOption, recommendedSystemSize, batteryCapacity } = data

  if (!fullName || !phone) {
    return NextResponse.json({ error: 'Full name and phone number are required.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const lines = [
    `Full Name: ${fullName}`,
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

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.QUOTE_TO_EMAIL || 'info@sunwareenergy.com',
      replyTo: process.env.SMTP_FROM,
      subject: `New Quote Request from ${fullName}`,
      text: lines.join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to send quote email:', error)
    return NextResponse.json({ error: 'Failed to send quote request. Please try again later.' }, { status: 500 })
  }
}
