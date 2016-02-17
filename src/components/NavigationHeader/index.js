/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/
import { Navbar, Nav } from 'react-bootstrap';
import { IndexLink, Link } from 'react-router';

const ListLink = ({to, children}, context) => {
  let isActive = context.history.isActive(to, undefined, true);
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  );
};
ListLink.contextTypes = {
  history: PropTypes.object.isRequired
};

class NavigationHeader extends Component {
  constructor (...args) {
    super(...args);
  }

  componentDidMount () {
    document.body.style.paddingTop = '50px';
  }

  render () {
    let { fixedTop = false, brand } = this.props;
    return (
      <Navbar inverse fixedTop={fixedTop}>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to={'/watch-collection/'}>{brand}</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <ListLink to={'/watch-collection/'}>{'Home'}</ListLink>
            <ListLink to={'/watch-collection/about'}>{'About'}</ListLink>
            <ListLink to={'/watch-collection/watches'}>{'Watches'}</ListLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavigationHeader.propTypes = {
  fixedTop: PropTypes.bool,
  brand: PropTypes.string.isRequired
};

export default NavigationHeader;