import React from 'react';
import mockRewiev from "../../mockApi/mockapiRewiev";
import style from "./style.module.css";
import TitleWrap from "../title/Title-Wrap";
import commentImg from "../../assests/image 578.png";


const AuthorsReviews = () => {

    return (
        <div>
            <div className={style.TitleWrap}>
                <TitleWrap button={'отзывы'} h1={'Что о нас говорят авторы'}/>
            </div>
            <div className={style.row}>
                <div className={style.col4}>
                    <div className={style.row}>
                        {
                            mockRewiev.slice(0, 2).map(el => {
                                return (
                                    <div className={style.col12}>
                                        <div className={style.CommImg}>
                                            <img  src={commentImg} alt="not found"/>
                                        </div>
                                        <div className={style.box}>
                                            <div className={style.UserWrap}>
                                                <div className={style.user}><img className={style.userWrapImg} src={el.image}
                                                                                 alt=""/>
                                                    <h2 className={style.UserName}>{el.name}</h2></div>
                                            </div>
                                            <p>{el.review}</p>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
                <div className={style.col4}>
                    <div className={style.row}>
                        <div className={style.fact}>
                            <h2>Факт</h2>
                            <p>Wanders предоставляет авторам туров отличную возможность для увеличения видимости своих предложений и привлечения новых клиентов. Это помогает им расширить свой бизнес и привлечь аудиторию из разных частей мира.</p>
                        </div>
                        <div>
                            {
                                mockRewiev.slice(2,3).map(el => {
                                    return (
                                        <div className={style.col12}>
                                            <div className={style.box}>
                                                <div className={style.UserWrap}>
                                                    <div className={style.user}><img className={style.userWrapImg} src={el.image}
                                                                                     alt=""/>
                                                        <h2 className={style.UserName}>{el.name}</h2></div>
                                                </div>
                                                <p>{el.review}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={style.col4}>
                    <div className={style.row}>
                        {
                            mockRewiev.slice(3,5).map(el => {
                                return (
                                    <div className={style.col12}>
                                        <div className={style.box}>
                                            <div className={style.UserWrap}>
                                                <div className={style.user}><img className={style.userWrapImg} src={el.image}
                                                                                 alt=""/>
                                                    <h2 className={style.UserName}>{el.name}</h2></div>
                                            </div>
                                            <p>{el.review}</p>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorsReviews;