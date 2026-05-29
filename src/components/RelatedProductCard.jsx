import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RelatedProductCard({ product }) {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="bg-white border border-gray-100 rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Image */}
      <div
        className="relative aspect-square bg-white flex items-center justify-center h-80 overflow-hidden p-4"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`h-full w-auto object-cover transition-all duration-700 absolute ${
            isImageHovered && product.hoverImage ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={product.name}
            className={`h-full w-auto object-cover transition-all duration-700 absolute ${
              isImageHovered ? "opacity-100 scale-110" : "opacity-0 scale-95"
            }`}
          />
        )}
      </div>

      {/* Info */}
      <div className="px-4 pb-4 flex flex-col gap-1">
        <h3 className="text-sm font-semibold text-gray-800 nav-poppins">{product.name}</h3>
        <p className="text-sm text-gray-400 nav-lato">{product.category}</p>
        <p className="text-sm font-semibold text-[#003465] mt-1">
          ${product.price.toFixed(2)}{product.maxPrice ? ` – $${product.maxPrice.toFixed(2)}` : ""}
        </p>
      </div>
    </div>
  );
}
