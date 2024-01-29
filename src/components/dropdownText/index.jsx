import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const DropDownText = ({ title, children, isAllVisible, pictures }) => {
    const [visibleText, setVisibleText] = useState(false)
    const handleShowTextButton = () => {
        setVisibleText(!visibleText)
    }
    useEffect(() => {
        setVisibleText(!isAllVisible)
    }, [isAllVisible])
    return (
        <div>
            <div className={styles.dropdownContainer}>
                <div className={styles.dropdownTextButton} >
                    <p className={styles.dropDownTitle}>{title}</p>
                    <p onClick={handleShowTextButton} className={visibleText ? styles.hiddenText : styles.dropdownTextIcon}><KeyboardArrowDownIcon /></p>
                    <p onClick={handleShowTextButton} className={visibleText ? styles.dropdownTextIcon : styles.hiddenText}><KeyboardArrowUpIcon /></p>
                </div>
                <div onClick={handleShowTextButton} className={visibleText ? styles.dropdownText : styles.hiddenText}>
                    <p>{children}</p>
                    {pictures && <div className={styles.picturesDown}>
                        {pictures}
                    </div>}

                </div>
            </div>
        </div>
    );
};

export default DropDownText;