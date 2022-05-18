import React, {FC} from 'react';
import "./header.scss";
import {infiniteGenerator} from "../../service/functions";

interface IHeaderItem {
    id: number,
    title: string,
    scrollEl: string
}

const Header: FC = () => {
    const idGenerator = infiniteGenerator();
    const headerItems: IHeaderItem[] = [
        {
            id: idGenerator.next().value,
            title: 'Home',
            scrollEl: 'home-block--ctr'
        },
        {
            id: idGenerator.next().value,
            title: 'About me',
            scrollEl: 'about-block'
        },
        {
            id: idGenerator.next().value,
            title: 'Skills',
            scrollEl: 'skills-block--ctr'
        },
        {
            id: idGenerator.next().value,
            title: 'Portfolio',
            scrollEl: 'portfolio-block--ctr'
        },
        {
            id: idGenerator.next().value,
            title: 'Contacts',
            scrollEl: 'contacts-block'
        }
    ];

    return (
        <header>
            {headerItems.map(el => <HeaderItem title={el.title} scrollEl={el.scrollEl} key={el.id}/>)}
        </header>
    );
};

const HeaderItem: FC<{ title: string, scrollEl: string }> = ({title, scrollEl}) => {
    const handleClick = () => {
        document.getElementsByClassName(scrollEl)[0].scrollIntoView({block: "start", behavior: "smooth"});
    }

    return (
        <div className="header-item" onClick={handleClick}>
            <p>{title}</p>
        </div>
    );
}

export default Header;