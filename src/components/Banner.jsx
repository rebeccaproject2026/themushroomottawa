import { Icon } from '@iconify/react';
import cardBg from '../assets/cardbg11.webp';
import cardBg1 from '../assets/cardbg2.webp';

export default function Banner() {
  return (
    <section className="bg-white p-4">
      <div className="mx-auto max-w-375 px-0 sm:px-2">
        <div className="grid grid-cols-1 gap-3 sm:gap-5 lg:grid-cols-2">
          {/* First Card - 20% OFF */}
          <div
            className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#1486d8] to-[#41aff1] text-white flex sm:items-center justify-between min-h-20"
          >
            <div className="z-10 w-full sm:w-[65%] lg:w-auto lg:max-w-sm p-4 sm:p-5 lg:p-6.25 pb-14 sm:pb-5 lg:pb-6.25">
              <h2 className="text-[26px] sm:text-3xl lg:text-[34px] font-semibold leading-[1.1] nav-poppins mb-1 sm:mb-2">
                20% OFF on First Order
              </h2>
              <p className="text-base lg:text-lg font-medium mb-4 leading-[1.1em] nav-poppins text-[#FFFFFFBF] tracking-wide">
                New Customers Only
              </p>
              <button className="inline-flex cursor-pointer items-center gap-2 bg-white text-[#2E2E2E] font-semibold text-sm lg:text-[15px] px-6 sm:px-4 lg:px-6 py-2.5 sm:py-2 lg:py-2.5 rounded-md hover:bg-gray-100 transition nav-lato">
                Shop Now
                <Icon icon="mdi:arrow-right" className="h-5 w-5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
              </button>
            </div>


            <img src={cardBg} alt="20% OFF" fetchPriority="high" loading="eager" className="w-50 sm:w-[45%] lg:w-[70%] h-auto sm:h-full object-contain absolute bottom-0 sm:bottom-auto right-0 sm:-right-8 lg:-right-16 sm:top-1" />

          </div>

          {/* Second Card - FREE DELIVERY */}
          <div
            className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#eeb539] to-[#e4c434] text-[#003d82] flex sm:items-center justify-between min-h-20"
          >
            <div className="z-10 w-full sm:w-[65%] lg:w-auto lg:max-w-sm p-4 sm:p-5 lg:p-6.25 pb-3 sm:pb-5 lg:pb-6.25">
              <h2 className=" text-[60px] text-[#003465] font-semibold leading-none nav-poppins mb-0 sm:mb-2">
                <div className=' nav-poppins'>FREE</div>
                <div className='text-[28px] lg:text-[28px] font-semibold'>DELIVERY!</div>
              </h2>
              <p className="text-base lg:text-lg text-[#003465FB] font-medium nav-poppins mb-1.5 sm:mb-3">
                On Orders Over $120
              </p>
              <button className="inline-flex cursor-pointer nav-lato text-sm lg:text-[15px] items-center gap-2 bg-white text-[#2E2E2E] font-semibold px-6 sm:px-4 lg:px-6 py-2 lg:py-2.5 rounded-md hover:bg-gray-100 transition">
                Shop Now
                <Icon icon="mdi:arrow-right" className="h-5 w-5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
              </button>
            </div>

            <img src={cardBg1} alt="FREE DELIVERY" fetchPriority="high" loading="eager" className="w-37 sm:w-[40%] lg:w-[50%] h-auto object-contain absolute -bottom-3 sm:bottom-auto right-0 sm:right-0 lg:right-4 sm:top-2" />

          </div>
        </div>
      </div>
    </section>
  );
}
