import React from 'react';
import Dropdown from "../Dropdown";
import style from './style.module.css'
import emoji1 from '../../assests/image 576.png'
import emoji2 from '../../assests/image 577.png'


const Questions = () => {
    return (
        <div>
            <div className={style.Title}>
                <button className={style.whiteBtn}>вопросы-ответы</button>
                <h1>Часто задаваемые вопросы</h1>
                <img className={style.emoji1} src={emoji1} alt=""/>
                <img className={style.emoji2} src={emoji2} alt=""/>
            </div>
            <div className={style.dropdownWrapper}>
                <div className={style.dropdownCol}>
                    <Dropdown question={'Как забронировать тур?'}/>
                    <Dropdown question={'Как начать работать с Wanders?'}/>
                    <Dropdown question={'Где я могу почитать о локациях?'}/>
                </div>
                <div className={style.dropdownCol}>
                    <Dropdown question={'Какой должен быть опыт организации?'}/>
                    <Dropdown question={'Как зарегистрироваться?'}/>
                    <Dropdown question={'Какие требования к авторам туров?'}/>
                </div>
            </div>
        </div>
    );
};

export default Questions;