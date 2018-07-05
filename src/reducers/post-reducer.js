import { ActionTypes } from '../actions';


// For UI Design hardcoded posts
// const post1 = { id: 1, title: 'Sharity', text: 'Give Efficiently, Know Your Impact, Find Your Friend.' };


const postReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POST:
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
