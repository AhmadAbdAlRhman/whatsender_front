import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero2 from '../sections/Hero2/Hero2';
// import Features from '../sections/Features/Features';
// import Pricing from './Pricing';
import Index1testimonial from './Index1testimonial';
import "./Index1.css"
import Header from '../../components/Header/Header'
import Platform from '../sections/Platform/platform';
import CTA from '../sections/CTA/CTA';
import PricingPage from '../sections/Plans/PricingPage ';
import AccountArea from '../sections/account-area/account-area';

// import {stripHtmlTags} from "../../utils/function";

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
      <PricingPage/>
      {/* Account Area */}
      <AccountArea/>
     
      {/* Testimonial Area */}
      {/* Include your testimonial section component here */}
      <Index1testimonial />
      {/* CTA Area */}
      <div className="tp-cta__area p-relative">
        <div className="tp-cta__grey-bg grey-bg"></div>
        <div className="tp-cta__white-bg white-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-cta__wrapper-2 theme-bg p-relative">
                <div className="tp-cta__shape-1">
                  <img src="/assets/frontend/img/cta/cta-shape-1.png" alt="" />
                </div>
                <div className="tp-cta__shape-2">
                  <img src="/assets/frontend/img/cta/cta-shape-2.png" alt="" />
                </div>
                <div className="tp-cta__shape-3">
                  <img src="/assets/frontend/img/cta/cta-shape-3.png" alt="" />
                </div>
                <div className="tp-cta__shape-4">
                  <img src="/assets/frontend/img/cta/cta-shape-4.png" alt="" />
                </div>
                <div className="tp-cta__shape-5">
                  <img src="/assets/frontend/img/cta/cta-shape-5.png" alt="" />
                </div>
                <div className="tp-cta__item text-center">
                  <h3 className="tp-section-title text-white pb-30">{homeData.calltoaction?.title}</h3>
                  <a className="tp-btn-sky" href={homeData.calltoaction?.button_link}>
                    <span>{homeData.calltoaction?.button_title}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Area */}
      <div className="tp-faq__area pt-120 pb-110">
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-xl-5 col-lg-6">
              <div className="tp-faq__right-side text-center">
                <div className="tp-faq__icon">
                  <a href="#">
                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.9542 23.9764L0 29V0H30V23.9764H5.9542Z" fill="#017EFA" />
                    </svg>
                  </a>
                </div>
                <div className="tp-faq__content">
                  <h4 className="tp-faq__faq-sm-title">{'Do you have more questions?'}</h4>
                  <p>{'faq_description'}</p>
                  <a className="w-100" href="/contact">{'Shoot a Direct Mail'}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index1;
