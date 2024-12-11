import { useEffect, useRef, useState } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import sun from './sun.svg';
import moon from './moon.svg';
import './style.css';



const BtnDarkMode = () => {
    // const [darkMode, setDarkMode] = useState('light'); //переделал под кастомный хук что бы сохранялось в лоакалстор
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    // const btnRef = useRef(null);//ссылка на DOM-элемент


    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
            // btnRef.current.classList.add('dark-mode-btn--active');
        } else {
            document.body.classList.remove('dark');
            // btnRef.current.classList.remove('dark-mode-btn--active');
        }

    }, [darkMode])

    const onToggleDark = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        });
    }

    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active';

    return (
        <button className={darkMode === 'dark' ? btnNormal : btnActive} onClick={onToggleDark}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
}

export default BtnDarkMode;