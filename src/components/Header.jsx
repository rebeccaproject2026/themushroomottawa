import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import logoSrc from "../assets/mainlogo.png";
import CartDrawer from "./CartDrawer";
import LoginDrawer from "./LoginDrawer";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { totalItems, cartOpen, setCartOpen, wishlist } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isSticky && <div className="h-18"></div>}
      <header className="header-font">
        <div className={`bg-[#92d5ef] text-[#333333] transition-all duration-500 ease-in-out overflow-hidden ${isSticky ? "max-h-0 opacity-0" : "max-h-40 opacity-100"}`}>
          <div className="mx-auto max-w-375 px-3.75 py-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-center sm:text-left nav-poppins text-[#003465] text-base font-semibold leading-[1.4]">
              Ottawa Local Delivery &amp; Canada Wide Shipping
            </p>
            <nav className="nav-lato flex flex-wrap gap-0.5 justify-center items-center text-xs uppercase font-normal">
              <a href="#" className="transition hover:text-[#7A7A7A]">
                About Us
              </a>
              <span className="border-l border-[#777777] h-4 mx-2 opacity-50"></span>
              <a href="#" className="transition hover:text-[#7A7A7A]">
                FAQs
              </a>
              <span className="border-l border-[#777777] h-4 mx-2 opacity-50"></span>
              <a href="#" className="transition hover:text-[#7A7A7A]">
                News
              </a>
              <span className="border-l border-[#777777] h-4 mx-2 opacity-50"></span>
              <a href="#" className="transition hover:text-[#7A7A7A]">
                Contact Us
              </a>
            </nav>
          </div>
        </div>

        <div className={`bg-[#003465] text-white nav-lato transition-all duration-500 ease-in-out ${isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-lg" : ""}`}>
          <div className={`mx-auto max-w-375 px-3.75 flex items-center justify-between ${isSticky ? "shadow-lg py-3" : "py-4"}`}>
            <nav className="flex flex-wrap items-center justify-start gap-5 text-[13px] font-semibold uppercase flex-1">
              <a
                href="#"
                className="transition duration-300 hover:text-slate-400"
              >
                Magic Mushrooms
              </a>
              <a
                href="#"
                className="transition duration-300 hover:text-slate-400"
              >
                Microdosing
              </a>
              <a
                href="#"
                className="transition duration-300 hover:text-slate-400"
              >
                Mushroom Edibles
              </a>
            </nav>

            <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="cursor-pointer focus:outline-none"
                aria-label="Go to home page"
              >
                <img
                  src={logoSrc}
                  alt="The Mushroom"
                  className="h-9.5 w-auto object-contain"
                />
              </button>
            </div>

            <div className="flex gap-4.5 flex-wrap items-center justify-end text-[13px] font-semibold uppercase flex-1">
              
                <a href="#" onClick={(e) => { e.preventDefault(); setLoginOpen(true); }} className="transition duration-300 hover:text-slate-400 pr-1.5">
                  Login / Register
                </a>
              
              
              <button
                type="button"
                className="relative inline-flex cursor-pointer items-center justify-center rounded-full  text-white transition"
                aria-label="Search"
              >
                <Icon icon="tdesign:search" className="h-5.5 w-5.5" />
              </button>

              <button
                type="button"
                onClick={() => navigate("/wishlist")}
                className="relative inline-flex cursor-pointer h-10  items-center justify-center rounded-full text-white transition"
                aria-label="Favorites"
              >
                <Icon icon="line-md:heart" className="h-6 w-6 " />
                <span className="absolute -right-2 top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#92d5ef] text-[10px] font-bold text-[#0f4d7a]">
                  {wishlist.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setCartOpen(true)}
                className="relative inline-flex cursor-pointer h-10  items-center justify-center rounded-full text-white transition"
                aria-label="Cart"
              >
                <Icon icon="la:shopping-bag" className="h-6 w-6" />
                <span className="absolute -right-1.5 top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#92d5ef] text-[10px] font-bold text-[#0f4d7a]">
                  {totalItems}
                </span>
              </button>
              
            </div>
          </div>
        </div>
      </header>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <LoginDrawer isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
