import { useEffect, useState } from 'react';
import PricingSection from './Plans';
import axios from 'axios';

const PricingPage = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get('http://localhost:3010/pricing');
        setPlans(res.data); // هون بنستخدم res.data مباشرة لأن axios بيحلل الـ JSON لحالو
        console.log('الخطط:', res.data);
      } catch (err) {
        console.error('خطأ بجلب البيانات:', err);
      }
    };

    fetchPlans();
  }, []);

  return <PricingSection plans={plans} />;
};

export default PricingPage;
