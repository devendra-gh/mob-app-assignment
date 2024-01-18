import React, { createContext } from 'react';

export const PreferencesContext = createContext({
    changeTheme: (lang: any) => { },
    isThemeDark: false,
});
