import React, {FC, useState} from 'react';
import "./header.scss";

const Header: FC = () => {
    const [hovered, setHovered] = useState(true);

    const mouseEnter = () => {
        setHovered(false);
    }
    const mouseLeave = () => {
        setHovered(true);
    }

    return (
        <header>
            <HeaderItem title='Home' scrollEl='home-block--ctr' selected={hovered}/>
            <HeaderItem title='About me' scrollEl='about-block' mouseEnter={mouseEnter} mouseLeave={mouseLeave}/>
            <HeaderItem title='Skills' scrollEl='skills-block--ctr' mouseEnter={mouseEnter} mouseLeave={mouseLeave}/>
            <HeaderItem title='Portfolio' scrollEl='portfolio-block--ctr' mouseEnter={mouseEnter}
                        mouseLeave={mouseLeave}/>
            <HeaderItem title='Contacts' scrollEl='contacts-block' mouseEnter={mouseEnter} mouseLeave={mouseLeave}/>
        </header>
    );
};

const HeaderItem: FC<{
    title: string,
    scrollEl: string,
    selected?: boolean,
    mouseEnter?: () => void,
    mouseLeave?: () => void
}> = ({title, scrollEl, selected, mouseEnter, mouseLeave}) => {
    const handleClick = () => {
        document.getElementsByClassName(scrollEl)[0].scrollIntoView({block: "start", behavior: "smooth"});
    }

    return (
        <div className={`header-item${selected ? ' selected' : ''}`} onClick={handleClick} onMouseEnter={mouseEnter}
             onMouseLeave={mouseLeave}>
            <p>{title}</p>
        </div>
    );
}

export default Header;