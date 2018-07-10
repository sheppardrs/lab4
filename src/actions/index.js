import axios from 'axios';

// keys for actiontypes
// for the blog lab4
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  // will add these as we go
  // UPDATE_POST: 'UPDATE_POST',
  // CREATE_POST: 'CREATE_POST',
  // DELETE_POST: 'DELETE_POST',
  // old from starter
  // INCREMENT: 'INCREMENT',
  // DECREMENT: 'DECREMENT',
};


// Some constants for interfacing with the API
// For herokuapp given:
// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
// For my server
const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '';
// const API_KEY = '?key=r_blake';


// get all the posts
export function fetchPosts() {
  // axios get
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      // do something with the response.data (some json)
      // console.log('just got the posts from api', response.data);
      const posts = response.data;
      // console.log('posts is: ', posts);
      dispatch({
        type: 'FETCH_POSTS',
        payload: posts,
      });
    }).catch((error) => {
      // hit an error -> do something else
      console.log('FAILED IN ACTION fetchPosts');
    });
  };
}

// create a new post on the server
export function createPost(post, history) {
  // axios post here
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then((response) => {
      // do something with the response.data (some json)
      // console.log('posts is: ', posts);
      const newpost = response.data;
      console.log('This is the response of the post', newpost);
      history.push(`/posts/${newpost._id}`);
      dispatch({
        type: 'FETCH_POST',
        payload: newpost,
      });
    }).catch((error) => {
      // hit an error -> do something else
      console.log('FAILED IN ACTION createPost');
    });
  };
}

// update the post
export function updatePost(post, history) {
  // axios put
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, post).then((response) => {
      // do something with the response.data (some json)
      // console.log('posts is: ', posts);
      const newpost = response.data;
      // console.log('This is the response of the post', newpost);
      history.push(`/posts/${newpost._id}`);
      dispatch({
        type: 'FETCH_POST',
        payload: newpost,
      });
    }).catch((error) => {
      // hit an error -> do something else
      console.log('FAILED IN ACTION createPost');
    });
  };
}
// get a single post
export function fetchPost(id) {
  // axios get
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      // do something with the response.data (some json)
      // console.log('Single  Post:', response.data);
      const post = response.data;
      // console.log('posts is: ', posts);
      dispatch({
        type: 'FETCH_POST',
        payload: post,
      });
    }).catch((error) => {
      // hit an error -> do something else
      console.log('FAILED IN ACTION fetchPost');
    });
  };
}

export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      history.push('/');
      dispatch(fetchPosts());
    }).catch((error) => {
      // hit an error -> do something else
      console.log('FAILED IN ACTION deletePost');
    });
  };
}

// export function increment() {
//   return {
//     type: ActionTypes.INCREMENT,
//     payload: null,
//   };
// }
//
// export function decrement() {
//   return {
//     type: ActionTypes.DECREMENT,
//     payload: null,
//   };
// }
