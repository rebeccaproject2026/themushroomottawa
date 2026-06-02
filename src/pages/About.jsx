import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Icon } from "@iconify/react";
import aboutImage from "../assets/aboutimg.webp";
import FaqSection from "../components/FaqSection";

export default function About() {
  const featureCards = [
    {
      title: "Hyper-Local & Fresh",
      description:
        "Grown locally and harvested daily. By choosing an Ottawa-based store, your mushrooms spend less time in transit and arrive at peak freshness.",
      icon: "fa-solid:thumbs-up",
    },
    {
      title: "Seamless Online Shopping",
      description:
        "Our online mushroom store is designed for convenience. Browse our wide selection, place your order securely, and enjoy fast delivery across the Ottawa region.",
      icon: "fa-solid:shopping-bag",
    },
    {
      title: "Sustainable Practices",
      description:
        "We utilize sustainable substrates and eco-friendly packaging. We believe in taking care of the earth that provides us with these incredible fungi.",
      icon: "fa7-solid:shield-alt",
    },
  ];

  const highlightItems = [
    {
      title: "Hyper-Local & Fresh",
      description:
        "Grown locally and harvested daily. By choosing an Ottawa-based store, your mushrooms spend less time in transit and arrive at peak freshness.",
    },
    {
      title: "Medicinal Fungi & Tinctures",
      description:
        "Harness the functional benefits of Cordyceps, Turkey Tail, and Chaga. Sourced and prepared for daily wellness.",
    },
    {
      title: "Grow-At-Home Kits",
      description:
        "Experience the magic of mycology yourself. Our user-friendly mushroom grow kits are perfect for families, schools, and apartment dwellers in Ottawa.",
    },
  ];

  const aboutFaqs = [
    {
      q: "What makes The Mushroom Ottawa different?",
      a: "We focus on locally grown, premium mushrooms that are harvested fresh and delivered with minimal transit time for maximum flavor and potency.",
    },
    {
      q: "How do you maintain mushroom quality?",
      a: "Our crops are grown in a controlled environment, lab-tested for purity, and packed carefully so you receive consistent, high-quality mushrooms every time.",
    },
    {
      q: "Is your packaging eco-friendly?",
      a: "Yes. We use recyclable and compostable packaging whenever possible to reduce waste and support sustainable mushroom farming.",
    },
    {
      q: "Can I order from outside Ottawa?",
      a: "We currently prioritize local delivery across Ottawa but we also offer shipping options for select products outside the area. Check the product pages for availability.",
    },
    {
      q: "Do you provide recipe or wellness guidance?",
      a: "Absolutely. We love helping customers with recipe ideas, mushroom pairings, and wellness usage tips to make the most of every order.",
    },
  ];

  return (
    <>
      <Header />

      <main className="">
        {/* Hero section */}
        <section className="bg-[#f5f5f5] py-12 flex flex-col items-center text-center px-4">
          <span className="bg-[#92d5ef] text-[#003465] text-[13px] font-semibold uppercase nav-poppins px-4 py-1 rounded-full">
            Rooted in the Capital
          </span>
          <h1 className="text-[25px] md:text-[30px] lg:text-[35px] font-semibold text-black nav-poppins my-2">
            About The Mushroom Ottawa
          </h1>
          <p className="text-[15px] sm:text-base lg:text-lg text-[#4B4B4B] nav-poppins max-w-180 lg:max-w-172.5 ">
            Your premier{" "}
            <span className="font-semibold">
              online mushroom store in Ottawa, Canada.
            </span>{" "}
            We are dedicated to bringing the finest gourmet and functional fungi
            directly to your doorstep.
          </p>
        </section>

        <section className="py-12 px-4 lg:px-6.5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="relative">
              <div>
                <img
                  src={aboutImage}
                  alt="aboutimage"
                  className="rounded-2xl"
                />
              </div>

              <div className="flex items-center gap-2 bg-[#FFFFFFAD] rounded-md absolute right-4 bottom-6 px-4 py-2">
                <div className="w-15 h-15 bg-[#003465] rounded-full flex items-center justify-center z-10 shrink-0">
                  <Icon icon="clarity:flask-solid" className="w-9 h-9 text-white" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[22px] nav-poppins font-semibold">
                    100%
                  </h3>
                  <p className="text-sm text-[#353535] font-semibold uppercase nav-lato">
                    Lab Tested Purity
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="lg:pt-14.5 flex flex-col gap-1">
                <span className="bg-[#92d5ef] text-[#003465] w-fit text-[13px] font-semibold uppercase nav-poppins px-4 py-1.25 rounded-full">
                  Our Story
                </span>
                <h2 className="text-[25px] lg:text-[35px] nav-poppins font-semibold mb-1">
                  Sprouting in the Heart of Canada
                </h2>
                <p className="text-[15px] lg:text-[17px] nav-poppins leading-[1.8em] text-[#4B4B4B] mb-3">
                  What started as a passionate hobby in a small Ottawa basement
                  has blossomed into{" "}
                  <span className="font-semibold">The Mushroom Ottawa</span>,
                  the region’s most trusted online destination for all things
                  fungi. We realized that finding fresh, high-quality, and
                  exotic mushrooms in local grocery stores was often a challenge
                  for Ottawans.
                </p>

                <p className="text-[15px] lg:text-[17px] nav-poppins leading-[1.8em] text-[#4B4B4B] mb-2.5">
                  We decided to change that. By combining sustainable urban
                  agriculture practices with a seamless e-commerce experience,
                  we built an{" "}
                  <span className="italic">
                    {" "}
                    online mushroom store in Ottawa, Canada{" "}
                  </span>{" "}
                  that bridges the gap between the farm and your kitchen table.
                </p>

                <p className="text-[15px] lg:text-[17px] nav-poppins leading-[1.8em] text-[#4B4B4B]">
                  Whether you are a local chef looking for flawless Lion’s Mane,
                  a wellness enthusiast seeking Reishi extracts, or a curious
                  foodie, we are here to provide nature’s finest.
                </p>
              </div>

              <button className="flex items-center justify-center gap-2 text-white bg-[#003465] font-bold text-lg nav-lato lg:px-11 lg:w-fit w-full py-2.5 mt-2 hover:bg-[#012140] transition rounded-sm">
                Explore Products
                <Icon icon="mdi:arrow-right" className="w-6 h-6 stroke-2!" />
              </button>
            </div>
          </div>
        </section>

        <section className="px-4 lg:px-6.5">
          <div className="flex flex-col justify-center items-center gap-1.5 pb-5">
            <h2 className="text-[25px] lg:text-[35px] nav-poppins font-semibold ">
              Why Choose The Mushroom Ottawa?
            </h2>
            <p className="text-base lg:text-lg nav-poppins text-[#4B4B4B] lg:max-w-xl text-center">
              As a locally rooted Canadian business, we prioritize quality,
              sustainability, and our community above all else.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="p-6.25 lg:p-8.75 bg-[#777777]/9 flex flex-col items-center gap-6 rounded-xl"
              >
                <div className="w-18 h-18 bg-[#92D5EF] rounded-full flex items-center justify-center z-10 shrink-0">
                  <Icon
                    icon={card.icon}
                    className="w-10 h-10 text-[#003465]"
                  />
                </div>
                <div className="flex flex-col gap-1.5 justify-center items-center">
                  <h3 className="text-[23px] md:text-[25px] nav-poppins font-semibold text-[#242424] text-center">
                    {card.title}
                  </h3>
                  <p className="text-[15px] md:text-lg text-[#696969] font-medium nav-lato text-center">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-4 pb-14">
          <button className="flex justify-center items-center gap-2 text-white bg-[#003465] font-bold text-lg nav-lato w-full md:w-fit md:px-11 py-2.5 hover:bg-[#012140] transition rounded-sm">
            Shop Now
            <Icon icon="mdi:arrow-right" className="w-6 h-6 stroke-2!" />
          </button>
          </div>
        </section>

        <section className="bg-[#f3f3f3] py-12.5 px-4 lg:px-6.5">
          <div className="flex flex-col justify-center items-center gap-1.5">
            <h2 className="text-[25px] md:text-[35px] nav-poppins font-semibold">
              Explore the Mycelial Network
            </h2>
            <p className="text-base md:text-lg text-[#4B4B4B] nav-poppins max-w-2xl text-center"> 
              As a leading supplier of fungi in Canada, <span className="font-semibold"> The Mushroom Ottawa </span> curates a diverse catalog. We specialize in:
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {highlightItems.map((item) => (
              <div
                key={item.title}
                className="flex md:flex-row flex-col items-center md:items-start gap-4 bg-white border border-[#777777]/30 py-5.5 px-6 rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center justify-center mt-1 w-6 h-6 bg-[#5c8a5c] rounded-full shrink-0">
                  <Icon icon="el:ok" className="w-4 h-4 text-white" />
                </div>
                <div className="md:text-start text-center">
                  <h3 className="text-[25px] md:text-[35px] text-[#242424] nav-poppins font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-[#696969] nav-lato">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <button className="flex justify-center items-center gap-2 text-white bg-[#003465] font-bold text-lg nav-lato px-11 py-2.5 hover:bg-[#012140] transition rounded-sm mt-6">
              Explore Our Mushrooms
              <Icon icon="mdi:arrow-right" className="w-6 h-6 stroke-2!" />
            </button>
          </div>
        </section>  

        <FaqSection faqs={aboutFaqs} title="Frequently Asked About Us"  />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
