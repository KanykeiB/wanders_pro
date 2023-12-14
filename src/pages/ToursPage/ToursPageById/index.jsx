import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from './style.module.css'
import tourDataOperations from '../../../redux/thunk/thunk'
import mockApiDataTour from '../../../components/mockApi/mockapiTourById';
import DropDownText from '../../../components/dropdownText';
import { Modal } from '@mui/material';
import SwiperCustom from '../../../components/swiperCustom';
import { SwiperSlide } from 'swiper/react';
import { tourById } from '../../../redux/selectors/selectors'
import BookingCard from '../../../components/bookingCard';

//Dictionary
const languageChoice = { 'Russian': 'Русский', 'English': 'Английский', 'Kyrgyz': 'Кыргызский' }
const difficultyLevel = { 'Base': 'Базовый *', 'Medium': 'Средний **', 'Advanced': 'Продвинутый *****' }
const comfortLevel = { 'Base': 'Базовый *', 'Simple': 'Простой **', 'Medium': 'Средний ***', 'Above_average': 'Выше Среднего ****', 'High': 'Высокий *****' }
const TourPageById = () => {
    const dispatch = useDispatch()
    const { getTourById } = tourDataOperations;
    const [visibleImages, setVisibleImages] = useState(5)
    const [showAll, setShowAll] = useState(true)
    const [open, setOpen] = useState(false);
    const data = useSelector(tourById)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleShowAll = () => {
        setShowAll(!showAll)
    }
    useEffect(() => {
        dispatch(tourDataOperations.getTourById('1-eto-nazvanie-tura'))
    }, [])
    console.log(data, 'data from')

    return (
        <div className={styles.tourPageContainer}>
            {mockApiDataTour.map(el => (
                <>
                    <div>
                        <p className={styles.sectionName}>{data.title}</p>
                        <p>{el.rating ? el.rating : "Новый"} &#183; {el.state} &#183; {data.amount_of_days} дня</p>
                    </div>
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
                            <div>
                                <p className={styles.tags}>Сложность</p>
                                <p className={styles.tagsSmall}>{difficultyLevel[data.difficulty_level]} </p>
                            </div>
                            <div>
                                <p className={styles.tags}>Комфорт</p>
                                <p className={styles.tagsSmall}>{comfortLevel[data.comfort_level]}</p>
                            </div>
                            <div>
                                <p className={styles.tags}>Группа</p>
                                <p className={styles.tagsSmall}>До {data.max_people} туристов</p>
                            </div>
                            <div>
                                <p className={styles.tags}>Возраст</p>
                                <p className={styles.tagsSmall}>от {data.min_age} лет</p>
                            </div>
                        </div>
                        <div className={styles.dropDownTitleWrap}>
                            <p className={styles.sectionName}>Программа</p>
                            <button className={styles.showAllButton} onClick={handleShowAll}>Раскрыть все</button>
                        </div>
                        {data && data.days ? (
                            data.days.map(item => (
                                <DropDownText
                                    title={item.title}
                                    isAllVisible={showAll}
                                    pictures={item.days_images.length == 0 ? null : item.days_images.slice(0, 3).map(pic => (
                                        <img src={pic} alt="" />
                                    ))}
                                >
                                    {item.description}</DropDownText>
                            ))) : (
                            <p>Loading...</p>)}
                        <div className={styles.dropDownTitleWrap}>
                            <p className={styles.sectionName}>Проживание</p>
                            <button className={styles.showAllButton} onClick={handleShowAll}>Раскрыть все</button>
                        </div>
                        {data && data.place ? (data.place.map(item => (
                            <DropDownText
                                title={item.title}
                                isAllVisible={showAll}
                                pictures={item.place_images.length == 0 ? null : item.place_images.slice(0, 3).map(pic => (
                                    <img src={pic} alt="" />
                                ))}
                            >
                                {item.description}</DropDownText>
                        ))) : (
                            <p>Loading...</p>)}
                            <div className={styles.containerBooking}>
                                <BookingCard 
                                    touristMax={data.max_people}
                                    ageMin={data.min_age}
                                />
                                </div>
                    </div>
                </>
            ))}
        </div>
    );
};

export default TourPageById;