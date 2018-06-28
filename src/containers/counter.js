import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


// this can be a dumb or smart component -
// connect works either way
const Counter = (props) => {
  return (
    <div>
      Current Count: {props.count}
    </div>
  );
};

// connects particular parts of redux state
// to this component's props
const mapStateToProps = state => (
  {
    count: state.count,
  }
);

// react-redux glue -- outputs Container that
// knows state in properties
// new way to connect with react router 4
export default withRouter(connect(mapStateToProps, null)(Counter));
