import React from 'react';
import style from "./style.module.css";


const TitleWrap = ({button, h1}) => {
    return (
        <div className={style.Title} >
            <button className={style.whiteBtn}>{button}</button>
            <h1>{h1}</h1>
        </div>
    );
};

export default TitleWrap;