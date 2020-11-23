import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'
import { rootReducer } from './root-reducer';


const saga = createSagaMiddleware()

export const store = createStore(rootReducer, compose(applyMiddleware(saga), window.devToolsExtension ? window.devToolsExtension() : f => f))

saga.run(rootSaga)