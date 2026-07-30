// Google Analytics 4 measurement ID. Loads the shared gtag.js site tag.
export const GA_MEASUREMENT_ID = 'G-D2640PVVSZ'

// Google Ads conversion ID, still a placeholder. Google Ads conversions need an
// AW- prefixed ID from Goals > Conversions; the GA4 G- id above will not work
// here. Conversion events are no-ops until this and the label are filled in.
export const GOOGLE_ADS_ID = 'AW-XXXXXXXXX'

export function fireConversion(conversionLabel: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
    })
  }
}
