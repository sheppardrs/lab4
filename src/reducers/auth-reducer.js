import { ActionTypes } from '../actions';


// For UI Design hardcoded posts
// const post1 = { id: 1, title: 'Sharity', text: 'Give Efficiently, Know Your Impact, Find Your Friend.' };


const authReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { authenticated: true };
    case ActionTypes.DEAUTH_USER:
      return { authenticated: false };
    default:
      return state;
  }
};

export default authReducer;
