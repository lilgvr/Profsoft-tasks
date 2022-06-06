import React, {FC, Fragment, ReactNode, useCallback, useEffect, useMemo} from 'react';
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
        {id: idGenerator.next().value, img: ps, title: `Adobe\nPhotoshop`, stars: 4},
        {id: idGenerator.next().value, img: ai, title: `Adobe\nIllustrator`, stars: 3},
        {id: idGenerator.next().value, img: ae, title: `Adobe\nAfter Effects`, stars: 4},
        {id: idGenerator.next().value, img: figma, title: "Figma", stars: 4},
    ]

    return (
        <section className="skills">
            <h1>Skills</h1>
            <h2>I work in such programs as</h2>
            <div className="skills-items">
                {skills.map(el => <Skill skill={el} key={el.id}/>)}
            </div>
        </section>
    );
};

const Skill: FC<{ skill: ISkill }> = ({skill}) => {
    const {id, img, title, stars} = skill;

    return (
        <figure className="skills-item">
            <img src={img} alt={title}/>

            <figcaption>
                {title.split('\n').map((value, index, array) => {
                    return (index !== array.length - 1) ? (
                        <Fragment key={(index + 1) * 2}>
                            {value}
                            <br/>
                        </Fragment>
                    ) : (
                        <Fragment key={(index + 1) * 2}>
                            {value}
                        </Fragment>
                    )
                })}
            </figcaption>

            <Stars count={stars} skillId={id}/>
        </figure>
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