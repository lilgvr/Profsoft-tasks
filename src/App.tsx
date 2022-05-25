import React, {useCallback, useEffect, useState} from 'react';
import Header from "./components/header/Header";
import AboutBlock from "./components/about-block/AboutBlock";
import SkillsBlock from "./components/skills-block/SkillsBlock";
import PortfolioBlock from "./components/portfolio-block/PortfolioBlock";
import ContactsBlock from "./components/contacts-block/ContactsBlock";
import Media from "react-media";
import HeaderMobile from "./components/header/mobile/HeaderMobile";

function App() {
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
            console.log(`Результат запроса к \n${url}: `, response);
        }
    }, []);

    useEffect(() => {
        fetchPost();
    }, [fetchPost]);

    return (
        <>
            <Media queries={{
                desktopOrLaptop: '(min-width: 1224px)',
                tabletOrMobile: '(max-width: 1224px)',
            }}>
                {matches => (
                    <>
                        {matches.desktopOrLaptop && <Header/>}
                        {matches.tabletOrMobile && <HeaderMobile/>}
                        <main>
                            <AboutBlock/>
                            <SkillsBlock/>
                            <PortfolioBlock/>
                        </main>
                        <ContactsBlock/>
                    </>
                )}
            </Media>
        </>
    );
}

export default App;
