// import React from 'react';
import './Plans.css';
import PropTypes from 'prop-types';

const PricingSection = ({ plans }) => {
    return (
        <div id="price" className="tp-price__area tp-price__border pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-10">
                        <div className="tp-price__section text-center pb-60">
                            <h3 className="tp-section-title-sm pb-20">التسعير ليناسب جميع أحجام الأعمال</h3>
                            <span>*نحن نساعد الشركات من جميع الأحجام</span>
                        </div>
                    </div>
                </div>

                <div className="row g-0 align-items-end align-items-lg-center">
                    {plans?.map((plan, index) => (
                        <div
                            key={index}
                            className="plan col-xl-4 col-lg-4 col-md-6 mb-30"
                        >
                            <div
                                className={`tp-price__item ${plan.highlighted ? 'tp-price__active plan-active z-index' : ''}`}
                                style={{
                                    backgroundColor: plan.highlighted ? '#017EFA' : '',
                                    color: plan.highlighted ? 'white' : '',
                                }}
                            >
                                <div className="tp-price__icon d-flex justify-content-between align-items-center">
                                    <span style={{ fontSize: '18px', color: plan.highlighted ? 'white' : '' }}>{plan.name}</span>
                                    {plan.highlighted && (
                                        <div className="plan-badge">الأكثر طلباً</div>
                                    )}
                                </div>

                                <h3 className="tp-price__title" style={{ textAlign: 'right', color: plan.highlighted ? 'white' : '' }}>
                                    {plan.price} <small className="tp-price__small_title">/سنة</small>
                                </h3>

                                <div className={`tp-price__list ${plan.highlighted ? 'plan-active' : ''}`}>
                                    <ul>
                                        {plan.features?.map((feature, i) => (
                                            <li key={i} style={{ textAlign: 'right', color: plan.highlighted ? 'white' : '' }}>
                                                <img src="/frontend/plans/check-icon.svg" alt="✔" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={`tp-price__btn ${plan.highlighted ? 'plan-active' : ''}`}>
                                    <a className="tp-btn-border" href={plan.link}>
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
