import React, { useRef } from 'react';
import styles from './style.module.css'
import { Swiper} from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperCustom = ({ children }) => {
    const swiperRef = useRef(null);
    const handlePrevButton = () => {
        swiperRef.current.swiper.slidePrev();
    };
    const handleNextButton = () => {
        swiperRef.current.swiper.slideNext();
    };
    return (
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                ref={swiperRef}
                navigation={{ nextEl: ".arrowLeft", prevEl: ".arrowRight" }}
                modules={[Pagination, Navigation]}
                className={styles.mySwiper}
            >
                {children}
                <button className={styles.arrowLeft} onClick={handlePrevButton}>&#8678;</button>
                <button className={styles.arrowRight} onClick={handleNextButton}>&#8680;</button>
            </Swiper>

    );
};

export default SwiperCustom;