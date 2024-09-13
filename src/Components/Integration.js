import React from 'react'
import '../Styles/Integration.scss';
import icon1 from "../Integicons/1.png";
import icon2 from "../Integicons/2.png";
import icon3 from "../Integicons/3.png";

function Integration() {
  const integrations = [
    {
      title: "HRMS Systems",
      description1: "We can integrate with any HRMS as long as the employee master can be made available to us over SFTP/API.",
      description2: "We are already deeply integrated with PeopleStrong and others are coming up.",
      icon: icon1
    },
    {
      title: "Finance Systems",
      description1: "Connect us with your finance systems to get all cost centers mapped, and all data reconciled on a periodic/regular basis. ",
      description2: "Open APIs available to connect.",
      icon: icon2
    },
    {
      title: "Single Sign-on Systems",
      description1: "We can integrate to ensure that your users don’t have to log in multiple times into different logins.",
      description2: "SSO is possible with any system that offers it.",
      icon: icon3
    }
  ];
  return (
    <div>
      <div className="integration-page">
        <div className="section-integrations">
          <p className='intp'>Integrations</p>
          <div className="hierarchy">
            <div className='vert'></div>
            <div className="line"></div>
            <div className="three">
              <div className='vert'></div>
              <div className='vert'></div>
              <div className='vert'></div>
            </div>
          </div>
          <div className="integration-cards">
            {integrations.map((integration, index) => (
              <div key={index} className={`integration-card ${integration.title === "HRMS Systems" ? 'orange' : integration.title === "Finance Systems" ? 'green' : integration.title === "Single Sign-on Systems" ? 'bluee' : ''}`}>
                <div className='top'>
                  <img src={integration.icon} alt={`${integration.title} icon`} />
                  <h3>{integration.title}</h3>
                </div>
                <p className='first'>{integration.description1}</p>
                <p className='second'>{integration.description2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Integration
