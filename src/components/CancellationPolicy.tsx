import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CancellationPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="w-full bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative w-full h-[320px] md:h-[420px] bg-gradient-to-r from-red-900 via-red-800 to-orange-700 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Cancellation & Refund Policy
            </h1>

            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Please read our cancellation and refund terms carefully before
              making any booking with EnchantingMP.com
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-5xl mx-auto px-5 md:px-10 py-16">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
            <p className="text-lg leading-8 text-gray-700 mb-8">
              We value transparency and customer satisfaction at
              EnchantingMP.com. Please read our cancellation and refund policy
              carefully to understand the terms.
            </p>

            {/* Cancellation Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cancellation Policy
              </h2>

              <p className="text-gray-700 mb-6">
                Days Prior to Departure & Applicable Cancellation Fees:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-red-600 text-white">
                    <tr>
                      <th className="text-left px-5 py-4">
                        Days Prior to Departure
                      </th>
                      <th className="text-left px-5 py-4">
                        Cancellation Charges
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      ["0 to 5 days", "100% of Net Tour Price"],
                      ["6 to 15 days", "75% of Net Tour Price"],
                      ["16 to 30 days", "50% of Net Tour Price"],
                      ["31 to 45 days", "40% of Net Tour Price"],
                      ["46 to 60 days", "30% of Net Tour Price"],
                      ["61 to 90 days", "20% of Net Tour Price"],
                      ["91 to 120 days", "15% of Net Tour Price"],
                      ["121 to 900 days", "10% of Net Tour Price"],
                    ].map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="px-5 py-4 text-gray-700">
                          {item[0]}
                        </td>

                        <td className="px-5 py-4 text-gray-700">
                          {item[1]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Refund Policy
              </h2>

              <div className="space-y-5 text-gray-700 leading-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Advance Payment
                  </h3>

                  <p>
                    All bookings require a 50% advance payment for confirmation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Refund Processing
                  </h3>

                  <p>
                    Refunds will be processed after deducting applicable
                    cancellation charges. Refunds may take up to 14 business
                    days to be credited back to the original payment method.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Non-Refundable Services
                  </h3>

                  <p>
                    Certain services like flight tickets, hotel bookings, safari
                    permits, or special inclusions may be non-refundable
                    depending on third-party provider policies.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Payment Terms
              </h2>

              <ul className="list-disc pl-6 space-y-4 text-gray-700 leading-8">
                <li>
                  Booking confirmation requires a 50% advance payment.
                </li>

                <li>
                  Once confirmed, vouchers with trip details and hotel
                  reservations will be issued.
                </li>

                <li>
                  100% payment must be completed before the tour starts.
                </li>

                <li>
                  Cash deposits must be made into the company current account
                  with the PAN card of the client.
                </li>
              </ul>
            </div>

            {/* Accepted Payment Methods */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Accepted Payment Methods
              </h2>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-gray-700 leading-8">
                  Cheque / Demand Draft / Debit Card / Credit Card / NEFT /
                  RTGS / IMPS
                </p>

                <p className="mt-4 text-gray-700 leading-8">
                  <strong>Note:</strong> For debit or credit card payments, an
                  additional 2% convenience fee will be applied.
                </p>

                <p className="mt-4 text-gray-700 leading-8">
                  Cheque/Demand Drafts should be made in favor of:
                </p>

                <div className="mt-3 space-y-2">
                  <p className="font-semibold text-red-700">
                    ARPITA TRAVELS PRIVATE LIMITED
                  </p>

                  <p className="font-semibold text-red-700">
                    ARPITA TRAVELS OPC PRIVATE LIMITED
                  </p>
                </div>
              </div>
            </div>

            {/* Important Points */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Important Points
              </h2>

              <ul className="list-disc pl-6 space-y-4 text-gray-700 leading-8">
                <li>
                  Clients must reconfirm their hotel reservations before travel.
                </li>

                <li>
                  EnchantingMP.com reserves the right to change bookings due to
                  unforeseen circumstances with prior notice.
                </li>

                <li>
                  Any modifications requested after confirmation may incur
                  additional charges.
                </li>

                <li>
                  By proceeding with a booking, clients agree to the terms
                  outlined in this policy.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CancellationPolicy;