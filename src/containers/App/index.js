/* eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/* eslint-enable no-unused-vars*/

import { Panel } from 'react-bootstrap';

import NavigationHeader from 'components/NavigationHeader/';

class App extends Component {
  constructor (props) {
    super(props);
    this.render = this.render.bind(this);
  }
  render () {
    let { children } = this.props;
    return (
      <div>
        <NavigationHeader brand={'Hoffman Timepieces'} fixedTop/>
        <Panel style={ { width: '90%', margin: '0 auto' } }>
          {children}
        </Panel>
      </div>
    );
  }
}

export default App;
