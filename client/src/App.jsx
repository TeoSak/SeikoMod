import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { DiscountBanner } from './components/DiscountBanner.jsx';
import { Home } from './pages/home/Home.jsx';
import { Footer } from './components/Footer.jsx';
import { Shop } from './pages/shop/Shop.jsx';
import { Item } from './pages/item/Item.jsx';
import { History } from './pages/history/History.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { ContactUs } from './pages/ContactUs/ContactUs.jsx';
import { Login } from './pages/login/Login.jsx';
import { Signup } from './pages/login/Signup.jsx';
import { Cart } from './pages/cart/Cart.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { Toaster } from 'react-hot-toast';
import { Configurator } from './pages/configurator/Configurator.jsx';

function App() {

  return (
    <>
      <Toaster position="top-right" />
      <DiscountBanner />
      <CartProvider>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/item/:id' element={<Item />} />
          <Route path='/history' element={<History />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/configurator' element={<Configurator />} />
        </Routes>
      </CartProvider>
      <Footer />
    </>
  )
}

export default App
