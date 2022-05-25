import React, {FC, useState} from 'react';
import photo from "../../../assets/images/png/photo2.png";
import burger from "../../../assets/images/svg/burger.svg";
import "../home-block.scss";
import MenuContext from "../../../service/MenuContext";
import Menu from "./Menu";

const HomeBlockMobile: FC = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const handleClick = () => {
        setMenuOpened(!menuOpened);
    }

    return (
        <div className="home-block--ctr">
            <div>
                <div className="home-block__info">
                    <p className="home-block__title">Denis<br/>Novik</p>
                    <p className="home-block__desc">UX | UI Designer <br/> 24 years old, Minsk </p>
                </div>

                <img src={burger} alt="Menu" onClick={handleClick}/>
            </div>

            <img src={photo} alt="Denis Novik" height="auto" width="100%"/>
            <MenuContext.Provider value={{menuOpened, setMenuOpened}}>
                {menuOpened && <Menu/>}
            </MenuContext.Provider>
        </div>
    );
};

export default HomeBlockMobile;