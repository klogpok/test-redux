import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import App from './containers/App';

import './index.css';

const app = (
	<Provider store={store}>
		<App className="app" />
	</Provider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(app, rootElement);
