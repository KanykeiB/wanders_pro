import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './style.module.css'
import mockApiData from '../../../components/mockApi/mockapiById';
import Modal from '@mui/material/Modal';
import SwiperCustom from '../../../components/swiperCustom'
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

const LocationPageById = () => {
    const { locationSpec } = useParams()
    const [visiblePic, setVisiblePic] = useState(3)
    const [visibleText, setVisibleText] = useState(500)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleReadMore = () => {
        setVisibleText((prev) => prev + 300)
    }
    return (
        <div className={styles.locationByIdContainer}>
            {mockApiData.map(el => (
                <div>
                    <h2 className={styles.locationTitle}>{el.title}</h2>
                    <p className={styles.locationState}>{el.state}</p>
                    <div className={styles.cardWDescSection}>
                        <div className={styles.descPart}>
                            <p className={styles.shortDescrip}>
                                {el.shortDesc}
                            </p>
                            <p className={styles.coordiatesTitle}>Координаты:</p>
                            <p className={styles.shortDescrip}>{el.coordinates}</p>
                            {el.type.map(item => (
                                <button className={styles.locationTypes}>{item}</button>))}
                        </div>
                        <div className={styles.lPicPart}>
                            <div className={styles.imgWrap}>
                                <div className={styles.imgItem1}>
                                    <img src={el.pictures[0]} alt="" />
                                </div>
                                <div className={styles.imgItem2}>
                                    <img src={el.pictures[1]} alt="" />
                                    <img src={el.pictures[2]} alt="" />
                                </div>
                                {el.pictures.length > visiblePic && <button
                                    className={styles.showMoreButton}
                                    onClick={handleOpen}>Показать еще фото</button>}
                            </div>
                        </div>

                        <Modal
                            open={open}
                            onClose={handleClose}
                        >
                            <div className={styles.modalWindow}>
                                <SwiperCustom>
                                    {el.pictures.map(pic =>
                                        <SwiperSlide className={styles.mySwiperSlide}>
                                            <img src={pic} alt="pic was not found" />
                                        </SwiperSlide>
                                    )}
                                </SwiperCustom>
                            </div>
                        </Modal>
                    </div>
                    <div>
                        <p className={styles.description}>Описание</p>
                        <p className={styles.mainText}>{el.description}</p>
                        <p className={styles.place}>{el.place}</p>
                        <p className={styles.mainText}>{el.additionalDescription.slice(0, visibleText)}</p>
                        {el.additionalDescription.length > visibleText &&
                            <button onClick={handleReadMore} className={styles.readMoreButton}>Читать далее</button>}
                    </div>
                    <div>
                        <p className={styles.description}>Как добраться</p>
                        <p className={styles.mainText}>{el.howToReach}</p>
                        {el.transoprt.map(transport => (
                            <button className={styles.transportButton}>{transport}</button>))}
                        <p className={styles.smallerText}>Время в пути: <span>{el.time}</span></p>
                        <p className={styles.smallerText}>Стоимость: <span>{el.price}</span></p>
                    </div>
                    <div>
                        <p className={styles.description}>Туры к ущелью Ала-Арча</p>
                        <span>to be filled</span>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default LocationPageById;