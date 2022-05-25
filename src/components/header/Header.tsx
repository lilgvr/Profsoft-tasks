import React, {FC, useState} from 'react';
import "./header.scss";
import photo from "../../assets/images/png/photo.png";

const Header: FC = () => {
    return (
        <header>
            <nav>
                <HeaderItem title='Home' scrollEl='home-block--ctr'/>
                <HeaderItem title='About me' scrollEl='about-block'/>
                <HeaderItem title='Skills' scrollEl='skills-block--ctr'/>
                <HeaderItem title='Portfolio' scrollEl='portfolio-block--ctr'/>
                <HeaderItem title='Contacts' scrollEl='contacts-block'/>
            </nav>

            <div>
                <h1>Denis<br/>Novik</h1>
                <h2>UX | UI Designer <br/> 24 years old, Minsk </h2>
                <LanguageBtn/>
            </div>

            <img src={photo} alt="Denis Novik" height="auto" width="100%"/>
        </header>
    );
};

const HeaderItem: FC<{ title: string, scrollEl: string }> = ({title, scrollEl}) => {
    const handleClick = () => {
        document.getElementsByClassName(scrollEl)[0].scrollIntoView({block: "start", behavior: "smooth"});
    }

    return (
        <p className={"nav-item"} onClick={handleClick}>{title}</p>
    );
}

const LanguageBtn: FC = () => {
    const [selectedRU, setSelectedRU] = useState(false);

    const handleClickEN = () => {
        setSelectedRU(false);
    }

    const handleClickRU = () => {
        setSelectedRU(true);
    }

    return (
        <div className="header__lang">
            <p className={selectedRU ? 'lang-selected' : ''} onClick={handleClickRU}>RU</p>
            <p className="lang-line">&nbsp;|&nbsp;</p>
            <p className={!selectedRU ? 'lang-selected' : ''} onClick={handleClickEN}>ENG</p>
        </div>
    );
}

export default Header;