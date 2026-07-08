import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Footer from './components/Footer';
import CenterSlider from './components/CenterSlider';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Banner />
    <About />
    <CenterSlider />
    <Footer />
    </>
  )
}

export default App
