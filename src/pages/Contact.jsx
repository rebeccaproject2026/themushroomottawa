import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import FaqSection from "../components/FaqSection";
import SEO from "../components/SEO";

import { Icon } from "@iconify/react";
import { useState } from "react";

const contactFaqs = [
  {
    q: "How quickly do you respond to emails?",
    a: "Our customer service team is typically tending to the farm during the day, but we aim to respond to all inquiries within 24 to 48 hours during regular business days (Monday-Friday).",
  },
  {
    q: "Can I change or cancel my delivery order?",
    a: "Yes, provided your order has not yet been harvested or dispatched. Please contact us immediately using the form above with your Order Number if you need to make changes. Once out for delivery, orders cannot be cancelled.",
  },
  {
    q: "What should I do if my grow kit isn't pinning?",
    a: "Don't panic! Mushrooms operate on their own schedule. Ensure it's getting enough humidity and indirect light. If it has been more than 3 weeks with no activity, send us a message with a photo of your block, and we will gladly help troubleshoot.",
  },
  {
    q: "I received the wrong item. What do I do?",
    a: "We sincerely apologize for any mix-ups! Please reach out through the contact form with your order number and a brief description of what you received. We will arrange a replacement or refund right away.",
  },
  {
    q: "Do you offer wholesale pricing for restaurants?",
    a: "We absolutely do. We proudly supply fresh, gourmet fungi to several top-tier restaurants across the Ottawa and Gatineau area. Please select 'Wholesale & Restaurant Sales' in the contact form or email our sales team directly to get our fresh sheet.",
  },
  {
    q: "Can I come to the farm to buy mushrooms in person?",
    a: "To protect our crops from outside contamination, our indoor farm is a closed facility and not open to the public. However, you can catch us at local Ottawa Farmers' Markets on weekends during the summer—follow our social media for location updates!",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <SEO 
        title="Contact Us – The Mushroom Ottawa"
        description="Get in touch with The Mushroom Ottawa. We are here to answer your questions about magic mushrooms, orders, delivery, and more."
        canonical="https://themushroomottawa.ca/contact"
      />
      <Header />

      <main className="bg-[#f5f5f5]">
        {/* Hero section */}
        <section className="bg-[#f5f5f5] py-12 flex flex-col items-center text-center px-4">
          <span className="bg-[#92d5ef] text-[#003465] text-[13px] font-semibold uppercase nav-poppins px-4 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-[25px] md:text-[30px] lg:text-[35px] font-semibold text-black nav-poppins mb-2">
            Contact The Mushroom Ottawa
          </h1>
          <p className="text-[15px] md:text-base lg:text-lg text-[#4B4B4B] nav-poppins max-w-3xl leading-relaxed">
            Whether you have a question about an existing order, want to inquire about wholesale, or just need some advice on your grow kit, we'd love to hear from you.
          </p>
        </section>

        {/* Main content */}
        <section className=" bg-white py-8 lg:py-12">
          <div className="max-w-375 px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          {/* Left — Send Us a Message card */}
          <div className="bg-[#f3f3f3] rounded-lg lg:rounded-4xl border-2 border-[#d6d6d6] p-6 shadow-sm">
            <h2 className="text-[25px] md:text-[35px] font-semibold text-[#242424] nav-poppins mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#242424] nav-lato">Your Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="border-2 border-[#777777]/30 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gray-400 transition nav-lato "
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#242424] nav-lato">Your Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="border-2 border-[#777777]/30 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gray-400 transition nav-lato "
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#242424] nav-lato">Phone Number</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="border-2 border-[#777777]/30 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gray-400 transition nav-lato"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#242424] nav-lato">Company</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="border-2 border-[#777777]/30 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gray-400 transition nav-lato"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#242424] nav-lato">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={9}
                  className="border-2 border-[#777777]/30 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gray-400 transition nav-lato resize-y"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#003465] text-white font-bold uppercase text-[12px] nav-lato px-6 py-3 hover:bg-[#012140] transition cursor-pointer mt-1"
                >
                  Ask a Question
                </button>
              </div>
            </form>
          </div>

          {/* Right — Store Info */}
          <div className="flex flex-col gap-4 lg:pl-9 lg:pt-6.5">
            <div className="flex flex-col gap-3">
              <h2 className="text-[25px] md:text-[35px] font-semibold text-[#242424] nav-poppins">Store Info</h2>
              <p className="text-[15px] md:text-lg text-[#353535] nav-poppins font-medium">
                We prefer face-to-face smiles, but we're always happy to chat online or over the phone.
              </p>
            </div>

            {/* Contact Details card */}
            <div className="bg-white rounded-lg md:rounded-xl p-2 md:p-6 flex items-start gap-4 shadow-sm">
              <div className="md:w-12.5 md:h-12.5 w-10 h-10 rounded-full bg-[#E7F6F7] flex items-center justify-center shrink-0">
                <Icon icon="mdi:phone" className="md:w-8.5 md:h-8.5 w-7 h-7 text-[#0FA3B1]" />
              </div>
              <div>
                <p className="text-xl md:text-[23px] font-semibold text-[#242424] nav-poppins mb-1">Contact Details</p>
                <p className="text-sm md:text-lg text-[#7A7A7A] font-semibold nav-lato">(343) 999-4830</p>
                <p className="text-sm md:text-lg text-[#7A7A7A] font-semibold nav-lato">info@themushroomottawa.ca</p>
              </div>
            </div>

            {/* Visit Us card */}
            <div className="bg-white border border-gray-100 rounded-lg md:rounded-xl p-4 md:p-6 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 md:w-12.5 md:h-12.5 rounded-full bg-[#FEEEF2] flex items-center justify-center shrink-0">
                <Icon icon="mdi:map-marker" className="w-7 h-7 md:w-8 md:h-8 text-red-400" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl md:text-[23px] font-semibold text-[#242424] nav-poppins">Visit Us</p>
                <p className="text-sm md:text-lg text-[#7A7A7A] font-semibold nav-lato">779 Somerset St W, Ottawa, ON K1R 6R3</p>
              </div>
            </div>

            {/* Store Hours card */}
            <div className="bg-white border border-gray-100 rounded-lg md:rounded-xl p-4 md:p-6 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 md:w-12.5 md:h-12.5 rounded-full bg-[#FFF4CE] flex items-center justify-center shrink-0">
                <Icon icon="mdi:clock" className="w-7 h-7 md:w-8 md:h-8 text-yellow-500" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl md:text-[23px] font-semibold text-[#242424] nav-poppins">Store Hours</p>
                <p className="text-sm md:text-lg text-[#7A7A7A] font-semibold nav-lato">Everyday: 09:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
          </div>

        </section>

          {/* FAQ Section */}
        <FaqSection
          faqs={contactFaqs}
          subtitle="You might find the answer you're looking for right here."
        />

      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
