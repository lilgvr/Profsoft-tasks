import React, {FC, useState} from 'react';
import "./home-block.scss";
import man from "src/assets/images/png/man.png";

const HomeBlock: FC = () => {
    return (
        <div className="home-block--ctr">

            <div className="home-block__info">
                <p className="home-block__title">Denis<br/>Novik</p>
                <p className="home-block__desc">UX | UI Designer <br/> 24 years old, Minsk </p>
                <LanguageBtn/>
            </div>

            <img src={man} alt="Denis Novik" height="auto" width="100%"/>
        </div>
    );
};

const LanguageBtn: FC = () => {
    const [selectedRU, setSelectedRU] = useState(false);

    const handleClick = () => {
        setSelectedRU(!selectedRU);
    }

    return (
        <div className="home-block__lang">
            <p className={selectedRU ? 'lang-selected' : ''} onClick={handleClick}>RU</p>
            <p className="lang-line">&nbsp;|&nbsp;</p>
            <p className={!selectedRU ? 'lang-selected' : ''} onClick={handleClick}>ENG</p>
        </div>
    );
}

export default HomeBlock;