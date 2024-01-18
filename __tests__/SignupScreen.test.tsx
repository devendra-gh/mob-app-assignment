import { render, act } from '@testing-library/react-native';
import SignupScreen from "../screens/SignupScreen";

describe('SignupScreen', () => {
  it('should match snapshot', async () => {
    const result = render(
      <SignupScreen />
    );
    await act(async () => { expect(result).toMatchSnapshot(); })
  });
});

