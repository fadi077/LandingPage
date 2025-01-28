import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Herosection from './homescreen/Herosection';
import Logo from './components/Logo';
import ServiceSlider from './homescreen/ServiceSlider';
import BusinessModel from './homescreen/BusinessModel';
import ExampleJob from './components/ExampleJob';
import Testimonals from './components/Testimonals';
import './globals.css';
import Blogsection from './components/Blogsection';
import Cta from './homescreen/Cta';
import Footer from './components/Footer';
import ServicePage from './service/herosection'; 
import Visionsection from "./service/Visionsection";
import Faq from "./service/Faq";
import CTASection from "./service/CTASection";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Herosection />
            <Logo />
            <ServiceSlider />
            <BusinessModel />
            <ExampleJob />
            <Testimonals />
            <Blogsection />
            <Cta />
          </>
        } />
        <Route path="/service" element={
          <>
          
         <ServicePage />
         <Logo />
         <Visionsection />
         <ExampleJob />
         <Testimonals />
         <Faq />
         <CTASection />
         
      </>
      
      } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
