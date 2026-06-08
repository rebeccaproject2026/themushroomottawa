import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Home is eagerly loaded as it's the main entry point
import Home from './pages/Home'

// Lazy load all other pages
const NotFound = lazy(() => import('./pages/NotFound'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Wishlist = lazy(() => import('./pages/Wishlist'))
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About'))
const Faqs = lazy(() => import('./pages/Faqs'))
const News = lazy(() => import('./pages/News'))
const NewsDetail = lazy(() => import('./pages/NewsDetail'))
const MagicMushrooms = lazy(() => import('./pages/MagicMushrooms'))
const Microdosing = lazy(() => import('./pages/Microdosing'))
const MushroomEdibles = lazy(() => import('./pages/MushroomEdibles'))
const Cart = lazy(() => import('./pages/Cart'))
const Shop = lazy(() => import('./pages/Shop'))
const Ottawa = lazy(() => import('./pages/Ottawa'))
const AreaShop = lazy(() => import('./pages/AreaShop'))
const ReturnPolicy = lazy(() => import('./pages/ReturnPolicy'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-10 h-10 border-4 border-gray-200 border-t-[#003465] rounded-full animate-spin"></div>
  </div>
)

const withSuspense = (Component) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: withSuspense(NotFound)
  },
  {
    path: '/shop',
    element: withSuspense(Shop)
  },
  {
    path: '/cart',
    element: withSuspense(Cart)
  },
  {
    path: '/product/:id',
    element: withSuspense(ProductDetail)
  },
  {
    path: '/wishlist',
    element: withSuspense(Wishlist)
  },
  {
    path: '/contact',
    element: withSuspense(Contact)
  },
  {
    path: '/about',
    element: withSuspense(About)
  },
  {
    path: '/faqs',
    element: withSuspense(Faqs)
  },
  {
    path: '/news',
    element: withSuspense(News)
  },
  {
    path: '/news/:id',
    element: withSuspense(NewsDetail)
  },
  {
    path: '/magic-mushrooms',
    element: withSuspense(MagicMushrooms)
  },
  {
    path: '/microdosing',
    element: withSuspense(Microdosing)
  },
  {
    path: '/mushroom-edibles',
    element: withSuspense(MushroomEdibles)
  },
  {
    path: '/ottawa',
    element: withSuspense(Ottawa)
  },
  {
    path: '/area/:slug',
    element: withSuspense(AreaShop)
  },
  {
    path: '/return-policy',
    element: withSuspense(ReturnPolicy)
  },
  {
    path: '/privacy-policy',
    element: withSuspense(PrivacyPolicy)
  },
  {
    path: '*',
    element: withSuspense(NotFound)
  }
])
