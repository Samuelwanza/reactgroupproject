import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from './missions';
import store from '../../redux/store';

test('snapshot of Missions page', () => {
  const missionsList = render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );

  expect(missionsList).toMatchSnapshot();
});
