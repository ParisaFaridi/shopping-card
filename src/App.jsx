import { Navigate, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import NoMatch from './pages/NoMatch'
import ProductsProvider from './context/ProductsContext'
import CartProvider from './context/CartContext'
import Layout from './layout/Layout'


function App() {

  return (
    <>
    
    <CartProvider>
    <ProductsProvider>
    <Layout>
      <Routes>
        <Route index  element={<Navigate to="/products" replace/>}/>
        <Route path='/products/:id' element={<ProductPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path="*"  element={<NoMatch />} />
      </Routes>
      </Layout>
    </ProductsProvider>
    </CartProvider>
   
    </>
  )
}

export default App
