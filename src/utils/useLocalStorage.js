import { useEffect, useState } from "react"

// function getStorageValue(key, defaultValue) {
//     const saved = localStorage.getItem(key);
//     //если ничего не сохранено возвращаем значение по умолчанию
//     if (saved === null) {
//         return defaultValue;
//     }

//     try {
//         //пробуем распарсить сохраненное значение
//         return JSON.parse(saved);
//     } catch (error) {
//         //если произошла ошибка при парсинге возвращаем значение по умолчанию
//         console.error(`Ошибка парсинга значения из localStorage по ключу "${key}":`, error);
//         return defaultValue;
//     }
// }

function getStorageValue(key, defaultValue) {
    const saved = localStorage.getItem(key);
    
    //если ничего не сохранено возвращаем значение по умолчанию
    if (saved === null) {
        return defaultValue;
    }

    const initial = JSON.parse(saved);

    return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue];
}