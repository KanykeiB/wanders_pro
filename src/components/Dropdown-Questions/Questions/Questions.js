import React from 'react';
import Dropdown from "../Dropdown";
import style from './style.module.css'
import emoji1 from '../../assests/image 576.png'
import emoji2 from '../../assests/image 577.png'
import DropdownText from "../../dropdownText";


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

                    <Dropdown title={'Как забронировать тур?'} children={'i dont  know how'}/>
                    <Dropdown title={'Как начать работать с Wanders?'} children={'i dont  know how'}/>
                    <Dropdown title={'Где я могу почитать о локациях?'} children={'i dont  know'}/>

                </div>
                <div className={style.dropdownCol}>
                    <Dropdown title={'Какой должен быть опыт организации?'} children={'i dont  know'}/>
                    <Dropdown title={'Как зарегистрироваться?'} children={'i dont  know'}/>
                    <Dropdown title={'Какие требования к авторам туров?'} children={'i dont  know'}/>
                </div>
            </div>
        </div>
    );
};

export default Questions;