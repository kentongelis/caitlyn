import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './Main';
import Home from './Home';
import Photo from './Photo';
import Restaraunt from './Restaraunt';
import Timeline from './Timeline';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)


root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/photos" element={<Photo />} />
        <Route path="/restaraunts" element={<Restaraunt />} />
        <Route path="/timeline" element={<Timeline />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
