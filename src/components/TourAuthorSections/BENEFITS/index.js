import React from 'react';
import style from './style.module.css'
import PatternOne from "../Icons/patternOne";
import PatternTwo from "../Icons/patternTwo";
import PatternThree from "../Icons/patternThree";
import PatternFour from "../Icons/patternFour";
import PatternFour2 from "../Icons/patternFour2";
import TitleWrap from "../title/index";

const Benefits = () => {
    return (
        <div>
            <div className={style.titleWrap}>
                <TitleWrap button={'преимущества'} h1={'Выгода с Wanders'}/>
            </div>
            <div className={style.row}>
                <div className={style.col3}>
                    <div className={style.box}>
                        <span className={style.pattern}> < PatternOne/></span>
                        <h2 className={style.num}>1</h2>
                        <h2>Прозрачная оплата</h2>
                        <p>
                            оплата только за оплаченные и совершенные бронирования, размещение тура бесплатно
                        </p>
                    </div>
                </div>
                <div className={style.col3}>
                    <div className={style.box}>
                        <span className={style.patternTwo}> < PatternTwo/></span>
                        <h2 className={style.num}>2</h2>
                        <h2>Новый канал продаж</h2>
                        <p>добавляй туры на нашем сайте и получай новых клиентов</p>
                    </div>
                </div>
                <div className={style.col3}>
                    <div className={style.box}>
                        <span className={style.patternThree}> < PatternThree/></span>
                        <h2 className={style.num}>3</h2>
                        <h2>Безопасность и поддержка</h2>
                        <p>безопасная оплата, прозрачный договор с туристом, дружественная поддержка</p>
                    </div>
                </div>
                <div className={style.col3}>
                    <div className={style.box}>
                        <span className={style.patternF1}> < PatternFour/></span>
                        <span className={style.patternF2}> < PatternFour2/></span>
                        <h2 className={style.num}>4</h2>
                        <h2>Делимся опытом</h2>
                        <p>делимся советами по продвижению, продаже и организации туров</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;