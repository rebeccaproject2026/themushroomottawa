import Header from '../components/Header'
import Banner from '../components/Banner'
import CommunitySection from '../components/CommunitySection'
import MushroomsSection from '../components/MushroomsSection'
import CategorySection from '../components/CategorySection'
import ReviewsSection from '../components/ReviewsSection'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <>
      <SEO
        canonical="/"
        description="The Mushroom Ottawa offers fast, discreet magic mushroom delivery across Ottawa and Gatineau. Browse premium dried mushrooms, microdosing capsules, and edibles."
        keywords="magic mushrooms Ottawa, psilocybin Ottawa, mushroom delivery Ottawa, microdosing Ottawa, buy mushrooms Ottawa"
      />
      <Header />
      <main>
        <Banner />
        <CommunitySection />
        <MushroomsSection />
        <CategorySection />
        <ReviewsSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
