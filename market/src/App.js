
import './App.scss';
import Banner from './components/Banner/Banner';
import BestProduct from './components/BestProduct/BestProduct';
import BrandStory from './components/BrandStory/BrandStory';
import Footer from './components/Footer/Footer';
import Issue from './components/Issue/Issue';

import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import WhatHappen from './components/WhatHappen/WhatHappen';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <BestProduct/>
      <Product/>
      <BrandStory/>
      <Issue/>
      <WhatHappen/>
      <Footer/>
    </div>
  );
}

export default App;
