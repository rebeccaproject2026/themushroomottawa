import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Heart, ChevronLeft, ChevronRight, Expand, X, ZoomIn, Maximize2, Share2, LayoutGrid } from "lucide-react";
import { Icon } from "@iconify/react";
import { mushroomProducts } from "../data/mushrooms";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import toast from "react-hot-toast";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = mushroomProducts.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState("");
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [displayImg, setDisplayImg] = useState(0);
  const [outgoingImg, setOutgoingImg] = useState(null);
  const [sliding, setSliding] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(0);

  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  const images = product.hoverImage && product.hoverImage !== product.image
    ? [product.image, product.hoverImage]
    : [product.image];

  const freeShippingRemaining = Math.max(150 - product.price, 0);
  const categoryProducts = mushroomProducts.filter((p) => p.category === product.category);
  const categoryIndex = categoryProducts.findIndex((p) => p.id === product.id);
  const prevProduct = categoryProducts[categoryIndex - 1] || categoryProducts[categoryProducts.length - 1];
  const nextProduct = categoryProducts[categoryIndex + 1] || categoryProducts[0];

  const changeImage = (newIndex) => {
    if (sliding || newIndex === activeImg) return;
    setOutgoingImg(displayImg);   // freeze current as outgoing
    setDisplayImg(newIndex);       // immediately show new image sliding in
    setActiveImg(newIndex);
    setSliding(true);
    setTimeout(() => {
      setOutgoingImg(null);
      setSliding(false);
    }, 400);
  };

  const handlePrevImg = () => changeImage(activeImg > 0 ? activeImg - 1 : images.length - 1);
  const handleNextImg = () => changeImage(activeImg < images.length - 1 ? activeImg + 1 : 0);

  const handleAddToCart = () => {
    if (!quantity) {
      toast.error("Please select an option first.", {
        style: { borderRadius: "6px", background: "#1a1a1a", color: "#fff" },
      });
      return;
    }
    addToCart(product, quantity);
  };

  // Slide animation classes - removed, using two-image approach

  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        <div className="mx-auto px-6 py-6">
          

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - Images */}
            <div className="flex gap-6">
              {/* Thumbnails */}
              <div className="flex flex-col gap-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => changeImage(i)}
                    className={`aspect-square overflow-hidden flex items-center justify-center transition cursor-pointer ${activeImg === i ? "opacity-50" : "opacity-100 hover:opacity-75 "}`}
                  >
                    <img src={img} alt="" className="w-28 h-28 object-cover" />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div
                className="relative flex justify-center overflow-hidden group cursor-zoom-in"
                style={{ maxHeight: "420px" }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.querySelector(".zoom-img").style.transformOrigin = `${x}% ${y}%`;
                }}
              >
                {/* Outgoing image slides out to left */}
                {sliding && outgoingImg !== null && (
                  <img
                    src={images[outgoingImg]}
                    alt={product.name}
                    className="absolute inset-0 max-h-96 w-auto object-cover m-auto"
                    style={{ animation: "slideOutLeft 0.4s ease forwards" }}
                  />
                )}
                {/* Incoming image slides in from right */}
                <img
                  key={displayImg}
                  src={images[displayImg]}
                  alt={product.name}
                  className="zoom-img max-h-96 w-auto object-contain cursor-grab transition-transform duration-300 group-hover:scale-[2.5]"
                  style={{ animation: sliding ? "slideInRight 0.4s ease forwards" : "none" }}
                />

                {/* Click to enlarge button */}
                <div className="absolute bottom-4 left-4">
                  <button
                    onClick={() => { setLightboxImg(displayImg); setLightbox(true); }}
                    className="flex items-center bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-50 transition-all duration-300 overflow-hidden group/enlarge h-10 w-10 hover:w-auto hover:px-4 hover:gap-2"
                  >
                    <Expand className="w-4 h-4 text-gray-800 shrink-0 mx-auto group-hover/enlarge:mx-0" />
                    <span className="max-w-0 group-hover/enlarge:max-w-35 overflow-hidden transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium text-gray-800">
                      Click to enlarge
                    </span>
                  </button>
                </div>

                {images.length > 1 && (
                  <button onClick={handlePrevImg} className="absolute left-2 top-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                    <ChevronLeft className="w-10 h-10 text-gray-600" />
                  </button>
                )}
                {images.length > 1 && (
                  <button onClick={handleNextImg} className="absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                    <ChevronRight className="w-10 h-10 text-gray-400" />
                  </button>
                )}
              </div>
            </div>

            {/* Right - Details */}
            <div className="flex flex-col gap-4">
              {/* Breadcrumb + Nav */}
          <div className="flex items-center justify-between">
            <nav className="flex items-center gap-2 text-sm text-[#767676] nav-lato">
              <Link to="/" className="hover:text-gray-800 transition">Home</Link>
              <span>/</span>
              <span className="hover:text-gray-800 transition cursor-pointer">{product.category}</span>
              <span>/</span>
              <span className="font-semibold text-[#262626]">{product.name}</span>
            </nav>
            <div className="flex items-baseline justify-center gap-2">
              <div className="relative group/prev">
                <button
                  onClick={() => navigate(`/product/${prevProduct.id}`)}
                  className="transition cursor-pointer"
                >
                  <ChevronLeft className="w-4.5 h-4.5 text-[#767676]" />
                </button>
                {prevProduct && (
                  <div className="absolute right-0 top-full mt-2 hidden group-hover/prev:flex items-center gap-3 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-56 z-50">
                    <img src={prevProduct.image} alt={prevProduct.name} className="w-14 h-14 object-contain shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{prevProduct.name}</p>
                      <p className="text-sm text-[#003465] font-medium mt-0.5">
                        ${prevProduct.price.toFixed(2)}{prevProduct.maxPrice ? ` – $${prevProduct.maxPrice.toFixed(2)}` : ""}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <button className="transition cursor-pointer">
                <LayoutGrid className="w-4 h-4 text-[#787878]" />
              </button>
              <div className="relative group/next">
                <button
                  onClick={() => navigate(`/product/${nextProduct.id}`)}
                  className="transition cursor-pointer"
                >
                  <ChevronRight className="w-4.5 h-4.5 text-[#767676]" />
                </button>
                {nextProduct && (
                  <div className="absolute right-0 top-full mt-2 hidden group-hover/next:flex items-center gap-3 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-56 z-50">
                    <img src={nextProduct.image} alt={nextProduct.name} className="w-14 h-14 object-contain shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{nextProduct.name}</p>
                      <p className="text-sm text-[#003465] font-medium mt-0.5">
                        ${nextProduct.price.toFixed(2)}{nextProduct.maxPrice ? ` – $${nextProduct.maxPrice.toFixed(2)}` : ""}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
              <h1 className="text-[34px] font-semibold text-[#333333] nav-poppins">{product.name}</h1>

              <p className="text-[22px] nav-lato font-semibold text-[#003465]">
                ${product.price.toFixed(2)}{product.maxPrice ? ` – $${product.maxPrice.toFixed(2)}` : ""}
              </p>

              <p className="text-sm nav-lato text-[#777777] leading-relaxed">{product.description}</p>

              {/* Free shipping notice */}
              <div className="border-dashed border-2 border-[#777777]/20 px-4 py-5 text-sm text-[#777777] nav-lato">
                Add <span className="font-semibold text-[#003465]">${freeShippingRemaining.toFixed(2)}</span> to cart and get free shipping!
              </div>

              {/* Quantity select */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold nav-lato text-[#242424]">Quantity:</span>
                <div className="relative flex-1 max-w-64">
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full border-2 border-[#777777]/20 px-3 py-2.5 text-sm text-gray-500 focus:outline-none cursor-pointer bg-white appearance-none"
                  >
                    <option value="">Choose an option</option>
                    <option value="7g">7g</option>
                    <option value="14g">14g</option>
                    <option value="28g">28g</option>
                  </select>
                  <Icon icon="mdi:chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Qty + Add to Cart */}
              <div className="flex items-center gap-3 nav-lato">
                <div className="flex items-center border border-[#777777]/20 overflow-hidden nav-lato">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-2 py-2.5 text-gray-600 hover:text-white hover:bg-[#003465] transition cursor-pointer text-lg leading-none">−</button>
                  <span className="px-3 py-2.5 text-sm font-medium text-gray-800 border-x border-[#777777]/20">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} className="px-2 py-2.5 text-gray-600 hover:text-white hover:bg-[#003465] transition cursor-pointer text-lg leading-none">+</button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 nav-lato bg-[#003465] text-white font-bold uppercase text-[13px] py-3 px-6 hover:bg-[#012444] transition cursor-pointer max-w-fit"
                >
                  Add to Cart
                </button>
              </div>

              {/* Add to wishlist */}
              <button className="flex items-center gap-1.5 text-[15px] text-[333333] font-medium hover:text-gray-400 duration-600 transition cursor-pointer w-fit">
                <Heart className="w-4 h-4" />
                Add to wishlist
              </button>

              <hr className="border-gray-200 py-0.5" />

              {/* Meta */}
              <div className="flex flex-col gap-3 text-sm text-[#777777] nav-lato font-medium">
                <p><span className="font-semibold text-[#333333]">SKU:</span> N/A</p>
                <p><span className="font-semibold text-[#333333]">Category:</span> {product.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-100 bg-black flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4">
            <span className="text-white text-sm font-medium">{lightboxImg + 1} / {images.length}</span>
            <div className="flex items-center gap-4">
              <button className="text-white hover:text-gray-300 transition cursor-pointer">
                <ZoomIn className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-gray-300 transition cursor-pointer">
                <Maximize2 className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-gray-300 transition cursor-pointer">
                <Share2 className="w-5 h-5" />
              </button>
              <button onClick={() => setLightbox(false)} className="text-white hover:text-gray-300 transition cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex items-center justify-center px-16 relative">
            <button
              onClick={() => setLightboxImg(i => i > 0 ? i - 1 : images.length - 1)}
              className="absolute left-4 text-white hover:text-gray-300 transition cursor-pointer p-2"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="bg-white rounded-lg flex items-center justify-center p-8 max-w-2xl w-full max-h-[80vh]">
              <img
                src={images[lightboxImg]}
                alt={product.name}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <button
              onClick={() => setLightboxImg(i => i < images.length - 1 ? i + 1 : 0)}
              className="absolute right-4 text-white hover:text-gray-300 transition cursor-pointer p-2"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
