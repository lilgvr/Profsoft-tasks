import React, {FC, useContext} from 'react';
import close from "../../../assets/images/svg/close.svg";
import MenuContext from "../../../service/MenuContext";
import "../header.scss";
import LanguageBtn from "../LanguageBtn";
import {changeMenuState} from "../../../service/functions";

const Menu: FC = () => {
    const {menuOpened, setMenuOpened} = useContext(MenuContext);
    const handleClick = () => {
        changeMenuState(menuOpened, setMenuOpened);
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
        changeMenuState(menuOpened, setMenuOpened);
        document.getElementsByClassName(scrollEl)[0].scrollIntoView({block: "start", behavior: "smooth"});
    }

    return (
        <p className={selected ? 'selected' : ''} onClick={handleClick}>{title}</p>
    );
}

export default Menu;