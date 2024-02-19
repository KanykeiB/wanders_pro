import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './style.module.css'
import mockApiData from '../../../components/mockApi/mockapiById';
import Modal from '@mui/material/Modal';
import SwiperCustom from '../../../components/swiperCustom'
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Layout from "../../../components/layout_for_SideBarAndHeader";
import { useDispatch, useSelector } from 'react-redux';
import { locationData, loading, tours } from '../../../redux/selectors/selectors';
import { getLocationById } from '../../../redux/thunk/thunk'
import TourCard from '../../../components/tourCard';
import { getToursByTag } from '../../../redux/actions/tourActions';

const LocationPageById = () => {
    const dispatch = useDispatch()
    const [tourName, setTourName] = useState('1-eto-nazvanie-lokatsii')
    const similarTours = useSelector(tours)
    console.log(similarTours.data, 'arra')
    const [carI, setCarI] = useState(0)
    const data = useSelector(locationData)
    const loadData = useSelector(loading)
    console.log(data)
    const { locationSpec } = useParams()
    const [visiblePic, setVisiblePic] = useState(3)
    const [visibleText, setVisibleText] = useState(500)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleReadMore = () => {
        setVisibleText((prev) => prev + 300)
    }
    const handleButtonClick = (i) => {
        setCarI(i)
        console.log(carI, 'transport')
    }
    // dispatch(getTourByFilter(filterApplied))
    // console.log("updt")
    useEffect(() => {
        dispatch(getLocationById(tourName))
        //the one beow is just a test
        dispatch(getToursByTag('?main_location=Башкирия'))
    }, [tourName])
    if (loadData) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else if (data && Object.keys(data).length > 0) {
        return (
            <Layout>
                <div className={styles.locationByIdContainer}>
                    {mockApiData.map(el => (
                        <div>
                            <h2 className={styles.locationTitle}>{data.title}</h2>
                            <p className={styles.locationState}>{el.state}</p>
                            <div className={styles.isMobile}>
                                <SwiperCustom>
                                    {el.pictures.map(pic =>
                                        <SwiperSlide className={styles.mySwiperSlide}>
                                            <img src={pic} alt="pic was not found" />
                                        </SwiperSlide>
                                    )}
                                </SwiperCustom>
                            </div>
                            <div className={styles.cardWDescSection}>

                                <div className={styles.descPart}>
                                    <p className={styles.shortDescrip}>
                                        {data.short_description}
                                    </p>
                                    <p className={styles.coordiatesTitle}>Координаты:</p>
                                    <p className={styles.shortDescrip}>{data.coordinates}</p>
                                    {data.activity.map(item => (
                                        <button className={styles.locationTypes}>{item.activity}</button>))}
                                    {data.collection.map(item => (
                                        <button className={styles.locationTypes}>{item.collection}</button>))}
                                </div>
                                {
                                    data.location_info_images && <div className={styles.lPicPart}>
                                        <div className={styles.imgWrap}>
                                            <div className={styles.imgItem1}>
                                                <img src={data.location_info_images[0]} alt="" />
                                            </div>
                                            <div className={styles.imgItem2}>
                                                <img src={data.location_info_images[1]} alt="" />
                                                <img src={data.location_info_images[2]} alt="" />
                                            </div>
                                            {data.location_info_images.length > visiblePic && <button
                                                className={styles.showMoreButton}
                                                onClick={handleOpen}>Показать еще фото</button>}
                                        </div>
                                    </div>
                                }
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <div className={styles.modalWindow}>
                                        <SwiperCustom>
                                            {data.location_info_images.map(pic =>
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
                                <p className={styles.mainText}>{data.description}</p>
                                <p className={styles.place}>{el.place}</p>
                                <p className={styles.mainText}>{el.additionalDescription.slice(0, visibleText)}</p>
                                {el.additionalDescription.length > visibleText &&
                                    <button onClick={handleReadMore} className={styles.readMoreButton}>Читать далее</button>}
                            </div>
                            <div>
                                <p className={styles.description}>Как добраться</p>
                                {el.getting_there.map((transport, i) => (
                                    <button key={i} className={styles.transportButton} onClick={() => handleButtonClick(i)} autoFocus={i === 0}>{transport.title}</button>))}
                                <div>
                                    <p className={styles.mainText}>{el.getting_there[carI].description}</p>
                                    <p className={styles.smallerText}>Время в пути: <span>{el.getting_there[carI].travel_time}</span></p>
                                    <p className={styles.smallerText}>Стоимость: <span>{el.getting_there[carI].price_travel}</span></p>
                                </div>

                            </div>
                            <div>
                                <p className={styles.description}>Туры к ущелью Ала-Арча</p>

                                {
                                    similarTours || similarTours.data.length>0 ? similarTours.data.map(tour => (
                                            <>
                                                <p>{tour.title}</p>
                                                <p>{tour.price_KGZ}</p>
                                            </>
                                    )) :<div> Ничего нет </div>
                                }
                            </div>

                        </div>
                    ))}
                </div>
            </Layout>
        )
    }
};

export default LocationPageById;