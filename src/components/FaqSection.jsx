import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqSection({
  faqs = [],
  title = "Before you reach out...",
  subtitle,
  defaultOpenIndex = 0,
}) {
  const [open, setOpen] = useState(defaultOpenIndex);

  return (
    <section className="bg-[#f5f5f5] py-8 md:py-12 px-4 lg:px-6">
      <div className="flex flex-col gap-4 mx-auto">
        <h2 className="text-[25px] lg:text-[35px] font-semibold text-black nav-poppins text-center">{title}</h2>
        {subtitle ? (
          <p className="text-base lg:text-lg text-[#4B4B4B] nav-poppins text-center">{subtitle}</p>
        ) : null}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-white border border-gray-100 shadow">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-3 md:px-5 py-4 text-left cursor-pointer"
                >
                  <span className={`text-lg sm:text-xl font-semibold nav-lato ${isOpen ? "text-[#003465]" : "text-[#242424]"}`}>
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <Plus className="w-6 h-6 text-gray-400 shrink-0 rotate-45 transition-transform duration-300" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400 shrink-0 transition-transform duration-300" />
                  )}
                </button>
                <div className={`overflow-hidden transition-all duration-600 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-3 md:px-5 pb-5">
                    <p className="text-base sm:text-lg text-[#777777] nav-lato leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
