import React, {FC} from 'react';
import "./contacts-block.scss";
import behance from "src/assets/images/svg/behance.svg";
import linkedin from "src/assets/images/svg/linkedin.svg";
import dribble from "src/assets/images/svg/dribble.svg";
import inst from "src/assets/images/svg/inst.svg";
import {infiniteGenerator} from "../../service/functions";

interface IContactsMedia {
    id: number,
    img: string,
    alt: string,
    href: string
}

const ContactsBlock: FC = () => {
    return (
        <footer className="contacts-block">
            <h1>Contacts</h1>
            <p>Want to know more or just chat?<br/>You are welcome!</p>
            <ContactsBtn/>
            <ContactsMedia/>
            <p>Like me on<br/>LinkedIn, Instagram, Behance, Dribble</p>
        </footer>
    );
};

const ContactsMedia: FC = () => {
    const idGenerator = infiniteGenerator();
    const media: IContactsMedia[] = [
        {
            id: idGenerator.next().value,
            img: linkedin,
            alt: 'LinkedIn',
            href: 'https://linkedin.com'
        },
        {
            id: idGenerator.next().value,
            img: inst,
            alt: 'Instagram',
            href: 'https://instagram.com'
        },
        {
            id: idGenerator.next().value,
            img: behance,
            alt: 'Behance',
            href: 'https://behance.net'
        },
        {
            id: idGenerator.next().value,
            img: dribble,
            alt: 'Dribbble',
            href: 'https://dribbble.com'
        },

    ];

    return (
        <div className="contacts-block__media">
            {media.map(el => <MediaItem img={el.img} alt={el.alt} title={el.alt} href={el.href} key={el.id}/>)}
        </div>
    );
}

const MediaItem: FC<{ img: string, alt: string, title: string, href: string }> = ({img, alt, href}) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <img src={img} alt={alt} title={alt} height="40px" width="auto"/>
        </a>
    );
}

const ContactsBtn: FC = () => {
    return (
        <div className="contacts-block__btn">
            <p>Send message</p>
        </div>
    );
}

export default ContactsBlock;