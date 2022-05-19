import React, {FC, Fragment, useEffect, useState} from 'react';
import {formatTime} from "../../service/functions";
import "./about-block.scss";

const AboutBlock: FC = () => {
    const [isRussian, setIsRussian] = useState(false);
    const [updateTime, setUpdateTime] = useState(Date.now());

    const handleClick = () => {
        setIsRussian(!isRussian);
    }

    useEffect(() => {
        const intervalCallback = () => setUpdateTime(Date.now());
        const timer = setInterval(intervalCallback, 60000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="about-block">
            {isRussian ?
                <Fragment>
                    <p onClick={handleClick} title="Сменить язык раздела на английский">Обо мне</p>
                    <p>
                        Привет, Я Денис - UX/UI дизайнер из Минска
                        <br/>
                        Мне интересен дизайн и всё, что с ним связано
                    </p>
                    <p>Я прохожу курсы "Дизайн мобильных <br/> и веб-интерфейсов" в IT-академии</p>
                    <p>
                        Я готов реализовать отличные проекты
                        <br/>
                        с замечательными людьми
                    </p>
                    <p>Обновлено: {formatTime(updateTime)}</p>
                </Fragment> :
                <Fragment>
                    <p onClick={handleClick} title="Change block language to Russian">About me</p>
                    <p>
                        Hi, I'm Denis – UX/UI designer from Minsk.
                        <br/>
                        I'm interested in design and everything connected with it.
                    </p>
                    <p>I'm studying at courses "Web and mobile design <br/> interfaces" in IT-Academy.</p>
                    <p>
                        Ready to implement excellent projects
                        <br/>
                        with wonderful people.
                    </p>
                    <p>Updated: {formatTime(updateTime)}</p>
                </Fragment>
            }
        </div>
    );
};

export default AboutBlock;