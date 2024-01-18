/* eslint-disable no-undef, import/no-extraneous-dependencies */

// Import built-in Jest matchers
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
