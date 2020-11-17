import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import {App} from './app/App';
import {GlobalStyle} from './variables';


ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<GlobalStyle/>
			<App/>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
)