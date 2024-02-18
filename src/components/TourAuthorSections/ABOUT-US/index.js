import React from 'react';
import style from './style.module.css'
import VIcon from "../Icons/vIcon";
import LogoIcon from "../Icons/LogoIcon";
import eyesImg from '../images/image 567.png'

const AboutUs = () => {
    return (
        <div className={style.bg}>
            <div className={style.titleWrap}>
                <h1>Привет <VIcon/>
                    Это Wanders </h1>
            </div>
            <div className={style.logo}>
                <LogoIcon/>
            </div>
            <div className={style.descWrap}>
                <p className={style.serviceDesc}> Сервис по поиску и бронированию авторских туров.</p>
                <p>
                    Авторские туры — отлично организованные приключения по уникальным маршрутам
                    в дружеской компании. Приглашаем авторов зарегистрироваться на Wanders, разместить свои туры и получать бронирования от наших пользователей.
                </p>
            </div>
            <div className={style.eyesImg}>
                <img src={eyesImg} alt=""/>
            </div>
        </div>
    );
};

export default AboutUs;