import React from 'react'
import '../Styles/fpage.scss';
import logo from "../hotjar.png";

import img1 from "../featureicons/1.png";
import img2 from "../featureicons/2.png";
import img3 from "../featureicons/3.png";
import img4 from "../featureicons/4.png";
import img5 from "../featureicons/5.png";
import img6 from "../featureicons/6.png";
import img7 from "../featureicons/7.png";
import img8 from "../featureicons/8.png";
import img9 from "../featureicons/9.png";

function fpage() {
  const features = [
    { title: "Setup Employee Groups", description: "Use any parameter to setup distinct employee groups to implement policies.", icon: img1 },
    { title: "The Definitive Rule Engine", description: "Configure ANY policy - and if you can't configure it, we promise to work on it for free.", icon: img2 },
    { title: "Customized Reports", description: "Setup the reports that you want using our seamless reporting engine.", icon: img3 },
    { title: "Superior Employee Experience", description: "Manage all expenses and travel requests easily. Empower your employees with personalized reports.", icon: img4 },
    { title: "Easy Integrations", description: "Integrate with your upstream, HRMS or downstream finance system to seamlessly deliver value through our Open APIs.", icon: img5 },
    { title: "Configurable Workflows", description: "Configure approvals or rejections. Escalations and reports. At will. Setup new groups.", icon: img6 },
    { title: "Scan any Bill", description: "The world's best OCR system backs up this product. All data goes in. 99% success.", icon: img7 },
    { title: "AI-Based Concierge", description: "Ask the concierge to change things during your travel – and it will trigger relevant actions 24×7.", icon: img8, comingSoon: true },
    { title: "AI-Assisted Trip Planning", description: "Just tell us what you want to do in normal language and we will try and put together the best itinerary for you.", icon: img9, comingSoon: true }
  ];
  const logos = Array(6).fill(null);
  return (
    <div className="features-page">
      <div className="logocont">
        <div className="contt">
          <p>USED BY OVER 50 ENTERPRISES</p>
        </div>
        <div className="logos">
          {logos.map((_, index) => (
            <img key={index} src={logo} alt="Logo" />
          ))}
        </div>
        {/* <div className="logos">
                <img src={logo} alt="Hotjar logo" />
                <img src={logo} alt="Hotjar logo" />
                <img src={logo} alt="Hotjar logo" />
                <img src={logo} alt="Hotjar logo" />
                <img src={logo} alt="Hotjar logo" />
                <img src={logo} alt="Hotjar logo" />
          </div> */}

      </div>
      <div className="featuress">
        <h2>Features that suit your needs</h2>
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="top">
                <img src={feature.icon} alt={feature.title} />
                <h3 className={feature.comingSoon ? 'ftitle' : ''}>{feature.title}</h3>
                {feature.comingSoon && <div className="coming-soon">Coming soon</div>}
              </div>
              <div className='desc'>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default fpage
