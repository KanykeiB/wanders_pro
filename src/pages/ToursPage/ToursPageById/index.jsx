import React, { useState } from 'react';
import styles from './style.module.css'
import mockApiDataTour from '../../../components/mockApi/mockapiTourById';
import DropDownText from '../../../components/dropdownText';
import { Modal } from '@mui/material';
import SwiperCustom from '../../../components/swiperCustom';
import { SwiperSlide } from 'swiper/react';
import Layout from "../../../components/layout_for_SideBarAndHeader";

const TourPageById = () => {
    const [visibleImages, setVisibleImages] = useState(5)
    const [showAll, setShowAll] = useState(true)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleShowAll = () => {
        setShowAll(!showAll)
    }

    return (
        <Layout>
            <div className={styles.tourPageContainer}>
                {mockApiDataTour.map(el => (
                    <>
                        <div>
                            <p className={styles.sectionName}>{el.name}</p>
                            <p>{el.rating ? el.rating : "Новый"} &#183; {el.state} &#183; {el.programs.length} дня</p>
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
                        <div className={styles.dropDownTitleWrap}>
                            <p className={styles.sectionName}>Программа</p>
                            <button className={styles.showAllButton} onClick={handleShowAll}>Раскрыть все</button>
                        </div>
                        {el.programs.map(item => (
                            <DropDownText
                                title={item.title}
                                isAllVisible={showAll}
                                pictures={item.pictures.slice(0, 3).map(pic => (
                                    <img src={pic} alt="" />
                                ))}
                            >
                                {item.description}</DropDownText>
                        ))}

                    </>
                ))}
            </div>
        </Layout>
    );
};

export default TourPageById;