import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import { useEffect } from 'react';
import ProductInfo from './pages/productinfo/ProductInfo';
import WhatsAppButton from './components/whatsappbutton/WhatsAppButton';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/productdetails' element={<ProductInfo/>}/>
     </Routes>
     <WhatsAppButton/>
    </>
  )
}

export default App
