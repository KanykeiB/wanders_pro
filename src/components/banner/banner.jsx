import React from 'react';
import {Box, Button, FormControl, MenuItem, Select, Typography} from "@mui/material";
import bannerStyle from './style.module.css';
import imgBanner from '../assests/b5b8f4bd33b3ec4e7b8c6febdbe61a78.png';
import FilterIcon from "../icons/filterIcon";

const Banner = () => {

    const [typeTour, setTypeTour] = React.useState('');
    const [activity, setActivity] = React.useState('');
    const [level, setLevel] = React.useState('');

    console.log(typeTour, activity, level)

    return (
        <Box className={bannerStyle.banner}>
            <Box className={bannerStyle.banner_img}>
                <img src={imgBanner} alt=""/>
            </Box>
            <Box className={bannerStyle.filters}>
                <Box>
                    <Typography variant="h3" className={bannerStyle.title}>
                        Туры
                    </Typography>
                </Box>
                <Box className={bannerStyle.filter_selectors}>
                    <FormControl sx={{ m: 1, width: 130 }}>
                        <Select
                            value={typeTour}
                            onChange={(e) => setTypeTour(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className={bannerStyle.filter_select}
                        >
                            <MenuItem value="">
                                <>Вид тура</>
                            </MenuItem>
                            <MenuItem value={'avtor'}>Авторские</MenuItem>
                            <MenuItem value={'group'}>Групповые</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 170 }}>
                        <Select
                            value={activity}
                            onChange={(e) => setActivity(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className={bannerStyle.filter_select}
                        >
                            <MenuItem value="">
                                <>Вид активности</>
                            </MenuItem>
                            <MenuItem value={'pohod'}>Поход</MenuItem>
                            <MenuItem value={'pryjki'}>Прыжки</MenuItem>
                            <MenuItem value={'chilit'}>Чилить</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 170 }}>
                        <Select
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className={bannerStyle.filter_select}
                        >
                            <MenuItem value="">
                                <>Уровень сложности</>
                            </MenuItem>
                            <MenuItem value={'simple'}>Легкий</MenuItem>
                            <MenuItem value={'middle'}>Средний</MenuItem>
                            <MenuItem value={'hard'}>Сложный</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        className={bannerStyle.all_filters_btn}
                    >
                        <FilterIcon/>
                        Все фильтры
                    </Button>
                    <Button className={bannerStyle.show_more_btn}>Показать туры</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;