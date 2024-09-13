import React from 'react'
import "../Styles/footer.scss";
import logo from '../logo2.png';
import loc from "../footericons/location.png";
import call from "../footericons/call.png";
import linkedin from "../footericons/in.png";
import youtube from "../footericons/yt.png";
import inst from "../footericons/inst.png";

function Footer() {
    return (
        <div className='footer'>
            <div className="main">
                <div className='topcont'>
                    <h2 className='top'>Manage your travel & expenses the smart way!</h2>
                </div>
                <div className="formdetails">
                    <div className="form">
                        <input type="text" placeholder="Name" className='name' />
                        <input type="email" placeholder="Official email ID" className='email' />
                        <button>Start trial</button>
                    </div>
                    <p className="trial-details">
                        30 Days free trial • Upto 10 users
                    </p>
                </div>
            </div>

            <div className="foot">
                <div className="foottop">
                    <div className='lgo'>
                        <img src={logo} alt="" className='logo' />
                    </div>
                    <div className='rightt'>
                        <div className="addr">
                            <img src={loc} alt="" />
                            <p>Address</p>
                        </div>
                        <div className="ph">
                            <img src={call} alt="" />
                            <p>+91 1234567890</p>
                        </div>
                        <div className="bottomm">
                            <p>Social Media</p>
                            <img src={linkedin} alt="" />
                            <img src={youtube} alt="" />
                            <img src={inst} alt="" />
                        </div>
                    </div>
                </div>

                <div className="footbot">
                    <div className="footnav">
                        <a href="#blogs">Blogs</a>
                        <a href="#features">Features</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#integrations">Integrations</a>
                    </div>
                    <div className="copyr">
                        <p>Copyright &copy; 2024 . ExpenseBook</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
