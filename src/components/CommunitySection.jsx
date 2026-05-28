import storeFrontImg from "../assets/sidecardbg.png";
import { Icon } from "@iconify/react";

export default function CommunitySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-375 px-4 py-6">
        <div className="grid grid-cols-[60%_40%] justify-between items-center">
          {/* Left Content */}
          <div className=" flex flex-col gap-6 max-w-206">
            <h2 className="text-[34px] font-semibold text-black leading-11 tracking-[-0.015em] nav-poppins">
              Ottawa's Mushroom Community Is Growing, And The Mush Room Is Right
              At The Center Of It
            </h2>

            <p className="text-[#4a4a4a] text-lg leading-relaxed nav-lato">
              Something interesting has been happening around Ottawa lately.
            </p>

            <p className="text-[#4a4a4a] text-lg leading-relaxed nav-lato">
              More people are talking about balance, creativity, mental clarity,
              and the quiet power of microdosing. Conversations that used to
              stay private are now showing up everywhere, between friends, among
              students, creatives, entrepreneurs, and everyday professionals
              looking for a healthier way to reset their minds.
            </p>

            <p className="text-[#4a4a4a] text-lg leading-relaxed nav-lato">
              At the center of that movement is a name that many people in
              Ottawa already recognize.
            </p>

            <p className="text-[#4a4a4a] text-lg leading-relaxed nav-lato">
              For many locals, The Mush Room is not just another online shop. It
              has grown into one of the most recognizable names in Ottawa's
              mushroom community. A place where people feel comfortable
              exploring, learning, and discovering what microdosing and
              psychedelic wellness can offer.
            </p>

            <p className="text-[#4a4a4a] text-lg leading-relaxed nav-lato">
              Ask around Ottawa and you will hear the same thing from mushroom
              enthusiasts again and again. The Mush Room has built its
              reputation the old-fashioned way, by showing up for the community
              with quality products, consistent service, and a vibe that feels
              welcoming rather than corporate.
            </p>

            <p className="text-[#4a4a4a] text-lg leading-relaxed nav-lato">
              Over time it became known as one of the premier mushroom retailers
              in the city. People trust it because it feels real. It feels like
              it belongs to the culture rather than just trying to sell to it.
            </p>

            <button className="bg-[#003465] hover:bg-[#011f3a] text-white px-11 py-4 w-fit cursor-pointer rounded font-semibold text-sm uppercase flex items-center gap-2 transition duration-300">
              Explore Products
               <Icon icon="majesticons:arrow-right-line" className="h-6 w-6 stroke-2" />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-t-full border-12 border-white overflow-hidden shadow-slate-500 shadow-2xl">
              <img
                src={storeFrontImg}
                alt="The Mush Room Store Front"
                className="w-full h-170 object-cover"
              />
              {/* Lab Tested Badge */}
              <div className="absolute bottom-4 right-4 bg-[#FFFFFFAD] rounded-lg p-3.5 shadow-lg flex items-center gap-2">
                <div className="bg-[#003465] text-white p-2 rounded-full">
                               <Icon icon="clarity:flask-solid" className="h-7 w-7 text-white" />

                </div>
                <div className="text-left">
                  <div className="text-black text-[22px] font-bold text-sm">
                    100%
                  </div>
                  <div className="text-[#353535] text-sm uppercase font-bold nav-lato">
                    Lab Tested Purity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
