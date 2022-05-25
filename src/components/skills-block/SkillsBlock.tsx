import React, {FC, ReactNode, useCallback, useEffect, useMemo} from 'react';
import "./skills-block.scss";
import ae from "src/assets/images/svg/ae.svg";
import ai from "src/assets/images/svg/ai.svg";
import figma from "src/assets/images/svg/figma.svg";
import ps from "src/assets/images/svg/ps.svg";
import star from "src/assets/images/svg/star.svg";
import starGray from "src/assets/images/svg/star-gray.svg";
import {infiniteGenerator} from "../../service/functions";

interface ISkill {
    id: number,
    img: string,
    title: string,
    stars: number
}

const SkillsBlock: FC = () => {
    const idGenerator = infiniteGenerator();

    const skills: ISkill[] = [
        {id: idGenerator.next().value, img: ps, title: `Adobe<br/>Photoshop`, stars: 4},
        {id: idGenerator.next().value, img: ai, title: `Adobe<br/>Illustrator`, stars: 3},
        {id: idGenerator.next().value, img: ae, title: `Adobe<br/>After Effects`, stars: 4},
        {id: idGenerator.next().value, img: figma, title: "Figma", stars: 4},
    ]

    return (
        <section className="skills-block--ctr">
            <h1>Skills</h1>
            <h2>I work in such programs as</h2>
            <div className="skills-block">
                {skills.map(el => <Skill skill={el} key={el.id}/>)}
            </div>
        </section>
    );
};

const Skill: FC<{ skill: ISkill }> = ({skill}) => {
    const {id, img, title, stars} = skill;

    return (
        <div className="skills-block__item">
            <img src={img} alt={title}/>
            <p dangerouslySetInnerHTML={{__html: title}}></p>
            <Stars count={stars} skillId={id}/>
        </div>
    );
}

const Stars: FC<{ count: number, skillId: number }> = ({count, skillId}) => {
    const prepare = useCallback(() => {
        const res: ReactNode[] = [];

        for (let i = 0; i < count; i++) {
            res.push(<img src={star} alt="star" className="star" key={skillId + i}/>);
        }

        if (res.length < 5) {
            for (let i = res.length; i < 5; i++) {
                res.push(<img src={starGray} alt="grey star" className="star" key={skillId + (2 * i)}/>)
            }
        }

        return res;
    }, [count, skillId]);

    const stars: ReactNode[] = useMemo(prepare, [prepare]);

    useEffect(() => {
        prepare();
    }, [count, prepare, stars]);

    return (
        <div className="stars-ctr">
            {stars}
        </div>
    );
}

export default SkillsBlock;