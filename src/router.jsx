import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import Wishlist from './pages/Wishlist'
import Contact from './pages/Contact'
import About from './pages/About'
import Faqs from './pages/Faqs'
import News from './pages/News'
import MagicMushrooms from './pages/MagicMushrooms'
import Microdosing from './pages/Microdosing'
import MushroomEdibles from './pages/MushroomEdibles'
import Cart from './pages/Cart'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/product/:id',
    element: <ProductDetail />
  },
  {
    path: '/wishlist',
    element: <Wishlist />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/faqs',
    element: <Faqs />
  },
  {
    path: '/news',
    element: <News />
  },
  {
    path: '/magic-mushrooms',
    element: <MagicMushrooms />
  },
  {
    path: '/microdosing',
    element: <Microdosing />
  },
  {
    path: '/mushroom-edibles',
    element: <MushroomEdibles />
  },
  {
    path: '*',
    element: <NotFound />
  }
])
