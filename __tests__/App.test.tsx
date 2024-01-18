import * as React from 'react';
import { render, act } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import UserScreen from '../screens/UserScreen';

const Stack = createNativeStackNavigator();

describe('App', () => {
  it('should match snapshot', async () => {
    const result = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SIGNUP_ROUTE" component={SignupScreen} />
          <Stack.Screen name="LOGIN_ROUTE" component={LoginScreen} />
          <Stack.Screen name="USER_ROUTE" component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
    await act(async () => { expect(result).toMatchSnapshot(); })
  });
});
