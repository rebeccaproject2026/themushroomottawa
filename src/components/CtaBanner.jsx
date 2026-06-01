import { useNavigate } from "react-router-dom";

export default function CtaBanner() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#92d5ef] py-16 px-4 flex flex-col items-center text-center">
      <h2 className="text-[35px] font-semibold text-[#003465] nav-poppins mb-2">
        Ready to Taste the Best Mushrooms in Ottawa?
      </h2>
      <p className="text-lg text-[#242424] nav-poppins max-w-5xl mb-8">
        Join our local community of fungi lovers. Browse our online store today and get premium mushrooms delivered straight to your door anywhere in the National Capital Region.
      </p>
      <div className="flex items-center gap-4 ">
        <button
          onClick={() => navigate("/")}
          className="bg-[#003465] text-white font-semibold text-lg nav-lato px-11 py-3 hover:bg-[#012140] transition rounded-md cursor-pointer"
        >
          Shop Now
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="border border-[#003465] text-[#003465] font-semibold text-lg nav-lato px-11 py-3 rounded-md hover:bg-[#003465] hover:text-white transition cursor-pointer bg-transparent"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
