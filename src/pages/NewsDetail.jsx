import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO';
import { newsArticles } from '../data/newsData';
import CardIcon from '../assets/news_cardicon.png';

export default function NewsDetail() {
  const { id } = useParams();
  const currentId = parseInt(id);
  const navigate = useNavigate();
  const location = useLocation();
  const [article, setArticle] = useState(null);
  const [prevArticle, setPrevArticle] = useState(null);
  const [nextArticle, setNextArticle] = useState(null);

  useEffect(() => {
    const foundArticle = newsArticles.find((a) => a.id === currentId);
    if (foundArticle) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setArticle(foundArticle);
      setPrevArticle(newsArticles.find((a) => a.id === currentId - 1));
      setNextArticle(newsArticles.find((a) => a.id === currentId + 1));
    } else {
      navigate('/news');
    }
  }, [currentId, navigate]);

  // Scroll to anchor after article loads
  useEffect(() => {
    if (article && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, [article, location.hash]);

  if (!article) return null;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/news/${article.id}`}
        type="article"
      />
      <Header />
      <main className="flex-1 pb-6">
        <article className="max-w-5xl mx-auto px-4 sm:px-6 mt-6">
          {/* Header */}
          <div className="text-center mb-5">
            <span className="inline-block bg-[#003465] text-white px-2.5 py-1 text-[11px] font-semibold uppercase nav-lato">
              {article.category}
            </span>
            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-medium text-[#333333] nav-poppins mt-3 leading-snug mb-4 px-2">
              {article.title}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-[#A5A5A5] nav-lato">
              <span>Posted by</span>
              <span className="flex items-center gap-1.5 font-medium text-[#A5A5A5]">
               <img src={CardIcon} alt="cardicon" className="w-5.5 h-5.5" />
                {article.author}
              </span>
              <span>On {article.day} {article.month} {article.year || "2024"}</span>
              <span className="relative">
                <Icon icon="mdi:comment-outline" className="w-4.5 h-4.5" />
                <div className='absolute text-[10px] -top-1.5 -right-1.5 bg-[#003465] px-1 rounded-full text-white'>
                {article.comments}
                </div>
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-6 w-full overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto object-cover border-b-4 border-[#003465]/10"
            />
          </div>

          {/* Content */}
          <div
            className="prose max-w-none text-[#212529] nav-lato prose-headings:font-semibold prose-headings:text-[#333333] prose-headings:nav-poppins prose-h3:text-[18px] prose-h3:mt-6 prose-h3:mb-3 sm:prose-h3:text-[20px] sm:prose-h3:mt-8 sm:prose-h3:mb-4 prose-p:text-[15px] prose-p:leading-[1.7] prose-p:mb-4 sm:prose-p:text-[18px] sm:prose-p:leading-[1.8] sm:prose-p:mb-5 prose-ul:mb-5 prose-ul:pl-4 sm:prose-ul:pl-5 prose-li:text-[15px] prose-li:mb-1.5 sm:prose-li:text-[18px] sm:prose-li:mb-2 prose-li:marker:text-[#003465] prose-a:text-[#003465] prose-a:underline hover:prose-a:text-[#dfb242] prose-hr:border-[#eaeaea] prose-hr:my-6 sm:prose-hr:my-8"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Bottom Actions */}
          <div className="mt-4 flex flex-col items-start">
            {article.showShopButton && (
              <button
                onClick={() => navigate('/shop')}
                className="bg-[#003465] text-white px-8 sm:px-12 py-2.5 cursor-pointer rounded-md font-semibold text-base sm:text-lg hover:bg-[#002447] transition-colors flex items-center gap-2 mb-8"
              >
                Explore Products
                <Icon icon="mdi:arrow-right" className="w-5 h-5" />
              </button>
            )}

            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                <Icon icon="mdi:facebook" className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                <Icon icon="ri:twitter-x-fill" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#cb2027] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                <Icon icon="mdi:pinterest" className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#007bb5] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                <Icon icon="mdi:linkedin" className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                <Icon icon="mdi:twitter" className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="mt-10 sm:mt-12 py-5 sm:py-6 border-t-2 border-b-2 border-[#eaeaea] flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0">
              {prevArticle && (
                <button
                  onClick={() => navigate(`/news/${prevArticle.id}`)}
                  className="flex items-center gap-2 sm:gap-4 text-left group hover:text-[#003465] transition-colors"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#003465] transition-colors shrink-0">
                    <Icon icon="mdi:chevron-left" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#003465]" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs sm:text-sm nav-lato text-[#bbbbbb] font-normal mb-1">Newer</span>
                    <span className="block text-xs sm:text-sm nav-poppins text-[#333333] font-medium line-clamp-1">{prevArticle.title}</span>
                  </div>
                </button>
              )}
            </div>

            <button
              onClick={() => navigate('/news')}
              className="px-2 sm:px-4 text-gray-400 hover:text-[#003465] transition-colors shrink-0"
            >
              <Icon icon="ion:grid-outline" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex-1 min-w-0 flex justify-end">
              {nextArticle && (
                <button
                  onClick={() => navigate(`/news/${nextArticle.id}`)}
                  className="flex items-center justify-end gap-2 sm:gap-4 text-right group hover:text-[#003465] transition-colors"
                >
                  <div className="min-w-0">
                    <span className="block text-xs sm:text-sm text-[#bbbbbb] nav-lato font-normal mb-1">Older</span>
                    <span className="block text-xs sm:text-sm nav-poppins text-[#333333] font-medium line-clamp-1">{nextArticle.title}</span>
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#003465] transition-colors shrink-0">
                    <Icon icon="mdi:chevron-right" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-[#003465]" />
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Comments Section */}
          <div id="comments" className="mt-10 sm:mt-12 mb-8">
            <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#242424] nav-poppins mb-2">Leave a Reply</h3>
            <p className="text-sm text-[#777777] nav-lato mb-6">
              Your email address will not be published. Required fields are marked *
            </p>

            <form className="flex flex-col gap-5 nav-lato">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#242424] font-medium">Comment <span className="text-red-500">*</span></label>
                <textarea
                  rows="7"
                  required
                  className="w-full border-2 border-gray-300 p-3 outline-none focus:border-[#003465] transition-colors resize-y"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#242424] font-medium">Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    className="w-full border-2 border-gray-300 px-3 py-2 outline-none focus:border-[#003465] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[#242424] font-medium">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
                    className="w-full border-2 border-gray-300 px-3 py-2 outline-none focus:border-[#003465] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#242424] font-medium">Website</label>
                <input
                  type="url"
                  className="w-full border-2 border-gray-300 px-3 py-2 outline-none focus:border-[#003465] transition-colors"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="save-info"
                  className="w-3.5 h-3.5 mt-0.5 text-[#003465] border-gray-300 focus:ring-[#003465] shrink-0"
                />
                <label htmlFor="save-info" className="text-sm text-[#242424] cursor-pointer leading-relaxed">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#003465] text-white px-5 py-3 font-bold uppercase text-[13px] tracking-wider hover:bg-[#002447] transition-colors self-start cursor-pointer"
              >
                Post Comment
              </button>
            </form>
          </div>

        </article>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
