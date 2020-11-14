import {combineReducers, compose, createStore} from 'redux';
import {appReducer} from './app/app-reducer';

const reducers = combineReducers({
  app: appReducer
})

const store = createStore(reducers, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store;