/* eslint-disable no-undef, import/no-extraneous-dependencies */

// Import built-in Jest matchers
import React from 'react';
import '@testing-library/react-native/extend-expect';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    getItem: jest.fn(),
    setItem: jest.fn()
  };
});
jest.mock('react-i18next', () => {
  return {
    useTranslation: () => ({
      t: jest.fn(),
      i18n: jest.fn()
    })
  };
});
jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: () => ({
      Navigator: jest.fn(),
      Screen: jest.fn()
    })
  };
});
jest.mock('expo-device', () => {
  return {
    isDevice: true
  };
});
jest.mock('expo-notifications', () => {
  return {
    setNotificationHandler: jest.fn(),
    setNotificationChannelAsync: jest.fn(),
    requestPermissionsAsync: jest.fn(),
    getPermissionsAsync: jest.fn()
  };
});
jest.mock('expo-localization', () => {
  return {
    setNotificationHandler: () => ({
      handleNotification: jest.fn()
    }),
  };
});
jest.mock('react-native-paper', () => {
  return {
    Switch: jest.fn(),
    DefaultTheme: {
      colors: {
        primary: "#000"
      }
    },
    MD2LightTheme: {
      colors: {
        primary: "#000"
      }
    },
    MD2DarkTheme: {
      colors: {
        primary: "#000"
      }
    },
    MD3LightTheme: {
      colors: {
        primary: "#000"
      }
    },
    MD3DarkTheme: {
      colors: {
        primary: "#000"
      }
    },
    useTheme: () => ({}),
  };
});

