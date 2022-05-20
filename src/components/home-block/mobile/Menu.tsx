import React, {FC, useContext, useState} from 'react';
import "../home-block.scss";
import close from "../../../assets/images/svg/close.svg";
import MenuContext from "../../../service/MenuContext";

const Menu: FC = () => {
    const {menuOpened, setMenuOpened} = useContext(MenuContext);
    const handleClick = () => {
        setMenuOpened(!menuOpened);
    }

    return (
        <div className="home-block--menu">
            <div>
                <MenuItem title='Home' scrollEl='' selected/>
                <img src={close} alt="Close" onClick={handleClick}/>
            </div>
            <MenuItem title='About me' scrollEl=''/>
            <MenuItem title='Skills' scrollEl=''/>
            <MenuItem title='Portfolio' scrollEl=''/>
            <MenuItem title='Contacts' scrollEl=''/>
            <LanguageBtn/>
        </div>
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
        <div className="home-block__lang">
            <p className={selectedRU ? 'lang-selected' : ''} onClick={handleClickRU}>RU</p>
            <p className="lang-line">&nbsp;|&nbsp;</p>
            <p className={!selectedRU ? 'lang-selected' : ''} onClick={handleClickEN}>ENG</p>
        </div>
    );
}

export default Menu;