import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mushroomProducts } from "../data/mushrooms";

export default function SearchModal({ isOpen, onClose, isSticky }) {
  const [query, setQuery] = useState("");
  const [headerHeight, setHeaderHeight] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const updateHeight = () => {
      if (isSticky) {
        const nav = document.querySelector("[data-sticky-nav]");
        if (nav) setHeaderHeight(nav.getBoundingClientRect().bottom);
      } else {
        const header = document.querySelector("header");
        if (header) setHeaderHeight(header.getBoundingClientRect().bottom);
      }
    };
    updateHeight();
  }, [isOpen, isSticky]);

  const results = query.trim().length > 0
    ? mushroomProducts.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      setQuery("");
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleProductClick = (id) => {
    onClose();
    navigate(`/product/${id}`);
  };

  return createPortal(
    <div
      className={`fixed left-0 right-0 bottom-0 z-998 bg-white flex flex-col ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        top: `${headerHeight}px`,
        transform: isOpen ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.4s ease-in-out, opacity 0.4s ease-in-out",
      }}
    >
      <div className="flex flex-col w-full h-full pt-6 px-6 overflow-hidden">
        {/* Input row */}
        <div className="w-full border-b border-[#777777]/30 focus-within:border-[#003465] transition-colors duration-200 flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pb-5 text-5xl text-black placeholder-[#333333] font-semibold focus:outline-none bg-transparent text-center"
          />
          {query && (
            <button
              onClick={() => { setQuery(""); inputRef.current?.focus(); }}
              className="shrink-0 pb-4 text-[#333333] hover:text-gray-700 transition cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>
          )}
        </div>

        {/* Results area */}
        <div className="flex-1 overflow-y-auto mt-10">
          {query.trim().length === 0 ? (
            <p className="text-sm text-gray-400 text-center nav-lato">
              Start typing to see products you are looking for.
            </p>
          ) : results.length === 0 ? (
            <p className="text-sm text-gray-400 text-center nav-lato">
              No products found for "<span className="text-gray-600">{query}</span>".
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8 pb-10">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="flex flex-col items-center gap-2 cursor-pointer group"
                >
                  <div className="w-full flex items-end justify-center h-36">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <span className="text-[13px] font-medium text-gray-800 nav-poppins text-center leading-snug group-hover:text-[#003465] transition-colors">
                    {product.name}
                  </span>
                  <span className="text-[13px] font-semibold text-[#003465] nav-lato">
                    ${product.price.toFixed(2)}
                    {product.maxPrice ? ` – $${product.maxPrice.toFixed(2)}` : ""}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  , document.body);
}
