import React from 'react';
import styles from './style.module.css'
import bag from '../../components/assests/rucksack.svg'
import one from '../../components/assests/first.svg'
import two from '../../components/assests/second.svg'
import three from '../../components/assests/third.svg'
import four from '../../components/assests/fourth.svg'
import stars from '../../components/assests/stars.svg'
import stones from '../../components/assests/stones.svg'
import vector from '../../components/assests/dottedLine.svg'
import vector2 from '../../components/assests/secondDotline.svg'
import photoT from '../../components/assests/photoTours.svg'
import etno from '../../components/assests/etno.svg'
import mountains from '../../components/assests/mountains.svg'
import CardPhoto from '../../components/cardPhoto';
import sonKol from '../../components/assests/sonKol.svg'
import kolTor from '../../components/assests/kolTor.svg'
import AlaArcha from '../../components/assests/Ala-archa.svg'
import { Link } from 'react-router-dom';
//just the rough version I am not sure if we are gonna connect with backend 

const AboutUs = () => {
    return (
        <div className={styles.containerAboutUs}>
            <div className={styles.missionContainer}>
                <p>Наша миссия — вдохновить людей на настоящие и насыщенные путешествия</p>
            </div>
            <div className={styles.rucksack}>
                <img src={bag} alt="" />
            </div>
            <div className={styles.aboutUsText}>
                <h2>Привет ✌🏻 </h2>
                <h2>На связи Wanders</h2>
                <p>Сервис по поиску и бронированию авторских и групповых туров. <p>Авторские туры — отлично организованные приключения по уникальным маршрутам в дружеской компании. Приглашаем авторов зарегистрироваться на Wanders, разместить свои туры и получать бронирования от наших пользователей.</p></p>
            </div>
            <div className={styles.tourTypes}>
                <h2 className={styles.special}>Авторские туры</h2>
                <p className={styles.food}> 🍽 Гастрономические туры</p>
                <p className={styles.rest}> 🧘🏻‍♀️ Ретрит туры</p>
                <p className={styles.eco}> 🍃 Эко-туры</p>
                <p className={styles.trip}> 🏰 Экскурсионные туры</p>
                <p className={styles.photo}> 📸 Фото туры</p>
                <p className={styles.girly}> 👰🏻 Девичники</p>
                <p className={styles.manydays}> 🧭 Многодневные туры</p>
                <p className={styles.camping}> 🏕 Кемпинг туры</p>
                <p className={styles.mountains}> 🏔 Туры в горы</p>
            </div>
            {/* <div className={styles.textCard}>
                <p>
                    Путешествие с Wanders — это не просто путь из точки А в точку Б, это настоящее приключение и новые знакомства!
                </p>
                <button>
                    Смотреть туры
                </button>
            </div> */}

            <div className={styles.security}>
                <img src={stars} className={styles.stars} alt="" />
                <p className={styles.buttonText}>
                    гарантии
                </p>
                <p className={styles.mainTitle}>
                    С нами безопасно
                </p>
                <div className={styles.stepWrap}>
                    <div className={styles.stepItem}>
                        <img src={one} alt="" />
                        <p>Проверяем документы автора</p>
                    </div>
                    <div className={styles.stepItem}>
                        <img src={two} alt="" />
                        <p>Реальные отзывы туристов</p>
                    </div>
                    <div className={styles.stepItem}>
                        <img src={three} alt="" />
                        <p>Поддержка на связи 24/7</p>
                    </div>
                    <div className={styles.stepItem}>
                        <img src={four} alt="" />
                        <p>Безопасные платежи</p>
                    </div>
                </div>
            </div>
            <div className={styles.process}>
                <p className={styles.buttonText}>
                    процесс
                </p>
                <p className={styles.mainTitle}>
                    Как забронировать тур?
                </p>
                <div className={styles.cardsWrap}>
                    <div className={styles.cardFirst}>
                        <h2>Выбери тур</h2>
                        <p>Переходи в раздел туры. Выбери понравившийся тур. Ознакомься с программой и датой тура</p>
                    </div>
                    <div className={styles.cardSecond}>
                        <h2>Оставь заявку</h2>
                        <p>Понравился тур? Оставь заявку на сайте и организатор сам с тобой свяжется</p>
                    </div>
                    <div className={styles.cardThird}>
                        <h2>Наслаждайся поездкой</h2>
                        <p>А вот и настал день тура. Отбрось все проблемы позади и насладись путешествием!</p>
                    </div>
                </div>
                <img src={stones} className={styles.stones} alt="" />
                <img src={vector} className={styles.vectorOne} alt="" />
                <img src={vector2} className={styles.vectorTwo} alt="" />
            </div>
            <div className={styles.tours}>
                <p className={styles.buttonText}>
                    туры
                </p>
                <p className={styles.mainTitle}>
                    Наши коллекции туров
                </p>
                <div className={styles.LinkWrap}>
                    <CardPhoto photo={photoT} link={'/test'}>ФОТО ТУРЫ</CardPhoto>
                    <CardPhoto photo={etno} link={'/test'}>ЭТНО ТУРЫ</CardPhoto>
                    <CardPhoto photo={mountains} link={'/test'}>ГОР ТУРЫ</CardPhoto>
                </div>
                <Link to={'/test'}><button className={styles.seeMore}>Смотреть еще</button></Link>
            </div>
            <div className={styles.locations}>
                <p className={styles.buttonText}>
                    локации
                </p>
                <p className={styles.mainTitle}>
                    Узнай больше о локациях
                </p>
                <div className={styles.LinkWrap}>
                    <CardPhoto photo={sonKol} link={'/locations'}>КОЛ- ТОР</CardPhoto>
                    <CardPhoto photo={kolTor} link={'/locations'}>АЛА- АРЧА</CardPhoto>
                    <CardPhoto photo={AlaArcha} link={'/locations'}>СОН КОЛ</CardPhoto>
                </div>
                <Link to={'/locations'}><button className={styles.seeMore}>Смотреть еще</button></Link>
            </div>
        </div>
    );
};

export default AboutUs;