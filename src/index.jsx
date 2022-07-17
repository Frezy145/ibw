import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// importing pages
import Home from './pages/Home';
import Error from './pages/Error';
import IndustrySolutions from './pages/IndustrySolutions';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import FreeTrial from './pages/FreeTrial';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import WhyIB from './pages/WhyIB';

//importing industry-solutions linked pages
import Contractors from './pages/industry-solutions-pages/Contractors';
import Franchisore from './pages/industry-solutions-pages/Franchisore';
import HealthWellness from './pages/industry-solutions-pages/HealthWellness';
import MultiUnit from './pages/industry-solutions-pages/MultiUnit';
import Professionals from './pages/industry-solutions-pages/Professionals';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyle from './utils/styles/GlobalStyle';
import { ThemeProvider, SurveyProvider } from './utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="error" element={<Error/>} />
            <Route path="industry-solutions" element={<IndustrySolutions />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="faq" element={<Faq />} />
            <Route path="free-trial" element={<FreeTrial />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="why-inc-bookkeeping" element={<WhyIB />} />

            <Route path="industry-solutions/contractors" element={<Contractors />} />
            <Route path="industry-solutions/franchisore" element={<Franchisore />} />
            <Route path="industry-solutions/health-wellness" element={<HealthWellness />} />
            <Route path="industry-solutions/multi-unit" element={<MultiUnit />} />
            <Route path="industry-solutions/professionals" element={<Professionals />} />
          </Routes>
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
