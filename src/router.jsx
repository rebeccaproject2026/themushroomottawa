import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import Wishlist from './pages/Wishlist'
import Contact from './pages/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
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
    path: '*',
    element: <NotFound />
  }
])
