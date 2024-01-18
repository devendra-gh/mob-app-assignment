import React from 'react';
import { useTranslation } from "react-i18next";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from './utils/constant';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';

import "./localization/i18n.config";

const Stack = createNativeStackNavigator();

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={ROUTES.SIGNUP_ROUTE} component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name={ROUTES.LOGIN_ROUTE} component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name={ROUTES.USER_ROUTE} component={UserScreen} options={{ title: t("user_info") }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
