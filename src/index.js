// Redux flow:
/*

1. create a `Store` using createStore module, can be extended using applyMiddleware()
2. add the `Provider` using the <Provider> tag
3. create a `Containers` inside the containers folder using;
	 function mapDispatchToProps(dispatch) {
		return bindActionCreators({ fetchWeather }, dispatch);
	}
4. create a DOM Components using the React `Component` module
5. create an action inside actions folder
6. handle the actions using `Reducer`
7. Reducer will update the Store
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));


