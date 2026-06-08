import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO';

export default function NotFound() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <>
      <SEO title="Page Not Found" noindex={true} />
      <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 flex items-start justify-center px-4">
        <div className="text-center w-full max-w-xl">
          {/* 404 background text + NOT FOUND overlay */}
          <div className="relative flex items-center justify-center select-none mb-6">
            <span className="text-[160px] sm:text-[300px] font-bold text-[#f0f0f0] leading-none nav-lato">
              404
            </span>
            <span className="absolute text-4xl sm:text-[66px] font-semibold text-[#003465] nav-poppins">
              NOT FOUND
            </span>
          </div>

          <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#1a1a1a] nav-poppins mb-3">
            This is somewhat embarrassing, isn't it?
          </h2>
          <p className="text-base text-[#777777] nav-lato mb-6">
            It looks like nothing was found at this location. Maybe try a search?
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex items-center border border-[#d0d0d0] overflow-hidden max-w-sm mx-auto mb-10">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for posts"
              className="flex-1 px-4 py-2.5 text-[14px] text-[#555555] nav-lato outline-none bg-white"
            />
            <button
              type="submit"
              className="px-4 py-2.5 text-[#777777] hover:text-[#003465] transition-colors cursor-pointer bg-white"
            >
              <Icon icon="tdesign:search" className="w-4.5 h-4.5" />
            </button>
          </form>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
      </div>
    </>
  );
}
