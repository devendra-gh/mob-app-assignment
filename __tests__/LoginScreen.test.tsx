import { render, act } from '@testing-library/react-native';
import LoginScreen from "../screens/LoginScreen";

describe('LoginScreen', () => {
  it('should match snapshot', async () => {
    const result = render(
      <LoginScreen />
    );
    await act(async () => { expect(result).toMatchSnapshot(); })
  });
});

