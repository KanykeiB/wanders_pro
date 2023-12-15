import React, {useState} from 'react';
import logo from '../assests/NordVPN.png'
import {Box, Button, Typography} from "@mui/material";
import sidebarStyle from './sidebar.module.css';
import {NavLink} from "react-router-dom";
import HomeIcon from "../Icons/HomeIcon";
import ToursIcon from "../Icons/ToursIcon";
import LocationsIcon from "../Icons/LocationsIcon";

const Sidebar = () => {

    const [links] = useState(sidebarNavigation);

    return (
        <Box className={sidebarStyle.sidebar}>
            <Box className={sidebarStyle.logo}>
                <Box className={sidebarStyle.logo_img}><img src={logo} alt=""/></Box>
                <Typography className={sidebarStyle.logo_title} variant="h1">Wanders</Typography>
            </Box>
            <Box className={sidebarStyle.sidebar_menu}>
                {
                    links.map((el, idx) => (
                        <NavLink
                            className={sidebarStyle.btn_icons}
                            activeClassName={sidebarStyle.active}
                            key={idx}
                            to={el.navigateTo}
                        ><span>{el.icon}</span><Typography
                            className={sidebarStyle.sidebar_menu_title}>{el.title}</Typography></NavLink>
                    ))
                }

            </Box>
            <Box className={sidebarStyle.about_project}>
                <Typography className={sidebarStyle.sidebar_title}>О проекте</Typography>
                <Box className={sidebarStyle.about_project_links}>
                    <NavLink to={'/'}>Как это работает?</NavLink>
                    <NavLink to={'/'}>О нас</NavLink>
                    <NavLink to={'/'}>Поддержка и контакты</NavLink>
                </Box>
            </Box>
            <Box className={sidebarStyle.travel_writers}>
                <Typography className={sidebarStyle.sidebar_title}>Авторам путешествий</Typography>
                <Typography className={sidebarStyle.sidebar_desc}>Организуйте собственный тур вместе с нами</Typography>
                <Button className={sidebarStyle.learn_more_btn}>Узнать больше</Button>
            </Box>
            <Box className={sidebarStyle.eco_tour_out}>
                <Box className={sidebarStyle.eco_tour}>
                    <span>ЭКО-</span>
                    <span>ТУР</span>
                    <span>ИЗМ</span>
                    <Button className={sidebarStyle.eco_tour_btn}>Узнать больше</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;

const sidebarNavigation = [
    {
        navigateTo: '/',
        title: 'Главная',
        icon: <HomeIcon/>,
    },
    {
        navigateTo: '/tours/:category',
        title: 'Туры',
        icon: <ToursIcon/>,
    },
    {
        navigateTo: '/locations//',
        title: 'Локации',
        icon: <LocationsIcon/>,
    },
    // {
    //     navigateTo: '/locations',
    //     title: 'локэтион',
    //     icon: <LocationsIcon/>,
    // },

]