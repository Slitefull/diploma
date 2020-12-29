import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { appReducer } from './app/store'
import { loginReducer } from './pages/login/store'


export const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  form: formReducer,
})