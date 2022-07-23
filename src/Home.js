// import logo from './logo.svg';
// import './App.css';
import './index.css';
import Navbar from './Navbar';
import Header from './Header';
import HowItWorks from './HowItWorks';
import Aboutus from './Aboutus';
import Services from './Services';
import Contactus from './Contactus';
 

function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <HowItWorks />
    <Aboutus />
    <Services />
    <Contactus />
    
    </>
  );
}

export default Home;
