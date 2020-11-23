import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { reducer } from './app/reducer';
import { authReducer } from './pages/login/reducer';


export const rootReducer = combineReducers({
  app: reducer,
  auth: authReducer,
  form: formReducer,
})