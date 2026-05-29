import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { Icon } from "@iconify/react";

export default function LoginDrawer({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-85 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 nav-poppins">Sign in</h2>
          <button
            onClick={onClose}
            className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-gray-500 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
            Close
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-5">
          {/* Username */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">
              Username or email address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border-2 border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#003465] transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border-2 border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#003465] transition pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Log In Button */}
          <button className="w-full bg-[#003465] text-white font-semibold uppercase text-sm py-3 hover:bg-[#002547] transition cursor-pointer">
            Log In
          </button>

          {/* Remember me + Lost password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember((r) => !r)}
                className="w-3 h-3 accent-[#003465]"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-[#003465] hover:underline transition">
              Lost your password?
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 " />

          {/* No account */}
          <div className="flex flex-col items-center gap-3">
            <Icon icon="uiw:user" className="w-15 h-15 text-gray-300/30" />
            <p className="text-sm text-[#242424] nav-lato font-semibold">No account yet?</p>
            <button className="text-[13px] nav-lato font-semibold uppercase  border-b-2 border-gray-800 text-gray-800 hover:text-gray-500 hover:border-gray-500 transition cursor-pointer ">
              Create an Account
            </button>
          </div>

          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}
