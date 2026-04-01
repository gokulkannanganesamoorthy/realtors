import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/layout/SmoothScroll';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Properties from './pages/Properties';
import ScrollToTop from './components/shared/ScrollToTop';

function App() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <div className="relative min-h-screen bg-brand-secondary flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/properties" element={<Properties />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
