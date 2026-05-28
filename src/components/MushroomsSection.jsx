import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { mushroomProducts } from "../data/mushrooms";

export default function MushroomsSection() {
  const [activeTab, setActiveTab] = useState("magic-mushrooms");
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = [
    { id: "magic-mushrooms", label: "MAGIC MUSHROOMS" },
    { id: "microdosing", label: "MICRODOSING" },
    { id: "psilocybin-edibles", label: "PSILOCYBIN EDIBLES" }
  ];

  const itemsPerPage = 8;
  const maxIndex = Math.max(0, mushroomProducts.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleProducts = mushroomProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="bg-[#f5f5f5] py-16 px-2">
      <div className="mx-auto max-w-375 px-3.75">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-[#242424] mb-2 nav-poppins">
            Our Mushrooms
          </h2>
          <p className="text-[#525252] text-lg nav-lato ">
            Jump into the world of Mushrooms
          </p>
        </div>

        <div className="flex justify-center gap-10 mb-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-1 text-[15px] font-bold uppercase tracking-wide transition-colors duration-300 cursor-pointer
                after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#003465] after:transition-all after:duration-300
                ${
                  activeTab === tab.id
                    ? "text-[#003465] after:w-full"
                    : "text-gray-500 hover:text-[#003465] after:w-0 hover:after:w-full"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid with Navigation */}
        <div className="relative group mb-12">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-40 bg-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 ${
              currentIndex === 0
                ? "group-hover:opacity-50 cursor-not-allowed"
                : "group-hover:opacity-100 hover:bg-gray-100 hover:scale-110"
            }`}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-40 bg-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 ${
              currentIndex >= maxIndex
                ? "group-hover:opacity-50 cursor-not-allowed"
                : "group-hover:opacity-100 hover:bg-gray-100 hover:scale-110"
            }`}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Explore Full Collection Button */}
        <div className="flex justify-center">
          <button className="bg-[#1a1a1a] text-white px-8 py-3 rounded font-semibold text-sm uppercase flex items-center gap-2 hover:bg-[#333333] transition duration-300">
            Explore Full Collection
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
