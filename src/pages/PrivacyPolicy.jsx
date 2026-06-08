import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy – The Mushroom Ottawa"
        description="Read the privacy policy of The Mushroom Ottawa. Learn how we collect, use, and protect your personal data."
        canonical="https://themushroomottawa.ca/privacy-policy"
      />
      <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-375 mx-auto px-4 sm:px-6 py-10 nav-lato">
        <h1 className="text-[35px] font-bold text-[#1a1a1a] nav-poppins mb-1">Privacy Policy</h1>
        <p className="text-sm nav-lato italic text-[#999999] mb-6">Last Updated: May 2026</p>

        <p className="text-[15px] text-[#3b3b3b] leading-relaxed mb-8">
          Welcome to <span className="font-bold">The Mushroom Ottawa</span>. We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website or purchase our mushrooms and mushroom products, and tell you about your privacy rights.
        </p>

        {/* Section 1 */}
        <div className="border-t border-[#e0e0e0] pt-6 mb-6">
          <h2 className="text-[22px] font-bold text-[#003465] nav-poppins mb-3">1. Information We Collect</h2>
          <p className="text-[14px] text-[#3b3b3b] nav-lato leading-relaxed mb-3">
            We may collect, use, store, and transfer different kinds of personal data about you to provide you with the best possible shopping experience. This includes:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-1.5 text-[14px] nav-lato text-[#3b3b3b]">
            <li><span className="font-semibold">Identity Data:</span> First name, last name, and user name (if you create an account).</li>
            <li><span className="font-semibold">Contact Data:</span> Billing address, delivery address, email address, and telephone numbers.</li>
            <li><span className="font-semibold">Financial &amp; Transaction Data:</span> Payment details (processed securely by our payment gateways) and details about products you have purchased from us.</li>
            <li><span className="font-semibold">Technical Data:</span> Internet protocol (IP) address, your login data, browser type and version, time zone setting, and operating system.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="border-t border-[#e0e0e0] pt-6 mb-6">
          <h2 className="text-[22px] font-bold text-[#003465] nav-poppins mb-3">2. How We Use Your Information</h2>
          <p className="text-[14px] text-[#3b3b3b] nav-lato leading-relaxed mb-3">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-1.5 text-[14px] nav-lato text-[#3b3b3b]">
            <li>To process and deliver your order, including managing payments, fees, and charges.</li>
            <li>To manage our relationship with you, such as notifying you about changes to our terms or privacy policy.</li>
            <li>To administer and protect our business and this website (including troubleshooting, data analysis, and system maintenance).</li>
            <li>To deliver relevant website content and advertisements to you, and measure or understand the effectiveness of the advertising we serve to you (with your consent where required).</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="border-t border-[#e0e0e0] pt-6 mb-6">
          <h2 className="text-[22px] font-bold text-[#003465] nav-poppins mb-3">3. Data Sharing &amp; Third Parties</h2>
          <p className="text-[14px] text-[#3b3b3b] nav-lato leading-relaxed">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except for trusted third parties who assist us in operating our website, conducting our business, or servicing you, (such as shipping providers and secure payment processors). These parties are obligated to keep your information confidential. We may also release your information when we believe release is appropriate to comply with the law or protect our or others' rights, property, or safety.
          </p>
        </div>

        {/* Section 4 */}
        <div className="border-t border-[#e0e0e0] pt-6 mb-6">
          <h2 className="text-[22px] font-bold text-[#003465] nav-poppins mb-3">4. Data Security</h2>
          <p className="text-[14px] text-[#3b3b3b] nav-lato leading-relaxed">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
          </p>
        </div>

        {/* Section 5 */}
        <div className="border-t border-[#e0e0e0] pt-6 mb-6">
          <h2 className="text-[22px] font-bold text-[#003465] nav-poppins mb-3">5. Your Data Rights</h2>
          <p className="text-[14px] text-[#3b3b3b] nav-lato leading-relaxed mb-3">
            Depending on your location, you may have rights under data protection laws in relation to your personal data, including the right to:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-1.5 text-[14px] text-[#3b3b3b] mb-4">
            <li>Request access to your personal data.</li>
            <li>Request correction of the personal data that we hold about you.</li>
            <li>Request erasure of your personal data.</li>
            <li>Withdraw consent at any time where we are relying on consent to process your personal data.</li>
          </ul>
          <p className="text-[14px] text-[#3b3b3b] nav-lato leading-relaxed">
            If you wish to exercise any of the rights set out above, please contact us using the details below.
          </p>
        </div>

        {/* Section 6 — Contact box */}
        <div className="border border-[#e0e0e0] rounded-lg">
          <div className="bg-[#f4f6f8] rounded-lg p-6">
            <h2 className="text-[22px] font-bold text-[#003465] nav-poppins mb-4 ">6. Contact Us</h2>
            <p className="text-[14px] text-[#3b3b3b] nav-lato leading-relaxed mb-5">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="flex flex-col gap-3 text-[14px] text-[#3b3b3b] nav-lato">
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
