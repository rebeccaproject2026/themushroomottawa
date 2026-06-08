import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Icon } from "@iconify/react";

const reviews = [
  {
    id: 1,
    name: "Sabrine C",
    time: "1 year ago",
    text: "Amazing experience. Perfect service very friendly service and a good selection of options.",
    initials: "SC",
    avatarBg: "#E8441A",
  },
  {
    id: 2,
    name: "T",
    time: "1 year ago",
    text: "Great place, cute bunny!",
    initials: "T",
    avatarBg: "#4A90D9",
  },
  {
    id: 3,
    name: "Fox Options",
    time: "1 year ago",
    text: "Great service and selection",
    initials: "FO",
    avatarBg: "#2ECC71",
  },
  {
    id: 4,
    name: "Kye Williams",
    time: "2 years ago",
    text: "The best store in Ottawa for any psilocybin needs or curiosity's. The gentleman in the black hat made it very easy for me to understand what I was...",
    fullText: "The best store in Ottawa for any psilocybin needs or curiosity's. The gentleman in the black hat made it very easy for me to understand what I was looking for and what would best suit my needs. I will definitely be returning and recommending this place to everyone I know.",
    hasReadMore: true,
    initials: "KW",
    avatarBg: "#6C5CE7",
  },
  {
    id: 5,
    name: "Maria Lopez",
    time: "1 year ago",
    text: "Absolutely love this place! Staff is knowledgeable and very welcoming. Will definitely be coming back.",
    initials: "ML",
    avatarBg: "#E84393",
  },
  {
    id: 6,
    name: "James R",
    time: "8 months ago",
    text: "Top notch quality and fast delivery. Highly recommend to anyone in Ottawa looking for premium products.",
    initials: "JR",
    avatarBg: "#00B894",
  },
  {
    id: 7,
    name: "Priya S",
    time: "6 months ago",
    text: "Very professional and discreet. The selection is incredible and prices are fair. 5 stars!",
    initials: "PS",
    avatarBg: "#FDCB6E",
  },
];

function useItemsPerPage() {
  const getCount = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };
  const [count, setCount] = useState(getCount);
  useEffect(() => {
    const handler = () => setCount(getCount());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return count;
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const textRef = useRef(null);

  return (
    <div className="bg-white rounded-xl p-5 pt-12 shadow-sm flex flex-col gap-3 relative h-full">
      {/* Avatar */}
      <div className="flex flex-col items-center text-center gap-2">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl"
            style={{ backgroundColor: review.avatarBg }}
          >
            {review.initials}
          </div>
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
            <Icon icon="flat-color-icons:google" className="w-6 h-6" />
          </div>
        </div>
        <div>
          <p className="font-semibold text-[15px] text-black">{review.name}</p>
          <p className="text-sm text-[#8A8A8A]">{review.time}</p>
        </div>
      </div>

      {/* Review Text */}
      {review.hasReadMore ? (
        <div
          ref={textRef}
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: expanded ? `${textRef.current?.scrollHeight}px` : "4.5rem" }}
        >
          <p className="text-[15px] text-black font-normal text-center leading-relaxed nav-poppins">
            {review.fullText || review.text}
          </p>
        </div>
      ) : (
        <p className="text-[15px] text-black font-normal text-center leading-relaxed nav-poppins">
          {review.text}
        </p>
      )}

      {review.hasReadMore && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-xs text-[#8A8A8A] hover:text-black text-center transition mt-auto cursor-pointer"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const itemsPerPage = useItemsPerPage();
  const maxIndex = reviews.length - itemsPerPage;

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
  };

  useEffect(() => {
    // Reset index if it's now out of bounds after resize
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, maxIndex)));
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [itemsPerPage]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    startTimer();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    startTimer();
  };

  return (
    <section className="bg-[#f0f4f8] py-16">
      <div className="mx-auto max-w-375 px-3.75">

        {/* Slider + Arrows */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            aria-label="Previous review"
            onClick={handlePrev}
            className="absolute cursor-pointer -left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          {/* Sliding Track */}
          <div className="overflow-hidden">
            <div
              className="flex items-stretch transition-transform duration-500 ease-in-out pt-10"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="shrink-0 px-2 flex flex-col"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            aria-label="Next review"
            onClick={handleNext}
            className="absolute cursor-pointer -right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Dot indicators on mobile */}
        <div className="flex justify-center gap-1.5 mt-6 lg:hidden">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              aria-label={`Go to slide ${i + 1}`}
              key={i}
              onClick={() => { setCurrentIndex(i); startTimer(); }}
              className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${i === currentIndex ? "bg-[#003465] w-4" : "bg-gray-300 w-1.5"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
