import React, { useEffect, useState } from 'react';
import styles from './Dropdown.module.css'
import PlusIcon from "../Icons/plusIcon";
import MinusIcon from "../Icons/minusIcon";

const DropDown = ({ title, children, isAllVisible, pictures}) => {
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
                    <p>{title}</p>
                    <p onClick={handleShowTextButton} className={visibleText ? styles.hiddenText : styles.dropdownTextIcon}><MinusIcon/></p>
                    <p onClick={handleShowTextButton} className={visibleText ? styles.dropdownTextIcon : styles.hiddenText}><PlusIcon/></p>
                </div>
                <div onClick={handleShowTextButton} className={visibleText ? styles.hiddenText : styles.dropdownText}>
                    <p className={styles.child}>{children}</p>
                    <div className={styles.picturesDown}>
                        {pictures}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DropDown;
