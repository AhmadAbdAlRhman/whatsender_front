import { useState } from 'react';
import axios from 'axios';
import './account-area.css';

const AccountSection = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await axios.post('https://murseell.com/pricing', {
                email: email
            });

            setMessage(response + '✅ تم إرسال البريد الإلكتروني بنجاح!');
        } catch (error) {
            setMessage(error + '❌ حدث خطأ أثناء الإرسال. حاول مرة أخرى.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="account-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 fade-left">
                        <div className="account-wrapper">
                            <div className="account-section-box">
                                <h3 className="section-title-sm">اشترك الآن</h3>
                                <span></span>
                                <p>أدخل بريدك الإلكتروني لتصلك عروضنا المميزة</p>
                            </div>
                            <div className="account-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="account-input">
                                        <input
                                            type="email"
                                            placeholder="example@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" disabled={loading}>
                                        {loading ? 'جاري الإرسال...' : 'سجل الآن'} <i className="fas fa-paper-plane"></i>
                                    </button>
                                    {message && <p className="form-message">{message}</p>}
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 fade-right">
                        <div className="account-thumb-wrapper">
                            <div className="account-thumb">
                                <img src="/frontend/account-area/1678140032Wxqq2w6cndL4uWiEHf8B.png" alt="" />
                            </div>
                            <div className="account-sm-img img-1">
                                <img src="/frontend/account-area/1678039536eRShFlGn3Uw9tN1X14E0.png" alt="" />
                            </div>
                            <div className="account-sm-img img-2">
                                <img src="/frontend/account-area/16780395365JXHyeVBXUVAldB1V5Se.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSection;
