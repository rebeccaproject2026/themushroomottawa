import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { mushroomProducts } from "../data/mushrooms";
import { Icon } from "@iconify/react";

export default function MushroomsSection() {
  const [activeTab, setActiveTab] = useState("magic-mushrooms");
  const [displayTab, setDisplayTab] = useState("magic-mushrooms");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animState, setAnimState] = useState("visible"); // "visible" | "exit" | "enter"
  const pendingTab = useRef(null);

  const tabs = [
    { id: "magic-mushrooms", label: "MAGIC MUSHROOMS", category: "Magic Mushrooms" },
    { id: "microdosing", label: "MICRODOSING", category: "Microdosing" },
    { id: "psilocybin-edibles", label: "PSILOCYBIN EDIBLES", category: "Psilocybin Edibles" }
  ];

  const handleTabClick = (tabId) => {
    if (tabId === activeTab) return;
    pendingTab.current = tabId;
    setActiveTab(tabId);
    setAnimState("exit");
  };

  useEffect(() => {
    if (animState === "exit") {
      const t = setTimeout(() => {
        setDisplayTab(pendingTab.current);
        setCurrentIndex(0);
        setAnimState("enter");
      }, 300);
      return () => clearTimeout(t);
    }
    if (animState === "enter") {
      const t = setTimeout(() => setAnimState("visible"), 300);
      return () => clearTimeout(t);
    }
  }, [animState]);

  const activeCategory = tabs.find(t => t.id === displayTab)?.category;
  const filteredProducts = mushroomProducts.filter(p => p.category === activeCategory);
  const itemsPerPage = 8;
  const maxIndex = Math.max(0, filteredProducts.length - itemsPerPage);
  const visibleProducts = filteredProducts.slice(currentIndex, currentIndex + itemsPerPage);

  const gridClass =
    animState === "exit"
      ? "opacity-0 translate-y-12 transition-all duration-300 ease-in"
      : animState === "enter"
      ? "opacity-0 translate-y-12 transition-none"
      : "opacity-100 translate-y-0 transition-all duration-300 ease-out";

  return (
    <section className="bg-[#f5f5f5] py-10 md:py-16 px-4 md:px-2">
      <div className="mx-auto max-w-375 px-3.75">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#242424] mb-2 nav-poppins">
            Our Mushrooms
          </h2>
          <p className="text-[#525252] text-base md:text-lg nav-lato ">
            Jump into the world of Mushrooms
          </p>
        </div>

        <div className="flex justify-center gap-4 md:gap-10 mb-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative pb-1 text-sm md:text-[15px] font-bold uppercase tracking-wide transition-colors duration-300 cursor-pointer
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
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 md:-translate-x-6 z-40 bg-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 opacity-100 md:opacity-0 ${
              currentIndex === 0
                ? "md:group-hover:opacity-50 opacity-50 cursor-not-allowed"
                : "md:group-hover:opacity-100 hover:bg-gray-100 hover:scale-110"
            }`}
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </button>

          {/* Products Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ${gridClass}`}>
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-6 z-40 bg-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 opacity-100 md:opacity-0 ${
              currentIndex >= maxIndex
                ? "md:group-hover:opacity-50 opacity-50 cursor-not-allowed"
                : "md:group-hover:opacity-100 hover:bg-gray-100 hover:scale-110"
            }`}
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </button>
        </div>

        {/* Explore Full Collection Button */}
        <div className="flex justify-center mt-2 md:mt-0">
          <button className="bg-[#1a1a1a] text-white px-6 md:px-8 py-3 rounded cursor-pointer font-semibold text-xs md:text-sm uppercase flex items-center gap-2 hover:bg-[#333333] transition duration-300 w-full sm:w-auto justify-center">
            Explore Full Collection
            <Icon icon="mdi:arrow-right" stroke="2" className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
