import React from 'react';
import globeImg from "../../images/globe middle east.png";
import signPostImg from "../../images/signpost.png";
import suitcaseImg from "../../images/orange suitcase with stickers.png";
import boardingPassImg from "../../images/boarding pass.png";
import style from './style.module.css'
const GroupImg = () => {
    return (
        <div className={style.GroupImg}>
            <img className={style.globe} src={globeImg} alt=""/>
            <img className={style.signPost} src={signPostImg} alt=""/>
            <img className={style.suitcase} src={suitcaseImg} alt=""/>
            <img className={style.boardPass} src={boardingPassImg} alt=""/>
        </div>
    );
};

export default GroupImg;