import { Icon } from "@iconify/react";
import { useState } from "react";
import CardIcon from "../assets/news_cardicon.png";

export default function NewsCard({
  image,
  day,
  month,
  category,
  title,
  author,
  comments,
  excerpt,
  onReadMore,
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <article className="group overflow-hidden border border-[#EAEDF2] bg-white transition-shadow duration-500 hover:shadow-xl">
      <div className="relative overflow-hidden h-72 sm:h-80">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute flex flex-col gap-1 left-4 top-4 nav-lato border border-[#D9E4F4] bg-white/95 text-[#333333] px-3 py-1.5 text-center shadow-sm">
          <span className="block text-[22px] font-medium leading-none">
            {day}
          </span>
          <span className="block text-xs uppercase font-semibold">{month}</span>
        </div>
      </div>

      <div className="relative px-5 pb-6 pt-5 sm:px-6.25 flex flex-col h-full">
        <span className="absolute left-1/2 -top-3 transform -translate-x-1/2 flex items-center w-fit bg-[#003465] px-3 py-1 text-[11px] font-semibold uppercase text-white nav-lato">
          {category}
        </span>
        <h2 className=" text-[19px] sm:text-[22px] font-medium text-[#333333]  nav-poppins leading-[1.4] text-center">
          {title}
        </h2>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[12px] sm:text-sm text-[#777777] nav-lato">
          <span className="flex items-center gap-1 text-[#A5A5A5]">
            Posted by
            <img src={CardIcon} alt="owner icon" className="w-4.5 h-4.5" />
            {author}
          </span>
          <div className="inline-flex items-center gap-2">
            <div 
              className="relative group/share flex items-center cursor-pointer"
              onClick={() => setShowTooltip(!showTooltip)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <Icon icon="solar:share-outline" className="w-4.5 h-4.5 hover:text-[#003465] transition-colors" />
              {/* Tooltip */}
              <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 ${showTooltip ? 'flex' : 'hidden group-hover/share:flex'} items-center gap-3 bg-[#1e1e1e] text-white px-3 py-2 rounded shadow-lg z-20 whitespace-nowrap after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#1e1e1e]`}>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  <Icon icon="ri:facebook-fill" className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  <Icon icon="ri:twitter-x-fill" className="w-4.5 h-4.5" />
                </a>
                <a href="#" className="hover:text-red-500 transition-colors">
                  <Icon icon="ri:pinterest-fill" className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  <Icon icon="ri:linkedin-fill" className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-sky-500 transition-colors">
                  <Icon icon="ri:telegram-fill" className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="relative flex items-center ">
              <Icon icon="bytesize:message" className="w-4.5 h-4.5" />
              <span className="absolute -top-1.5 -right-2 text-white bg-[#003465] rounded-full w-3.5 h-3.5 p-1 flex items-center justify-center text-[10px]">
                {comments}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-3 text-sm font-medium text-[#777777] nav-lato text-center">
          {excerpt}
        </p>

        <button
          type="button"
          onClick={onReadMore}
          className="self-center mt-4 nav-lato cursor-pointer uppercase rounded-full text-[#003465] text-xs font-semibold transition-colors duration-300 hover:text-[#095ab7]"
        >
          Continue Reading
        </button>
      </div>
    </article>
  );
}
