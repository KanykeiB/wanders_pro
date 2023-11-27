import React from 'react';
import style from './style.module.css'
import image from '../assests/unsplash_LaK153ghdig.png'
import VercIcon from "../Icons/vercIcon";
import RateStarIcon from "../Icons/rateStarIcon";

const GreenCard = () => {

    const guid = [
        {
            name: 'Замир',
            lastname:'Русланов',
            position: 'организатор',
            image: 'alexey_image.jpg',
            rating: 4,
            description: 'Гид-инструктор на Иссык-Куль, Чуй, Талас'
        }
    ];
    return (
        <div className={style.Card}>

                {
                    guid.map((el, idx) =>
                        <div className={style.CardWrap} key={idx}>
                            <div className={style.avatar}>
                                <img src={image} alt=""/>
                                <div>
                                    <h3>{el.name} {el.lastname.slice(0,1)}.</h3>
                                    <p>{el.position}</p>
                                </div>
                            </div>
                            <div className={style.CardDesc}>
                                    { el.rating &&

                                        <div className={style.info}><div> <RateStarIcon/> </div> <p>{el.rating} (17 отзывов)</p></div>
                                    }
                                <div className={style.info}><div><VercIcon/></div><p>Личность поттверждена</p></div>
                                <div><p>{el.description}</p></div>
                                <div className={style.btnWrap}>
                                    <button>Написать</button>
                                </div>
                            </div>
                        </div>
                    )
                }

        </div>
    );
};

export default GreenCard;