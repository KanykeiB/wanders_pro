import React from 'react';
import CheckIcon from "../../components/Icons/checkIcon";
import XIcon from "../../components/Icons/XIcon";
import GreenCard from "../../components/GreenCard/greenCard";

const ToursPage = () => {
    return (
        <div>
            <GreenCard/>
            <div className='description'>
                <h2>Описание</h2>
                <p>Добро пожаловать в магический мир Иссык-Куль, одного из самых красивых горных озер в мире. Это
                    природное чудо расположено в сердце Киргизии и приглашает вас на незабываемое приключение. От
                    удивительных пейзажей до богатой культурной истории, Иссык-Куль обещает удовольствие и вдохновение
                    для путешественников всех возрастов.</p>
            </div>
            <div className='Conditions-wrapper'>
                <h1>Условия тура</h1>
                <h4>Включено в стоимость</h4>
                <div className='list'>
                    <div className='conditions'><div><CheckIcon/></div> <p>транспортная доставка от аэропорта (в первый и последний день)</p></div>
                    <div className='conditions'><div><CheckIcon/></div> <p>весь трансфер на комфортном микроавтобусе по программе путешествия</p></div>
                    <div className='conditions'><div><CheckIcon/></div> <p>проживание в комфортных гостиницах Бишкека (1 день), Каракола (2 дня), Чолпон-Аты на берегу Иссык-Куля (2 день), номера с душем</p></div>
                    <div className='conditions'><div><CheckIcon/></div> <p>авторская экскурсия по Бишкеку от местных жителей (художников, экскурсоводов)</p></div>
                    <div className='conditions'><div><CheckIcon/></div> <p>плата за посещение термальных источников Алтын-Арашан</p></div>
                </div>
                <h4>Оплачивается отдельно</h4>
                <div className='list'>
                    <div className='conditions'><div><XIcon/></div> <p>транспортная доставка от аэропорта (в первый и последний день)</p></div>
                    <div className='conditions'><div><XIcon/></div> <p>весь трансфер на комфортном микроавтобусе по программе путешествия</p></div>
                    <div className='conditions'><div><XIcon/></div> <p>проживание в комфортных гостиницах Бишкека (1 день), Каракола (2 дня), Чолпон-Аты на берегу Иссык-Куля (2 день), номера с душем</p></div>
                </div>
            </div>
        </div>
    );
};

export default ToursPage;