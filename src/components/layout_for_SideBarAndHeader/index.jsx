import React from 'react';
import {Box} from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Layout = ({children}) => {
    return (
        <Box className={'container'}>
            <Box sx={page}>
                <Sidebar/>
                <Box>
                    <Header/>
                    <Box>
                        {children}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const page = {
    display: 'flex',
    gap: '70px',
}

export default Layout;