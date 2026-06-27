import type { Metadata } from 'next'
import PrivacyPolicyContent from './PrivacyPolicyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sunware Energy Limited',
  description: "Learn how Sunware Energy Limited collects, uses and protects your personal information in line with Kenya's Data Protection Act, 2019."
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />
}
