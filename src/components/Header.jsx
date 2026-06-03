import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { Icon } from "@iconify/react";
import logoSrc from "../assets/mainlogo.png";
import CartDrawer from "./CartDrawer";
import LoginDrawer from "./LoginDrawer";
import SearchModal from "./SearchModal";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, cartOpen, setCartOpen, wishlist } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const mobileNavItems = [
    { label: "ALL", href: "/" },
    { label: "MAGIC MUSHROOMS", href: "#" },
    { label: "MUSHROOM EDIBLES", href: "#" },
    { label: "MICRODOSING", href: "#" },
    { label: "ABOUT US", href: "/about" },
    { label: "FAQS", href: "/faqs" },
    { label: "NEWS", href: "#" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      {isSticky && <div className="h-18 lg:block hidden"></div>}
      {/* Mobile sticky spacer */}
      {isSticky && <div className="h-14 block lg:hidden"></div>}

      <header className="header-font">
        {/* Top info bar — hidden on mobile */}
        <div className={`bg-[#92d5ef] text-[#333333] transition-all duration-500 ease-in-out overflow-hidden hidden lg:block ${isSticky ? "max-h-0 opacity-0" : "max-h-40 opacity-100"}`}>
          <div className="mx-auto max-w-375 px-3.75 py-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-center sm:text-left nav-poppins text-[#003465] text-base font-semibold leading-[1.4]">
              Ottawa Local Delivery &amp; Canada Wide Shipping
            </p>
            <nav className="nav-lato flex flex-wrap gap-0.5 justify-center items-center text-xs uppercase font-normal">
              <a href="/about" className="transition hover:text-[#7A7A7A]">About Us</a>
              <span className="border-l border-[#777777] h-4 mx-2 opacity-50"></span>
              <a href="/faqs" className="transition hover:text-[#7A7A7A]">FAQs</a>
              <span className="border-l border-[#777777] h-4 mx-2 opacity-50"></span>
              <a href="#" className="transition hover:text-[#7A7A7A]">News</a>
              <span className="border-l border-[#777777] h-4 mx-2 opacity-50"></span>
              <a href="/contact" className="transition hover:text-[#7A7A7A]">Contact Us</a>
            </nav>
          </div>
        </div>

        {/* Mobile top info bar */}
        <div className={`bg-[#92d5ef] text-[#003465] text-center text-xs font-semibold nav-poppins py-1.5 px-4 lg:hidden transition-all duration-500 ${isSticky ? "hidden" : "block"}`}>
          Ottawa Local Delivery &amp; Canada Wide Shipping
        </div>

        {/* Main nav bar */}
        <div
          data-sticky-nav
          className={`bg-[#003465] text-white nav-lato transition-all duration-500 ease-in-out ${
            isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-lg" : ""
          }`}
        >
          {/* ── DESKTOP (lg+) ── */}
          <div className={`hidden lg:flex mx-auto max-w-375 px-3.75 items-center justify-between ${isSticky ? "py-3" : "py-4"}`}>
            <nav className="flex flex-wrap items-center justify-start gap-5 text-[13px] font-semibold uppercase flex-1">
              <a href="#" className="transition duration-300 hover:text-slate-400">Magic Mushrooms</a>
              <a href="#" className="transition duration-300 hover:text-slate-400">Microdosing</a>
              <a href="#" className="transition duration-300 hover:text-slate-400">Mushroom Edibles</a>
            </nav>

            <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
              <button type="button" onClick={() => navigate("/")} className="cursor-pointer focus:outline-none" aria-label="Go to home page">
                <img src={logoSrc} alt="The Mushroom" className="h-9.5 w-auto object-contain" />
              </button>
            </div>

            <div className="flex gap-4.5 flex-wrap items-center justify-end text-[13px] font-semibold uppercase flex-1">
              <a href="#" onClick={(e) => { e.preventDefault(); setLoginOpen(true); }} className="transition duration-300 hover:text-slate-400 pr-1.5">
                Login / Register
              </a>
              <button type="button" onClick={() => setSearchOpen((o) => !o)} className="relative inline-flex cursor-pointer items-center justify-center rounded-full text-white transition" aria-label="Search">
                {searchOpen ? <X className="h-5.5 w-5.5" /> : <Icon icon="tdesign:search" className="h-5.5 w-5.5" />}
              </button>
              <button type="button" onClick={() => navigate("/wishlist")} className="relative inline-flex cursor-pointer h-10 items-center justify-center rounded-full text-white transition" aria-label="Favorites">
                <Icon icon="line-md:heart" className="h-6 w-6" />
                <span className="absolute -right-2 top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#92d5ef] text-[10px] font-bold text-[#0f4d7a]">
                  {wishlist.length}
                </span>
              </button>
              <button type="button" onClick={() => setCartOpen(true)} className="relative inline-flex cursor-pointer h-10 items-center justify-center rounded-full text-white transition" aria-label="Cart">
                <Icon icon="la:shopping-bag" className="h-6 w-6" />
                <span className="absolute -right-1.5 top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#92d5ef] text-[10px] font-bold text-[#0f4d7a]">
                  {totalItems}
                </span>
              </button>
            </div>
          </div>

          {/* ── MOBILE (< lg) ── */}
          <div className={`flex lg:hidden items-center justify-between px-4 ${isSticky ? "py-2.5" : "py-3"}`}>
            {/* Hamburger */}
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="text-white cursor-pointer" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo center */}
            <button type="button" onClick={() => navigate("/")} className="cursor-pointer focus:outline-none absolute left-1/2 -translate-x-1/2" aria-label="Home">
              <img src={logoSrc} alt="The Mushroom" className="h-8 w-auto object-contain" />
            </button>

            {/* Search right */}
            <button type="button" onClick={() => setSearchOpen((o) => !o)} className="text-white cursor-pointer" aria-label="Search">
              {searchOpen ? <X className="h-5.5 w-5.5" /> : <Icon icon="tdesign:search" className="h-5.5 w-5.5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-60 bg-black/40 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      {/* Drawer panel */}
      <div
        className={`fixed top-0 left-0 h-full w-85 max-w-[85vw] bg-white z-70 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <div className="flex items-center justify-end px-5 py-4 border-b border-gray-100">
          <button onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 cursor-pointer nav-lato">
            <X className="w-4 h-4" /> Close
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col flex-1 overflow-y-auto">
          {mobileNavItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 text-sm font-semibold text-gray-800 nav-lato uppercase tracking-wide border-b border-gray-100 hover:bg-gray-50 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* ── MOBILE BOTTOM TAB BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex items-center justify-around py-2 lg:hidden">
        <button onClick={() => navigate("/")} className="flex flex-col items-center gap-0.5 text-gray-600 cursor-pointer">
          <Icon icon="mdi:store-outline" className="w-6 h-6" />
          <span className="text-[10px] nav-lato font-medium">Shop</span>
        </button>
        <button onClick={() => navigate("/wishlist")} className="flex flex-col items-center gap-0.5 text-gray-600 cursor-pointer relative">
          <Icon icon="line-md:heart" className="w-6 h-6" />
          <span className="absolute -top-0.5 right-3 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#003465] text-[9px] font-bold text-white">
            {wishlist.length}
          </span>
          <span className="text-[10px] nav-lato font-medium">Wishlist</span>
        </button>
        <button onClick={() => setLoginOpen(true)} className="flex flex-col items-center gap-0.5 text-gray-600 cursor-pointer">
          <Icon icon="mdi:account-outline" className="w-6 h-6" />
          <span className="text-[10px] nav-lato font-medium">My account</span>
        </button>
        <button onClick={() => setCartOpen(true)} className="flex flex-col items-center gap-0.5 text-gray-600 cursor-pointer relative">
          <Icon icon="la:shopping-bag" className="w-6 h-6" />
          <span className="absolute -top-0.5 right-3 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#003465] text-[9px] font-bold text-white">
            {totalItems}
          </span>
          <span className="text-[10px] nav-lato font-medium">Cart</span>
        </button>
      </div>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <LoginDrawer isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} isSticky={isSticky} />
    </>
  );
}
