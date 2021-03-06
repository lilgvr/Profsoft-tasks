import React, {FC} from 'react';
import "./header.scss";
import photo from "../../assets/images/png/photo.png";
import LanguageBtn from "./language-btn/LanguageBtn";

const Header: FC = () => {
    return (
        <header>
            <nav>
                <NavItem title='Home' scrollEl='header__info'/>
                <NavItem title='About me' scrollEl='about'/>
                <NavItem title='Skills' scrollEl='skills'/>
                <NavItem title='Portfolio' scrollEl='portfolio'/>
                <NavItem title='Contacts' scrollEl='contacts'/>
            </nav>

            <div className="header__info">
                <h1>Denis<br/>Novik</h1>
                <h2>UX | UI Designer<br/>24 years old, Minsk</h2>
                <LanguageBtn/>
            </div>

            <img src={photo} alt="Denis Novik" height="auto" width="100%"/>
        </header>
    );
};

const NavItem: FC<{ title: string, scrollEl: string }> = ({title, scrollEl}) => {
    const handleClick = () => {
        document.getElementsByClassName(scrollEl)[0].scrollIntoView({block: "start", behavior: "smooth"});
    }

    return (
        <span onClick={handleClick}>{title}</span>
    );
}

export default Header;