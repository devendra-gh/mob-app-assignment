import { render, act } from '@testing-library/react-native';
import UserScreen from "../screens/UserScreen";

describe('UserScreen', () => {
  it('should match snapshot', async () => {
    const result = render(
      <UserScreen />
    );
    await act(async () => { expect(result).toMatchSnapshot(); })
  });
});

