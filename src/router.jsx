import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'

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
    path: '*',
    element: <NotFound />
  }
])
