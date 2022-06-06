import React, {FC} from 'react';
import {infiniteGenerator} from "../../service/functions";
import levis from "src/assets/images/png/levis.png";
import reebok from "src/assets/images/png/reebok.png";
import braun from "src/assets/images/png/braun.png";
import "./portfolio-block.scss";

interface IPortfolioItem {
    id: number,
    img: string,
    title: string
}

const PortfolioBlock: FC = () => {
    const idGenerator = infiniteGenerator();

    const items: IPortfolioItem[] = [
        {id: idGenerator.next().value, img: levis, title: 'Online fashion store - Homepage'},
        {id: idGenerator.next().value, img: reebok, title: 'Reebok Store - Concept'},
        {id: idGenerator.next().value, img: braun, title: 'Braun Landing Page - Concept'},
    ]

    return (
        <section className="portfolio">
            <h1>Portfolio</h1>
            {items.map(el => <PortfolioItem img={el.img} title={el.title} key={el.id}/>)}
        </section>
    );
};

const PortfolioItem: FC<{ img: string, title: string }> = ({img, title}) => {
    return (
        <figure>
            <img src={img} alt={title}/>
            <figcaption>{title}</figcaption>
        </figure>
    );
}

export default PortfolioBlock;