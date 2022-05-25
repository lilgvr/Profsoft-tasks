import React, {FC, useState} from "react";

const LanguageBtn: FC = () => {
    const [selectedRU, setSelectedRu] = useState(false);

    const handleClickRU = () => {
        setSelectedRu(true);
    }
    const handleClickEN = () => {
        setSelectedRu(false);
    }

    return (
        <div className="lang-btn">
            <p className={selectedRU ? 'lang-selected' : ''} onClick={handleClickRU}>RU</p>
            <p className="lang-line">&nbsp;|&nbsp;</p>
            <p className={!selectedRU ? 'lang-selected' : ''} onClick={handleClickEN}>ENG</p>
        </div>
    );
}

export default LanguageBtn;