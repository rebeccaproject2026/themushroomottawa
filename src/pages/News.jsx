import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import NewsCard from '../components/NewsCard';


export default function News() {

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
              <NewsCard
                day="06"
                month="May"
                category="Magic Mushroom"
                title="Why Ottawa and Gatineau Are Becoming Canada’s Most Relaxed and Balanced Cities for Wellness, Lifestyle, and Magic Mushroom Culture"
                author="TMR_Admin"
                comments="0"
                excerpt="Discover why Ottawa and Gatineau residents are embracing wellness, balance, microdosing, and fast magic mushroom delivery more than other Canadian cities."
                image="./src/assets/news_card1.webp"
                onReadMore={() => null}
              />

              <NewsCard
                day="20"
                month="Apr"
                category="Magic Mushroom"
                title="420 History, Meaning, and Ottawa Culture Explained"
                author="TMR_Admin"
                comments="0"
                excerpt="What is 4/20, how it started, and why Ottawa celebrates it with deeper meaning and culture."
                image="./src/assets/news_card2.webp"
                onReadMore={() => null}
              />

              <NewsCard
                day="11"
                month="Mar"
                category="Magic Mushroom"
                title="Ottawa News, The Mush Room Leading Fast Magic Mushroom Delivery Across Ottawa Communities"
                author="TMR_Admin"
                comments="1"
                excerpt="A trusted Ottawa community brand for magic mushrooms with fast delivery and a reputation for quality and care."
                image="./src/assets/news_card3.webp"
                onReadMore={() => null}
              />

              <NewsCard
                day="01"
                month="Apr"
                category="Edibles"
                title="A Taste of Magic: Ottawa’s Growing Mushroom Edibles Scene"
                author="TMR_Admin"
                comments="2"
                excerpt="Explore the latest edible creations and discover how mushroom-based treats are shaping Ottawa’s wellness and lifestyle culture."
                image="./src/assets/news_card4.jpg"
                onReadMore={() => null}
              />

              <NewsCard
                day="01"
                month="Apr"
                category="Community"
                title="Local Events Spotlight: Mushroom Wellness Meetups in Ottawa"
                author="TMR_Admin"
                comments="0"
                excerpt="Stay connected with the local community through wellness meetups, education sessions, and mushroom culture events in Ottawa."
                image="./src/assets/news_card5.webp"
                onReadMore={() => null}
              />

              <NewsCard
                day="01"
                month="Apr"
                category="Community"
                title="Meet the Team Behind Ottawa’s Favorite Fungi Delivery Service"
                author="TMR_Admin"
                comments="3"
                excerpt="Get to know the growers, curators, and delivery team working behind the scenes to keep your mushroom experience exceptional."
                image="./src/assets/news_card6.jpg"
                onReadMore={() => null}
              />

              <NewsCard
                day="31"
                month="Mar"
                category="Magic Mushroom"
                title="The Profound Connection between Magic Mushrooms, Nature, and the World"
                author="TMR_Admin"
                comments="0"
                excerpt="Introduction: In recent years, the study of magic mushrooms and their potential therapeutic benefits has gained significant attention."
                image="./src/assets/news_card7.jpeg"
                onReadMore={() => null}
              />

              <NewsCard
                day="31"
                month="Mar"
                category="Magic Mushroom"
                title="Dosing Guide"
                author="TMR_Admin"
                comments="0"
                excerpt="A concise dosing guide to help readers understand safe and effective approaches for microdosing and therapeutic sessions."
                image="./src/assets/news_card8.jpg"
                onReadMore={() => null}
              />
            </div>
         
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
