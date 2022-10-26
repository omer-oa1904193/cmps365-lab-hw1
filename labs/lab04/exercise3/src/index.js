import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Gallery } from 'pages/Gallery';
import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Country } from 'pages/Country';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Layout from 'layouts/Layout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/gallery">
            <Route index element={<Gallery></Gallery>}></Route>
            <Route path=":code" element={<Country></Country>}></Route>
          </Route>
          <Route path="/about" element={<About></About>} />
          <Route path="*" element={<Layout><p>404</p></Layout>} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
