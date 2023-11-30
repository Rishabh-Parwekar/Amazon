import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import Contact from './Components/Contact';
import Product from './Components/Product';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import ProductDetail from './Components/ProductDetail';
import PagenotFound from './Components/PagenotFound';



function App() {
  return (
    <>
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/contact' element={<Contact/>} />
          <Route  path='/products' element={<Product/>} />
          <Route path='/products/:id' element={<ProductDetail/>}  />
          <Route path='/*' element={<PagenotFound/>}  />
        </Routes>
      </div>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
