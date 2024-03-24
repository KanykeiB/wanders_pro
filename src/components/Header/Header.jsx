import React from 'react';
import {Box, Button} from "@mui/material";
import DatepickerAndSearch from "../datepickerAndSearchComponent";
import headerStyle from './header.module.css'
import FavoriteIcon from "../icons/favoriteIcon";
import MessageIcon from "../icons/messageIcon";
import UserDropdownMenu from "../userDropdownMenu/userDropdownMenu";


const Header = () => {

    return (
        <Box className={headerStyle.header}>
            <Box>
                <DatepickerAndSearch />
            </Box>
            <Box className={headerStyle.header_right_side}>
                <Button className={headerStyle.header_inside}>
                    <FavoriteIcon/>
                    <span>Избранное</span>
                </Button>
                <Button className={headerStyle.header_inside}>
                    <MessageIcon/>
                    <span>Сообщения</span>
                </Button>
            </Box>
            <Box>
                <UserDropdownMenu/>
            </Box>
        </Box>
    );
};

export default Header;