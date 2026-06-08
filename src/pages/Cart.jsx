import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Icon } from "@iconify/react";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SEO from "../components/SEO";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
  
  const freeShippingThreshold = 150;
  const freeShippingRemaining = Math.max(freeShippingThreshold - (subtotal || 0), 0);
  const progressPercent = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  const shippingCost = 15.00;
  const total = subtotal + shippingCost;

  return (
    <>
      <SEO title="Shopping Cart" canonical="/cart" noindex={true} />
      <Header />
      <main className="bg-white min-h-screen py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Icon icon="mdi:cart-remove" className="w-32 h-32 text-gray-200 mb-8" />
              <h2 className="text-3xl md:text-[34px] font-bold nav-poppins text-[#242424] mb-6">
                Your cart is currently empty.
              </h2>
              <div className="text-[#777777] nav-lato text-sm mb-10 space-y-1">
                <p>Before proceed to checkout you must add some products to your shopping cart.</p>
                <p>You will find a lot of interesting products on our "Shop" page.</p>
              </div>
              <Link to="/shop" className="bg-[#003465] text-white px-8 py-4 font-bold uppercase text-[13px] hover:bg-[#012444] transition nav-lato">
                Return to Shop
              </Link>
            </div>
          ) : (
            <>
              {/* Free Shipping Notification */}
              <div className="border-dashed border-2 border-[#777777]/20 p-5 mb-10 flex flex-col gap-4">
                <div className="text-[#777777] nav-lato">
                  Add <span className="font-semibold text-[#003465]">${freeShippingRemaining.toFixed(2)}</span> to cart and get free shipping!
                </div>
                <div className="w-full h-3.5 bg-gray-100 overflow-hidden relative">
                  <div
                    className="h-full bg-[#003465] transition-all duration-500 progress-striped absolute left-0 top-0"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-10">
                {/* Main Cart Items */}
                <div className="w-full lg:w-2/3">

                  {/* Desktop table */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse nav-lato">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-4 px-2 uppercase text-sm text-[#242424] font-semibold text-center w-12"></th>
                          <th className="py-4 px-2 uppercase text-sm text-[#242424] font-semibold w-24"></th>
                          <th className="py-4 px-2 uppercase text-sm text-[#242424] font-semibold">Product</th>
                          <th className="py-4 px-2 uppercase text-sm text-[#242424] font-semibold text-center w-32">Price</th>
                          <th className="py-4 px-2 uppercase text-sm text-[#242424] font-semibold text-center w-40">Quantity</th>
                          <th className="py-4 px-2 uppercase text-sm text-[#242424] font-semibold text-right w-32">Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.key} className="border-b border-gray-200">
                            <td className="py-6 px-2 text-center">
                              <button onClick={() => removeFromCart(item.key)} className="text-gray-400 hover:text-red-500 transition cursor-pointer">
                                <X className="w-5 h-5" />
                              </button>
                            </td>
                            <td className="py-6 px-2">
                              <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-contain" />
                            </td>
                            <td className="py-6 px-2">
                              <Link to={`/product/${item.product.id}`} className="text-[#333333] hover:text-[#003465] font-medium transition">
                                {item.product.name}
                              </Link>
                              {item.quantity && <span className="text-sm text-gray-500"> - {item.quantity}</span>}
                            </td>
                            <td className="py-6 px-2 text-center text-[#777777]">${item.product.price.toFixed(2)}</td>
                            <td className="py-6 px-2">
                              <div className="flex items-center justify-center border border-gray-200 w-fit mx-auto">
                                <button onClick={() => updateQuantity(item.key, item.qty - 1)} className="px-3 py-2 text-gray-500 hover:bg-gray-50 transition cursor-pointer">-</button>
                                <span className="px-4 py-2 text-[#333333] border-x border-gray-200 text-sm">{item.qty}</span>
                                <button onClick={() => updateQuantity(item.key, item.qty + 1)} className="px-3 py-2 text-gray-500 hover:bg-gray-50 transition cursor-pointer">+</button>
                              </div>
                            </td>
                            <td className="py-6 px-2 text-right font-semibold text-[#003465]">${(item.product.price * item.qty).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="flex justify-end mt-6">
                      <button className="bg-gray-50 text-[#333333] font-semibold text-[13px] px-6 py-3 uppercase hover:bg-gray-100 transition border border-gray-100 nav-lato cursor-pointer">
                        Update Cart
                      </button>
                    </div>
                  </div>

                  {/* Mobile cards */}
                  <div className="md:hidden flex flex-col gap-0 border border-gray-200">
                    {cartItems.map((item) => (
                      <div key={item.key} className="border-b border-gray-200 last:border-b-0">
                        {/* Item header: image + name + remove */}
                        <div className="flex items-start gap-3 p-4 pb-0">
                          <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-contain shrink-0" />
                          <div className="flex-1 min-w-0 pt-1">
                            <div className="flex items-start justify-between gap-2">
                              <Link to={`/product/${item.product.id}`} className="text-[14px] font-semibold text-[#242424] nav-poppins hover:text-[#003465] transition leading-tight">
                                {item.product.name}{item.quantity ? ` – ${item.quantity}` : ""}
                              </Link>
                              <button onClick={() => removeFromCart(item.key)} className="text-gray-400 hover:text-red-500 transition cursor-pointer shrink-0 mt-0.5">
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* Price row */}
                        <div className="flex justify-between items-center px-4 py-3 border-b border-dashed border-gray-100 nav-lato text-[14px]">
                          <span className="text-[#777777]">Price</span>
                          <span className="text-[#555555]">${item.product.price.toFixed(2)}</span>
                        </div>
                        {/* Quantity row */}
                        <div className="flex justify-between items-center px-4 py-3 border-b border-dashed border-gray-100 nav-lato text-[14px]">
                          <span className="text-[#777777]">Quantity</span>
                          <div className="flex items-center border border-gray-200">
                            <button onClick={() => updateQuantity(item.key, item.qty - 1)} className="px-3 py-1.5 text-gray-500 hover:bg-gray-50 transition cursor-pointer text-sm">-</button>
                            <span className="px-3 py-1.5 text-[#333333] border-x border-gray-200 text-sm">{item.qty}</span>
                            <button onClick={() => updateQuantity(item.key, item.qty + 1)} className="px-3 py-1.5 text-gray-500 hover:bg-gray-50 transition cursor-pointer text-sm">+</button>
                          </div>
                        </div>
                        {/* Subtotal row */}
                        <div className="flex justify-between items-center px-4 py-3 nav-lato text-[14px]">
                          <span className="text-[#777777]">Subtotal</span>
                          <span className="font-semibold text-[#003465]">${(item.product.price * item.qty).toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                    {/* Update cart button */}
                    <div className="border-t border-gray-200">
                      <button className="w-full bg-gray-50 text-[#777777] font-semibold text-[13px] py-4 uppercase hover:bg-gray-100 transition nav-lato cursor-pointer tracking-widest">
                        Update Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cart Totals Sidebar */}
                <div className="w-full lg:w-1/3">
                  <div className="border border-gray-200 p-8">
                    <h2 className="text-xl font-bold nav-poppins text-[#242424] mb-6">CART TOTALS</h2>
                    
                    <div className="flex justify-between border-b border-gray-200 py-4 nav-lato text-[15px]">
                      <span className="font-semibold text-[#333333]">Subtotal</span>
                      <span className="text-[#777777]">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between border-b border-gray-200 py-4 nav-lato text-[15px]">
                      <span className="font-semibold text-[#333333]">Same Day Delivery</span>
                      <span className="text-[#003465] font-semibold">${shippingCost.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between py-6 nav-lato text-[15px]">
                      <span className="font-semibold text-[#333333]">Total</span>
                      <span className="text-xl font-bold text-[#003465]">${total.toFixed(2)}</span>
                    </div>
                    
                    <button className="w-full bg-[#003465] text-white font-bold uppercase text-[13px] py-4 hover:bg-[#012444] transition nav-lato mt-4">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
