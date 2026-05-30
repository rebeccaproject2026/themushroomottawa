import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Icon } from "@iconify/react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

export default function QuickViewModal({ product, onClose }) {
  const [quantity, setQuantity] = useState("");
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDir, setSlideDir] = useState("");
  const [isSliding, setIsSliding] = useState(false);
  const timeoutRef = useRef(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const images = [product.image, ...(product.hoverImage ? [product.hoverImage] : [])];

  const goTo = (nextIndex, dir) => {
    if (isSliding || images.length < 2) return;
    setSlideDir(dir);
    setIsSliding(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsSliding(false);
    }, 280);
  };

  const handlePrev = () => goTo((activeIndex - 1 + images.length) % images.length, "right");
  const handleNext = () => goTo((activeIndex + 1) % images.length, "left");

  const handleAddToCart = () => {
    if (!quantity) {
      toast.error("Please select an option first.", {
        style: { borderRadius: "6px", background: "#1a1a1a", color: "#fff" },
        iconTheme: { primary: "#ff4444", secondary: "#fff" },
      });
      return;
    }
    addToCart(product, quantity);
    toast.success("Added to cart!", {
      style: { borderRadius: "6px", background: "#1a1a1a", color: "#fff" },
    });
  };

  const handleViewDetails = () => {
    onClose();
    navigate(`/product/${product.id}`);
  };

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      clearTimeout(timeoutRef.current);
    };
  }, [onClose]);

  const imgStyle = isSliding
    ? {
        transform: slideDir === "left" ? "translateX(-60px)" : "translateX(60px)",
        opacity: 0,
        transition: "transform 0.28s ease-in-out, opacity 0.28s ease-in-out",
      }
    : {
        transform: "translateX(0)",
        opacity: 1,
        transition: "transform 0.28s ease-in-out, opacity 0.28s ease-in-out",
      };

  return createPortal(
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative bg-white w-full max-w-3xl mx-4 shadow-2xl rounded-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-gray-400 hover:text-gray-800 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image panel */}
          <div
            className="relative md:w-1/2 bg-[#f8fafc] flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <div className="w-full flex items-center justify-center p-8 min-h-[300px] overflow-hidden">
              <img
                key={activeIndex}
                src={images[activeIndex]}
                alt={product.name}
                style={imgStyle}
                className="max-h-64 w-auto object-contain"
              />
            </div>

            {images.length > 1 && (
              <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-1.5">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      i === activeIndex ? "bg-[#003465] w-4" : "bg-gray-300 w-1.5"
                    }`}
                  />
                ))}
              </div>
            )}

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className={`absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-1.5 text-gray-700 hover:text-[#003465] transition-all duration-300 cursor-pointer ${
                    isImageHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-1.5 text-gray-700 hover:text-[#003465] transition-all duration-300 cursor-pointer ${
                    isImageHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <button
              onClick={handleViewDetails}
              className={`absolute bottom-0 left-0 right-0 bg-[#003465] text-white font-bold uppercase text-[13px] tracking-widest nav-lato py-3.5 transition-all duration-300 cursor-pointer hover:bg-[#012140] ${
                isImageHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
              }`}
            >
              View Details
            </button>
          </div>

          {/* Product info */}
          <div className="md:w-1/2 p-8 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-gray-900 nav-poppins">{product.name}</h2>

            <p className="text-lg font-semibold text-[#003465] nav-lato">
              ${product.price.toFixed(2)}
              {product.maxPrice ? ` – $${product.maxPrice.toFixed(2)}` : ""}
            </p>

            <p className="text-sm text-gray-500 leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Quantity:</span>
              <div className="relative flex-1">
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-500 focus:outline-none appearance-none pr-8 cursor-pointer"
                >
                  <option value="">Choose an option</option>
                  <option value="7g">7g</option>
                  <option value="14g">14g</option>
                  <option value="28g">28g</option>
                </select>
                <Icon
                  icon="mdi:chevron-down"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-300">
                <button className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition cursor-pointer text-lg leading-none">−</button>
                <span className="px-4 py-2 text-sm font-medium text-gray-800 border-x border-gray-300">1</span>
                <button className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition cursor-pointer text-lg leading-none">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#003465] text-white font-bold uppercase text-[13px] tracking-wider nav-lato py-2.5 hover:bg-[#012140] transition cursor-pointer"
              >
                Add to Cart
              </button>
            </div>

            <div className="border-t border-gray-100 pt-3 flex flex-col gap-1 text-sm text-gray-500">
              <p><span className="font-medium text-gray-700">SKU:</span> N/A</p>
              <p>
                <span className="font-medium text-gray-700">Category:</span>{" "}
                <span className="text-[#003465] hover:underline cursor-pointer">{product.category}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  , document.body);
}
