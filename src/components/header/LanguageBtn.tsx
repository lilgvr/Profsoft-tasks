import React, {FC, useState} from "react";

const LanguageBtn: FC = () => {
    const [selectedRU, setSelectedRu] = useState(false);

    return (
        <div className="lang-btn">
            <p className={selectedRU ? 'lang-selected' : ''} onClick={() => setSelectedRu(true)}>RU</p>
            <p className="lang-line">&nbsp;|&nbsp;</p>
            <p className={!selectedRU ? 'lang-selected' : ''} onClick={() => setSelectedRu(false)}>ENG</p>
        </div>
    );
}

export default LanguageBtn;