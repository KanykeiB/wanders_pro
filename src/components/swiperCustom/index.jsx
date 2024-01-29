import React, { useRef,useState } from 'react';
import styles from './style.module.css'
import { Swiper } from 'swiper/react';
import { Pagination, Navigation} from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperCustom = ({ children }) => {
    const swiperRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const handlePrevButton = () => {
        swiperRef.current.swiper.slidePrev();
    };
    const handleNextButton = () => {
        swiperRef.current.swiper.slideNext();
    };
    const handleSlideChange = (swiper) => {
      setActiveSlide(swiper.activeIndex);
    };
    const customBullets = Array.from({ length: children.length }).map((_, i) => (
        <span
          key={i}
          className={`${styles.customBullet} ${activeSlide === i ? styles.activeBullet : ''}`}
        ></span>
      ));
    return (
        <>
            <Swiper
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true, 
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
            <div className={styles.customPagination}>{customBullets}</div>
        </>
    );
};

export default SwiperCustom;