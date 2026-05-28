import { useState } from "react";
import { Search, Heart, MoreHorizontal } from "lucide-react";
import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsExpanded(false); // Reset expanded state on mouse leave
  };

  return (
    <div
      className={`bg-[#f8fafc] rounded-xl transition-all duration-300 group relative ${
        isHovered ? "z-30 shadow-[0_4px_20px_rgba(0,0,0,0.1)]" : "z-10 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >

      <div className="p-4 flex flex-col gap-3">
      {/* Image Container */}
      <div className="relative bg-[#f8fafc] flex items-center justify-center rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Hover Icons */}
        <div className={`absolute top-4 right-4 flex flex-col gap-5 transition-all duration-300 py-2 px-3 rounded-br-lg rounded-tr-lg shadow-[10px_10px_20px_rgba(0,0,0,0.1)] ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
          <button
            data-tooltip-id={`quickview-${product.id}`}
            data-tooltip-content="Quick view"
            data-tooltip-place="left"
            className="rounded-full transition-colors cursor-pointer "
          >
            <Search className="h-5.5 w-5.5 text-gray-900 hover:text-gray-500" strokeWidth={2} />
          </button>
          <Tooltip
            id={`quickview-${product.id}`}
            style={{ backgroundColor: "#1a1a1a", color: "#fff", fontSize: "14px", fontWeight: 500, borderRadius: "4px" }}
          />
          <button
            data-tooltip-id={`wishlist-${product.id}`}
            data-tooltip-content="Add to wishlist"
            data-tooltip-place="left"
            className="rounded-full transition-colors cursor-pointer"
          >
            <Heart className="h-5.5 w-5.5 text-gray-900 hover:text-gray-500" strokeWidth={2} />
          </button>
          <Tooltip
            id={`wishlist-${product.id}`}
            style={{ backgroundColor: "#1a1a1a", color: "#fff", fontSize: "14px", fontWeight: 500, borderRadius: "4px" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20">
        <h3 className="text-sm font-medium text-gray-800 mb-1 nav-poppins">
          {product.name}
        </h3>
        <p className="text-sm text-[#A5A5A5] nav-lato mb-1">{product.category}</p>
        <p className="text-sm not-valid: font-medium text-[#003465] mb-2">
          ${product.price.toFixed(2)} {product.maxPrice && `- $${product.maxPrice.toFixed(2)}`}
        </p>

        {/* Select Options Button */}
        <div className="relative p-5 w-full overflow-hidden  group/btn cursor-pointer">
          {/* Select Options - slides out to top */}
          <div className="absolute inset-0 bg-[#003465] flex items-center justify-center transition-transform duration-300 ease-in-out group-hover/btn:-translate-y-full">
            <span className="text-white font-semibold uppercase text-[13px] tracking-wider nav-lato">Select Options</span>
          </div>
          {/* Cart Icon - slides in from bottom */}
          <div className="absolute inset-0 bg-[#003465] flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover/btn:translate-y-0">
            <Icon icon="la:shopping-cart" className="text-white h-7 w-7" />
          </div>
        </div>
      </div>
      </div>

      {/* Description that expands downwards */}
      <div
        className={`absolute left-0 right-0 top-full bg-white px-5 rounded-b-lg transition-all duration-300 overflow-hidden ${
          isHovered ? "opacity-100 shadow-[0_15px_20px_rgba(0,0,0,0.1)]" : "opacity-0"
        }`}
        style={{
          marginTop: isHovered ? '-10px' : '0', // Overlap slightly with the main card to look seamless
          paddingTop: isHovered ? '10px' : '0',
          maxHeight: isHovered ? (isExpanded ? '500px' : '200px') : '0',
          paddingBottom: isHovered ? '20px' : '0'
        }}
      >
        <div className="border-t border-gray-200 mt-1 pt-3 relative">
          <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-100' : 'max-h-15'}`}>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              {product.description || "Ultra-potent Panaeolus cyanescens in convenient capsules — one of the strongest psychedelic strains, delivering extreme vivid visuals, overwhelming euphoria."}
            </p>
          </div>
          
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-linear-to-t from-white via-white/90 to-transparent flex items-end justify-center">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(true);
                }}
                className="text-gray-400 hover:text-gray-800 transition-colors pb-1 cursor-pointer"
                aria-label="Read more"
              >
                <MoreHorizontal className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
