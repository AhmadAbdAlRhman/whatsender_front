// import React from 'react';
import './Plans.css';
import PropTypes from 'prop-types';

const PricingSection = ({ plans }) => {
    return (
        <div id="price" className="pt-120 pb-90">
            <div className="pricing-container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-10">
                        <div className="text-center pb-60">
                            <h3 className="pricing-title pb-20">التسعير ليناسب جميع أحجام الأعمال</h3>
                            <span className="pricing-subtitle">*نحن نساعد الشركات من جميع الأحجام</span>
                        </div>
                    </div>
                </div>
                <div className="pricing-cards row g-0 align-items-end align-items-lg-center">
                    {plans?.map((plan, index) => (
                        <div
                            key={index}
                            className="row col-12 col-md-6 col-lg-4"
                        >
                            <div
                                className={`pricing-card ${plan.highlighted ? 'tp-price__active plan-active z-index' : ''}`}
                                style={{
                                    backgroundColor: plan.highlighted ? '#017EFA' : '',
                                    color: plan.highlighted ? 'white' : '',
                                }}
                            >
                                <div className="pricing-header d-flex justify-content-between align-items-center">
                                    <span style={{ fontSize: '18px', color: plan.highlighted ? 'white' : '' }}>{plan.name}</span>
                                    {plan.highlighted && (
                                        <div className="popular-badge">الأكثر طلباً</div>
                                    )}
                                </div>

                                <h3 className="pricing-price" style={{ textAlign: 'right', color: plan.highlighted ? 'white' : '' }}>
                                    {plan.price} <small>/سنة</small>
                                </h3>

                                <div className={`tp-price__list ${plan.highlighted ? 'plan-active' : ''}`}>
                                    <ul className="pricing-features">
                                        {plan.features?.map((feature, i) => (
                                            <li key={i} style={{ textAlign: 'right', color: plan.highlighted ? 'white' : '' }}>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={`tp-price__btn ${plan.highlighted ? 'plan-active' : ''}`}>
                                    <a className="pricing-btn tp-btn-border" href={plan.link}>
                                        <span>اشترك الأن</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
PricingSection.propTypes = {
    plans: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.string,
            duration: PropTypes.string,
            trial_days: PropTypes.number,
            features: PropTypes.arrayOf(PropTypes.string),
            link: PropTypes.string,
            highlighted: PropTypes.bool,
        })
    ).isRequired,
}
export default PricingSection;
