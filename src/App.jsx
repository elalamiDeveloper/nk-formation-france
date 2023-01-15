import { Routes, Route } from 'react-router-dom';

import { Header, Connect, Footer } from './utils/components.js';

import {
  HomePage,
  FormationsPage,
  AboutUsPage,
  ContactPage,
  ConnectPage,
} from './utils/pagesLinks.js';

// import Header from './components/sections/header/Header';
// import HomePage from './pages/home/home-page.component';
// import FormationsPage from './pages/formations/FormationsPage';
// import AboutUsPage from './pages/about-us/AboutUs';
// import ContactPage from './pages/contact/contact.component';
// import ConnectPage from './pages/connect/ConnectPage';
// import Connect from './components/sections/connect/Connect';
// import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/formations" element={<FormationsPage />}></Route>
        <Route path="/about-us" element={<AboutUsPage />}></Route>
        <Route path="/connect" element={<ConnectPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
