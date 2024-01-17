import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES, getAuthData } from './utils/constant';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';

import "./localization/i18n.config";

const Stack = createNativeStackNavigator();

interface IAuth {
  email: string;
  firstname: string;
  lastname: string;
  token: string;
}

const App = () => {
  const [auth, setAuth] = useState<IAuth>();

  useEffect(() => {
    async function fetchAuthData() {
      const response = await getAuthData();
      setAuth(response);
    }
    fetchAuthData();
  }, [])

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={ROUTES.SIGNUP_ROUTE} component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name={ROUTES.LOGIN_ROUTE} component={LoginScreen} options={{ headerShown: false }} />
          {
            auth?.token ? <Stack.Screen name={ROUTES.USER_ROUTE} component={UserScreen} options={{ title: 'User Information' }} /> : null
          }

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
