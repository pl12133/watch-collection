/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';

const WelcomeJumbo = () => (
  <Jumbotron style={ { paddingLeft: '1%' } }>
    <h1>Welcome</h1>
    <p>
      {'Witness one of the finest watch collections in New York City'}
    </p>
    <Link to={'/about'} className={'btn btn-primary'}>
      {'Learn More'}
    </Link>
  </Jumbotron>
);
WelcomeJumbo.propTypes = {
};
export default WelcomeJumbo;
