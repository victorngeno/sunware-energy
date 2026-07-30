export const GOOGLE_ADS_ID = 'AW-XXXXXXXXX'

export function fireConversion(conversionLabel: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
    })
  }
}
