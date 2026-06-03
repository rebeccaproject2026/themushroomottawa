import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from "react";
import { Plus } from "lucide-react";
import CtaBanner from "../components/CtaBanner";

const orderingFaqs = [
  {
    q: "Where exactly do you deliver in the Ottawa region?",
    a: "We offer dedicated local delivery throughout the Greater Ottawa Area, including Kanata, Nepean, Orleans, Barrhaven, and central Ottawa. We also service parts of Gatineau. If you are outside our local delivery zone, we ship our dried products and grow kits via Canada Post.",
  },
  {
    q: "Do you offer free shipping or delivery?",
    a: "We occasionally offer promotions that include free shipping or local delivery — check the product page or sign up for updates to receive offers.",
  },
  {
    q: "What happens if I'm not home during my local delivery?",
    a: "If you're unavailable, our driver will follow the delivery instructions on your order or attempt to contact you. For local pickup options, please contact us to arrange a convenient time.",
  },
  {
    q: "Can I pick up my order in person?",
    a: "Yes — local pickup may be available. Contact us to confirm pickup availability and to arrange a time.",
  },
];

const productsFaqs = [
  {
    q: "Are your mushrooms certified organic?",
    a: "While we are a small local farm and not yet officially 'certified' organic due to the high costs of certification, we strictly adhere to organic growing practices. We never use synthetic pesticides, herbicides, or chemical fertilizers. Our substrates are 100% natural hardwood and organic soy hulls.",
  },
  {
    q: "How long do fresh gourmet mushrooms last?",
    a: "Fresh mushrooms typically keep for 5–10 days in the refrigerator when stored correctly. Shelf life depends on variety and handling — check them daily and use by the first sign of sliminess.",
  },
  {
    q: "What is the best way to store fresh mushrooms?",
    a: "Keep mushrooms in a paper bag in the refrigerator to allow airflow and avoid moisture buildup. Avoid sealed plastic bags which can trap moisture and accelerate spoilage.",
  },
  {
    q: "Should I wash my mushrooms before cooking?",
    a: "A quick rinse or brushing is fine; avoid soaking. Pat them dry before cooking to preserve texture and flavour.",
  },
  {
    q: "What is the difference between medicinal tinctures and dried mushrooms?",
    a: "Tinctures are alcohol-based extracts offering concentrated, fast-absorbing compounds. Dried mushrooms are whole or sliced and are commonly used for teas or to be ground into powders; effects and dosing differ between formats.",
  },
];

const growKitsFaqs = [
  {
    q: "Are your grow kits suitable for beginners or kids?",
    a: "Absolutely! Our grow kits are designed to be foolproof. They arrive fully colonized and ready to fruit. All you have to do is cut a slit in the bag, place it in a spot with indirect sunlight, and mist it with water 2-3 times a day. It is a fantastic, educational project for kids.",
  },
  {
    q: "How long does it take for a grow kit to start growing?",
    a: "Once exposed (slit made and humid conditions provided), most kits begin pinning within 7–14 days, with harvests following shortly after depending on strain and conditions.",
  },
  {
    q: "Can I get multiple harvests from one kit?",
    a: "Yes, many kits will produce multiple flushes. After the first harvest, allow the block to rest and maintain humidity — subsequent flushes typically follow for a few weeks.",
  },
  {
    q: "What do I do with the block when it stops producing?",
    a: "When production ceases, compost the block or use it in your garden as a soil amendment; it makes an excellent addition to compost piles or can be used for myco-remediation projects.",
  },
];

const wholesaleFaqs = [
  {
    q: "Do you supply local Ottawa restaurants or offer wholesale pricing?",
    a: "Absolutely. We love partnering with local chefs and grocers in the National Capital Region. We offer consistent, high-quality bulk orders at wholesale pricing. Please visit our contact page to request our fresh sheet and wholesale pricing.",
  },
  {
    q: "Do you host farm tours or mushroom cultivation workshops?",
    a: "Yes, we occasionally host small farm tours and workshops focused on mushroom cultivation and sustainable growing. Reach out through the contact page to inquire about upcoming events and group bookings.",
  },
];

