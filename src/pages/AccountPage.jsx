import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function PasswordInput() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        className="w-full border-2 border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition pr-10"
      />
      <button type="button" onClick={() => setShow((s) => !s)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition">
        {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
  );
}

export default function AccountPage({ defaultView = "login" }) {
  const [view, setView] = useState(defaultView);
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const renderLeft = () => {
    if (view === "login") return (
      <>
        <h2 className="text-[24px] font-semibold text-[#1a1a1a] nav-poppins mb-6">Login</h2>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] text-[#333333] nav-lato font-medium">
              Username or email address <span className="text-red-500">*</span>
            </label>
            <input type="text" className="border-2 border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] text-[#333333] nav-lato font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"}
                className="w-full border-2 border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition pr-10" />
              <button type="button" onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <button onClick={() => navigate("/dashboard")}
            className="w-full bg-[#003465] text-white font-semibold uppercase text-sm tracking-widest py-3.5 hover:bg-[#012444] transition nav-lato cursor-pointer">
            Log In
          </button>
          <div className="flex items-center justify-between nav-lato text-sm">
            <label className="flex items-center gap-2 text-[#242424] cursor-pointer">
              <input type="checkbox" checked={remember} onChange={() => setRemember((r) => !r)}
                className="w-3.5 h-3.5 accent-[#003465] cursor-pointer" />
              Remember me
            </label>
            <button onClick={() => setView("forgot")}
              className="text-[#003465] hover:underline transition font-medium cursor-pointer nav-lato text-[13px]">
              Lost your password?
            </button>
          </div>
        </div>
      </>
    );

    if (view === "register") return (
      <>
        <h2 className="text-[24px] font-semibold text-[#1a1a1a] nav-poppins mb-6">Register</h2>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-[#242424] nav-lato font-medium">
              Email address <span className="text-red-500">*</span>
            </label>
            <input type="email" className="border-2 border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition" />
          </div>
          <p className="text-sm text-[#555555] nav-lato leading-relaxed">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="text-sm text-[#555555] nav-lato leading-relaxed">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
            <Link to="/privacy-policy" className="text-[#003465] hover:underline transition">privacy policy</Link>.
          </p>
          <button className="w-full bg-[#003465] text-white font-semibold uppercase text-sm tracking-wider py-3.5 hover:bg-[#012444] transition nav-lato cursor-pointer">
            Register
          </button>
        </div>
      </>
    );

    if (view === "forgot") return (
      <>
        <h2 className="text-[24px] font-semibold text-[#1a1a1a] nav-poppins mb-6">Lost your password?</h2>
        <div className="flex flex-col gap-5">
          <p className="text-sm text-[#555555] nav-lato leading-relaxed">
            Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
          </p>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-[#242424] nav-lato font-medium">
              Username or email <span className="text-red-500">*</span>
            </label>
            <input type="text" className="border-2 border-gray-300 px-3 py-2.5 text-sm nav-lato outline-none focus:border-[#003465] transition" />
          </div>
          <button onClick={() => setView("reset")}
            className="w-full bg-[#003465] text-white font-semibold uppercase text-sm tracking-widest py-3.5 hover:bg-[#012444] transition nav-lato cursor-pointer">
            Reset Password
          </button>
          <button onClick={() => setView("login")}
            className="text-[13px] text-[#003465] hover:underline transition nav-lato cursor-pointer self-start">
            ← Back to login
          </button>
        </div>
      </>
    );

    return (
      <>
        <h2 className="text-[24px] font-semibold text-[#1a1a1a] nav-poppins mb-6">Reset Password</h2>
        <div className="flex flex-col gap-5">
          <p className="text-sm text-[#555555] nav-lato leading-relaxed">Enter a new password below.</p>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-[#242424] nav-lato font-medium">New password <span className="text-red-500">*</span></label>
            <PasswordInput />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-[#242424] nav-lato font-medium">Re-enter new password <span className="text-red-500">*</span></label>
            <PasswordInput />
          </div>
          <button className="w-full bg-[#003465] text-white font-semibold uppercase text-sm tracking-widest py-3.5 hover:bg-[#012444] transition nav-lato cursor-pointer">
            Save
          </button>
          <button onClick={() => setView("login")}
            className="text-[13px] text-[#003465] hover:underline transition nav-lato cursor-pointer self-start">
            ← Back to login
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-0 border border-gray-200">
          <div className="w-full md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-gray-200">
            {renderLeft()}
          </div>
          <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center text-center gap-6 bg-white">
            <h2 className="text-[22px] font-bold text-[#1a1a1a] nav-poppins">Login</h2>
            <p className="text-[14px] text-[#555555] nav-lato leading-relaxed max-w-xs">
              Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
            </p>
            {view === "login" ? (
              <button onClick={() => setView("register")}
                className="border border-gray-300 text-[#333333] font-semibold uppercase text-[13px] tracking-widest px-8 py-2.5 hover:bg-gray-50 hover:border-gray-400 transition nav-lato cursor-pointer">
                Register
              </button>
            ) : (
              <button onClick={() => setView("login")}
                className="border border-gray-300 text-[#333333] font-semibold uppercase text-[13px] tracking-widest px-8 py-2.5 hover:bg-gray-50 hover:border-gray-400 transition nav-lato cursor-pointer">
                Login
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
