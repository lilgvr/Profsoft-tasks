import React, {Fragment, useState} from 'react';
import './App.css';
import Header from "./components/header/Header";
import HomeBlock from "./components/home-block/HomeBlock";
import AboutBlock from "./components/about-block/AboutBlock";
import SkillsBlock from "./components/skills-block/SkillsBlock";
import PortfolioBlock from "./components/portfolio-block/PortfolioBlock";
import ContactsBlock from "./components/contacts-block/ContactsBlock";
import Media from "react-media";
import MenuContext from "./service/MenuContext";
import Menu from "./components/home-block/mobile/Menu";
import HomeBlockMobile from "./components/home-block/mobile/HomeBlockMobile";


function App() {
    const [menuOpened, setMenuOpened] = useState(false);
    const contextValue = {menuOpened, setMenuOpened};

    return (
        <div className="container">
            <Media queries={{
                desktopOrLaptop: '(min-width: 1224px)',
                tabletOrMobile: '(max-width: 1224px)',
                bigScreen: '(max-width: 1824px)'
            }}>
                {matches => (
                    <Fragment>
                        {matches.desktopOrLaptop && <Fragment>
                            <Header/>
                            <HomeBlock/>
                            <AboutBlock/>
                            <SkillsBlock/>
                            <PortfolioBlock/>
                            <ContactsBlock/>
                        </Fragment>}
                        {matches.tabletOrMobile && <MenuContext.Provider value={contextValue}>
                            {menuOpened ? (
                                <Menu/>
                            ) : (
                                <Fragment>
                                    <HomeBlockMobile/>
                                    <AboutBlock/>
                                    <SkillsBlock/>
                                    <PortfolioBlock/>
                                    <ContactsBlock/>
                                </Fragment>
                            )}
                        </MenuContext.Provider>}
                    </Fragment>
                )}
            </Media>
        </div>
    );
}

export default App;
