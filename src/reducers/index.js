import { combineReducers } from 'redux';
import postsReducer from './posts-reducer';
import postReducer from './post-reducer';
import authReducer from './auth-reducer';


const rootReducer = combineReducers({
  all: postsReducer,
  post: postReducer,
  auth: authReducer,
});

export default rootReducer;
