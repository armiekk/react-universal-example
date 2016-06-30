import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Homepage.</h1>
        { this.props.children }
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect()(App);
