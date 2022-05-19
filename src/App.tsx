import React, {Fragment, useCallback, useEffect, useState} from 'react';
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
    const [requestContent, setRequestContent] = useState({});

    const fetchPost = useCallback(async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const title = 'myTitle', body = 'myBody', userId = 543;
        const params = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, body, userId})
        };

        let response = await fetch(url, params).then(res => {
            if (!res.ok) {
                throw new Error(`HTTP-статус: ${res.status}`);
            }
            return res.json();
        }).catch(err => {
            console.error(err);
        });

        if (response) {
            setRequestContent(response);
            console.log(response);
        }
    }, []);

    useEffect(() => {
        fetchPost();
    }, [fetchPost]);

    return (
        <div className="container">
            <Media queries={{
                desktopOrLaptop: '(min-width: 1224px)',
                tabletOrMobile: '(max-width: 1224px)',
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
                        {matches.tabletOrMobile && <MenuContext.Provider value={{menuOpened, setMenuOpened}}>
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
