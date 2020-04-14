import React from 'react';
import * as rtl from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Router, Link, Redirect } from 'react-router-dom';

import App from './App';
import Landing from './components/Landing';
import { createMemoryHistory } from 'history';

//* REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/reducer';
const store = createStore(rootReducer);

afterEach(rtl.cleanup);

describe('<Landing />', () => {
	const history = createMemoryHistory();
	history.push('/');

	it('should render', () => {
		rtl.render(
			<Provider store={store}>
				<Router history={history}>
					<Landing />
				</Router>
			</Provider>,
			document.getElementById('root')
		);
	});
});

// test('App renders without crashing', () => {
// 	rtl.render(<App />);
// });
