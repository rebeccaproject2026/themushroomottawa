import { useState } from "react";
import { Icon } from "@iconify/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import RelatedProductCard from "../components/RelatedProductCard";
import { mushroomProducts } from "../data/mushrooms";

export default function Ottawa() {
  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [onSale, setOnSale] = useState(false);
  const [inStock, setInStock] = useState(false);

  const hasAnyFilter = onSale || inStock;

  const clearAllFilters = () => {
    setOnSale(false);
    setInStock(false);
    setCurrentPage(1);
  };

  let products = mushroomProducts.filter((p) => {
    if (onSale && !p.onSale) return false;
    if (inStock && p.outOfStock) return false;
    return true;
  });

  products.sort((a, b) => ((a.id * 137) % 100) - ((b.id * 137) % 100));

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const pageStart = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageProducts = products.slice(pageStart, pageStart + ITEMS_PER_PAGE);
  const topRated = products.slice(1, 4);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Build page number list with ellipsis: always show first, last, current ±1
  const getPageNumbers = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages = new Set([1, totalPages, currentPage, currentPage - 1, currentPage + 1].filter(p => p >= 1 && p <= totalPages));
    const sorted = [...pages].sort((a, b) => a - b);
    const result = [];
    sorted.forEach((p, i) => {
      if (i > 0 && p - sorted[i - 1] > 1) result.push("...");
      result.push(p);
    });
    return result;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="w-full max-w-375 mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="hidden lg:flex w-full magic-sidebar flex-col gap-8">
            {/* Stock Status */}
            <div>
              <h3 className="text-base font-semibold text-[#333333] uppercase mb-4 nav-poppins mt-2">
                Stock Status
              </h3>
              <div className="flex flex-col gap-3 nav-lato text-sm text-[#777777]">
                <label className="flex items-center gap-2 cursor-pointer hover:text-[#333333] transition-colors">
                  <input
                    type="checkbox"
                    checked={onSale}
                    onChange={(e) => { setOnSale(e.target.checked); setCurrentPage(1); }}
                    className="w-3.5 h-3.5 border-gray-200 text-[#003465] focus:ring-[#003465]"
                  />
                  On sale
                </label>
                <label className="flex items-center gap-2 cursor-pointer hover:text-[#333333] transition-colors">
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(e) => { setInStock(e.target.checked); setCurrentPage(1); }}
                    className="w-3.5 h-3.5 border-gray-200 text-[#003465] focus:ring-[#003465]"
                  />
                  In stock
                </label>
              </div>
            </div>

            {/* Top Rated Products */}
            <div className="border-t border-[#777777]/30 pt-8">
              <h3 className="text-base font-semibold text-[#333333] uppercase mb-4 nav-poppins">
                Top Rated Products
              </h3>
              <div className="flex flex-col gap-4">
                {topRated.map((prod) => (
                  <div key={prod.id} className="flex gap-4 items-center pb-4 border-b border-[#777777]/30 last:border-0 last:pb-0">
                    <img src={prod.image} alt={prod.name} className="w-16 h-16 object-cover aspect-square" />
                    <div className="flex flex-col gap-2">
                      <a href={`/product/${prod.id}`} className="text-sm text-[#333333] hover:text-[#777777]/70 transition-colors duration-300 nav-poppins font-medium">
                        {prod.name}
                      </a>
                      <span className="text-sm font-semibold nav-lato text-[#003465]">
                        ${prod.price.toFixed(2)}{prod.maxPrice && ` – $${prod.maxPrice.toFixed(2)}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="w-full magic-main flex flex-col gap-4">
            {/* Heading */}
            <div>
              <h1 className="text-[24px] font-semibold text-[#242424] nav-poppins mb-2">
                Premium Mushrooms in Ottawa
              </h1>
              <p className="text-[17px] text-[#777777] nav-lato ">
                Looking for high-quality mushrooms in Ottawa? The Mushroom Ottawa offers carefully sourced premium varieties trusted by wellness enthusiasts across the city. Whether you prefer convenient online ordering or quick local pickup, our Ottawa shop provides fresh selections, expert guidance, and discreet service for customers throughout the region.
              </p>
            </div>

            {/* Active Filters */}
            {hasAnyFilter && (
              <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#333333] nav-lato">
                <button onClick={clearAllFilters} className="hover:text-[#003465] transition-colors flex items-center gap-1 font-semibold cursor-pointer">
                  <Icon icon="ic:round-close" className="w-4 h-4" /> Clear filters
                </button>
                <div className="w-px h-4 bg-gray-300"></div>
                {onSale && (
                  <button onClick={() => { setOnSale(false); setCurrentPage(1); }} className="hover:text-[#003465] transition-colors flex items-center gap-1 font-medium cursor-pointer">
                    <Icon icon="ic:round-close" className="w-4 h-4" /> On sale
                  </button>
                )}
                {inStock && (
                  <button onClick={() => { setInStock(false); setCurrentPage(1); }} className="hover:text-[#003465] transition-colors flex items-center gap-1 font-medium cursor-pointer">
                    <Icon icon="ic:round-close" className="w-4 h-4" /> In stock
                  </button>
                )}
              </div>
            )}

            {/* Product Grid */}
            <div key={currentPage} className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {pageProducts.map((product, idx) => (
                <div
                  key={product.id}
                  className="opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards] h-full"
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  <RelatedProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1 mt-4 nav-lato">
                {/* Prev arrow */}
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-9 h-9 flex items-center justify-center border border-[#e0e0e0] text-[#777777] hover:bg-[#003465] hover:text-white hover:border-[#003465] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <Icon icon="mdi:chevron-left" className="w-5 h-5" />
                </button>

                {getPageNumbers().map((item, idx) =>
                  item === "..." ? (
                    <span key={`ellipsis-${idx}`} className="w-9 h-9 flex items-center justify-center text-[#777777] text-sm">
                      …
                    </span>
                  ) : (
                    <button
                      key={item}
                      onClick={() => goToPage(item)}
                      className={`w-9 h-9 flex items-center justify-center border text-sm font-semibold transition-colors cursor-pointer ${
                        currentPage === item
                          ? "bg-[#003465] text-white border-[#003465]"
                          : "border-[#e0e0e0] text-[#555555] hover:bg-[#003465] hover:text-white hover:border-[#003465]"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}

                {/* Next arrow */}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 flex items-center justify-center border border-[#e0e0e0] text-[#777777] hover:bg-[#003465] hover:text-white hover:border-[#003465] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <Icon icon="mdi:chevron-right" className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
