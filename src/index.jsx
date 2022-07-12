import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from './components/Banner';
import Home from './pages/Home';
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
          <GlobalStyle>
            
            <Banner />
            
            <Routes>
            
              <Route exact path="/">
                <Home />
              </Route>
              
            </Routes>
            
          </GlobalStyle>
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
