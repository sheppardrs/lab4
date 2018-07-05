import { ActionTypes } from '../actions';


// For UI Design hardcoded posts
// const post1 = { id: 1, title: 'Sharity', text: 'Give Efficiently, Know Your Impact, Find Your Friend.' };
// const post2 = { id: 2, title: 'Chare-it', text: 'Give Efficiently, Know Your Impact, Find Your Friend.' };
// const post3 = { id: 3, title: 'Give Some', text: 'Give Efficiently, Know Your Impact, Find Your Friend.' };
// const posts = [post1, post2, post3];

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return action.payload;
    case 'DUMMY':
    default:
    // TODO:
      return state;
  }
};

export default postsReducer;
