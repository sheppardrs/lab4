import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { fetchPosts } from '../actions';

class Controls extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <button onClick={this.props.fetchPosts} >refresh</button>
      </div>
    );
  }
}

// react-redux glue -- outputs Container that knows how to call actions
// new way to connect with react router 4
export default withRouter(connect(null, { fetchPosts })(Controls));
