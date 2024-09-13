import React , {useState} from 'react'
import logo from '../logoass.png';
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <header className="header">
                <div>
                    <img src={logo} alt="" className='logo' />
                </div>
                <nav className="navbar">
                    <div className={`navlinks ${isOpen ? 'open' : ''}`}>
                        <a href="#blogs">Blogs</a>
                        <a href="#features">Features</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#integrations">Integrations</a>
                        <a href="#start" className="start-btn">Start trial</a>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </nav>
            </header>
            
            <div className="main-content">
                <div className='topcont'>
                    <h2 className='top'>The World's Most Configurable</h2>
                    <h1>Travel & Expense Management Software</h1>
                    <p>
                        Configure <span className="highlighted-word">any</span> rule. Enable a world-class mobile experience for your users.Get seamless reporting & integrations. Inbuilt OCR expense scanning. Manage travel & non-travel expenses. Open APIs to connect with external systems.
                    </p>
                </div>
                <div className="formdetails">
                    <div className="form">
                        <input type="text" placeholder="Name" className='name'/>
                        <input type="email" placeholder="Official email ID" className='email'/>
                        <button>Start trial</button>
                    </div>
                    <p className="trial-details">
                        30 Days free trial • Upto 10 users
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header
