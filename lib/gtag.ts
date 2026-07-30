// Google Analytics 4 measurement ID. Loads the shared gtag.js site tag.
export const GA_MEASUREMENT_ID = 'G-D2640PVVSZ'

// Google Ads conversion ID. Configured alongside GA4 on every page so Google
// Ads can attribute visits and build remarketing audiences.
export const GOOGLE_ADS_ID = 'AW-11480051368'

// Label for the "Submit lead form" conversion action, fired by the quote form.
export const QUOTE_CONVERSION_LABEL = 'X1K4CPTy-9gcEKjdjuIq'

export function fireConversion(conversionLabel: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
      // Nominal per-lead value from the Google Ads snippet. Worth revisiting
      // once there is a real sense of what a quote request is worth.
      value: 1.0,
      currency: 'USD',
    })
  }
}
