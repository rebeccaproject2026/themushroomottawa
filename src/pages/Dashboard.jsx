import { useState } from "react";
import { Eye, EyeOff, ClipboardList, MapPin, User, Heart, LogOut, SquarePen, X, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useCart } from "../context/CartContext";

// ─── Wishlist ────────────────────────────────────────────────────────────────

function WishlistItemCard({ product, selected, onToggleSelect, onRemove }) {
  const navigate = useNavigate();
  const [isImageHovered, setIsImageHovered] = useState(false);
  return (
    <div className="relative border border-gray-200 bg-white flex flex-col">
      <div className="flex items-center justify-between px-3 pt-3 pb-1">
        <button onClick={() => onRemove(product.id)}
          className="flex items-center gap-1 text-[13px] text-[#555555] hover:text-[#003465] transition cursor-pointer nav-lato">
          <X className="w-3.5 h-3.5" /> Remove
        </button>
        <input type="checkbox" checked={selected} onChange={() => onToggleSelect(product.id)}
          className="w-3.5 h-3.5 accent-[#003465] cursor-pointer" />
      </div>
      <div
        className="relative w-full h-52 sm:h-64 flex items-center justify-center px-4 py-2 cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img src={product.image} alt={product.name}
          className={`w-full h-full object-contain transition-all duration-700 absolute top-0 left-0 ${isImageHovered && product.hoverImage ? "opacity-0 scale-95" : "opacity-100 scale-100"}`} />
        {product.hoverImage && (
          <img src={product.hoverImage} alt={product.name}
            className={`w-full h-full object-contain transition-all duration-700 absolute top-0 left-0 ${isImageHovered ? "opacity-100 scale-110" : "opacity-0 scale-95"}`} />
        )}
      </div>
      <div className="px-3 pb-4 flex flex-col gap-0.5">
        <h3 className="text-[13px] font-semibold text-[#1a1a1a] nav-poppins cursor-pointer hover:text-[#003465] transition-colors"
          onClick={() => navigate(`/product/${product.id}`)}>
          {product.name}
        </h3>
        <p className="text-[12px] text-[#A5A5A5] nav-lato">{product.category}</p>
        <p className="text-[12px] font-semibold text-[#003465] nav-lato mt-0.5">
          ${product.price.toFixed(2)}{product.maxPrice ? ` – ${product.maxPrice.toFixed(2)}` : ""}
        </p>
      </div>
    </div>
  );
}

