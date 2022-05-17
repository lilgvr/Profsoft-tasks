import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import HomeBlock from "./components/home-block/HomeBlock";
import AboutBlock from "./components/about-block/AboutBlock";
import SkillsBlock from "./components/skills-block/SkillsBlock";
import PortfolioBlock from "./components/portfolio-block/PortfolioBlock";
import ContactsBlock from "./components/contacts-block/ContactsBlock";

function App() {
    return (
        <div className="container">
            <Header/>
            <HomeBlock/>
            <AboutBlock/>
            <SkillsBlock/>
            <PortfolioBlock/>
            <ContactsBlock/>
        </div>
    );
}

export default App;
