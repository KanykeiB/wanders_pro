import React, {useState} from 'react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import './datepicker.css';
import {Controller} from "react-hook-form";

const Datepicker = ({startDay, endDay, control, name}) => {

    const [dateRange, setDateRange] = useState([]);

    const options = {
        // locale: {
        //     ...Russian,
        //     months: {
        //         ...Russian.months,
        //         shorthand: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Ноя", "Дек",],
        //         longhand: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
        //     }
        // },
        monthSelectorType: 'static',
        minDate: new Date(),
        altFormat: "J M ",
        altInput: false,
        dateFormat: 'd F',
        mode: 'range',
        enableTime: false,
        startDate: startDay,
        endDate: endDay,
    };



    return (
        <>
        <Controller
            name={name}
            control={control}
            render={({field}) => {
                setDateRange(field.value)
                return (
                    <Flatpickr

                        placeholder="Когда?"
                        className={'datePicker'}
                        options={options}
                        data-text-field
                        data-enable-time
                        // value={dateRange}
                        onChange={(date) => {
                            setDateRange( date );
                        }}
                        {...field}
                    />
                )
            }}/>
        </>
    );
};

export default Datepicker;