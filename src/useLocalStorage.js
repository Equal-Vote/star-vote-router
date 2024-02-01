import { useState, useEffect } from "react";

export default (key, defaultValue, updateRate = null)  => {
    // This hook behaves similarly to useState however the state is also stored in local storage
    // If the value in local storage doesn't exist it is set to defaultValue
    // The optional input updateRate allows for periodic checking to see if the value in local storage has changed
    // to allow multiple components using the same key to be updated
    const getStoredValue = (key, defaultValue) => {
        // getting stored value
        const saved = localStorage.getItem(key);
        const initial = JSON.parse(saved);
        if (!initial) {
            localStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue
        }
        return initial;
    }
    const [value, setStoredValue] = useState(() => {
        return getStoredValue(key, defaultValue);
    });

    const setValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setStoredValue(newValue)
    }

    const getValue = () => {
        return getStoredValue(key, defaultValue);
    }

    return [value, setValue, getValue];
};