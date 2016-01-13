/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/
import { Link } from 'react-router';

import { PageHeader } from 'react-bootstrap';
class About extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    console.log('About Props: ', this.props);
    return (
      <div>
        <PageHeader>
          {'A place for watch collectors'}
        </PageHeader>
        <Link to={'/watches'} className={'btn btn-success'}>
          {'View the Collection'}
        </Link>
      </div>
    );
  }
}
About.propTypes = {
};

export default About;
