import React, {FC} from 'react';
import "./header.scss";

const Header: FC = () => {
    return (
        <header>
            <HeaderItem title="Home" scrollEl="home-block--ctr"/>
            <HeaderItem title="About me" scrollEl="about-block"/>
            <HeaderItem title="Skills" scrollEl="skills-block--ctr"/>
            <HeaderItem title="Portfolio" scrollEl="portfolio-block--ctr"/>
            <HeaderItem title="Contacts" scrollEl="contacts-block"/>
        </header>
    );
};

const HeaderItem: FC<{ title: string, scrollEl: string }> = ({title, scrollEl}) => {
    const handleClick = () => {
        document.getElementsByClassName(scrollEl)[0].scrollIntoView({block: "start", behavior: "smooth"});
    }

    return (
        <div className="header-item" onClick={handleClick}>
            <p>{title}</p>
        </div>
    );
}

export default Header;