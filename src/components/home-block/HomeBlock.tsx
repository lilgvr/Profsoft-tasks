import React, {FC, useState} from 'react';
import "./home-block.scss";
import photo from "src/assets/images/png/photo.png";

const HomeBlock: FC = () => {
    return (
        <div className="home-block--ctr">

            <div className="home-block__info">
                <p className="home-block__title">Denis<br/>Novik</p>
                <p className="home-block__desc">UX | UI Designer <br/> 24 years old, Minsk </p>
                <LanguageBtn/>
            </div>

            <img src={photo} alt="Denis Novik" height="auto" width="100%"/>
        </div>
    );
};

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

export default HomeBlock;