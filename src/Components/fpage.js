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
