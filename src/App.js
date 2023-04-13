import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Home from "./components/Home/Home";
import About from "./components/About_Us/About";
import GameUnfold from "./components/GameUnfold";
import Announcement from "./components/Announcement.js/Announcement";
import Finances from "./components/Finances/Finances";
import PrivacyPolicy from "./components/Privacy_Policy/PrivacyPolicy";
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";


// styles
import './styles/App.css'
import './styles/Header.css'
import './styles/Home.css'
import './styles/LogoSection.css'
import './styles/Footer.css'
import './styles/About.css'
import './styles/TopSection.css'
import './styles/GameUnfold.css'
import './styles/Announcement.css'
import './styles/Finances.css'
import './styles/PrivacyPolicy.css'
import './styles/Contact.css'
import './styles/ImageSlider.css'
import './styles/media-query.css'
import './styles/media-query-about.css'
import './styles/media-query-game-unfold.css'
import './styles/media-query-finance.css'
import './styles/media-query-contact.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}>
          <Route path="home" element = {<Home/>}/>
        </Route>
        <Route path="about" element = {<About/>}/>
        <Route path="game-unfold" element = {<GameUnfold/>}/>
        <Route path="finances" element = {<Finances />} />
        <Route path="announcements" element = {<Announcement />} />
        <Route path="privacy-policy" element = {<PrivacyPolicy/>}/>
        <Route path="contact-us" element = {<Contact/>}/>
        <Route path="*" element = {<PageNotFound/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