function WishlistTab({ wishlist, toggleWishlist }) {
  const [selected, setSelected] = useState([]);
  const allSelected = wishlist.length > 0 && selected.length === wishlist.length;

  const toggleSelect = (id) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);

  const removeSelected = () => {
    selected.forEach((id) => {
      const p = wishlist.find((w) => w.id === id);
      if (p) toggleWishlist(p);
    });
    setSelected([]);
  };

  const handleRemove = (id) => {
    const p = wishlist.find((w) => w.id === id);
    if (p) toggleWishlist(p);
    setSelected((prev) => prev.filter((s) => s !== id));
  };

  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <Heart className="w-20 h-20 text-gray-200" strokeWidth={1.2} />
        <h3 className="text-[22px] font-semibold text-[#1a1a1a] nav-poppins">This wishlist is empty.</h3>
        <p className="text-[13px] text-[#777777] nav-lato text-center leading-relaxed">
          You don't have any products in the wishlist yet.<br />
          You will find a lot of interesting products on our "Shop" page.
        </p>
        <Link to="/shop"
          className="mt-2 bg-[#003465] text-white font-semibold uppercase text-[13px] tracking-widest px-8 py-3 hover:bg-[#012444] transition nav-lato">
          RETURN TO SHOP
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="border-b-2 border-gray-200 pb-3">
        <h2 className="text-[15px] font-semibold uppercase tracking-wider text-[#242424] nav-poppins">
          Your Products Wishlist
        </h2>
      </div>
      <div className="flex items-center gap-6 bg-[#f5f5f5] px-4 py-2.5 nav-lato text-[13px] text-[#444444]">
        <button onClick={removeSelected} disabled={selected.length === 0}
          className="flex items-center gap-1 hover:text-[#003465] transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed font-medium">
          <X className="w-3.5 h-3.5" /> Remove
        </button>
        <button onClick={() => allSelected ? setSelected([]) : setSelected(wishlist.map((p) => p.id))}
          className="flex items-center gap-1 hover:text-[#003465] transition cursor-pointer font-medium">
          <Check className="w-3.5 h-3.5" />
          {allSelected ? "Deselect all" : "Select all"}
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {wishlist.map((product) => (
          <WishlistItemCard key={product.id} product={product}
            selected={selected.includes(product.id)}
            onToggleSelect={toggleSelect} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}

// ─── Account Details ─────────────────────────────────────────────────────────

function AccountDetailsTab() {
  const [form, setForm] = useState({ firstName: "", lastName: "", displayName: "", email: "" });
  const [passwords, setPasswords] = useState({ current: "", newPass: "", confirm: "" });
  const [showPw, setShowPw] = useState({ current: false, newPass: false, confirm: false });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handlePwChange = (e) => setPasswords((p) => ({ ...p, [e.target.name]: e.target.value }));
  const toggleShow = (field) => setShowPw((s) => ({ ...s, [field]: !s[field] }));

  return (
    <form className="flex flex-col gap-5 w-full" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-[#242424] nav-lato">First name <span className="text-red-500">*</span></label>
          <input name="firstName" value={form.firstName} onChange={handleChange}
            className="border border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-[#242424] nav-lato">Last name <span className="text-red-500">*</span></label>
          <input name="lastName" value={form.lastName} onChange={handleChange}
            className="border border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-[#242424] nav-lato">Display name <span className="text-red-500">*</span></label>
        <input name="displayName" value={form.displayName} onChange={handleChange}
          className="border border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition" />
        <p className="text-[13px] text-[#777777] nav-lato italic">
          This will be how your name will be displayed in the account section and in reviews
        </p>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-[#242424] nav-lato">Email address <span className="text-red-500">*</span></label>
        <input name="email" type="email" value={form.email} onChange={handleChange}
          className="border border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition" />
      </div>
      <div className="relative border border-gray-300 p-6 flex flex-col gap-5 mt-2">
        <div className="absolute -top-4 left-4 bg-white px-2">
          <h4 className="text-[17px] font-semibold text-[#1a1a1a] nav-poppins">Password change</h4>
        </div>
        {[
          { key: "current", label: "Current password (leave blank to leave unchanged)" },
          { key: "newPass", label: "New password (leave blank to leave unchanged)" },
          { key: "confirm", label: "Confirm new password" },
        ].map(({ key, label }) => (
          <div key={key} className="flex flex-col gap-1.5">
            <label className="text-sm text-[#242424] nav-lato">{label}</label>
            <div className="relative">
              <input name={key} type={showPw[key] ? "text" : "password"} value={passwords[key]} onChange={handlePwChange}
                className="w-full border border-gray-300 px-3 py-3 pr-10 text-sm nav-lato outline-none focus:border-[#003465] transition bg-white" />
              <button type="button" onClick={() => toggleShow(key)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition cursor-pointer">
                {showPw[key] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1">
        <button type="submit"
          className="bg-[#003465] text-white font-semibold uppercase text-[13px] tracking-widest px-6 py-3 hover:bg-[#012444] transition nav-lato cursor-pointer">
          SAVE CHANGES
        </button>
      </div>
    </form>
  );
}

// ─── Address ─────────────────────────────────────────────────────────────────

const canadianProvinces = [
  "Alberta", "British Columbia", "Manitoba", "New Brunswick",
  "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia",
  "Nunavut", "Ontario", "Prince Edward Island", "Quebec",
  "Saskatchewan", "Yukon",
];

function AddressTab() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", street: "", city: "", postal: "", state: "" });
  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSave = (e) => { e.preventDefault(); setShowForm(false); };

  return (
    <div>
      {!showForm ? (
        <>
          <p className="text-[14px] text-[#777777] nav-lato mb-6">
            The following addresses will be used on the checkout page by default.
          </p>
          <h3 className="text-[20px] font-semibold text-[#1a1a1a] nav-poppins mb-4">Billing address</h3>
          <button onClick={() => setShowForm(true)}
            className="flex items-center gap-2 text-[#5fc3e3] hover:text-[#003465] transition nav-lato text-[14px] font-medium cursor-pointer mb-4">
            <SquarePen className="w-4 h-4" /> Add Billing address
          </button>
          <p className="text-[14px] text-[#777777] nav-lato italic">
            You have not set up this type of address yet.
          </p>
        </>
      ) : (
        <>
          <h3 className="text-[20px] font-semibold text-[#1a1a1a] nav-poppins mb-6">Billing address</h3>
          <form onSubmit={handleSave} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#242424] nav-lato">First name <span className="text-red-500">*</span></label>
                <input name="firstName" value={form.firstName} onChange={handleChange} required
                  className="border border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#242424] nav-lato">Last name <span className="text-red-500">*</span></label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required
                  className="border border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#242424] nav-lato">Email address <span className="text-red-500">*</span></label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required
                  className="border border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#242424] nav-lato">Phone <span className="text-red-500">*</span></label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} required
                  className="border border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-[#242424] nav-lato">Street address <span className="text-red-500">*</span></label>
              <input name="street" value={form.street} onChange={handleChange} required
                placeholder="House number and street name"
                className="border border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition placeholder:text-gray-400" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#242424] nav-lato">Town / City <span className="text-red-500">*</span></label>
                <input name="city" value={form.city} onChange={handleChange} required
                  className="border border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#242424] nav-lato">Postal Code <span className="text-red-500">*</span></label>
                <input name="postal" value={form.postal} onChange={handleChange} required
                  className="border border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-[#242424] nav-lato">State / County <span className="text-red-500">*</span></label>
              <select name="state" value={form.state} onChange={handleChange} required
                className="border border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition bg-white appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", paddingRight: "36px" }}>
                <option value="">Select an option...</option>
                {canadianProvinces.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-4 mt-1">
              <button type="submit"
                className="bg-[#003465] text-white font-semibold uppercase text-[13px] tracking-widest px-6 py-3 hover:bg-[#012444] transition nav-lato cursor-pointer">
                SAVE ADDRESS
              </button>
              <button type="button" onClick={() => setShowForm(false)}
                className="text-sm text-[#777777] hover:text-[#003465] nav-lato transition cursor-pointer">
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

// ─── Dashboard Page ───────────────────────────────────────────────────────────

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { wishlist, toggleWishlist } = useCart();
  const navigate = useNavigate();

  const user = { name: "username" };

  const dashboardTiles = [
    { id: "orders",  label: "Orders",         icon: ClipboardList },
    { id: "address", label: "Address",         icon: MapPin        },
    { id: "account", label: "Account details", icon: User          },
    { id: "wishlist",label: "Wishlist",         icon: Heart         },
    { id: "logout",  label: "Logout",           icon: LogOut        },
  ];

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard"       },
    { id: "orders",    label: "Orders"          },
    { id: "address",   label: "Address"         },
    { id: "account",   label: "Account details" },
    { id: "wishlist",  label: "Wishlist"        },
    { id: "logout",    label: "Logout"          },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-0 border border-gray-200">
          <aside className="w-full md:w-72 shrink-0 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="px-2 py-3 border-b border-gray-200">
              <h1 className="text-lg font-semibold text-center uppercase tracking-widest text-[#242424] nav-poppins">My Account</h1>
            </div>
            <div className="flex flex-col p-2">
              {sidebarItems.map((item) => (
                <button key={item.id}
                  onClick={() => {
                    if (item.id === "logout") { navigate("/login"); return; }
                    setActiveTab(item.id);
                  }}
                  className={`w-full text-left px-4 py-3.5 text-sm nav-lato font-semibold tracking-wider transition cursor-pointer rounded-sm ${
                    activeTab === item.id ? "bg-[#003465] text-white" : "text-[#333333] hover:bg-gray-50"
                  }`}>
                  {item.label}
                </button>
              ))}
            </div>
          </aside>

          <div className="flex-1 p-6 md:p-8">
            {activeTab === "dashboard" && (
              <>
                <p className="text-sm text-[#777777] nav-lato mb-3">
                  Hello <span className="font-semibold">{user.name}</span> (not <span className="font-semibold">{user.name}</span>?{" "}
                  <button onClick={() => navigate("/login")} className="text-[#5fc3e3] hover:text-[#003465] transition cursor-pointer">
                    Log out
                  </button>)
                </p>
                <p className="text-sm text-[#777777] nav-lato mb-6 leading-relaxed">
                  From your account dashboard you can view your{" "}
                  <button onClick={() => setActiveTab("orders")} className="text-[#5fc3e3] hover:text-[#003465] transition cursor-pointer">recent orders</button>
                  , manage your{" "}
                  <button onClick={() => setActiveTab("address")} className="text-[#5fc3e3] hover:text-[#003465] transition cursor-pointer">shipping and billing addresses</button>
                  , and{" "}
                  <button onClick={() => setActiveTab("account")} className="text-[#5fc3e3] hover:text-[#003465] transition cursor-pointer">edit your password and account details</button>.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {dashboardTiles.map(({ id, label, icon: TileIcon }) => (
                    <button key={id}
                      onClick={() => {
                        if (id === "logout") { navigate("/login"); return; }
                        setActiveTab(id);
                      }}
                      className="flex flex-col items-center justify-center gap-3 shadow-lg border border-gray-100 bg-white py-6 px-4 hover:bg-gray-50 transition cursor-pointer group">
                      <TileIcon className="w-14 h-14 text-gray-300 group-hover:text-[#003465] transition" strokeWidth={1.2} />
                      <span className="text-sm  font-semibold text-[#333333] nav-lato">{label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
            {activeTab === "orders" && (
              <p className="text-[14px] text-[#777777] nav-lato">No orders have been made yet.</p>
            )}
            {activeTab === "wishlist" && (
              <WishlistTab wishlist={wishlist} toggleWishlist={toggleWishlist} />
            )}
            {activeTab === "address" && <AddressTab />}
            {activeTab === "account" && <AccountDetailsTab />}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
