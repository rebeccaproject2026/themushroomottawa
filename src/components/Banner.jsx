import { Icon } from '@iconify/react';
import cardBg from '../assets/cardbg.webp';
import cardBg1 from '../assets/cardbg1.webp';

export default function Banner() {
  return (
    <section className="bg-white p-4">
      <div className="mx-auto max-w-375 px-2">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* First Card - 20% OFF */}
          <div
            className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#1486d8] to-[#41aff1] text-white flex items-center justify-between min-h-20"
          >
            <div className="z-10 max-w-sm p-6.25">
              <h2 className="text-[34px] font-semibold leading-[1.1] nav-poppins mb-2">
                20% OFF on First Order
              </h2>
              <p className="text-lg font-medium mb-4 leading-[1.1em] nav-poppins text-[#FFFFFFBF] tracking-wide">
                New Customers Only
              </p>
              <button className="inline-flex cursor-pointer items-center gap-2 bg-white text-[#2E2E2E] font-semibold text-[15px] px-6 py-2.5 rounded-lg hover:bg-gray-100 transition nav-lato">
                Shop Now
                <Icon icon="mdi:arrow-right" className="h-5 w-5" />
              </button>
            </div>

            
                <img src={cardBg} alt="20% OFF" className="w-[70%] h-full object-contain absolute -right-16 top-1" />
           
          </div>

          {/* Second Card - FREE DELIVERY */}
          <div
            className="relative  overflow-hidden rounded-2xl bg-linear-to-r from-[#eeb539] to-[#e4c434] text-[#003d82] flex items-center justify-between min-h-20"

          >
            <div className="z-10 max-w-sm p-6.25">
              <h2 className="text-[60px] text-[#003465] font-semibold leading-none nav-poppins mb-2">
                <div className=' nav-poppins'>FREE</div>  
                <div className='text-[28px] font-semibold'>DELIVERY!</div>
                
              </h2>
              <p className="text-lg text-[#003465FB] font-medium nav-poppins mb-3">
                On Orders Over $120
              </p>
              <button className="flex cursor-pointer nav-lato text-[15px] items-center gap-2 bg-white text-[#2E2E2E] font-semibold px-6 py-2.5 rounded-md hover:bg-gray-100 transition">
                Shop Now
                <Icon icon="mdi:arrow-right" className="h-5 w-5" />
              </button>
            </div>
            
                <img src={cardBg1} alt="FREE DELIVERY" className="w-[50%] h-auto object-contain absolute right-4 top-2" />
          
          </div>
        </div>
      </div>
    </section>
  );
}
