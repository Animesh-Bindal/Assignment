import './Styles/header.scss';
import Header from "./Components/Header.js"
import FeaturePage from "./Components/fpage.js"
import Integration from './Components/Integration.js';
import Testimonials from './Components/Testimonials.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <FeaturePage />
      <Integration />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
