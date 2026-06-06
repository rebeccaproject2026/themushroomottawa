import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import NewsCard from '../components/NewsCard';

import { useNavigate } from 'react-router-dom';
import { newsArticles } from '../data/newsData';

export default function News() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#f5f5f5] py-8 sm:py-12 flex flex-col items-center text-center px-4 md:px-6.25">
          <span className="bg-[#92d5ef] text-[#003465] text-[13px] font-semibold uppercase nav-poppins px-4 py-1.5 rounded-full">
            News
          </span>
          <h1 className="text-[25px] md:text-[30px] lg:text-[35px] font-semibold text-black nav-poppins my-1">
            The Fungi Files
          </h1>
          <p className="text-[15px] md:text-base lg:text-lg text-[#4B4B4B] nav-poppins max-w-full sm:max-w-2xl">
            Explore delicious recipes, deep dives into mushroom cultivation, wellness benefits, and local updates from your favorite Ottawa mushroom farm.
          </p>
        </section>

        <section className="bg-white px-4 md:px-6.25 py-8">

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((article) => (
                <NewsCard
                  key={article.id}
                  day={article.day}
                  month={article.month}
                  category={article.category}
                  title={article.title}
                  author={article.author}
                  comments={article.comments}
                  excerpt={article.excerpt}
                  image={article.image}
                  onReadMore={() => navigate(`/news/${article.id}`)}
                  onCommentClick={() => navigate(`/news/${article.id}#comments`)}
                />
              ))}
            </div>
         
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
