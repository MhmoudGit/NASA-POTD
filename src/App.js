import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NasaPhoto" element={<NasaPhoto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
