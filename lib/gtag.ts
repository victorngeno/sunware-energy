// Google Analytics 4 measurement ID. Loads the shared gtag.js site tag.
export const GA_MEASUREMENT_ID = 'G-D2640PVVSZ'

// Google Ads conversion ID. Configured alongside GA4 on every page so Google
// Ads can attribute visits and build remarketing audiences.
export const GOOGLE_ADS_ID = 'AW-11480051368'

export function fireConversion(conversionLabel: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
    })
  }
}
