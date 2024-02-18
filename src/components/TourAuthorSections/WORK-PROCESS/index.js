import React from 'react';
import TitleWrap from "../title/index";
import style from './style.module.css'
import starImg from '../images/image 568.png'

const WorkProcess = () => {
    return (
        <div className={style.workWrap}>
            <div className={style.starImg}>
                <img src={starImg} alt=""/>
            </div>
            <div className={style.title}>
                <TitleWrap button={'процесс работы'} h1={'Работать с нами просто'}/>
            </div>
            <div className={style.row}>
                <div className={style.col3}>
                    <div className={style.box}>
                        <h2>01</h2>
                        <p>Зарегистрируйся
                            и добавь туры</p>
                    </div>
                </div>
                <div className={style.col3}>
                    <div className={style.box}>
                        <h2>02</h2>
                        <p>Принимай заявки, общайся в чате </p>
                    </div>
                </div>
                <div className={style.col3}>
                    <div className={style.box}>
                        <h2>03</h2>
                        <p>Получай предоплату для бронирования</p>
                    </div>
                </div>
                <div className={style.col3}>
                    <div className={style.box}>
                        <h2>04</h2>
                        <p>Собирай отзывы после туров</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;