function Accordion({ items = [], startIndex = 1 }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const idx = startIndex + i;
        const isOpen = open === i;
        return (
          <div key={i} className="bg-white border border-gray-100 shadow-sm">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 text-left cursor-pointer"
            >
              <div className={`flex items-center gap-1 sm:gap-2 nav-lato ${isOpen ? "text-[#003465]" : "text-[#242424]"}  hover:text-[#003465] transition-colors duration-300`}>
                <span className="text-lg sm:text-xl font-semibold hidden sm:inline">{idx}.</span>
                <span className={`text-sm sm:text-lg md:text-xl font-semibold `}>{item.q}</span>
              </div>
              <Plus className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-300 transform ${isOpen ? "rotate-45" : ""} transition duration-300 shrink-0`} />
            </button>

            <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="px-3 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base md:text-lg text-[#777777] nav-lato leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Faqs() {
  return (
    <>
      <Header />

      <main className="bg-[#f5f5f5]">
        <section className="bg-[#f5f5f5] py-8 sm:py-12 flex flex-col items-center text-center px-4 sm:px-6">
          <span className="bg-[#92d5ef] text-[#003465] text-[13px] font-semibold uppercase nav-poppins px-4 py-1.5 rounded-full">
            Help Center
          </span>
          <h1 className="text-[25px] md:text-[30px] lg:text-[35px] font-semibold text-black nav-poppins mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-[15px] md:text-base lg:text-lg text-[#4B4B4B] nav-poppins max-w-full sm:max-w-2xl leading-relaxed">
            Got questions about our fungi? We’ve got answers. Explore our comprehensive guide to ordering from <span className="font-bold">The Mushroom Ottawa</span>.
          </p>
        </section>

        <section className="bg-white px-4 sm:px-6 md:px-6.25 py-8 sm:py-14">
          <div>
            <h2 className="text-[20px] sm:text-[25px] nav-poppins text-black font-semibold border-b border-[#777777]/30 pb-2">Ordering & Local Delivery</h2>
          </div>

          {/* Ordering & Local Delivery accordion (matches screenshot design) */}
          <div className="mt-6 mx-auto">
            <Accordion items={orderingFaqs} startIndex={1} />
          </div>
        </section>

        {/* Products & Storage group */}
        <section className="bg-white px-4 sm:px-6 md:px-6.25 py-8 sm:py-12">
          <div>
            <h2 className="text-[20px] sm:text-[25px] nav-poppins text-black font-semibold border-b border-[#777777]/30 pb-2">Our Products &amp; Storage</h2>
          </div>

          <div className="mt-6 mx-auto">
            <Accordion items={productsFaqs} startIndex={5} />
          </div>
        </section>

        {/* Grow-At-Home Kits group */}
        <section className="bg-white px-4 sm:px-6 md:px-6.25 py-8 sm:py-10">
          <div>
            <h2 className="text-[20px] sm:text-[25px] nav-poppins text-black font-semibold border-b border-[#777777]/30 pb-2">Grow-At-Home Kits</h2>
          </div>

          <div className="mt-6 mx-auto">
            <Accordion items={growKitsFaqs} startIndex={10} />
          </div>
        </section>

        {/* Wholesale & Community group */}
        <section className="bg-white px-4 sm:px-6 md:px-6.25 py-8 sm:py-12">
          <div>
            <h2 className="text-[20px] sm:text-[25px] nav-poppins text-black font-semibold border-b border-[#777777]/30 pb-2">Wholesale &amp; Community</h2>
          </div>

          <div className="mt-6 mx-auto">
            <Accordion items={wholesaleFaqs} startIndex={14} />
          </div>
        </section>

        <CtaBanner
          title="Still have a question?"
          subtitle="If you didn’t find the answer you were looking for, our friendly team at The Mushroom Ottawa is always here to help."
          subtitleClassName="max-w-2xl"
          leftButtonLabel="Contact Support"
          leftButtonPath="/contact"
          rightButtonLabel="Browse Shop"
          rightButtonPath="/"
        />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
