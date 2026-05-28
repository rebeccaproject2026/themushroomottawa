import Header from '../components/Header'
import Banner from '../components/Banner'
import CommunitySection from '../components/CommunitySection'
import MushroomsSection from '../components/MushroomsSection'
import CategorySection from '../components/CategorySection'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CommunitySection />
      <MushroomsSection />
      <CategorySection />
      <main className="bg-[#eef7fb] min-h-[calc(100vh-136px)]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center text-slate-900">
          <h1 className="text-3xl font-semibold sm:text-4xl">Welcome to The Mushroom</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-slate-700">
            Discover premium mushroom products with fast local delivery across Ottawa and Canada-wide shipping.
          </p>
        </div>
      </main>
    </>
  )
}
