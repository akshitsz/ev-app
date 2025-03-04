import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutEVs from './components/AboutEVs';
import Models from './components/Models';
import ChargingStation from './components/ChargingStation';
import EVNews from './components/EVNews';
import './styles/App.css'; // Import global styles

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-evs" element={<AboutEVs />} />
                <Route path="/models" element={<Models />} />
                <Route path="/charging-station" element={<ChargingStation />} />
                <Route path="/ev-news" element={<EVNews />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
