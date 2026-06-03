import { useState } from "react";
import { Icon } from "@iconify/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RelatedProductCard from "../components/RelatedProductCard";
import { mushroomProducts } from "../data/mushrooms";

export default function MagicMushrooms() {
  const [minPrice, setMinPrice] = useState(40);
  const [maxPrice, setMaxPrice] = useState(270);
  const [onSale, setOnSale] = useState(false);
  const [inStock, setInStock] = useState(false);
  const [gridCols, setGridCols] = useState(3);
  const [itemsPerPage, setItemsPerPage] = useState(18);

  // Filter products for Magic Mushrooms category
  const magicMushrooms = mushroomProducts.filter(
    (product) => product.category === "Magic Mushrooms"
  );

  // Top Rated Products (mock based on the image)
  const topRated = magicMushrooms.slice(1, 4);

  // Apply items per page limit
  const displayedProducts = magicMushrooms.slice(0, itemsPerPage);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="w-full max-w-375 mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full magic-sidebar flex flex-col gap-8">
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
                  <button className="bg-[#f7f7f7] hover:bg-[#e0e0e0] text-[#333333] cursor-pointer text-xs nav-lato font-bold py-1.25 px-3.5 uppercase transition-colors">
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
                        ${prod.price.toFixed(2)} {prod.maxPrice && `- $${prod.maxPrice.toFixed(2)}`}
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
                Magic Mushrooms
              </h1>
              <p className="text-[#616161] text-lg nav-poppins font-semibold leading-[1.4]">
                Looking to explore premium magic mushrooms in Ottawa? Our curated collection features high-quality, carefully sourced psilocybin mushrooms selected for consistency, potency, and overall experience. Whether you're new to shrooms or an experienced user, you'll find a variety of strains suited for different preferences, from creative and uplifting experiences to deeper, more introspective journeys.
              </p>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 nav-lato text-sm text-[#777777]">
              <div className="flex items-center gap-2">
                <a href="/" className="hover:text-[#333333] transition-colors">Home</a>
                <span>/</span>
                <span className="text-[#333333] font-semibold">Magic Mushrooms</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center">
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

                <div className="hidden sm:flex items-center gap-1 text-gray-400">
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

                <select className="border-b-2 font-semibold border-[#242424] bg-white text-[#242424] py-1 focus:outline-none cursor-pointer">
                  <option>Default sorting</option>
                  <option>Sort by popularity</option>
                  <option>Sort by average rating</option>
                  <option>Sort by latest</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${
              gridCols === 2 ? 'lg:grid-cols-2' : 
              gridCols === 3 ? 'lg:grid-cols-3' : 
              'lg:grid-cols-4'
            }`}>
              {displayedProducts.map((product) => (
                <RelatedProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
