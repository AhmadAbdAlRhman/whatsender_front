import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero2 from '../sections/Hero2/Hero2';
import "./Index1.css"
import Header from '../../components/Header/Header'
import Platform from '../sections/Platform/platform';
import CTA from '../sections/CTA/CTA';
import PricingPage from '../sections/Plans/PricingPage ';
import AccountArea from '../sections/account-area/account-area';
import FaqArea from "../sections/FaqArea/FaqArea";
import CTA2 from "../sections/CTA2/CTA2";
import Footer from "../../components/footer/Footer";
const Index1 = () => {
  const [homeData, setHomeData] = useState({});
  // const [brands, setBrands] = useState([]);
  // const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Fetch home data from the backend
    axios.get('http://localhost:3010/index') // Adjust the URL to your API endpoint
      .then(response => {
        setHomeData(response.data);
        // setBrands(response.data.brands);
      })
      .catch(error => {
        console.error('Error fetching home data:', error);
      });
  }, []);

  //|| Object.keys(homeData).length === 0
  if (!homeData) {
    return <div className="spinner">Loading...</div>;
  }


  return (
    <main>
      <div className="Hero2_CTA">
        <Header />
        {/* Hero Section */}
        <Hero2 />
        {/* CTA Area */}
        <CTA />
      </div>
      {/* Platform Area */}
      <Platform />
      {/* Pricing Area */}
      {/* Include your pricing section component here */}
      <PricingPage />
      {/* Account Area */}
      <AccountArea />
      {/* CTA2 Area */}
      <CTA2 />
      {/* FAQ Area  */}
      <FaqArea />
      {/* Footer Area */}
      <Footer />
    </main>
  );
};

export default Index1;
