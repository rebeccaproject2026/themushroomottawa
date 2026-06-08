import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Icon } from "@iconify/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useCart } from "../context/CartContext";

const DELIVERY_OPTIONS = [
  {
    id: "express",
    label: "Express Delivery",
    icon: "mdi:lightning-bolt",
    description: "The store delivers the order directly to your location within 1 hr in a specific local area.",
    cost: "Cost: $15 Delivery Fee",
    fee: 15,
    minOrder: 120,
  },
  {
    id: "sameday",
    label: "Same Day Delivery",
    icon: "mdi:truck-fast",
    description: "The store delivers the order directly to your location within 3-4 hrs in a specific local area.",
    cost: "Cost: $15 Delivery Fee on orders under $120, FREE Delivery on orders over $120",
    fee: 15,
    minOrder: 0,
  },
  {
    id: "shipping",
    label: "Shipping",
    icon: "mdi:package-variant-closed",
    description: "Fast shipping across Canada with easy live tracking; delivery takes 1 to 5 Business days.",
    cost: "Cost: $15.00",
    fee: 15,
    minOrder: 0,
  },
];

const PROVINCES = [
  "Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador",
  "Northwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island",
  "Quebec","Saskatchewan","Yukon",
];

export default function Checkout() {
  const { cartItems, subtotal } = useCart();
  const [selectedDelivery, setSelectedDelivery] = useState("sameday");
  const [dismissBanner, setDismissBanner] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    street: "", city: "", postalCode: "", province: "Ontario", notes: "",
  });
  const [errors, setErrors] = useState({});

  const freeShippingThreshold = 150;
  const freeShippingRemaining = Math.max(freeShippingThreshold - (subtotal || 0), 0);
  const progressPercent = Math.min(((subtotal || 0) / freeShippingThreshold) * 100, 100);

  const delivery = DELIVERY_OPTIONS.find((d) => d.id === selectedDelivery);
  const deliveryFee = selectedDelivery === "sameday" && subtotal >= 120 ? 0 : delivery.fee;
  const total = (subtotal || 0) + deliveryFee;

  const expressWarning = selectedDelivery === "express" && subtotal < delivery.minOrder;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const required = ["firstName", "lastName", "email", "phone", "street", "city", "postalCode", "province"];
    const newErrors = {};
    required.forEach((f) => { if (!form[f].trim()) newErrors[f] = true; });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-md">
            <Icon icon="mdi:check-circle" className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-[28px] font-bold text-[#242424] nav-poppins mb-3">Order Placed!</h2>
            <p className="text-[#777777] nav-lato text-sm mb-8">
              Thank you for your order. Please send your e-Transfer to{" "}
              <span className="font-semibold text-[#003465]">deliverycanadawide@gmail.com</span>.
              Keep your message to your Order # only.
            </p>
            <Link to="/shop" className="bg-[#003465] text-white px-8 py-3 font-bold uppercase text-[13px] hover:bg-[#012444] transition nav-lato">
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 py-6 px-4 lg:px-6 max-w-7xl mx-auto w-full">

        {/* Login banner */}
        {!dismissBanner && (
          <div className="flex items-center justify-between bg-[#f9f9f9] border border-gray-200 px-4 py-3 mb-6 text-sm nav-lato text-[#555555]">
            <span>
              Login to your account to take advantage of our First Order Discount offer.{" "}
              <span className="text-[#003465] font-semibold cursor-pointer hover:underline">Login / Register</span>
            </span>
            <button onClick={() => setDismissBanner(true)} className="text-gray-400 hover:text-gray-600 cursor-pointer shrink-0 ml-4">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* LEFT: Form */}
          <div className="w-full lg:w-[55%]">
            {/* Delivery Method Tabs */}
            <div className="flex gap-0 mb-3">
              {DELIVERY_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedDelivery(opt.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-3 text-[13px] font-semibold nav-lato border transition cursor-pointer ${
                    selectedDelivery === opt.id
                      ? "bg-[#cc0000] text-white border-[#cc0000]"
                      : "bg-white text-[#333333] border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <Icon icon={opt.icon} className="w-4 h-4 shrink-0" />
                  <span className="hidden sm:inline">{opt.label}</span>
                  <span className="sm:hidden text-[11px]">{opt.label.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            {/* Delivery description */}
            <div className="text-[13px] text-[#555555] nav-lato mb-4">
              <p>{delivery.description}</p>
              <p className="mt-0.5">
                {delivery.id === "sameday" ? (
                  <>Cost: $15 Delivery Fee on orders under $120, <span className="font-semibold">FREE Delivery on orders over $120</span></>
                ) : (
                  <span className="font-semibold text-[#003465]">{delivery.cost}</span>
                )}
              </p>
            </div>

            {/* Free shipping progress */}
            <div className="border-dashed border-2 border-[#777777]/20 p-4 mb-6 flex flex-col gap-3">
              <div className="text-[13px] text-[#777777] nav-lato">
                Add <span className="font-semibold text-[#003465]">${freeShippingRemaining.toFixed(2)}</span> to cart and get free shipping!
              </div>
              <div className="w-full h-3 bg-gray-100 overflow-hidden relative">
                <div
                  className="h-full bg-[#003465] transition-all duration-500 progress-striped absolute left-0 top-0"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Billing Details */}
            <form onSubmit={handleSubmit} noValidate>
              <h2 className="text-[15px] font-bold uppercase tracking-wider text-[#242424] nav-poppins mb-4">Billing Details</h2>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[13px] text-[#555555] nav-lato">First name <span className="text-red-500">*</span></label>
                    <input
                      name="firstName" value={form.firstName} onChange={handleChange}
                      className={`border px-3 py-2 text-sm nav-lato outline-none focus:border-[#003465] transition ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[13px] text-[#555555] nav-lato">Last name <span className="text-red-500">*</span></label>
                    <input
                      name="lastName" value={form.lastName} onChange={handleChange}
                      className={`border px-3 py-2 text-sm nav-lato outline-none focus:border-[#003465] transition ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[13px] text-[#555555] nav-lato">Email address <span className="text-red-500">*</span></label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      className={`border px-3 py-2 text-sm nav-lato outline-none focus:border-[#003465] transition ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[13px] text-[#555555] nav-lato">Phone <span className="text-red-500">*</span></label>
                    <input
                      name="phone" type="tel" value={form.phone} onChange={handleChange}
                      className={`border px-3 py-2 text-sm nav-lato outline-none focus:border-[#003465] transition ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[13px] text-[#555555] nav-lato">Street address <span className="text-red-500">*</span></label>
                  <input
                    name="street" value={form.street} onChange={handleChange}
                    placeholder="House number and street name"
                    className={`border px-3 py-2 text-sm nav-lato outline-none focus:border-[#003465] transition placeholder:text-gray-400 ${errors.street ? "border-red-500" : "border-gray-300"}`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[13px] text-[#555555] nav-lato">Town / City <span className="text-red-500">*</span></label>
                    <input
                      name="city" value={form.city} onChange={handleChange}
                      className={`border px-3 py-2 text-sm nav-lato outline-none focus:border-[#003465] transition ${errors.city ? "border-red-500" : "border-gray-300"}`}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[13px] text-[#555555] nav-lato">Postal Code <span className="text-red-500">*</span></label>
                    <input
                      name="postalCode" value={form.postalCode} onChange={handleChange}
                      className={`border px-3 py-2 text-sm nav-lato outline-none focus:border-[#003465] transition ${errors.postalCode ? "border-red-500" : "border-gray-300"}`}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[13px] text-[#555555] nav-lato">State / County <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select
                      name="province" value={form.province} onChange={handleChange}
                      className={`w-full border px-3 py-2 text-sm nav-lato outline-none focus:border-[#003465] transition appearance-none pr-8 bg-white ${errors.province ? "border-red-500" : "border-gray-300"}`}
                    >
                      {PROVINCES.map((p) => <option key={p}>{p}</option>)}
                    </select>
                    <Icon icon="mdi:chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <h2 className="text-[15px] font-bold uppercase tracking-wider text-[#242424] nav-poppins mt-8 mb-4">Additional Information</h2>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] text-[#555555] nav-lato">Order notes <span className="text-gray-400 font-normal">(optional)</span></label>
                <textarea
                  name="notes" value={form.notes} onChange={handleChange}
                  rows={5}
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  className="border border-gray-300 px-3 py-2 text-sm nav-lato outline-none focus:border-[#003465] transition placeholder:text-gray-400 resize-y"
                />
              </div>

              {/* Mobile: Place Order button */}
              <div className="lg:hidden mt-6">
                <button
                  type="submit"
                  className="w-full bg-[#003465] text-white font-bold uppercase text-[13px] py-4 hover:bg-[#012444] transition nav-lato cursor-pointer tracking-widest"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="w-full lg:w-[45%]">
            <h2 className="text-[16px] font-bold uppercase tracking-widest text-[#242424] nav-poppins mb-5 text-center">Your Order</h2>

            <div className="border border-gray-200 bg-[#f9f9f9]">
              {/* Express warning */}
              {expressWarning && (
                <div className="bg-[#fdf6e3] border-b border-[#f0e0b0] px-4 py-3 text-[13px] text-[#7a5a00] nav-lato">
                  Express Delivery requires a minimum product value of $120 (after discounts). Your current product total is ${subtotal.toFixed(2)}.{" "}
                  <Link to="/shop" className="text-[#003465] underline font-medium">Shop More</Link>
                </div>
              )}

              {/* Header row */}
              <div className="flex justify-between px-5 py-3 border-b border-gray-200">
                <span className="text-[13px] font-bold uppercase text-[#555555] nav-lato tracking-wider">Product</span>
                <span className="text-[13px] font-bold uppercase text-[#555555] nav-lato tracking-wider">Subtotal</span>
              </div>

              {/* Items */}
              <div className="px-5">
                {cartItems.map((item) => (
                  <div key={item.key} className="flex justify-between py-3 border-b border-gray-100 text-[13px] nav-lato">
                    <span className="text-[#777777]">
                      {item.product.name}{item.quantity ? ` – ${item.quantity}` : ""} × {item.qty}
                    </span>
                    <span className="text-[#555555]">${(item.product.price * item.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Subtotal */}
              <div className="flex justify-between px-5 py-3 border-b border-gray-200">
                <span className="text-[14px] font-semibold text-[#333333] nav-lato">Subtotal</span>
                <span className="text-[14px] font-semibold text-[#003465] nav-lato">${(subtotal || 0).toFixed(2)}</span>
              </div>

              {/* Delivery fee */}
              <div className="flex justify-between px-5 py-3 border-b border-gray-200">
                <span className="text-[14px] font-semibold text-[#333333] nav-lato">{delivery.label}</span>
                <span className="text-[14px] font-semibold text-[#003465] nav-lato">
                  {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
                </span>
              </div>

              {/* Total */}
              <div className="flex justify-between px-5 py-4 border-b border-gray-200">
                <span className="text-[15px] font-bold text-[#333333] nav-lato">Total</span>
                <span className="text-[20px] font-bold text-[#003465] nav-lato">${total.toFixed(2)}</span>
              </div>

              {/* e-Transfer info */}
              <div className="px-5 py-4 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[13px] font-semibold text-[#555555] nav-lato">e-Transfer</span>
                  <div className="w-5 h-5 rounded-full bg-[#333333] flex items-center justify-center shrink-0">
                    <Icon icon="mdi:information-outline" className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[13px] text-[#003465] nav-lato font-medium">deliverycanadawide@gmail.com</span>
                </div>
                <div className="bg-white border border-gray-200 rounded p-3 text-[12px] text-[#555555] nav-lato leading-relaxed">
                  <span className="text-yellow-500 mr-1">★</span>
                  <strong>Important:</strong> Please DO NOT include any keywords or sender name references such as "Shrooms", "Magic Mushrooms", or any related "Psychedelic" terms anywhere in your e-transfer, including the message or notes field. Both your bank and our bank will automatically reject these payments. Keep your message to your Order # only.
                </div>
              </div>

              {/* Privacy note */}
              <div className="px-5 py-4 text-[12px] text-[#777777] nav-lato leading-relaxed">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{" "}
                <Link to="/privacy-policy" className="text-[#003465] underline hover:text-[#dfb242] transition">privacy policy</Link>.
              </div>

              {/* Desktop Place Order */}
              <div className="px-0">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#003465] text-white font-bold uppercase text-[13px] py-4 hover:bg-[#012444] transition nav-lato cursor-pointer tracking-widest"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
