import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from './style.module.css'
import tourDataOperations from '../../../redux/thunk/thunk'
import mockApiDataTour from '../../../components/mockApi/mockapiTourById';
import DropDownText from '../../../components/dropdownText';
import { Modal } from '@mui/material';
import SwiperCustom from '../../../components/swiperCustom';
import { SwiperSlide } from 'swiper/react';
import { loading, tourById } from '../../../redux/selectors/selectors'
import BookingCard from '../../../components/bookingCard';
import Header from '../../../components/Header/Header';
import GuideCard from '../../../components/guideCard';

//Dictionary
const languageChoice = { 'Russian': 'Русский', 'English': 'Английский', 'Kyrgyz': 'Кыргызский' }
const difficultyLevel = { 'Base': 'Базовый *', 'Medium': 'Средний **', 'Advanced': 'Продвинутый *****' }
const comfortLevel = { 'Base': 'Базовый *', 'Simple': 'Простой **', 'Medium': 'Средний ***', 'Above_average': 'Выше Среднего ****', 'High': 'Высокий *****' }
const TourPageById = () => {
    const dispatch = useDispatch()
    const { getTourById } = tourDataOperations;
    const [visibleImages, setVisibleImages] = useState(5)
    const [showAllProgram, setShowAllProgram] = useState(true)
    const [showAllAccom, setShowAllAccom] = useState(true)
    const [showAllQues, setShowAllQues] = useState(true)
    const [open, setOpen] = useState(false);
    const data = useSelector(tourById)
    const loadData = useSelector(loading)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleShowAllProgram = () => {
        setShowAllProgram(!showAllProgram)
    }
    const handleShowAllAccom = () => {
        setShowAllAccom(!showAllAccom)
    }
    const handleShowAllQues = () => {
        setShowAllQues(!showAllQues)
    }
    useEffect(() => {
        dispatch(tourDataOperations.getTourById('1-eto-nazvanie-tura'))
    }, [])
    // console.log(data, 'data from')
    // console.log(loadData, 'load')
    if (loadData) {
        return (
            <><p>
                loading ...
            </p></>
        )
    } else if (data && Object.keys(data).length > 0) {
        return (
            <div className={styles.tourPageContainer}>
                <Header />
                {mockApiDataTour.map(el => (
                    <>
                        <div>
                            <p className={styles.sectionName}>{data.title}</p>
                            <p className={styles.sectionInfo}>{el.rating ? el.rating : "Новый"} &#183; {el.state} &#183; {data.amount_of_days} дня</p>
                        </div>
                        <div className={styles.isMobile}>
                            <SwiperCustom >
                                {el.images.map(pic =>
                                    <SwiperSlide className={styles.mySwiperSlide}>
                                        <img src={pic} alt="pic was not found" />
                                    </SwiperSlide>
                                )}
                            </SwiperCustom></div>

                        <div className={styles.picturesSectionWrap}>
                            <img src={el.images[0]} className={styles.gridLarge} alt="" />
                            <img src={el.images[1]} className={styles.gridSmall} alt="" />
                            <img src={el.images[2]} className={styles.gridSmall} alt="" />
                            <img src={el.images[3]} className={styles.gridSmall} alt="" />
                            <img src={el.images[4]} className={styles.gridSmall} alt="" />
                            {el.images.length > visibleImages && <button
                                className={styles.showMoreButton}
                                onClick={handleOpen}>Показать еще фото</button>}
                        </div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            className={styles.modalWindowE}
                        >
                            <div className={styles.modalWindow}>
                                <SwiperCustom>
                                    {el.images.map(pic =>
                                        <SwiperSlide className={styles.mySwiperSlide}>
                                            <img src={pic} alt="pic was not found" />
                                        </SwiperSlide>
                                    )}
                                </SwiperCustom>
                            </div>
                        </Modal>
                        <div className={styles.containerInner}>
                            <div className={styles.tagsWrap}>
                                <div className={styles.tagsItem}>
                                    <p className={styles.tags}>Сложность</p>
                                    <p className={styles.tagsSmall}>{difficultyLevel[data.difficulty_level]} </p>
                                </div>
                                <div className={styles.tagsItem}>
                                    <p className={styles.tags}>Комфорт</p>
                                    <p className={styles.tagsSmall}>{comfortLevel[data.comfort_level]}</p>
                                </div>
                                <div className={styles.tagsItem}>
                                    <p className={styles.tags}>Группа</p>
                                    <p className={styles.tagsSmall}>До {data.max_people} туристов</p>
                                </div>
                                <div className={styles.tagsItem}>
                                    <p className={styles.tags}>Возраст</p>
                                    <p className={styles.tagsSmall}>от {data.min_age} лет</p>
                                </div>
                            </div>
                            <div className={styles.containerBooking}>
                                {data.concrete_tour.map(item => (
                                    < BookingCard
                                        touristMax={data.max_people}
                                        ageMin={data.min_age}
                                        price={item.price_KGZ}
                                        currency={'сом'}
                                        availableDates={item.concrete_tour_date.map(i => i.start_date)}
                                    />
                                ))}
                                {data.guide.map(el => (
                                    <GuideCard
                                        name={el.first_name}
                                        picture={el.photo}
                                        verified={true} />
                                ))}
                            </div>
                            <div>
                                <p className={styles.sectionName}>Описание</p>
                                <p>{data.description}</p>

                            </div>
                            <div className={styles.dropDownTitleWrap}>
                                <p className={styles.sectionName}>Программа</p>
                                <button className={styles.showAllButton} onClick={handleShowAllProgram}>Раскрыть все</button>
                            </div>
                            {data && data.days ? (
                                data.days.map(item => (
                                    <DropDownText
                                        title={item.title}
                                        isAllVisible={showAllProgram}
                                        pictures={item.days_images.length == 0 ? null : item.days_images.slice(0, 3).map(pic => (
                                            <img src={pic} alt="" />
                                        ))}
                                    >
                                        {item.description}</DropDownText>
                                ))) : (
                                <p>Loading...</p>)}
                            <div className={styles.dropDownTitleWrap}>
                                <p className={styles.sectionName}>Проживание</p>
                                <button className={styles.showAllButton} onClick={handleShowAllAccom}>Раскрыть все</button>
                            </div>
                            <div className={styles.dropDownSection}>
                                {data && data.place ? (data.place.map(item => (
                                    item.place_residence.map(element => (
                                        <DropDownText
                                            title={element.title}
                                            isAllVisible={showAllAccom}
                                            pictures={element.place_residence_images.length == 0 ? null : element.place_residence_images.slice(0, 3).map(pic => (
                                                <img src={pic} alt="" />
                                            ))}
                                        >
                                            {element.description}</DropDownText>
                                    ))

                                ))) : (
                                    <p>Loading...</p>)}
                            </div>

                            <div>
                                <p className={styles.sectionName}>Условия тура</p>
                                <div className={styles.includedSection}>
                                    <p className={styles.tags}>Включено в стоимость</p>
                                    <ul className={styles.included}>
                                        {data.included.map(item => (
                                            <li>{item.included}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.includedSection}>
                                    <p className={styles.tags}>Оплачивается отдельно</p>
                                    <ul className={styles.not_included}>
                                        {data.not_included.map(item => (
                                            <li>{item.not_included}</li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                            <div className={styles.dropDownTitleWrap}>
                                <p className={styles.sectionName}>Важно знать</p>
                                <button className={styles.showAllButton} onClick={handleShowAllQues}>Раскрыть все</button>
                            </div>
                            {data && data.question ? (data.question.map(item => (
                                <DropDownText
                                    title={item.question}
                                    isAllVisible={showAllQues}
                                >
                                    {item.answer}</DropDownText>
                            ))) : (
                                <p>Loading...</p>)}

                        </div>
                    </>
                ))}
            </div>
        )
    } else {
        return (
            <>Not found</>
        );
    }

}

export default TourPageById;