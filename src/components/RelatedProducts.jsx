import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { mushroomProducts } from "../data/mushrooms";
import RelatedProductCard from "./RelatedProductCard";

export default function RelatedProducts({ currentProduct }) {
  const [page, setPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const perPage = 4;

  const related = mushroomProducts.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProduct.id
  );

  const totalPages = Math.ceil(related.length / perPage);
  const visible = related.slice(page * perPage, page * perPage + perPage);

  if (related.length === 0) return null;

  return (
    <section className="bg-white py-12 border-t border-gray-100">
      <div className="mx-auto max-w-375 px-3.75">
        <h2 className="text-xl font-bold text-gray-900 nav-poppins mb-6">Related products</h2>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 cursor-pointer
              ${isHovered && page > 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"}
            `}
            style={{ transform: isHovered && page > 0 ? "translateY(-50%) translateX(0)" : "translateY(-50%) translateX(-2rem)" }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {visible.map((product) => (
              <RelatedProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 cursor-pointer`}
            style={{ transform: isHovered && page < totalPages - 1 ? "translateY(-50%) translateX(0)" : "translateY(-50%) translateX(2rem)", opacity: isHovered && page < totalPages - 1 ? 1 : 0, pointerEvents: isHovered && page < totalPages - 1 ? "auto" : "none" }}
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
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  page === i ? "bg-[#003465]" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
