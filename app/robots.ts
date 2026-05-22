import { NextResponse } from 'next/server'

export async function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: https://sunwareenergy.com/sitemap.xml
`

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
