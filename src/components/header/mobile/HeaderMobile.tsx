import React, {FC, useState} from 'react';
import photo from "../../../assets/images/png/photo2.png";
import burger from "../../../assets/images/svg/burger.svg";
import MenuContext from "../../../service/MenuContext";
import "../header.scss";
import Menu from "./Menu";
import {changeMenuState} from "../../../service/functions";

const HeaderMobile: FC = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const handleClick = () => {
        if (menuOpened) setTimeout(() => {
            changeMenuState(menuOpened, setMenuOpened);
        }, 1000);
        else changeMenuState(menuOpened, setMenuOpened);
    }

    return (
        <header className="mobile">
            <div>
                <div>
                    <h1>Denis<br/>Novik</h1>
                    <h2>UX | UI Designer <br/> 24 years old, Minsk </h2>
                </div>

                <img src={burger} alt="Menu" onClick={handleClick}/>
            </div>

            <img src={photo} alt="Denis Novik" height="auto" width="100%"/>

            <MenuContext.Provider value={{menuOpened, setMenuOpened}}>
                {menuOpened && <Menu/>}
            </MenuContext.Provider>
        </header>
    );
};

export default HeaderMobile;