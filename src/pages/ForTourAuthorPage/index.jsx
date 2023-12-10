import React from 'react';
import style from './style.module.css'
import Hero from "../../components/forTourAuthor/HERO";
import AboutUs from "../../components/forTourAuthor/ABOUT-US";
import Benefits from "../../components/forTourAuthor/BENEFITS";
import ForWhom from "../../components/forTourAuthor/FOR-WHOM";
import WorkProcess from "../../components/forTourAuthor/WORK-PROCESS";
import Comments from "../../components/forTourAuthor/COMMENTS";
import Questions from "../../components/Dropdown-Questions/Questions/Questions";
import Contacts from "../../components/Contacts/Contacts";

const ForTourAuthor = () => {
    return (
        <div className={style.container}>
            <Hero/>
            <AboutUs/>
            <Benefits/>
            <ForWhom/>
            <WorkProcess/>
            <Comments/>
            <Questions/>
            <Contacts/>
        </div>
    );
};

export default ForTourAuthor;