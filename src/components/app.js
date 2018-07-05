import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Posts from '../containers/posts';
import Controls from '../containers/controls';

// UI Components
// import Post from './post';
// import FullPost from './fullpost';
import SinglePost from '../containers/post';
import AddAPost from '../containers/addpost';
import EditAPost from '../containers/editpost';
// import AddPost from './addpost';

function Logo() {
  return (
    <div className="logo">
      <i id="logo_bird" className="fas fa-hand-holding-heart" />
      <div className="logo-text">
        <p className="logo-life">Sharity</p>
        <p className="logo-slogan">Give More</p>
      </div>
    </div>
  );
}

const About = (props) => {
  return <div>All there is to know about me</div>;
};


// Remove the two test posts when ready
const Nav = (props) => {
  return (
    <nav>
      <Logo />
      <ul className="header">
        <li><NavLink className="navlink" to="/" exact>Home</NavLink></li>
        <li><NavLink className="navlink" to="/posts/new">Add Post</NavLink></li>
        <li><NavLink className="navlink" to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
};

// For UI Design hardcoded posts
// const post1 = { id: 1, title: 'Sharity', text: 'Give Efficiently, Know Your Impact, Find Your Friend.' };
// const post2 = { id: 2, title: 'Chare-it', text: 'Give Efficiently, Know Your Impact, Find Your Friend.' };
// const post3 = { id: 3, title: 'Give Some', text: 'Give Efficiently, Know Your Impact, Find Your Friend.' };
// const posts = [post1, post2, post3];
//
// const Posts = (props) => {
//   return (
//     props.posts.map((post) => {
//       return (
//         <Post
//           key={post.id}
//           post={post}
//         />
//       );
//     })
//
//   );
// };


const Welcome = (props) => {
  return (
    <div>
      Welcome
      <Posts />
      <Controls />
      {/* <Posts posts={posts} /> */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/posts/new" component={AddAPost} />
          <Route path="/about" component={About} />
          <Route exact path="/posts/:postID" component={SinglePost} />
          <Route exact path="/posts/:postID/edit" component={EditAPost} />
          {/* <Route exact
            path="/posts/:postID"
            render={props => (
              <FullPost post={post1} {...props} />
          )}
        /> */}
          <Route render={() => (<div>Post not found.</div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
