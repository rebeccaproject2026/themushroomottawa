import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useCart } from "../context/CartContext";
import { Heart, X, Check } from "lucide-react";

function WishlistCard({ product, selected, onToggleSelect, onRemove }) {
  const navigate = useNavigate();

  return (
    <div className="relative border border-gray-200 bg-white flex flex-col">
      {/* Top bar: remove + checkbox */}
      <div className="flex items-center justify-between px-3 pt-3 pb-1">
        <button
          onClick={() => onRemove(product.id)}
          className="flex items-center gap-1 text-[13px] text-[#555555] hover:text-[#003465] transition cursor-pointer nav-lato"
        >
          <X className="w-3.5 h-3.5" />
          Remove
        </button>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onToggleSelect(product.id)}
          className="w-3.5 h-3.5 accent-[#003465] cursor-pointer"
        />
      </div>

      {/* Image */}
      <div
        className="w-full h-56 flex items-center justify-center px-4 py-2 cursor-pointer overflow-hidden"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="px-3 pb-4 flex flex-col gap-0.5">
        <h3
          className="text-[14px] font-semibold text-[#1a1a1a] nav-poppins cursor-pointer hover:text-[#003465] transition-colors"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.name}
        </h3>
        <p className="text-[13px] text-[#A5A5A5] nav-lato">{product.category}</p>
        <p className="text-[13px] font-semibold text-[#003465] nav-lato mt-0.5">
          ${product.price.toFixed(2)}{product.maxPrice ? ` – $${product.maxPrice.toFixed(2)}` : ""}
        </p>
      </div>
    </div>
  );
}

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useCart();
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const allSelected = wishlist.length > 0 && selected.length === wishlist.length;

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const removeSelected = () => {
    selected.forEach((id) => {
      const product = wishlist.find((p) => p.id === id);
      if (product) toggleWishlist(product);
    });
    setSelected([]);
  };

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(wishlist.map((p) => p.id));
    }
  };

  const handleRemove = (id) => {
    const product = wishlist.find((p) => p.id === id);
    if (product) toggleWishlist(product);
    setSelected((prev) => prev.filter((s) => s !== id));
  };

  return (
    <>
      <SEO title="My Wishlist" canonical="/wishlist" noindex={true} />
      <Header />

      <main className="min-h-[60vh] max-w-375 mx-auto px-4 lg:px-3.75 py-8">
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-5 py-16">
            <Heart className="w-40 h-40 text-gray-200" strokeWidth={1.5} />
            <h2 className="text-[40px] font-semibold text-[#242424] nav-poppins">This wishlist is empty.</h2>
            <p className="text-sm text-[#777777] text-center nav-lato leading-relaxed">
              You don't have any products in the wishlist yet.<br />
              You will find a lot of interesting products on our "Shop" page.
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="bg-[#003465] text-white font-bold uppercase text-[13px] nav-lato px-4 py-2.5 hover:bg-[#012140] transition cursor-pointer"
            >
              Return to Shop
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {/* Title */}
            <div className="border-b-2 border-gray-200 pb-3">
              <h2 className="text-lg font-semibold uppercase tracking-wider text-[#242424] nav-poppins">
                Your Products Wishlist
              </h2>
            </div>

            {/* Bulk action toolbar */}
            <div className="flex items-center gap-6 bg-[#f5f5f5] px-4 py-2.5 nav-lato text-[13px] text-[#444444]">
              <button
                onClick={removeSelected}
                disabled={selected.length === 0}
                className="flex items-center gap-1 hover:text-[#003465] transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed font-medium"
              >
                <X className="w-3.5 h-3.5" />
                Remove
              </button>
              <button
                onClick={toggleSelectAll}
                className="flex items-center gap-1 hover:text-[#003465] transition cursor-pointer font-medium"
              >
                <Check className="w-3.5 h-3.5" />
                {allSelected ? "Deselect all" : "Select all"}
              </button>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {wishlist.map((product) => (
                <WishlistCard
                  key={product.id}
                  product={product}
                  selected={selected.includes(product.id)}
                  onToggleSelect={toggleSelect}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
