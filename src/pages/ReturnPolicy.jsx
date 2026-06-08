import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SEO from "../components/SEO";

export default function ReturnPolicy() {
  return (
    <>
      <SEO 
        title="Returns Policy – The Mushroom Ottawa"
        description="Read the returns and refund policy for The Mushroom Ottawa. Learn about eligibility, non-returnable items, and how to initiate a return."
        canonical="https://themushroomottawa.ca/return-policy"
      />
      <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-375 mx-auto px-4 sm:px-6 py-10 nav-lato">
        {/* Title */}
        <h1 className="text-[35px] font-bold text-[#1a1a1a] nav-poppins mb-1">Returns Policy</h1>
        <p className="text-sm text-[#999999] nav-lato italic mb-6">Last Updated: May 2026</p>

        <p className="text-sm text-[#3b3b3b] nav-lato leading-relaxed mb-8">
          At <span className="font-bold">The Mushroom Ottawa</span>, we take pride in the quality of our mushrooms and mushroom products. We want you to be completely satisfied with your purchase. Please review our return and refund policies below.
        </p>

        {/* Section 1 */}
        <div className="border-t border-[#e0e0e0] pt-6 mb-6">
          <h2 className="text-[22px] font-bold text-[#003465] nav-poppins mb-3">1. Eligibility for Returns</h2>
          <p className="text-sm text-[#3b3b3b] nav-lato leading-relaxed mb-3">
            We accept returns on eligible items within 14 days of the original purchase date. To be eligible for a return, your item must be:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-1.5 text-sm text-[#3b3b3b] nav-lato">
            <li>Unused and in the same condition that you received it.</li>
            <li>In its original, unopened packaging.</li>
            <li>Accompanied by a receipt or proof of purchase.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="border-t border-[#e0e0e0] pt-6 mb-6">
          <h2 className="text-[22px] font-bold text-[#003465] nav-poppins mb-3">2. Non-Returnable Items</h2>
          <p className="text-sm text-[#3b3b3b] nav-lato leading-relaxed mb-3">
            Due to food safety standards and the perishable nature of some of our products, certain items cannot be returned. These include:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-1.5 text-sm text-[#3b3b3b] nav-lato">
            <li><span className="font-semibold">Fresh Mushrooms:</span> Because these are perishable goods, all sales of fresh mushrooms are final.</li>
            <li><span className="font-semibold">Opened Products:</span> Any dried mushrooms, tinctures, supplements, or kits that have been opened or tampered with.</li>
            <li>Gift cards and clearance items.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="border-t border-[#e0e0e0] pt-6 mb-6">
          <h2 className="text-[22px] font-bold text-[#003465] nav-poppins mb-3">3. How to Initiate a Return</h2>
          <p className="text-sm text-[#3b3b3b] nav-lato leading-relaxed">
            If your product meets the eligibility criteria, please contact us at{" "}
            <a href="mailto:info@themushroomottawa.ca" className="text-[#003465] underline hover:text-[#dfb242] transition-colors">
              info@themushroomottawa.ca
            </a>{" "}
            before sending any items back. We will provide you with instructions on how and where to send your package. Please note that you will be responsible for paying your own shipping costs for returning your item.
          </p>
        </div>

        {/* Section 4 */}
        <div className="border-t border-[#e0e0e0] pt-6 mb-6">
          <h2 className="text-[22px] font-bold text-[#003465] nav-poppins mb-3">4. Refunds and Exchanges</h2>
          <p className="text-sm text-[#3b3b3b] nav-lato leading-relaxed mb-4">
            Once your return is received and inspected, we will send you an email to notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment within a certain amount of days.
          </p>
          <p className="text-sm text-[#3b3b3b] nav-lato leading-relaxed">
            If you received a defective or damaged product, please contact us immediately so we can evaluate the issue and arrange an exchange or replacement.
          </p>
        </div>

        {/* Section 5 — Contact box */}
        <div className="border-t border-[#e0e0e0] pt-6">
          <div className="bg-[#f4f6f8] rounded p-6">
            <h2 className="text-[22px] font-semibold text-[#003465] nav-poppins mb-4">5. Contact Us About Your Return</h2>
            <p className="text-sm text-[#3b3b3b] nav-lato leading-relaxed mb-5">
              If you have any questions regarding your order, our return process, or a specific product, our team is here to help:
            </p>
            <div className="flex flex-col gap-3 text-sm text-[#3b3b3b] nav-lato">
              <div className="flex gap-4">
                <span className="font-semibold w-28 shrink-0">Store Name:</span>
                <span>The Mushroom Ottawa</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold w-28 shrink-0">Address:</span>
                <span>779 Somerset St W<br />Ottawa, ON K1R 6R3</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold w-28 shrink-0">Phone:</span>
                <a href="tel:3439994830" className="text-[#003465] hover:text-[#dfb242] transition-colors">(343) 999-4830</a>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold w-28 shrink-0">Email:</span>
                <a href="mailto:info@themushroomottawa.ca" className="text-[#003465] hover:text-[#dfb242] transition-colors">info@themushroomottawa.ca</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
      </div>
    </>
  );
}
