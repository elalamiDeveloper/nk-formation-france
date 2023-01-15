import { Routes, Route } from 'react-router-dom';

import {
  HomePage,
  FormationsPage,
  AboutUsPage,
  ContactPage,
  ConnectPage,
} from './utils/pagesLinks.js';
import { Header, Connect, Footer } from './utils/componentsLinks.js';

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
