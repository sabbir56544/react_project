import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import ChooseUs from './Components/ChooseUs';
import Service from './Components/Service';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Error from './Components/Error';
import ChooseDetails from './Components/ChooseDetails';
import Count from './Components/State/Count';
import Country from './Components/State/Country';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero year="20" />}  />
        <Route path="/about" element={<About />} />
        <Route path="/chooseus" element={<ChooseUs />} />
        <Route path="/chooseus/:id" element={<ChooseDetails />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/usestate" element={<Count />} />
        <Route path="/useffect" element={<Country />} />
        <Route path="*" element={<Error />} />
        
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
