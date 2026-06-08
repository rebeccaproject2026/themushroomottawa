import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from "react";
import SEO from "../components/SEO";

import { Plus } from "lucide-react";
import CtaBanner from "../components/CtaBanner";

const orderingFaqs = [
  {
    q: "Where exactly do you deliver in the Ottawa region?",
    a: "We offer dedicated local delivery throughout the Greater Ottawa Area, including Kanata, Nepean, Orleans, Barrhaven, and central Ottawa. We also service parts of Gatineau. If you are outside our local delivery zone, we ship our dried products and grow kits via Canada Post.",
  },
  {
    q: "Do you offer free shipping or delivery?",
    a: "Yes. We offer local delivery in Ottawa with a minimum order of $50. Orders below $50 are still eligible for delivery, with a small flat-rate fee applied to cover driver time and fuel.",
  },
  {
    q: "What happens if I'm not home during my local delivery?",
    a: "If you aren't home, we will carefully leave your package in a shaded, secure spot near your door. Because fresh mushrooms are temperature-sensitive, we highly recommend bringing them indoors and refrigerating them as soon as possible.",
  },
  {
    q: "Can I pick up my order in person?",
    a: "Currently, our primary operation is delivery-based to ensure the highest quality control and efficiency. However, you can select 'Market Pickup' at checkout to grab your order from our booth at select Ottawa Farmers' Markets on weekends.",
  },
];

const productsFaqs = [
  {
    q: "Are your mushrooms certified organic?",
    a: "While we are a small local farm and not yet officially 'certified' organic due to the high costs of certification, we strictly adhere to organic growing practices. We never use synthetic pesticides, herbicides, or chemical fertilizers. Our substrates are 100% natural hardwood and organic soy hulls.",
  },
  {
    q: "How long do fresh gourmet mushrooms last?",
    a: "When stored correctly, our fresh mushrooms (like Blue Oysters and Lion's Mane) will typically last 7 to 10 days in the refrigerator. Hardier varieties like Shiitake can sometimes last up to 14 days.",
  },
  {
    q: "What is the best way to store fresh mushrooms?",
    a: "Never store them in a sealed plastic bag. Mushrooms need to breathe. Keep them in the brown paper bag they arrive in, and place them in the main compartment of your fridge (avoid the crisper drawer, which can be too humid)",
  },
  {
    q: "Should I wash my mushrooms before cooking?",
    a: "Because our mushrooms are grown indoors in a clean environment on sterilized wood blocks, they are incredibly clean. We recommend simply brushing off any tiny specks of substrate with a dry towel. Do not soak them in water, as they act like sponges and will become soggy.",
  },
  {
    q: "What is the difference between medicinal tinctures and dried mushrooms?",
    a: "Our dual-extracted tinctures (like Reishi or Turkey Tail) use both alcohol and water to draw out both water-soluble (polysaccharides) and alcohol-soluble (triterpenes) beneficial compounds, making them highly bioavailable. Dried mushrooms are great for steeping in long-simmering teas or grinding into powders for cooking.",
  },
];

const growKitsFaqs = [
  {
    q: "Are your grow kits suitable for beginners or kids?",
    a: "Absolutely! Our grow kits are designed to be foolproof. They arrive fully colonized and ready to fruit. All you have to do is cut a slit in the bag, place it in a spot with indirect sunlight, and mist it with water 2-3 times a day. It is a fantastic, educational project for kids.",
  },
  {
    q: "How long does it take for a grow kit to start growing?",
    a: "Once you open the kit and begin misting, you will typically see 'pins' (baby mushrooms) forming within 7 to 14 days. Once pinning starts, the mushrooms grow incredibly fast and double in size daily!",
  },
  {
    q: "Can I get multiple harvests from one kit?",
    a: "Yes! While the first 'flush' (harvest) is always the largest, most of our kits will produce a second and even a third flush. Just soak the block in cold water for a few hours after your first harvest, then resume misting daily.",
  },
  {
    q: "What do I do with the block when it stops producing?",
    a: "The block is made of 100% natural wood and mycelium. When it's spent, remove the plastic bag and compost the block. It acts as an incredible fertilizer and soil builder for your garden!",
  },
];

const wholesaleFaqs = [
  {
    q: "Do you supply local Ottawa restaurants or offer wholesale pricing?",
    a: "Absolutely. We love partnering with local chefs and grocers in the National Capital Region. We offer consistent, high-quality bulk orders at wholesale pricing. Please visit our contact page to request our fresh sheet and wholesale pricing.",
  },
  {
    q: "Do you host farm tours or mushroom cultivation workshops?",
    a: "Because we operate a high-hygiene indoor farm to prevent contamination, we cannot offer regular farm tours at this time. However, we do host seasonal outdoor cultivation workshops (like log inoculation) during the summer in Ottawa. Sign up for our newsletter to get notified!",
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
      <SEO 
        title="FAQs – Magic Mushrooms Ottawa"
        description="Frequently asked questions about magic mushrooms, microdosing, delivery, and ordering from The Mushroom Ottawa."
        canonical="https://themushroomottawa.ca/faqs"
      />
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
