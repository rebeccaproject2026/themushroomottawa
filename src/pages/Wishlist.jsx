import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useCart } from "../context/CartContext";
import { Heart, X } from "lucide-react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import toast from "react-hot-toast";

function WishlistRow({ product, onRemove }) {
  const [quantity, setQuantity] = useState("");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!quantity) {
      toast.error("Please select an option first.", {
        style: { borderRadius: "6px", background: "#1a1a1a", color: "#fff" },
        iconTheme: { primary: "#ff4444", secondary: "#fff" },
      });
      return;
    }
    addToCart(product, quantity);
  };

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      {/* Remove */}
      <td className="py-5 px-4 w-10">
        <button
          onClick={() => onRemove(product.id)}
          className="text-gray-400 hover:text-gray-700 transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </td>

      {/* Image */}
      <td className="py-5 px-4 w-24">
        <img
          src={product.image}
          alt={product.name}
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-16 h-16 object-contain cursor-pointer"
        />
      </td>

      {/* Name */}
      <td className="py-5 px-4">
        <span
          onClick={() => navigate(`/product/${product.id}`)}
          className="text-sm font-medium text-gray-800 nav-poppins hover:text-[#003465] cursor-pointer transition-colors"
        >
          {product.name}
        </span>
      </td>

      {/* Price */}
      <td className="py-5 px-4">
        <span className="text-sm font-semibold text-[#003465] nav-lato">
          ${product.price.toFixed(2)}
          {product.maxPrice ? ` – $${product.maxPrice.toFixed(2)}` : ""}
        </span>
      </td>

      {/* Stock */}
      <td className="py-5 px-4">
        <span className="text-sm text-green-600 font-medium nav-lato">In Stock</span>
      </td>

      {/* Quantity + Add to Cart */}
      <td className="py-5 px-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border border-gray-300 px-3 py-2 text-sm text-gray-500 focus:outline-none appearance-none pr-7 cursor-pointer min-w-35"
            >
              <option value="">Choose an option</option>
              <option value="7g">7g</option>
              <option value="14g">14g</option>
              <option value="28g">28g</option>
            </select>
            <Icon
              icon="mdi:chevron-down"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-[#003465] text-white font-bold uppercase text-[12px] tracking-wider nav-lato px-4 py-2 hover:bg-[#012140] transition cursor-pointer whitespace-nowrap"
          >
            Add to Cart
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <main className="min-h-[60vh] max-w-375 mx-auto px-3.75 py-2">
        {wishlist.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center gap-5">
            <Heart className="w-40 h-40 text-gray-200" strokeWidth={1.5} />
            <h2 className="text-[40px] font-bold text-[#242424] nav-poppins">This wishlist is empty.</h2>
                <p className="text-sm text-[#777777] text-center nav-lato leading-relaxed">
              You don't have any products in the wishlist yet.<br />
              You will find a lot of interesting products on our "Shop" page.
            </p>
            <button
              onClick={() => navigate("/")}
              className=" bg-[#003465] text-white font-bold uppercase text-[13px] nav-lato px-4 py-2.5 hover:bg-[#012140] transition cursor-pointer"
            >
              Return to Shop
            </button>
          </div>
        ) : (
          /* Wishlist table */
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-4 w-10"></th>
                  <th className="py-3 px-4 w-24"></th>
                  <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 nav-lato">Product</th>
                  <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 nav-lato">Price</th>
                  <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 nav-lato">Stock Status</th>
                  <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 nav-lato">Action</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((product) => (
                  <WishlistRow
                    key={product.id}
                    product={product}
                    onRemove={(id) => toggleWishlist(wishlist.find((p) => p.id === id))}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
