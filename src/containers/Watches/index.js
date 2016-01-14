/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import sampleWatchesJSON from 'constants/sampleWatches.json';

import WatchDisplay from 'components/WatchDisplay/';
import ModalWatch from 'components/ModalWatch/';

class Watches extends Component {
  constructor (props) {
    super(props);
    let { sampleWatches } = sampleWatchesJSON;
    this.state = {
      sampleWatches
    };
  }

  render () {
    console.log('Watches Props: ', this.props);
    let { sampleWatches } = this.state;
    return (
      <div>
        <WatchDisplay watches={sampleWatches} />
      </div>
    );
  }
}
Watches.propTypes = {
};

export default Watches;

