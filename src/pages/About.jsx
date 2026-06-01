import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import CtaBanner from "../components/CtaBanner";

export default function About() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-[#f5f5f5] py-16 flex flex-col items-center text-center px-4">
          <span className="bg-[#92d5ef] text-[#003465] text-xs font-bold uppercase tracking-widest nav-lato px-4 py-1.5 rounded-full mb-4">
            Our Story
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 nav-poppins mb-4 max-w-2xl">
            Ottawa's Trusted Source for Premium Mushrooms
          </h1>
          <p className="text-sm text-gray-500 nav-lato max-w-xl leading-relaxed">
            The Mushroom Ottawa was founded with a simple mission — to bring the highest quality mushrooms to the people of Ottawa and beyond. From gourmet culinary varieties to wellness-focused functional mushrooms, we grow and source with care.
          </p>
        </section>

        {/* Mission + Values */}
        <section className="max-w-375 mx-auto px-3.75 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🌱",
              title: "Locally Grown",
              desc: "We cultivate our mushrooms right here in Ottawa, ensuring freshness and supporting the local economy.",
            },
            {
              icon: "🔬",
              title: "Lab Tested",
              desc: "Every batch is tested for purity and potency so you always know exactly what you're getting.",
            },
            {
              icon: "🚚",
              title: "Fast Delivery",
              desc: "Same-day local delivery in Ottawa and fast Canada-wide shipping so your order arrives fresh.",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-3 bg-white p-8 shadow-sm rounded-xl">
              <span className="text-4xl">{item.icon}</span>
              <h3 className="text-base font-bold text-gray-800 nav-poppins">{item.title}</h3>
              <p className="text-sm text-gray-500 nav-lato leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Story block */}
        <section className="bg-[#f5f5f5] py-16 px-4">
          <div className="max-w-3xl mx-auto flex flex-col gap-5 text-center">
            <h2 className="text-2xl font-bold text-gray-900 nav-poppins">Why The Mushroom Ottawa?</h2>
            <p className="text-sm text-gray-500 nav-lato leading-relaxed">
              We started as a small team of mushroom enthusiasts who believed that access to quality fungi shouldn't be complicated. Today we serve hundreds of customers across Canada — from home cooks and wellness seekers to restaurants and researchers.
            </p>
            <p className="text-sm text-gray-500 nav-lato leading-relaxed">
              Our commitment to transparency, quality, and community is at the heart of everything we do. We're proud to be Ottawa's go-to mushroom destination.
            </p>
          </div>
        </section>

        <CtaBanner />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
