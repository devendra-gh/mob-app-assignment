import React, { useState, useMemo, useCallback } from 'react';
import { useTranslation } from "react-i18next";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme, PaperProvider } from 'react-native-paper';
import { ROUTES } from './utils/constant';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';
import { PreferencesContext } from './components/LanguagePicker/PreferencesContext';

import "./localization/i18n.config";

const Stack = createNativeStackNavigator();

const App = () => {
  const { t } = useTranslation();
  const { theme }: any = useTheme({ fallbackSourceColor: '#7b5e97' });

  const [paperTheme, setPaperTheme] = useState(theme);
  const [isThemeDark, setIsThemeDark] = useState(false);

  const changeTheme = useCallback((data: any) => {
    setPaperTheme(data);
    return setIsThemeDark(data?.dark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      changeTheme,
      isThemeDark,
    }),
    [changeTheme, isThemeDark]
  );

  return (
    <>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={paperTheme}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name={ROUTES.SIGNUP_ROUTE} component={SignupScreen} options={{ headerShown: false }} />
              <Stack.Screen name={ROUTES.LOGIN_ROUTE} component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name={ROUTES.USER_ROUTE} component={UserScreen} options={{ title: t("user_info") }} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PreferencesContext.Provider>
    </>
  );
}

export default App;
