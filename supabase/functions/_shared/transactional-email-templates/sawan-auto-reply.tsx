import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface SawanAutoReplyProps {
  fullName?: string
}

const SawanAutoReplyEmail = ({ fullName }: SawanAutoReplyProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your Sawan Yatra Enquiry Has Been Received 🙏</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brand}>
          <Text style={omSymbol}>ॐ</Text>
          <Heading style={brandTitle}>Sawan Yatra</Heading>
          <Text style={brandTag}>Mahakal Darshan · Ujjain · Omkareshwar</Text>
        </Section>

        <Section style={card}>
          <Heading as="h1" style={h1}>
            {fullName ? `Dear ${fullName},` : 'Dear Devotee,'}
          </Heading>
          <Text style={mantra}>Har Har Mahadev 🙏</Text>

          <Text style={text}>
            Thank you for planning your sacred Sawan Yatra with us.
          </Text>
          <Text style={text}>
            We have successfully received your enquiry and our Yatra Experts
            will contact you shortly to assist with:
          </Text>

          <Section style={listBox}>
            <Text style={listItem}>• Mahakal Darshan</Text>
            <Text style={listItem}>• Bhasma Aarti Assistance</Text>
            <Text style={listItem}>• Sawan Special Experiences</Text>
            <Text style={listItem}>• Omkareshwar Visits</Text>
            <Text style={listItem}>• Travel &amp; Accommodation Guidance</Text>
            <Text style={listItem}>• Customized Spiritual Packages</Text>
          </Section>

          <Text style={text}>
            Your spiritual journey is important to us, and we look forward to
            helping you create a memorable and divine experience.
          </Text>
          <Text style={blessing}>
            May Lord Mahakal bless you and your family with peace, prosperity,
            and spiritual fulfillment.
          </Text>
          <Text style={mantra}>Har Har Mahadev 🙏</Text>

          <Hr style={hr} />

          <Text style={signature}>
            Warm Regards,<br />
            <b>Enchanting MP Team</b><br />
            <span style={muted}>info@enchantingmp.com · +91 9109114934</span>
          </Text>
        </Section>

        <Text style={footer}>
          You're receiving this because you submitted a Sawan Yatra enquiry on enchantingmp.com.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: SawanAutoReplyEmail,
  subject: 'Your Sawan Yatra Enquiry Has Been Received 🙏',
  displayName: 'Sawan Yatra auto-reply (to user)',
  previewData: { fullName: 'Devotee' },
} satisfies TemplateEntry

const main: React.CSSProperties = { backgroundColor: '#ffffff', fontFamily: '"DM Sans", Arial, sans-serif', margin: 0, padding: 0 }
const container: React.CSSProperties = { maxWidth: '600px', margin: '0 auto', padding: '24px 16px' }
const brand: React.CSSProperties = { textAlign: 'center', padding: '24px 0 16px' }
const omSymbol: React.CSSProperties = { fontSize: '40px', color: '#d4a017', margin: '0 0 4px', lineHeight: 1 }
const brandTitle: React.CSSProperties = { fontFamily: '"Playfair Display", Georgia, serif', fontSize: '32px', fontWeight: 700, margin: 0, color: '#7a3a0a' }
const brandTag: React.CSSProperties = { fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#a86a2a', margin: '6px 0 0' }
const card: React.CSSProperties = { background: '#fffaf2', border: '1px solid #f0d9a8', borderRadius: '14px', padding: '36px 28px', boxShadow: '0 2px 12px rgba(180,140,60,0.08)' }
const h1: React.CSSProperties = { fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', color: '#1a1a1a', margin: '0 0 8px' }
const mantra: React.CSSProperties = { fontFamily: '"Playfair Display", Georgia, serif', fontSize: '18px', color: '#b8520a', margin: '0 0 18px', fontStyle: 'italic' }
const text: React.CSSProperties = { fontSize: '15px', color: '#444', lineHeight: 1.7, margin: '0 0 14px' }
const listBox: React.CSSProperties = { background: '#fff4e0', borderLeft: '3px solid #d4a017', borderRadius: '8px', padding: '14px 18px', margin: '14px 0 18px' }
const listItem: React.CSSProperties = { fontSize: '14px', color: '#3a1d05', lineHeight: 1.8, margin: 0 }
const blessing: React.CSSProperties = { fontSize: '15px', color: '#7a3a0a', lineHeight: 1.7, margin: '0 0 14px', fontStyle: 'italic' }
const hr: React.CSSProperties = { borderColor: '#f0d9a8', margin: '24px 0' }
const signature: React.CSSProperties = { fontSize: '14px', color: '#1a1a1a', lineHeight: 1.7, margin: 0 }
const muted: React.CSSProperties = { color: '#888', fontSize: '13px' }
const footer: React.CSSProperties = { fontSize: '11px', color: '#bbb', textAlign: 'center', margin: '20px 0 0' }
