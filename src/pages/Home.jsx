import Header from '../components/Header'
import Banner from '../components/Banner'
import CommunitySection from '../components/CommunitySection'
import MushroomsSection from '../components/MushroomsSection'
import CategorySection from '../components/CategorySection'
import ReviewsSection from '../components/ReviewsSection'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CommunitySection />
      <MushroomsSection />
      <CategorySection />
      <ReviewsSection />
      <Footer />
      <ScrollToTop />
    </>
  )
}
