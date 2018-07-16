import React from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class RequireAuth extends React.Component {
    constructor(props) {
      super(props);

      this.componentWillMount = this.componentWillMount.bind(this);
      this.componentWillUpdate = this.componentWillUpdate.bind(this);
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.history.push('/signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => (
    {
      authenticated: state.auth.authenticated,
    }
  );

  return connect(mapStateToProps, null)(RequireAuth);
}
