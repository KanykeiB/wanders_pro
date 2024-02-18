import React from 'react';
import style from './style.module.css'
import GroupImg from "./GroupImg";
import GreenBtn from "../buttons/GreenBtn/GreenBtn";
import LeftArrowIcon from "../Icons/leftArrowIcon";
import RightArrowIcon from "../Icons/RightArrowIcon";


const Hero = () => {
    return (
        <div >
            <div className={style.heroWrap}>
                <p>если ты <span>автор туров</span></p>
                <div className={style.title}>
                    <h1>
                        зарабатывай на том, что любишь с Wanders
                    </h1>
                </div>
                <div className={style.groupImg}>
                    <GroupImg/>
                </div>
                <div>
                </div>
                <div className={style.greenBtnWrap}>
                    <GreenBtn/>
                </div>
                <div className={style.desc1}>
                    <p >
                        Wanders — новый канал продаж для твоих туров
                    </p>
                </div>
                <div className={style.desc2}>
                    <p >
                        Добавляй туры, набирай нужное количество участников, дари эмоции и зарабатывай
                    </p>
                </div>
                <div className={style.leftArrow}>
                    <LeftArrowIcon/>
                </div>
                <div className={style.RightArrow}>
                    <RightArrowIcon/>
                </div>
            </div>

        </div>
    );
};

export default Hero;