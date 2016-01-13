/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import WatchDisplay from 'components/WatchDisplay/';

class Watches extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sampleWatches: [{
        name: 'Burrberry Mark 2',
        srcUrl: 'http://images.bloomingdales.com/is/image/BLM/products/9/optimized/8304029_fpx.tif'
      }, {
        name: 'Burrberry Mark 3',
        srcUrl: 'http://images.bloomingdales.com/is/image/BLM/products/7/optimized/1282807_fpx.tif'
      }, {
        name: 'Burrberry Mark 2',
        srcUrl: 'http://images.bloomingdales.com/is/image/BLM/products/9/optimized/8304029_fpx.tif'
      }, {
        name: 'Burrberry Mark 3',
        srcUrl: 'http://images.bloomingdales.com/is/image/BLM/products/7/optimized/1282807_fpx.tif'
      }, {
        name: 'Burrberry Mark 2',
        srcUrl: 'http://images.bloomingdales.com/is/image/BLM/products/9/optimized/8304029_fpx.tif'
      }, {
        name: 'Burrberry Mark 3',
        srcUrl: 'http://images.bloomingdales.com/is/image/BLM/products/7/optimized/1282807_fpx.tif'
      }, {
        name: 'Burrberry Mark 3',
        srcUrl: 'http://images.bloomingdales.com/is/image/BLM/products/7/optimized/1282807_fpx.tif'
      }]
    };
  }

  render () {
    console.log('Watches Props: ', this.props);
    let { sampleWatches } = this.state;
    return (
      <WatchDisplay watches={sampleWatches} />
    );
  }
}
Watches.propTypes = {
};

export default Watches;

