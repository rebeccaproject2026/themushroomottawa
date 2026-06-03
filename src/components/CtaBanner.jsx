import { useNavigate } from "react-router-dom";

export default function CtaBanner({
  title = "Ready to Taste the Best Mushrooms in Ottawa?",
  subtitle = "Join our local community of fungi lovers. Browse our online store today and get premium mushrooms delivered straight to your door anywhere in the National Capital Region.",
  leftButtonLabel = "Shop Now",
  leftButtonPath = "/",
  rightButtonLabel = "Contact Us",
  rightButtonPath = "/contact",
  subtitleClassName = "max-w-5xl",
}) {
  const navigate = useNavigate();
  return (
    <section className="bg-[#92d5ef] py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-semibold text-[#003465] nav-poppins mb-3 sm:mb-4 leading-tight">
        {title}
      </h2>
      <p className={`text-sm sm:text-base md:text-lg text-[#242424] nav-poppins ${subtitleClassName} mb-8 sm:mb-10 leading-relaxed`}>
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
        <button
          onClick={() => navigate(leftButtonPath)}
          className="w-full sm:w-auto bg-[#003465] text-white font-semibold text-sm sm:text-base nav-lato px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 hover:bg-[#012140] transition rounded-md cursor-pointer min-h-12 sm:min-h-fit flex items-center justify-center"
        >
          {leftButtonLabel}
        </button>
        <button
          onClick={() => navigate(rightButtonPath)}
          className="w-full sm:w-auto border-2 border-[#003465] text-[#003465] font-semibold text-sm sm:text-base nav-lato px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-md hover:bg-[#003465] hover:text-white transition cursor-pointer bg-transparent min-h-12 sm:min-h-fit flex items-center justify-center"
        >
          {rightButtonLabel}
        </button>
      </div>
    </section>
  );
}
