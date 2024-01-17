import AsyncStorage from '@react-native-async-storage/async-storage';

// ** Common constants
export const DEFAULT_LANG: string = "en";

export const EMAIL_REGEX: any = {
    "en": /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.en$/,
    "ae": /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.ae$/,
    "de": /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.de$/,
    "fr": /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.fr$/,
}

export const setAuthData = async (value: any) => {
    try {
        const jsonValue: any = value ? JSON.stringify(value) : null;
        await AsyncStorage.setItem('auth', jsonValue);
    } catch (e) {
        console.log("Error in AsyncStorage setItem", e);
    }
};

export const getAuthData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('auth');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log("Error in AsyncStorage getItem", e);
    }
};
