import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero2 from '../sections/Hero2/Hero2';
// import Features from '../sections/Features/Features';
import Pricing from './Pricing';
import Index1testimonial from './Index1testimonial';
import "./Index1.css"
import Header from '../../components/Header/Header'
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
        <div className="tp-cta__area">
          <div className="container p-relative">
            {/* <div className="tp-cta__thumb">
            <img src={homeData.cta_thumbnail} alt="" />
          </div>
          <div className="tp-cta__thumb-2 d-none d-lg-block">
            <img src={homeData.cta_logo} alt="" />
          </div> */}
            <div className="tp-cta__bg grey-bg">
              <div className="row">
                <div className="col-xl-7 col-lg-8 col-md-12">
                  <div className="tp-cta__item-left">
                    <h3 className="tp-cta__title">حوّل السلات المتروكة إلى مبيعات 🚀</h3>
                    {/* <h3 className="tp-cta__title">{homeData.cta?.title}</h3> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Platform Area */}
      <div className="tp-platform__area pb-120 pt-160">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-platform__wrapper p-relative">
                <div className="tp-platform__shape-1">
                  <img src="/frontend/platform/pf-3.png" alt="" />
                </div>
                <div className="tp-platform__shape-2">
                  <img src="/frontend/platform/pf-4.png" alt="" />
                </div>
                <div
                  className="tp-platform__thumb z-index wow tpfadeLeft"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                  style={{
                    visibility: 'visible',
                    animationDuration: '0.9s',
                    animationDelay: '0.5s',
                    animationName: 'tpfadeLeft',
                  }}
                >
                  <img
                    src="/frontend/platform/1729805305lC9lk3bRfoHcOhbQxLak.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".8s"
              style={{
                visibility: 'visible',
                animationDuration: '0.9s',
                animationDelay: '0.8s',
                animationName: 'tpfadeRight',
              }}
            >
              <div className="tp-platform__content pl-40">
                <h3 className="tp-section-title-sm pb-25">خدمة إشعارات الواتساب</h3>
                <p className="pb-25">
                  يمكنك الان إرسال إشعارات الطلبات والسلات المتروكة عبر واتساب من خلال مرسل بكل سهولة وبشكل فوري خلال لحظات
                </p>
                <a className="tp-btn-blue" href="https://murseell.com/pricing">
                  <span>ابدأ الآن</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Area */}
      {homeData.features_area === 'active' && (
        <div className="tp-feature__area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tp-feature__section text-center mb-70">
                  <h3 className="tp-section-title">{homeData.features?.title}</h3>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <Features/> */}
              {/* Include your features section component here */}
            </div>
          </div>
        </div>
      )}


      {/* Pricing Area */}
      {/* Include your pricing section component here */}
      <Pricing />

      {/* Account Area */}
      <div className="tp-account__area pt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-account__wrapper">
                <div className="tp-account__section-box">
                  <h3 className="tp-section-title-sm pb-20">{homeData.account_area?.heading}</h3>
                  <span>{homeData.account_area?.subheading}</span>
                  <p>{homeData.account_area?.description}</p>
                </div>
                <div className="tp-account__form p-relative">
                  <form action={homeData.account_area?.form_link}>
                    <div className="tp-account__input">
                      <input type="email" placeholder="example@email.com" name="email" />
                    </div>
                    <button>{'sign up'}<i className="fas fa-paper-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-account__thumb-wrapper p-relative">
                <div className="tp-account__thumb text-center">
                  <img src={homeData.account_area_thumbnail} alt="" />
                </div>
                <div className="tp-account__sm-img-1 d-none d-md-block">
                  <img src={homeData.account_area_top_thumbnail} alt="" />
                </div>
                <div className="tp-account__sm-img-2 d-none d-md-block">
                  <img src={homeData.account_area_bottom_thumbnail} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
