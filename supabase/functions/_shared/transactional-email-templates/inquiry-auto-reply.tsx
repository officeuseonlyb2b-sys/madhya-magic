import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Enchanting Madhya Pradesh'

interface AutoReplyProps {
  fullName?: string
  formName?: string
}

const InquiryAutoReplyEmail = ({ fullName, formName }: AutoReplyProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thank you for contacting {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brand}>
          <Heading style={brandTitle}>Enchanting MP</Heading>
          <Text style={brandTag}>The Heart of Incredible India</Text>
        </Section>

        <Section style={card}>
          <Heading as="h1" style={h1}>
            {fullName ? `Thank you, ${fullName}!` : 'Thank you for reaching out!'}
          </Heading>
          <Text style={text}>
            We have received your {formName ? formName.toLowerCase() : 'inquiry'} and
            our travel experts will get back to you within <b>24 hours</b> with a
            curated proposal crafted around your preferences.
          </Text>
          <Text style={text}>
            In the meantime, feel free to explore our handpicked journeys across
            ancient temples, royal heritage, tiger reserves and serene hill stations
            of Madhya Pradesh.
          </Text>

          <Hr style={hr} />

          <Text style={signature}>
            Warm regards,<br />
            <b>The Enchanting MP Team</b><br />
            <span style={muted}>info@enchantingmp.com · +91 9109114934</span>
          </Text>
        </Section>

        <Text style={footer}>
          You're receiving this because you submitted an inquiry on enchantingmp.com.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: InquiryAutoReplyEmail,
  subject: 'Thank You for Contacting Enchanting Madhya Pradesh',
  displayName: 'Inquiry auto-reply (to user)',
  previewData: { fullName: 'Jane', formName: 'Tour Inquiry' },
} satisfies TemplateEntry

const main: React.CSSProperties = { backgroundColor: '#ffffff', fontFamily: '"DM Sans", Arial, sans-serif', margin: 0, padding: 0 }
const container: React.CSSProperties = { maxWidth: '600px', margin: '0 auto', padding: '24px 16px' }
const brand: React.CSSProperties = { textAlign: 'center', padding: '24px 0 16px' }
const brandTitle: React.CSSProperties = { fontFamily: '"Playfair Display", Georgia, serif', fontSize: '30px', fontWeight: 700, margin: 0, color: '#b8860b' }
const brandTag: React.CSSProperties = { fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888', margin: '4px 0 0' }
const card: React.CSSProperties = { background: '#fffaf2', border: '1px solid #f0e3c8', borderRadius: '14px', padding: '36px 28px', boxShadow: '0 2px 12px rgba(180,140,60,0.06)' }
const h1: React.CSSProperties = { fontFamily: '"Playfair Display", Georgia, serif', fontSize: '26px', color: '#1a1a1a', margin: '0 0 16px', textAlign: 'center' }
const text: React.CSSProperties = { fontSize: '15px', color: '#444', lineHeight: 1.7, margin: '0 0 14px' }
const hr: React.CSSProperties = { borderColor: '#f0e3c8', margin: '24px 0' }
const signature: React.CSSProperties = { fontSize: '14px', color: '#1a1a1a', lineHeight: 1.7, margin: 0 }
const muted: React.CSSProperties = { color: '#888', fontSize: '13px' }
const footer: React.CSSProperties = { fontSize: '11px', color: '#bbb', textAlign: 'center', margin: '20px 0 0' }
