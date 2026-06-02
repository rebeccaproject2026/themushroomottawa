import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import card3 from "../assets/card3.webp";

const categories = [
  {
    id: 1,
    title: "MAGIC MUSHROOMS",
    count: 19,
    image: card1,
  },
  {
    id: 2,
    title: "MICRODOSING",
    count: 14,
    image: card2,
  },
  {
    id: 3,
    title: "MUSHROOM EDIBLES",
    count: 33,
    image: card3,
  },
];

export default function CategorySection() {
  return (
    <section className="bg-white py-10 lg:py-16 px-0 lg:px-2">
      <div className="mx-auto max-w-375 px-3.75">
        {/* Header */}
        <p className="text-sm lg:text-base nav-lato font-semibold text-[#474747] uppercase">
          Shop By
        </p>
        <h2 className="text-3xl lg:text-[35px] font-semibold text-[#003465] nav-poppins mb-6 lg:mb-8">
          Our Mushroom Categories
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-87.5 sm:h-112.5 lg:h-150"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.image})` }}
              />


              {/* Title + Count */}
              <div className="relative flex items-center z-10 px-5 py-5 lg:px-7 lg:py-6">
                <h3 className="text-[#333333] font-semibold nav-poppins text-2xl sm:text-3xl lg:text-[35px] uppercase ">
                  {cat.title}
                </h3>
                <span className="ml-2 flex items-center justify-center bg-white text-[#333] text-[10px] lg:text-xs font-semibold rounded-full px-2 py-0.5 lg:py-0 shadow-[#0000001f] shadow-lg">
                  {cat.count}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
