import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { mushroomProducts } from "../data/mushrooms";
import RelatedProductCard from "./RelatedProductCard";

export default function RelatedProducts({ currentProduct }) {
  const [page, setPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState("left");
  const [displayPage, setDisplayPage] = useState(0);
  const perPage = 4;

  const related = mushroomProducts.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProduct.id
  );

  const totalPages = Math.ceil(related.length / perPage);

  const changePage = (newPage) => {
    if (sliding || newPage === page) return;
    const dir = newPage > page ? "left" : "right";
    setSlideDir(dir);
    setSliding(true);
    setTimeout(() => {
      setDisplayPage(newPage);
      setPage(newPage);
      setSliding(false);
    }, 300);
  };

  const visible = related.slice(displayPage * perPage, displayPage * perPage + perPage);

  if (related.length === 0) return null;

  const exitClass = slideDir === "left" ? "-translate-x-8 opacity-0" : "translate-x-8 opacity-0";
  const gridClass = sliding ? `${exitClass} transition-all duration-300` : "translate-x-0 opacity-100 transition-all duration-300";

  return (
    <section className="bg-white py-12 border-t border-gray-100 overflow-x-hidden">
      <div className="mx-auto max-w-375 px-3.75">
        <h2 className="text-xl font-bold text-gray-900 nav-poppins mb-6">Related products</h2>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={() => changePage(Math.max(0, page - 1))}
            disabled={page === 0}
            className="absolute left-0 top-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            style={{
              transform: isHovered && page > 0 ? "translateY(-50%) translateX(0)" : "translateY(-50%) translateX(-2rem)",
              opacity: isHovered && page > 0 ? 1 : 0,
              pointerEvents: isHovered && page > 0 ? "auto" : "none"
            }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ${gridClass}`}>
            {visible.map((product) => (
              <RelatedProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => changePage(Math.min(totalPages - 1, page + 1))}
            disabled={page >= totalPages - 1}
            className="absolute right-0 top-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            style={{
              transform: isHovered && page < totalPages - 1 ? "translateY(-50%) translateX(0)" : "translateY(-50%) translateX(2rem)",
              opacity: isHovered && page < totalPages - 1 ? 1 : 0,
              pointerEvents: isHovered && page < totalPages - 1 ? "auto" : "none"
            }}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => changePage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  page === i ? "bg-[#333333]" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
