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
        {id: idGenerator.next().value, img: ps, title: "Adobe Photoshop", stars: 4},
        {id: idGenerator.next().value, img: ai, title: "Adobe Illustrator", stars: 3},
        {id: idGenerator.next().value, img: ae, title: "Adobe After Effects", stars: 4},
        {id: idGenerator.next().value, img: figma, title: "Figma", stars: 4},
    ]

    return (
        <div className="skills-block--ctr">
            <p>Skills</p>
            <p>I work in such programs as</p>
            <div className="skills-block">
                {skills.map(el => <Skill skill={el} key={el.id}/>)}
            </div>
        </div>
    );
};

const Skill: FC<{ skill: ISkill }> = ({skill}) => {
    const {img, title, stars} = skill;

    return (
        <div className="skills-block__item">
            <img src={img} alt={title} height="100px" width="auto"/>
            <p>{title}</p>
            <Stars count={stars} skillId={skill.id}/>
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
                res.push(<img src={starGray} alt="grey star" className="star" key={skillId + i}/>)
            }
        }


        return res;
    }, [count]);

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