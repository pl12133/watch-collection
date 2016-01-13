/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import WelcomeJumbo from 'components/WelcomeJumbo/';

class HomePage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    console.log('Homepage Props: ', this.props);
    return (
      <div>
        <WelcomeJumbo />
      </div>
    );
  }
}
HomePage.propTypes = {
};

export default HomePage;
