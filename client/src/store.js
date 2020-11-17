import {combineReducers, compose, createStore} from 'redux'

import {reducer as formReducer} from 'redux-form'
import { appReducer } from './app/app-reducer';

const reducers = combineReducers({
  app: appReducer,
  form: formReducer
})

const store = createStore(reducers, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store;