import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="w-full bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
              Terms & Conditions
            </h1>

            <div className="flex items-center gap-3 mt-5 text-lg font-medium">
              <span className="text-emerald-400">Home</span>
              <span className="text-white/70">→</span>
              <span className="text-white">Terms & Conditions</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 lg:py-20">
          <div className="space-y-10 text-[17px] leading-8 text-gray-700">
            {/* Intro */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Terms & Conditions
              </h2>

              <p>
                Welcome to Enchanting Madhya Pradesh — your gateway to
                handcrafted journeys across the Heartland of India.
              </p>

              <p className="mt-4">
                These Terms & Conditions govern your access to and use of our
                website, services, tours, itineraries, and travel-related
                offerings available through www.enchantingmp.com. By using our
                website, you agree to comply with and be bound by the terms
                outlined below.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                1. Acceptance of Terms
              </h3>

              <p>
                By accessing, browsing, or booking through our website, you
                acknowledge that you have read, understood, and agreed to these
                Terms & Conditions, along with our Privacy Policy and other
                applicable policies.
              </p>

              <p className="mt-4">
                If you do not agree with any part of these terms, we kindly
                request that you discontinue use of the website.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                2. About Enchanting Madhya Pradesh
              </h3>

              <p>
                Enchanting Madhya Pradesh is a travel and destination management
                company specializing in curated experiences across Madhya
                Pradesh and selected destinations across India.
              </p>

              <p className="mt-4">
                We aim to provide authentic, seamless, and memorable travel
                experiences through carefully designed itineraries, hotel
                partnerships, transport arrangements, guides, activities, and
                destination services.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                3. Website Usage
              </h3>

              <p>
                You agree to use this website only for lawful purposes and in a
                manner that does not infringe upon the rights, restrict, or
                inhibit the use of this website by any other person.
              </p>

              <p className="mt-4">You must not:</p>

              <ul className="list-disc pl-8 mt-4 space-y-2">
                <li>Use the website for fraudulent or unlawful purposes</li>
                <li>
                  Attempt unauthorized access to any section of the website or
                  server
                </li>
                <li>
                  Copy, reproduce, or commercially exploit website content
                  without written permission
                </li>
                <li>
                  Use any material, images, branding, or itineraries for resale
                  or redistribution without authorization
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                4. Intellectual Property Rights
              </h3>

              <p>
                Unless otherwise stated, all content on this website —
                including text, branding, logos, graphics, itineraries,
                photographs, videos, designs, and marketing material — is the
                intellectual property of Enchanting Madhya Pradesh and/or its
                licensors.
              </p>

              <p className="mt-4">
                You may access the website for personal and non-commercial use
                only.
              </p>

              <p className="mt-4">You may not:</p>

              <ul className="list-disc pl-8 mt-4 space-y-2">
                <li>Republish material from the website</li>
                <li>Sell, rent, or sublicense website content</li>
                <li>
                  Reproduce or duplicate material for commercial purposes
                </li>
                <li>Redistribute content without written consent</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                5. Booking & Travel Services
              </h3>

              <p>
                All bookings made through Enchanting Madhya Pradesh are subject
                to availability, operational feasibility, supplier conditions,
                and confirmation.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                Important Notes:
              </h4>

              <ul className="list-disc pl-8 space-y-2">
                <li>
                  Hotel rates and safari permits are dynamic and subject to
                  change without prior notice
                </li>
                <li>
                  Certain experiences may require advance booking and full
                  payment
                </li>
                <li>
                  Exact confirmations are subject to availability at the time of
                  booking
                </li>
                <li>
                  Travel schedules may change due to weather, operational
                  conditions, government regulations, or force majeure
                  situations
                </li>
              </ul>

              <p className="mt-4">
                We reserve the right to modify itineraries, accommodations, or
                services with suitable alternatives whenever necessary.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                6. Payments & Pricing
              </h3>

              <p>
                All prices shared on the website, proposals, brochures, or
                itineraries are subject to revision unless specifically
                confirmed in writing.
              </p>

              <p className="mt-4">Bookings may require:</p>

              <ul className="list-disc pl-8 mt-4 space-y-2">
                <li>Partial advance payment</li>
                <li>Full payment before travel</li>
                <li>
                  Non-refundable deposits for certain services such as safaris,
                  luxury hotels, special permits, or peak-season reservations
                </li>
              </ul>

              <p className="mt-4">
                Failure to complete payments within the specified timeline may
                result in automatic cancellation of services.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                7. Cancellation & Refund Policy
              </h3>

              <p>
                Cancellation policies may vary depending on:
              </p>

              <ul className="list-disc pl-8 mt-4 space-y-2">
                <li>Hotel policies</li>
                <li>Safari and permit regulations</li>
                <li>Airline/train operators</li>
                <li>Seasonal conditions</li>
                <li>Third-party suppliers</li>
              </ul>

              <p className="mt-4">
                Applicable cancellation charges will be communicated at the time
                of booking confirmation.
              </p>

              <p className="mt-4">
                Certain services may be completely non-refundable.
              </p>

              <p className="mt-4">
                Refund timelines depend on supplier processing timelines and
                banking procedures.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                8. User Content & Comments
              </h3>

              <p>
                Certain sections of the website may allow users to share
                reviews, comments, feedback, or opinions.
              </p>

              <p className="mt-4">
                By posting content on our website, you confirm that:
              </p>

              <ul className="list-disc pl-8 mt-4 space-y-2">
                <li>You own or have permission to share the content</li>
                <li>
                  The content does not violate any intellectual property rights
                </li>
                <li>
                  The content is not defamatory, offensive, misleading, or
                  unlawful
                </li>
              </ul>

              <p className="mt-4">
                Enchanting Madhya Pradesh reserves the right to remove or
                moderate any content deemed inappropriate.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                9. External Links
              </h3>

              <p>
                Our website may contain links to third-party websites for
                additional information, bookings, or services.
              </p>

              <p className="mt-4">We are not responsible for:</p>

              <ul className="list-disc pl-8 mt-4 space-y-2">
                <li>Content on external websites</li>
                <li>Third-party policies or practices</li>
                <li>
                  Any losses or damages arising from third-party interactions
                </li>
              </ul>

              <p className="mt-4">
                Users are advised to review the policies of external websites
                independently.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                10. Limitation of Liability
              </h3>

              <p>
                While we strive to ensure accurate and updated information,
                Enchanting Madhya Pradesh does not guarantee:
              </p>

              <ul className="list-disc pl-8 mt-4 space-y-2">
                <li>Completeness of website information</li>
                <li>Continuous website availability</li>
                <li>Error-free operation of the platform</li>
              </ul>

              <p className="mt-4">We shall not be liable for:</p>

              <ul className="list-disc pl-8 mt-4 space-y-2">
                <li>Indirect or consequential losses</li>
                <li>
                  Delays caused by natural events, government actions, strikes,
                  weather, or operational disruptions
                </li>
                <li>Loss of personal belongings during travel</li>
                <li>Service interruptions beyond our control</li>
              </ul>

              <p className="mt-4">
                Travelers are advised to carry valid travel insurance wherever
                applicable.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                11. Privacy & Cookies
              </h3>

              <p>
                Our website may use cookies and analytics tools to improve user
                experience, website performance, and personalized services.
              </p>

              <p className="mt-4">
                By using the website, you consent to the use of cookies in
                accordance with our Privacy Policy.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                12. Modifications to Terms
              </h3>

              <p>
                Enchanting Madhya Pradesh reserves the right to update or revise
                these Terms & Conditions at any time without prior notice.
              </p>

              <p className="mt-4">
                Continued use of the website following updates constitutes
                acceptance of the revised terms.
              </p>
            </div>

            {/* 13 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                13. Governing Law
              </h3>

              <p>
                These Terms & Conditions shall be governed and interpreted in
                accordance with the laws of India. Any disputes arising from the
                use of this website or our services shall fall under the
                jurisdiction of the competent courts in Madhya Pradesh, India.
              </p>
            </div>

            {/* 14 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                14. Contact Us
              </h3>

              <p>
                For any queries, concerns, or support regarding these Terms &
                Conditions, you may contact us through the details available on
                our website.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 mt-6 border border-blue-200">
                <h4 className="text-2xl font-bold text-gray-900">
                  Enchanting Madhya Pradesh
                </h4>

                <p className="mt-2 text-lg text-gray-700">
                  The Magic… The Mystery… We Make It Yours. ✨
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default TermsConditions;