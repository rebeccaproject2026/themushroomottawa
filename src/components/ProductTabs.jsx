import { useState } from "react";
import { Icon } from "@iconify/react";
import prodDetl from "../assets/prod_detl.jpg";
import prodDetl1 from "../assets/prod_detl1.jpg";

const tabs = [
  { id: "description", label: "DESCRIPTION" },
  { id: "additional", label: "ADDITIONAL INFORMATION" },
  { id: "reviews", label: "REVIEWS (0)" },
  { id: "shipping", label: "SHIPPING & DELIVERY" },
];

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [saveInfo, setSaveInfo] = useState(false);

  const toggleTab = (id) => {
    setActiveTab(activeTab === id ? "" : id);
  };

  const getMobileLabel = (id) => {
    switch (id) {
      case "description": return "Description";
      case "additional": return "Additional information";
      case "reviews": return "Reviews (0)";
      case "shipping": return "Shipping & Delivery";
      default: return "";
    }
  };

  return (
    <div className="max-w-375 mx-auto px-4 lg:px-6">
      {/* Tab Headers (Desktop) */}
      <div className="hidden lg:flex items-center justify-center gap-7 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pt-7 text-base nav-poppins font-semibold uppercase transition-colors duration-200 cursor-pointer group
              ${activeTab === tab.id ? "text-[#333333]" : "text-[#333333B3] hover:text-[#333333]"}
            `}
          >
            {/* Active: solid full border. Inactive: animates from 0 to full on hover */}
            {activeTab === tab.id ? (
              <span className="absolute top-0 left-0 h-0.5 w-full bg-[#003465]" />
            ) : (
              <span className="absolute top-0 left-0 h-0.5 w-0 bg-[#003465] transition-all duration-300 ease-in-out group-hover:w-full" />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content / Accordion */}
      <div className="py-2 lg:py-8">

        {/* Description */}
        <div className="border-b border-gray-200 lg:border-none">
          <button 
            className="lg:hidden w-full flex items-center justify-between py-4 text-left font-semibold nav-poppins transition-colors cursor-pointer"
            onClick={() => toggleTab('description')}
          >
            <span className={`text-[15px] ${activeTab === 'description' ? 'text-[#003465]' : 'text-[#242424]'}`}>{getMobileLabel('description')}</span>
            <Icon icon={activeTab === 'description' ? "mdi:chevron-up" : "mdi:chevron-down"} className={`w-5 h-5 ${activeTab === 'description' ? 'text-gray-300' : 'text-gray-300'}`} />
          </button>
          
          <div className={`transition-all duration-300 overflow-hidden ${activeTab === 'description' ? 'max-h-none opacity-100 pb-6 pt-2 lg:p-0' : 'max-h-0 opacity-0 lg:hidden'}`}>
            {activeTab === "description" && (
              <div className="text-sm text-[#777777] leading-relaxed nav-lato space-y-4">
                <p>
                  <span className="font-semibold">{product.name}:</span> – {product.description} This strain features eye-catching caps and white stems. It's known for a balanced psychedelic journey, delivering vivid rainbow-colored visuals, geometric shapes, and spiritual clarity. Whether you're microdosing or seeking a deeper experience, {product.name} provides a smooth yet profound trip. Great for beginners and experienced explorers alike.            
                  Enhance your next journey with {product.name} from The Mushroom Ottawa today. {product.name} mushrooms are widely recognized in the psychedelic community for their unique traits and consistent effects. Growers and psychonauts alike appreciate their distinct appearance, lineage, and the carefully balanced experience they deliver.
                  Users often describe the onset as gradual, with waves of euphoria and heightened sensory perception setting in during the first hour. Depending on dosage, the journey may include vivid visual patterns, increased appreciation of sound and touch, and an expansion of thought that encourages deep introspection.
                  Many choose {product.name} for creative inspiration, problem-solving, or as a tool for meditation, while others simply enjoy the sense of connection and laughter shared with friends in safe settings. In terms of potency, {product.name} is known to provide a strong experience, so new explorers are encouraged to start with lower doses, typically around one gram, before working their way up.
                  Storage should be in a cool, dry, and air tight container to preserve potency and freshness over time. Microdosing enthusiasts also appreciate {product.name}, as very small amounts can provide subtle mood enhancement, improved focus, and reduced anxiety without hallucinogenic effects. Whether enjoyed recreationally, spiritually, or for personal growth, {product.name} continues to stand out as a premium choice for those seeking a safe, lab-tested, and high quality psychedelic experience.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="border-b border-gray-200 lg:border-none">
          <button 
            className="lg:hidden w-full flex items-center justify-between py-4 text-left font-semibold nav-poppins transition-colors cursor-pointer"
            onClick={() => toggleTab('additional')}
          >
            <span className={`text-[15px] ${activeTab === 'additional' ? 'text-[#003465]' : 'text-[#242424]'}`}>{getMobileLabel('additional')}</span>
            <Icon icon={activeTab === 'additional' ? "mdi:chevron-up" : "mdi:chevron-down"} className={`w-5 h-5 ${activeTab === 'additional' ? 'text-gray-300' : 'text-gray-300'}`} />
          </button>

          <div className={`transition-all duration-300 overflow-hidden ${activeTab === 'additional' ? 'max-h-none opacity-100 pb-6 pt-2 lg:p-0' : 'max-h-0 opacity-0 lg:hidden'}`}>
            {activeTab === "additional" && (
              <div className="w-full text-sm flex justify-between max-w-2xl mx-auto nav-lato py-2 px-4 border border-gray-100">
                <h4 className="font-semibold text-[#242424] bg-gray-50 w-40 p-2">Quantity</h4>
                <p className="text-[#777777] p-2">14g, 28g, 3.5g, 7g</p>
              </div>
            )}
          </div>
        </div>

        {/* Reviews */}
        <div className="border-b border-gray-200 lg:border-none">
          <button 
            className="lg:hidden w-full flex items-center justify-between py-4 text-left font-semibold nav-poppins transition-colors cursor-pointer"
            onClick={() => toggleTab('reviews')}
          >
            <span className={`text-[15px] ${activeTab === 'reviews' ? 'text-[#003465]' : 'text-[#242424]'}`}>{getMobileLabel('reviews')}</span>
            <Icon icon={activeTab === 'reviews' ? "mdi:chevron-up" : "mdi:chevron-down"} className={`w-5 h-5 ${activeTab === 'reviews' ? 'text-gray-300' : 'text-gray-300'}`} />
          </button>

          <div className={`transition-all duration-300 overflow-hidden ${activeTab === 'reviews' ? 'max-h-none opacity-100 pb-6 pt-2 lg:p-0' : 'max-h-0 opacity-0 lg:hidden'}`}>
            {activeTab === "reviews" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left */}
            <div>
              <h3 className="text-sm font-semibold text-[#242424] mb-5 nav-poppins">Reviews</h3>
              <p className="text-sm text-[#777777] nav-lato">There are no reviews yet.</p>
            </div>

            {/* Right - Review Form */}
            <div>
              <h3 className="text-sm font-semibold text-[#242424] mb-5 nav-poppins">
                Be the first to review "{product.name}"
              </h3>
              <p className="text-sm text-[#777777] mb-5 nav-lato">
                Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
              </p>

              <div className="flex flex-col gap-4">
                {/* Star Rating */}
                <div className="flex items-center gap-2 text-sm text-[#242424] nav-lato">
                  <span>Your rating <span className="text-red-500">*</span>:</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(star)}
                        className="cursor-pointer"
                      >
                        <Icon
                          icon={(hoverRating || rating) >= star ? "mdi:star" : "mdi:star-outline"}
                          className={`w-4.5 h-4.5 ${(hoverRating || rating) >= star ? "text-yellow-400" : "text-[#777777]"}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review textarea */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[#242424] nav-lato ">Your review <span className="text-red-500">*</span></label>
                  <textarea rows={9} className="border-2 border-[#777777]/20 px-3 py-2 text-sm focus:outline-none focus:border-[#003465] resize-y" />
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[#242424] nav-lato">Name <span className="text-red-500">*</span></label>
                  <input type="text" className="border-2 border-[#777777]/20 px-3 py-2 text-sm focus:outline-none focus:border-[#003465]" />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[#242424] nav-lato">Email <span className="text-red-500">*</span></label>
                  <input type="email" className="border-2 border-[#777777]/20 px-3 py-2 text-sm focus:outline-none focus:border-[#003465]" />
                </div>

                {/* Save info checkbox */}
                <label className="flex items-start gap-2 text-sm text-[#242424] cursor-pointer nav-lato">
                  <input type="checkbox" checked={saveInfo} onChange={() => setSaveInfo(s => !s)} className="mt-0.5 accent-[#003465]" />
                  Save my name, email, and website in this browser for the next time I comment.
                </label>

                <button className="w-fit bg-[#003465] text-white text-sm font-semibold uppercase px-5 py-3 hover:bg-[#004a8f] transition cursor-pointer">
                  Submit
                </button>
              </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Shipping & Delivery */}
        <div className="border-b border-gray-200 lg:border-none">
          <button 
            className="lg:hidden w-full flex items-center justify-between py-4 text-left font-semibold nav-poppins transition-colors cursor-pointer"
            onClick={() => toggleTab('shipping')}
          >
            <span className={`text-[15px] ${activeTab === 'shipping' ? 'text-[#003465]' : 'text-[#242424]'}`}>{getMobileLabel('shipping')}</span>
            <Icon icon={activeTab === 'shipping' ? "mdi:chevron-up" : "mdi:chevron-down"} className={`w-5 h-5 ${activeTab === 'shipping' ? 'text-gray-300' : 'text-gray-300'}`} />
          </button>

          <div className={`transition-all duration-300 overflow-hidden ${activeTab === 'shipping' ? 'max-h-none opacity-100 pb-6 pt-2 lg:p-0' : 'max-h-0 opacity-0 lg:hidden'}`}>
            {activeTab === "shipping" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Images */}
            <div className="grid grid-cols-2 gap-3">
              <img src={prodDetl} alt="Delivery" className="object-cover w-full " />
              <img src={prodDetl1} alt="Delivery van" className="object-cover w-full " />
            </div>

            {/* Content */}
            <div className="text-sm text-[#777777] nav-lato space-y-5">
              <h3 className="text-[22px] nav-poppins font-semibold text-[#242424]">Local Ottawa Delivery</h3>
              <p>
                Fresh gourmet mushrooms are incredibly delicate and temperature-sensitive. To ensure they reach your kitchen in pristine, farm-fresh condition, we operate our own dedicated delivery fleet throughout the Greater Ottawa Area. We carefully handle your order from our local grow rooms directly to your doorstep, minimizing transit time and avoiding warehouse delays.
              </p>
              <div>
                <p className="font-semibold text-lg text-[#242424] nav-poppins mb-2">Delivery Zones & Schedule</p>
                <ul className="space-y-1.5 text-[#777777] nav-lato text-sm">
                  <li className="flex items-baseline gap-2"><span className="text-lg">›</span><span><span className="font-semibold">Ottawa Central, Nepean & Gloucester:</span> Deliveries are scheduled every Tuesday and Friday.</span></li>
                  <li className="flex items-baseline gap-2"><span className="text-lg">›</span><span><span className="font-semibold">Kanata, Stittsville & Barrhaven:</span> Deliveries are dispatched every Wednesday afternoon.</span></li>
                  <li className="flex items-baseline gap-2"><span className="text-lg">›</span><span><span className="font-semibold">Orleans & Gatineau (Select Areas):</span> Deliveries occur every Thursday.</span></li>
                </ul>
              </div>
              <p className="text-sm text-[#777777] nav-lato">
                For our dried mushroom products, medicinal tinctures, and grow-at-home kits, we also offer Canada-wide shipping via Canada Post. Tracking information will be automatically provided via email as soon as your package leaves our Ottawa facility. Note that fresh mushroom orders placed outside our local delivery zone will be automatically refunded to prevent spoilage.
              </p>
            </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
