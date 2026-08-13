import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  const data = await request.json()

  const { name, email, phone, service, message } = data

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Name, email and phone number are required.' }, { status: 400 })
  }

  // Same Resend account and verified sender as the quote form: the from address
  // must be on the verified send.* subdomain or Resend rejects it with a 403.
  const missing = ['RESEND_API_KEY', 'QUOTE_FROM_EMAIL'].filter((key) => !process.env[key])

  if (missing.length > 0) {
    console.error(`Email is not configured, missing: ${missing.join(', ')}`)
    return NextResponse.json({ error: 'Email is not configured. Please call us instead.' }, { status: 500 })
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service Interested In: ${service || '-'}`,
    '',
    'Message:',
    message || '-',
  ]

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: process.env.QUOTE_FROM_EMAIL!,
    to: process.env.CONTACT_TO_EMAIL || process.env.QUOTE_TO_EMAIL || 'info@sunwareenergy.com',
    // So hitting Reply in the inbox answers the sender, not the no-reply sender address.
    replyTo: email,
    subject: `New Contact Message from ${name}`,
    text: lines.join('\n'),
  })

  if (error) {
    console.error('Failed to send contact email:', error)
    return NextResponse.json({ error: 'Failed to send your message. Please try again later.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
