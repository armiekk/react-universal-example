import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {

    const muiTheme = getMuiTheme({
      userAgent: false
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="Homepage"
            onLeftIconButtonTouchTap={this.handleToggle} />
          { this.props.children }
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onTouchTap={this.handleClose}>
              <Link to="/">Homepage</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
              <Link to="/profile">Profile</Link>
            </MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect()(App);
