import React, { useState } from 'react';
import { styled } from '@mui/system';
import * as yup from "yup"
import styles from './style.module.css'
import {  MenuItem, Modal, TextField } from '@mui/material';
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import "yup-phone-lite";


const schema = yup.object({
    date: yup.string().required(),
    name: yup.string().required(),
    lastname: yup.string().required(),
    email : yup.string().required(),
    number: yup.string().required(),
    agreeCheckbox: yup.boolean().required(),
}).required();

const SelectDate = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root': {
        color: 'black',
        padding: '15px',
        margin: '8px 0px',
        background: 'var(--color-base-white, #FFF)',
        borderRadius: '25px',
    },
    '& .MuiInputLabel-root': {
        color: 'black',
        fontSize: '22px',
        padding: '12px 20px',
        fontWeight: 300,
    },
}));

const BookingCard = ({ price, availableDates, currency, touristMax, ageMin }) => {
    const [phoneCode, setPhoneCode] = useState('+996 999 999 999')
    const [counter, setCounter] = useState(1)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handlePhoneCode = (event) => {
        const countryCode = event.target.value
        switch (countryCode) {
            case 'KG':
                setPhoneCode('+996 999 999 999');
                break;
            case 'KZ':
                setPhoneCode('+7 999 999 9999');
                break;
            case 'RU':
                setPhoneCode('+7 999 999 9999');
                break;
            case 'UZ':
                setPhoneCode('+998 999 999 999');
                break;
            default:
                setPhoneCode('');
        }
    }
    const handleClickAdd = () => {
        setCounter((prev) => prev + 1)
    }
    const handleClickDecrease = () => {
        setCounter((prev) => prev - 1)
    }
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        data.amountOfPeople = counter;
        console.log(data)
    }
    return (
        <div className={styles.bookingBoxWrap}>
            <p className={styles.priceTag}>{price} {currency} <span> за 1 туриста</span></p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SelectDate
                    fullWidth
                    id="travelDate"
                    select
                    label="Дата путешествия"
                    {...register('date')}
                >
                    <MenuItem value={availableDates}>{availableDates}</MenuItem>
                </SelectDate>
                <div className={styles.counterButtonsWrap}>
                    <div>
                        <p className={styles.counterButtonsTextMain}>Кол-во туристов</p>
                        <span className={styles.counterButtonsTextSmall}>До {touristMax} туристов старше {ageMin} лет</span>
                    </div>
                    <div>
                        <button className={styles.counterButtons} onClick={handleClickDecrease}>-</button>
                        <span className={styles.counterValue}>{counter}</span>
                        <button className={styles.counterButtons} onClick={handleClickAdd}>+</button>
                    </div>
                </div>
                <button className={styles.bookButton} onClick={handleOpen}>Забронировать</button>
            </form>
            <p className={styles.bookText} >Не требует оплаты сейчас. Можно задать вопросы автору тура.</p>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className={styles.fromContainer}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className={styles.closeButtonWrap}>
                            <button
                                className={styles.closeButton}
                                onClick={handleClose}
                            >x</button>
                        </p>
                        <p className={styles.title}>Забронировать тур</p>
                        <p className={styles.helperText}>Оставьте свои данные и менеджер с вами свяжется для подтверждения брони</p>
                        <TextField fullWidth label="Имя *" variant="filled" sx={{ mt: 2 }} {...register('name')} />
                        <TextField fullWidth label="Фамилия *" variant="filled" sx={{ mt: 2 }} {...register('lastname')} />
                        <TextField fullWidth label="E-mail *" variant="filled" sx={{ mt: 2 }} {...register('email')} />
                        <div className={styles.countrySelectWrap}>
                            <Controller
                                name="country"
                                control={control}
                                defaultValue="KG"
                                render={({ field }) => (
                                    <TextField
                                        select
                                        style={{ width: '200px' }}
                                        value={field.value}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            handlePhoneCode(e);
                                        }}
                                        variant="filled"
                                    >
                                        <MenuItem value={'KG'}>Кыргызстан</MenuItem>
                                        <MenuItem value={"KZ"}>Казахстан</MenuItem>
                                        <MenuItem value={"RU"}>Россия</MenuItem>
                                        <MenuItem value={"UZ"}>Узбекистан</MenuItem>
                                    </TextField>
                                )}
                            />
                            <TextField placeholder={`${phoneCode}`} variant="filled" {...register('number')} />
                        </div>
                        <p className={styles.termsAndConditions}>Нажимая на кнопку “Забронировать”:</p>
                        <div className={styles.termsAndConditionsWrap}>
                            <input className={styles.termsAndConditionsBox} type="checkbox" {...register('agreeCheckbox')} />
                            <p className={styles.termsAndConditions}>Я принимаю условия  <a href="#">Пользовательского соглашения</a> и даю согласие на обработку моих персональных данных в соответствии с <a href="#">Политикой конфиденциальности</a> </p>
                        </div>
                        <div className={styles.submitButton}><input type="submit" className={styles.bookButton} value='Забронировать' /></div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default (BookingCard);