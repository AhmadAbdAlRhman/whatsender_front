import "./ChooseSection.css"; // استيراد ملف التنسيقات
import CountUp from "react-countup"; // استيراد مكتبة العد التزايدي
import { useInView } from "react-intersection-observer"; // استيراد مراقب التمرير

const ChooseSection = () => {
  const counters = [
    {
      icon: "/frontend/choose/1678120554hneDbhf9WG6aXvdV0h6q.png",
      number: 1200,
      text: "العملاء النشطون",
    },
    {
      icon: "/frontend/choose/1678120554PcP79pqqlziQ71Yf1T70.png",
      number: 390,
      text: "إجمالي العملاء",
    },
    {
      icon: "/frontend/choose/1678120554dGH99dtfF4slpDVVHjT1.png",
      number: 600,
      text: "تقييمات إيجابية",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // التأكد من تشغيل التأثير مرة واحدة فقط
    threshold: 0.3, // يبدأ التأثير عندما يكون 30% من العنصر ظاهرًا
  });

  return (
    <>
      <div
      className="tp-choose__area"
      style={{
        backgroundImage: 'url("/frontend/choose/choose-bg.png")',
      }}
    >
      <div className="container_choose">
        <div className="row">
          <div className="col-12">
            <div className="tp-choose__title-box text-center">
              <h3 className="tp-section-title text-white mb-20">لماذا تختار مُرسل🎖️</h3>
              <h5 className="tp-choose__subtitle text-white">ابدأ الآن</h5>
            </div>
            <div className="tp-choose__thumb-box">
              <div className="tp-choose__thumb-sm">
                <a href="https://murseell.com/pricing">
                  <img
                    src="/frontend/choose/1678120554l1bhGUjz28tmiBtCqTK6.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="tp-choose__thumb-sm">
                <a href="https://murseell.com/pricing">
                  <img
                    src="/frontend/choose/1678120554IAVDm9xBLZXYtGAamM0I.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="counter-area">
      <div className="theme-bg" />
      <div className="grey-bg" />
      <div className="container_counter">
        <div className="row">
          {counters.map((item, index) => (
            <div className="col" key={index}>
              <div className="counter-item">
                <div className="counter-icon">
                  <img src={item.icon} alt={item.text} />
                </div>
                <div className="counter-content">
                  <span className="counter-number">{inView ? (
                        <CountUp start={0} end={item.number} duration={3} />
                      ) : (
                        "0"
                      )}</span>
                  <p className="counter-label">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ChooseSection;
