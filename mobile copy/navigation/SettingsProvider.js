import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../translations/i18n';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [selectedSettingsLanguage, setSelectedSettingsLanguage] = useState('en');

    const setLanguage = async (language) => {
        try {
            if (language !== 'en' && language !== 'kn' && language !== 'hi') {
                throw new TypeError('Invalid language selection. Must be one of "en", "kn", or "hi".');
            }
            await AsyncStorage.setItem('language', language);
            i18n.locale = language;
            setSelectedSettingsLanguage(language);
        }
        catch (error) {
            console.log('[SettingsProvider] setLanguage() failed: ', error);
        }
    }

    const getLanguage = async () => {
        try {
            let language = await AsyncStorage.getItem('language');
            return language;
        }
        catch (error) {
            console.log('[SettingsProvider] getLanguage() failed: ', error);
        }
    }

    ( 
        async () => {
            let currentLanguage = await getLanguage();
            if (!currentLanguage) {
                currentLanguage = 'en';
                await setLanguage(currentLanguage);
            }
            setSelectedSettingsLanguage(currentLanguage);
            i18n.locale = currentLanguage;
        }
    )()

    return (
        <SettingsContext.Provider
            value=
            {{
                selectedSettingsLanguage,
                setLanguage, getLanguage
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}
