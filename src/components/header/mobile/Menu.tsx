import React, {FC, useContext, useState} from 'react';
import close from "../../../assets/images/svg/close.svg";
import MenuContext from "../../../service/MenuContext";
import "../header.scss";

const Menu: FC = () => {
    const {menuOpened, setMenuOpened} = useContext(MenuContext);
    const handleClick = () => {
        setMenuOpened(!menuOpened);
    }

    return (
        <nav className="menu">
            <div>
                <MenuItem title='Home' scrollEl='header__info' selected/>
                <img src={close} alt="Close" onClick={handleClick}/>
            </div>
            <MenuItem title='About me' scrollEl='about'/>
            <MenuItem title='Skills' scrollEl='skills'/>
            <MenuItem title='Portfolio' scrollEl='portfolio'/>
            <MenuItem title='Contacts' scrollEl='contacts'/>
            <LanguageBtn/>
        </nav>
    );
};

const MenuItem: FC<{ title: string, scrollEl: string, selected?: boolean }> = ({title, scrollEl, selected}) => {
    const {menuOpened, setMenuOpened} = useContext(MenuContext);

    const handleClick = () => {
        setMenuOpened(!menuOpened);
        document.getElementsByClassName(scrollEl)[0].scrollIntoView({block: "start", behavior: "smooth"});
    }

    return (
        <p className={selected ? 'selected' : ''} onClick={handleClick}>{title}</p>
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
        <div className="lang-btn">
            <p className={selectedRU ? 'lang-selected' : ''} onClick={handleClickRU}>RU</p>
            <p className="lang-line">&nbsp;|&nbsp;</p>
            <p className={!selectedRU ? 'lang-selected' : ''} onClick={handleClickEN}>ENG</p>
        </div>
    );
}

export default Menu;