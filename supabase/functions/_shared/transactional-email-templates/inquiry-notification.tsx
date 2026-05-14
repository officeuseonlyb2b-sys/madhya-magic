import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Enchanting Madhya Pradesh'
const RECEIVER = 'info@enchantingmp.com'

interface InquiryNotificationProps {
  formName?: string
  fullName?: string
  email?: string
  phone?: string
  destination?: string
  packageName?: string
  message?: string
  travelDate?: string
  travelers?: string
  submittedAt?: string
  ipAddress?: string
  pageUrl?: string
  extraFields?: Record<string, string>
}

const Row = ({ label, value }: { label: string; value?: string }) => {
  if (!value) return null
  return (
    <tr>
      <td style={tdLabel}>{label}</td>
      <td style={tdValue}>{value}</td>
    </tr>
  )
}

const InquiryNotificationEmail = (props: InquiryNotificationProps) => {
  const {
    formName = 'Website Form',
    fullName, email, phone, destination, packageName, message,
    travelDate, travelers, submittedAt, ipAddress, pageUrl, extraFields,
  } = props
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New {formName} submission from {fullName || 'a visitor'}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={brand}>
            <Heading style={brandTitle}>Enchanting MP</Heading>
            <Text style={brandTag}>New Inquiry Notification</Text>
          </Section>

          <Section style={card}>
            <Heading as="h2" style={h2}>New {formName} Submission</Heading>
            <Text style={intro}>
              You have received a new inquiry through your website. Details below:
            </Text>

            <table style={table} cellPadding={0} cellSpacing={0}>
              <tbody>
                <Row label="Form" value={formName} />
                <Row label="Full Name" value={fullName} />
                <Row label="Email" value={email} />
                <Row label="Phone" value={phone} />
                <Row label="Destination" value={destination} />
                <Row label="Package" value={packageName} />
                <Row label="Travel Date" value={travelDate} />
                <Row label="Travelers" value={travelers} />
                {extraFields && Object.entries(extraFields).map(([k, v]) =>
                  <Row key={k} label={k} value={v} />
                )}
              </tbody>
            </table>

            {message && (
              <>
                <Hr style={hr} />
                <Text style={msgLabel}>Message</Text>
                <Text style={msgBody}>{message}</Text>
              </>
            )}

            <Hr style={hr} />
            <Text style={meta}>
              Submitted: {submittedAt || new Date().toISOString()}<br />
              {pageUrl && <>Page: {pageUrl}<br /></>}
              {ipAddress && <>IP: {ipAddress}</>}
            </Text>
          </Section>

          <Text style={footer}>
            This notification was sent automatically from {SITE_NAME} to {RECEIVER}.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: InquiryNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New ${data.formName || 'Inquiry'} — ${data.fullName || 'Website Visitor'}`,
  to: RECEIVER,
  displayName: 'Inquiry notification (internal)',
  previewData: {
    formName: 'Tour Inquiry',
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+91 98765 43210',
    destination: 'Khajuraho',
    packageName: 'Heritage Heart of MP — 5N/6D',
    travelDate: '2026-08-12',
    travelers: '2 Adults',
    message: 'We would love a romantic anniversary trip with private guide.',
    submittedAt: new Date().toISOString(),
    pageUrl: 'https://enchantingmp.com/contact',
    ipAddress: '203.0.113.42',
  },
} satisfies TemplateEntry

const main: React.CSSProperties = { backgroundColor: '#ffffff', fontFamily: '"DM Sans", Arial, sans-serif', margin: 0, padding: 0 }
const container: React.CSSProperties = { maxWidth: '600px', margin: '0 auto', padding: '24px 16px' }
const brand: React.CSSProperties = { textAlign: 'center', padding: '24px 0 16px' }
const brandTitle: React.CSSProperties = { fontFamily: '"Playfair Display", Georgia, serif', fontSize: '28px', fontWeight: 700, margin: 0, background: 'linear-gradient(90deg,#d4a648,#f4cf6a)', WebkitBackgroundClip: 'text', color: '#b8860b' }
const brandTag: React.CSSProperties = { fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#888', margin: '4px 0 0' }
const card: React.CSSProperties = { background: '#fffaf2', border: '1px solid #f0e3c8', borderRadius: '12px', padding: '28px 24px', boxShadow: '0 2px 12px rgba(180,140,60,0.06)' }
const h2: React.CSSProperties = { fontFamily: '"Playfair Display", Georgia, serif', fontSize: '20px', color: '#1a1a1a', margin: '0 0 8px' }
const intro: React.CSSProperties = { fontSize: '14px', color: '#555', margin: '0 0 18px' }
const table: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: '14px' }
const tdLabel: React.CSSProperties = { padding: '8px 12px 8px 0', color: '#888', width: '35%', verticalAlign: 'top', borderBottom: '1px solid #f3e9d4' }
const tdValue: React.CSSProperties = { padding: '8px 0', color: '#1a1a1a', fontWeight: 500, borderBottom: '1px solid #f3e9d4', wordBreak: 'break-word' }
const hr: React.CSSProperties = { borderColor: '#f0e3c8', margin: '20px 0' }
const msgLabel: React.CSSProperties = { fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888', margin: '0 0 6px' }
const msgBody: React.CSSProperties = { fontSize: '14px', color: '#1a1a1a', lineHeight: 1.6, margin: 0, whiteSpace: 'pre-wrap' }
const meta: React.CSSProperties = { fontSize: '12px', color: '#999', lineHeight: 1.6, margin: 0 }
const footer: React.CSSProperties = { fontSize: '11px', color: '#bbb', textAlign: 'center', margin: '20px 0 0' }
