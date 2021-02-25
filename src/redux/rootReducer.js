import { combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;
