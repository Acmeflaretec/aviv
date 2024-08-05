import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {

  return (
    <>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default App
