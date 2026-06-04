import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RelatedProductCard from "../components/RelatedProductCard";
import { mushroomProducts } from "../data/mushrooms";

export default function Microdosing() {
  const [minPrice, setMinPrice] = useState(40);
  const [maxPrice, setMaxPrice] = useState(270);
  const [appliedMinPrice, setAppliedMinPrice] = useState(40);
  const [appliedMaxPrice, setAppliedMaxPrice] = useState(270);
  const [onSale, setOnSale] = useState(false);
  const [inStock, setInStock] = useState(false);
  const [gridCols, setGridCols] = useState(3);
  const [itemsPerPage, setItemsPerPage] = useState(18);
  const [displayedCount, setDisplayedCount] = useState(18);
  const [mobileSortOpen, setMobileSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Default sorting");

  useEffect(() => {
    setDisplayedCount(itemsPerPage);
  }, [itemsPerPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200
      ) {
        setDisplayedCount((prev) => prev + itemsPerPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [itemsPerPage]);

  // Filter products for Microdosing category
  let microdosingProducts = mushroomProducts.filter((product) => {
    if (product.category !== "Microdosing") return false;
    
    if (product.price < appliedMinPrice || product.price > appliedMaxPrice) return false;
    if (onSale && !product.onSale) return false;
    if (inStock && product.outOfStock) return false;
    
    return true;
  });

  // Apply sorting
  if (sortOption === "Sort by price: low to high") {
    microdosingProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "Sort by price: high to low") {
    microdosingProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "Sort by latest") {
    microdosingProducts.sort((a, b) => b.id - a.id);
  } else if (sortOption === "Sort by popularity" || sortOption === "Sort by average rating") {
    microdosingProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Top Rated Products (mock based on the image)
  const topRated = mushroomProducts.filter(p => p.category === "Magic Mushrooms").slice(1, 3); 

  // Apply items per page limit
  const displayedProducts = microdosingProducts.slice(0, displayedCount);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="w-full max-w-375 mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="hidden lg:flex w-full magic-sidebar flex-col gap-8">
            {/* Filter by Price */}
            <div>
              <h3 className="text-base font-semibold text-[#333333] uppercase nav-poppins">
                Filter by Price
              </h3>
              <div className="mt-2">
                <div className="relative w-full h-6 mt-4 mb-2">
                  {/* Background Track */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-[#EAEDF2]"></div>
                  {/* Selected Range */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-[#003465]"
                    style={{ left: `${((minPrice - 40) / 230) * 100}%`, right: `${100 - ((maxPrice - 40) / 230) * 100}%` }}
                  ></div>

                  {/* Min Input */}
                  <input
                    type="range"
                    min="40"
                    max="270"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 1))}
                    className="absolute top-1/2 -translate-y-1/2 w-full appearance-none bg-transparent pointer-events-none custom-range-slider outline-none"
                  />
                  {/* Max Input */}
                  <input
                    type="range"
                    min="40"
                    max="270"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 1))}
                    className="absolute top-1/2 -translate-y-1/2 w-full appearance-none bg-transparent pointer-events-none custom-range-slider outline-none"
                  />
                </div>
                <div className="flex items-center justify-between mt-5 text-sm nav-lato font-medium ">
                  <span className="text-[#767676]">
                    Price: <span className="font-semibold text-[#242424]">${minPrice} — ${maxPrice}</span>
                  </span>
                  <button 
                    onClick={() => { setAppliedMinPrice(minPrice); setAppliedMaxPrice(maxPrice); }}
                    className="bg-[#f7f7f7] hover:bg-[#e0e0e0] text-[#333333] cursor-pointer text-xs nav-lato font-bold rounded py-2 px-3.5 uppercase transition-colors"
                  >
                    Filter
                  </button>
                </div>
              </div>
            </div>

            {/* Stock Status */}
            <div className="border-t border-[#777777]/30 pt-8">
              <h3 className="text-base font-semibold text-[#333333] uppercase mb-4 nav-poppins">
                Stock Status
              </h3>
              <div className="flex flex-col gap-3 nav-lato text-sm text-[#777777]">
                <label className="flex items-center gap-2 cursor-pointer hover:text-[#333333] transition-colors">
                  <input
                    type="checkbox"
                    checked={onSale}
                    onChange={(e) => setOnSale(e.target.checked)}
                    className="w-3.5 h-3.5 border-gray-200 text-[#003465] focus:ring-[#003465]"
                  />
                  On sale
                </label>
                <label className="flex items-center gap-2 cursor-pointer hover:text-[#333333] transition-colors">
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(e) => setInStock(e.target.checked)}
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
              <div className=" flex flex-col gap-4">
                {topRated.map((prod) => (
                  <div key={prod.id} className="flex gap-4 items-center group pb-4 border-b border-[#777777]/30 last:border-0 last:pb-0">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-16 h-16 object-cover aspect-square "
                    />
                    <div className="flex flex-col gap-2">
                      <a href={`/product/${prod.id}`} className="text-sm text-[#333333] hover:text-[#777777]/70 transition-colors duration-300 nav-poppins font-medium">
                        {prod.name}
                      </a>
                      <span className="text-sm font-semibold nav-lato text-[#003465]">
                        ${prod.price.toFixed(2)} {prod.maxPrice && ` -  $${prod.maxPrice.toFixed(2)}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="w-full magic-main flex flex-col gap-6 pt-6">
            {/* Header Area */}
            <div>
              <h1 className="text-[28px] font-semibold text-[#242424] nav-poppins mb-5 leading-[1.4]">
                Microdosing
              </h1>
              <p className="text-[#616161] text-lg nav-lato leading-[1.6]">
                Microdosing mushrooms involves taking very small, sub-perceptual amounts of psilocybin to support focus, creativity, and overall mental clarity without experiencing a full psychedelic trip. This approach has gained popularity among professionals, creatives, and individuals seeking a balanced and manageable way to incorporate psilocybin into their routine.
              </p>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 nav-lato text-sm text-[#777777]">
              {/* Top Row for Mobile & Tablet (Breadcrumb + Showing results) */}
              <div className="flex justify-between items-center w-full lg:w-auto">
                <div className="flex items-center gap-2">
                  <a href="/" className="hover:text-[#333333] transition-colors">Home</a>
                  <span>/</span>
                  <span className="text-[#333333] font-semibold">Microdosing</span>
                </div>
                {/* Showing results - Mobile Only */}
                <div className="lg:hidden text-[#777777]">
                  Showing 1–{displayedProducts.length} of {microdosingProducts.length} results
                </div>
              </div>

              {/* Divider - Mobile Only */}
              <div className="w-full h-px bg-gray-200 lg:hidden"></div>

              {/* Bottom Row for Mobile / Right Side for Desktop */}
              <div className="flex justify-end items-center gap-7 w-full lg:w-auto">
                <div className="hidden lg:flex items-center">
                  <span className="font-semibold text-[#242424] mr-2">Show:</span>
                  {[9, 12, 18, 24].map((num, idx, arr) => (
                    <span key={num} className="flex items-center gap-2">
                      <button
                        onClick={() => setItemsPerPage(num)}
                        className={`cursor-pointer transition-colors ${itemsPerPage === num ? 'text-[#333333] font-semibold' : 'hover:text-[#333333]'}`}
                      >
                        {num}
                      </button>
                      {idx < arr.length - 1 && <span className="mr-2">/</span>}
                    </span>
                  ))}
                </div>

                <div className="hidden lg:flex items-center gap-1 text-gray-400">
                  <button
                    onClick={() => setGridCols(2)}
                    className={`${gridCols === 2 ? 'text-[#333333]' : 'hover:text-[#333333]'} transition-colors cursor-pointer`}
                  >
                    <Icon icon="pepicons-pop:grid" className="w-7.5 h-7.5" />
                  </button>
                  <button
                    onClick={() => setGridCols(3)}
                    className={`${gridCols === 3 ? 'text-[#333333]' : 'hover:text-[#333333]'} transition-colors cursor-pointer`}
                  >
                    <Icon icon="gridicons:grid" className="w-7 h-7" />
                  </button>
                  <button
                    onClick={() => setGridCols(4)}
                    className={`${gridCols === 4 ? 'text-[#333333]' : 'hover:text-[#333333]'} transition-colors cursor-pointer`}
                  >
                    <Icon icon="material-symbols-light:background-grid-small-sharp" className="w-7 h-7 -ml-0.5" />
                  </button>
                </div>

                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="hidden md:block border-b-2 font-semibold border-[#777777]/30 bg-white text-[#242424] py-1 focus:outline-none cursor-pointer"
                >
                  <option>Default sorting</option>
                  <option>Sort by popularity</option>
                  <option>Sort by average rating</option>
                  <option>Sort by latest</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>

                <div className="md:hidden relative">
                  <button
                    onClick={() => setMobileSortOpen(!mobileSortOpen)}
                    className="p-1 text-[#333333] hover:text-[#003465] transition-colors cursor-pointer"
                  >
                    <Icon icon="mynaui:arrow-up-down" className="w-6 h-6" />
                  </button>

                  {mobileSortOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-md z-50 py-2">
                      {["Default sorting", "Sort by popularity", "Sort by average rating", "Sort by latest", "Sort by price: low to high", "Sort by price: high to low"].map((opt) => (
                        <button
                          key={opt}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors nav-lato font-medium ${sortOption === opt ? 'text-white bg-[#003465]' : 'text-[#777777] hover:text-white hover:bg-[#003465]'}`}
                          onClick={() => {
                            setSortOption(opt);
                            setMobileSortOpen(false);
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div key={gridCols} className={`grid grid-cols-2 md:grid-cols-4 gap-5 ${gridCols === 2 ? 'lg:grid-cols-2' :
              gridCols === 3 ? 'lg:grid-cols-3' :
                'lg:grid-cols-4'
              }`}>
              {displayedProducts.map((product, idx) => (
                <div
                  key={product.id}
                  className="opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]"
                  style={{ animationDelay: `${(idx % itemsPerPage) * 50}ms` }}
                >
                  <RelatedProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
