// import React from 'react';
import './platform.css';

const PlatformSection = () => {
    return (
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
                            <div className="tp-platform__thumb z-index">
                                <img src="/frontend/platform/1729805305lC9lk3bRfoHcOhbQxLak.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
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
    );
};

export default PlatformSection;