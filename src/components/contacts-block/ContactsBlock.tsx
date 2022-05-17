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
    alt: string
}

const ContactsBlock: FC = () => {
    return (
        <div className="contacts-block">
            <p>Contacts</p>
            <p>Want to know more or just chat?<br/>You are welcome!</p>
            <ContactsBtn/>
            <ContactsMedia/>
            <p>Like me on<br/>LinkedIn, Instagram, Behance, Dribble</p>
        </div>
    );
};

const ContactsMedia: FC = () => {
    const idGenerator = infiniteGenerator();
    const media: IContactsMedia[] = [
        {
            id: idGenerator.next().value,
            img: linkedin,
            alt: 'LinkedIn'
        },
        {
            id: idGenerator.next().value,
            img: inst,
            alt: 'Instagram'
        },
        {
            id: idGenerator.next().value,
            img: behance,
            alt: 'Behance'
        },
        {
            id: idGenerator.next().value,
            img: dribble,
            alt: 'Dribble'
        },

    ];

    return (
        <div className="contacts-block__media">
            {media.map(el => <img src={el.img} alt={el.alt} title={el.alt} key={el.id} height="40px" width="auto"/>)}
        </div>
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