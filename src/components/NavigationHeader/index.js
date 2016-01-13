/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/
import { Navbar, Nav } from 'react-bootstrap';

const propTypes = {};

class NavigationHeader extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            {'Hoffman Timepieces'}
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {this.props.children}
        </Nav>
      </Navbar>
    );
  }
}
NavigationHeader.propTypes = propTypes;

export default NavigationHeader;
