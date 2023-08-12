import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from './Rockets';
import store from '../../redux/store';

test('snapshot of Rockets page', () => {
  const rocketsList = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  expect(rocketsList).toMatchSnapshot();
});
