import React from 'react';
import style from './style.module.css'
import TitleWrap from "../title/index";
import imgUser from "../../assests/unsplash_kteBKtqQhUM.svg";
import commentImg from '../images/image 578.png'

const Comments = () => {
    return (
        <div >
            <div className={style.TitleWrap}>
                <TitleWrap button={'отзывы'} h1={'Что о нас говорят авторы'}/>
            </div>
            <div className={style.row}>
                <div className={style.CommImg}>
                    <img  src={commentImg} alt=""/>
                </div>
                <div className={style.col4}>
                    <div className={style.box}>
                        <div className={style.UserWrap}>
                            <div className={style.user}><img className={style.userWrapImg} src={imgUser} alt=""/>
                                <h2 className={style.UserName}>Алия К.</h2></div>
                        </div>
                        <p>Я уже несколько лет сотрудничаю
                            с этим сервисом для продажи своих городских экскурсий, и я очень доволен результатами.
                            Платформа обеспечивает отличную видимость моих туров, а также предоставляет удобные
                            инструменты для управления бронированиями и взаимодействия
                            с клиентами. Отличный способ привлечения новых клиентов и расширения своего бизнеса.</p>
                    </div>
                </div>
                <div className={style.col4}>
                    <div className={style.box}>
                        <h1 className={style.fact}>Факт</h1>
                        <p>Wanders предоставляет авторам туров отличную возможность для увеличения видимости своих
                            предложений и привлечения новых клиентов. Это помогает им расширить свой бизнес и привлечь
                            аудиторию из разных частей мира.</p>
                    </div>
                </div>
                <div className={style.col4}>
                    <div className={style.box}>
                        <div className={style.UserWrap}>
                            <div className={style.user}><img className={style.userWrapImg} src={imgUser} alt=""/>
                                <h2 className={style.UserName}>Алия К.</h2></div>
                        </div>
                        <p>
                            Сервис по бронированию авторских туров стал моим основным источником клиентов. Он
                            предоставляет удобный способ представить мои уникальные туры широкой аудитории. Я также ценю
                            возможность устанавливать гибкие цены и параметры бронирования,
                            что позволяет мне адаптироваться
                            к потребностям моих клиентов
                        </p>
                    </div>
                </div>
                <div className={style.col4}>
                    <div className={style.box}>
                        <div className={style.UserWrap}>
                            <div className={style.user}><img className={style.userWrapImg} src={imgUser} alt=""/>
                                <h2 className={style.UserName}>Алия К.</h2></div>
                        </div>
                        <p>
                            Сервис по поиску и бронированию туров стал незаменимым инструментом для моего бизнеса с
                            эко-турами.
                            Моя аудитория нашла меня благодаря этой платформе, и мне легче управлять бронированиями и
                            коммуникацией
                            с участниками. Очень удобная система отзывов. Она помогает мне улучшать качество моих туров.
                        </p>
                    </div>
                </div>
                <div className={`${style.col4} ${style.col4A}`}>
                    <div className={style.box}>
                        <div className={style.UserWrap}>
                            <div className={style.user}><img className={style.userWrapImg} src={imgUser} alt=""/>
                                <h2 className={style.UserName}>Алия К.</h2></div>
                        </div>
                        <p>Я просто в восторге от сотрудничества
                            с этим сервисом для моих экологических туров. Мои туры направлены на то, чтобы
                            путешественники не только наслаждались красотой природы,
                            но и учились её беречь. Сервис не только помогает мне донести мою страсть
                            к экологии до большего числа людей,
                            но и поддерживает мои усилия в области устойчивого туризма. Я получила отличную поддержку от
                            команды сервиса и всегда рад видеть новых людей, готовых исследовать нашу природу вместе со
                            мной. Спасибо
                            за лучший сервис!</p>
                    </div>
                </div>
                <div className={`${style.col4} ${style.col4B}`}>
                    <div className={style.box}>
                        <div className={style.UserWrap}>
                            <div className={style.user}><img className={style.userWrapImg} src={imgUser} alt=""/>
                                <h2 className={style.UserName}>Алия К.</h2></div>
                        </div>
                        <p>Работая с сервисом по бронированию туров, я могу делиться моей страстью к искусству и
                            культуре
                            с путешественниками со всего мира. Платформа предоставляет мне простой способ управления
                            моими турами и общения с клиентами.
                            Кроме того, я получаю доступ
                            к полезной аналитике, которая помогает мне улучшать мой бизнес.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;