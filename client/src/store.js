import {combineReducers, compose, createStore} from 'redux'

import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
  form: formReducer
})

const store = createStore(reducers, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store;