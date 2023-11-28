import React from 'react';
import style from './style.module.css'
import image from '../assests/unsplash_LaK153ghdig.png'
import VercIcon from "../Icons/vercIcon";
import RateStarIcon from "../Icons/rateStarIcon";

const GreenCard = () => {

    const guide = [
        {
            name: 'Замир',
            lastname:'Русланов',
            position: 'организатор',
            image: 'alexey_image.jpg',
            ratings: [4.5, 5, 4.2, 4.8, 4],
            reviews: [
                { author: "Анна", text: "Отличный командный игрок!" },
                { author: "Владимир", text: "Отличный решатель задач." },
                { author: "Елена", text: "Всегда соблюдает сроки." }
            ],
            location: 'Иссык-Куль, Чуй, Талас'
        }
    ];

    const rate = guide.map(el => el.ratings)

    const arth = rate.reduce(function (acc, current){
        return acc + current
    }, 0)

    const num = parseInt(arth)

    const arithmeticRate = (num / rate.length)


    return (
        <div className={style.Card}>

                {
                    guide.map((el, idx) =>
                        <div className={style.CardWrap} key={idx}>
                            <div className={style.avatar}>
                                <img src={image} alt=""/>
                                <div>
                                    <h3>{el.name} {el.lastname.slice(0,1)}.</h3>
                                    <p>{el.position}</p>
                                </div>
                            </div>
                            <div className={style.CardDesc}>
                                    { el.ratings &&

                                        <div className={style.info}><div> <RateStarIcon/> </div> <p>{arithmeticRate} ({el.reviews.length} отзывов)</p></div>
                                    }
                                <div className={style.info}><div><VercIcon/></div><p>Личность поттверждена</p></div>
                                <div><p> Гид-инструктор на {el.location}</p></div>
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