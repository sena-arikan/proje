import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BenKimim from './components/BenKimim';
import NelerYapabilirim from './components/NelerYapabilirim';
import Portfolyo from './components/Portfolyo';
import Iletisim from './components/Iletisim';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ben-kimim" element={<BenKimim />} />
                <Route path="/neler-yapabilirim" element={<NelerYapabilirim />} />
                <Route path="/portfolyo" element={<Portfolyo />} />
                <Route path="/iletisim" element={<Iletisim />} />
            </Routes>
        </Router>
    );
}

export default App;