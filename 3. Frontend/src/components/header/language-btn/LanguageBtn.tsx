import React, {FC, useState} from "react";
import "./language-btn.scss";

const LanguageBtn: FC = () => {
    const [selectedRU, setSelectedRu] = useState(false);

    return (
        <div className="lang-btn">
            <span className={selectedRU ? 'lang-selected' : ''} onClick={() => setSelectedRu(true)}>RU</span>
            <span className="lang-line">&nbsp;|&nbsp;</span>
            <span className={!selectedRU ? 'lang-selected' : ''} onClick={() => setSelectedRu(false)}>ENG</span>
        </div>
    );
}

export default LanguageBtn;