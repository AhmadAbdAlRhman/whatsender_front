import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "./Header.css"; // استيراد التنسيقات

const Header = ({isAuthenticated}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header>
    <div className="tp-header__area tp-header__space-2 tp-header__transparent tp-header__menu-space header-sticky">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-2 col-md-6 col-6">
            <div className="tp-header__logo">
              <a href="https://murseell.com">
                <img src="https://murseell.com/uploads/24/10/1729805275MOvQIrbC3G0oVC9E2FYl.png" alt="logo" />
              </a>
            </div>
          </div>

          <div className="col-xl-7 col-lg-7 d-none d-lg-block">
            <div className="tp-header__main-menu tp-header__black-menu">
              <nav id="mobile-menu">
                <ul>
                  <li><a href="https://murseell.com">الرئيسية</a></li>
                  <li><a href="https://murseell.com/pricing">التسعير</a></li>
                  <li><a href="https://murseell.com/about">من نحن</a></li>
                  <li><a href="https://murseell.com/features">الميزات</a></li>
                  <li><a href="https://murseell.com/blogs">المدونات</a></li>
                  <li><a href="https://murseell.com/contact">اتصل بنا</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-6">
            <div className="tp-header__right-two d-flex align-items-center justify-content-end">
              <a className="tp-btn-blue d-none d-lg-block" href="https://murseell.com/login">
                <span>تسجيل الدخول</span>
              </a>
              <a className="tp-btn-blue d-none d-md-block" href="https://murseell.com/pricing">
                <span>ابدأ</span>
              </a>
              <button className="tp-header__bars tp-menu-bar d-lg-none" onClick={toggleSidebar}>
                <i className="far fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Sidebar overlay */}
    <div className={`mobile-sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>

    {/* Sidebar menu */}
    <div className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={closeSidebar}>×</button>
      <ul>
        <li><a href="https://murseell.com" onClick={closeSidebar}>الرئيسية</a></li>
        <li><a href="https://murseell.com/pricing" onClick={closeSidebar}>التسعير</a></li>
        <li><a href="https://murseell.com/about" onClick={closeSidebar}>من نحن</a></li>
        <li><a href="https://murseell.com/features" onClick={closeSidebar}>الميزات</a></li>
        <li><a href="https://murseell.com/blogs" onClick={closeSidebar}>المدونات</a></li>
        <li><a href="https://murseell.com/contact" onClick={closeSidebar}>اتصل بنا</a></li>
      </ul>
    </div>
  </header>
    
  );
};

export default Header;
