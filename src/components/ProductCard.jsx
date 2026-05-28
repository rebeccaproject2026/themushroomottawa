import { useState } from "react";
import { Search, Heart, MoreHorizontal } from "lucide-react";
import { Icon } from "@iconify/react";

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
        isHovered ? "z-30 shadow-[0_4px_20px_rgba(0,0,0,0.1)]" : "z-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Container */}
      <div className="relative bg-[#f8fafc] p-4 flex items-center justify-center h-65 rounded-t-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Hover Icons */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
          <button className="bg-[#f8fafc] p-2.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-colors">
            <Search className="h-4.5 w-4.5 text-gray-700" strokeWidth={2} />
          </button>
          <button className="bg-[#f8fafc] p-2.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-colors">
            <Heart className="h-4.5 w-4.5 text-gray-700" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 bg-white relative z-20 rounded-b-lg">
        <h3 className="text-[15px] font-semibold text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-[13px] text-gray-400 mb-3">{product.category}</p>
        <p className="text-[14px] font-bold text-[#003465] mb-4">
          ${product.price.toFixed(2)} {product.maxPrice && `- $${product.maxPrice.toFixed(2)}`}
        </p>

        {/* Select Options Button */}
        <div className="relative h-12 w-full overflow-hidden mt-2">
          {/* Select Options Button */}
          <button
            className={`w-full bg-[#003465] text-white font-semibold uppercase text-[12px] py-3 tracking-wider absolute left-0 right-0 top-0 transition-all duration-300 ease-in-out
              ${isHovered ? 'translate-y-[-120%] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 pointer-events-auto'}
            `}
            style={{ zIndex: 2 }}
          >
            Select Options
          </button>
          {/* Cart Icon Slide Up */}
          <div
            className={`absolute left-0 right-0 top-0 flex items-center justify-center h-12 transition-all duration-300 ease-in-out
              ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'}
            `}
            style={{ zIndex: 3 }}
          >
            {/* Cart SVG icon, white on #003465 background, matching your image */}
            <div className="bg-[#003465] w-full h-12 flex items-center justify-center rounded-md">
             <Icon icon="la:shopping-cart" className="text-white h-8 w-8" />
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
