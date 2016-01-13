/* eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/* eslint-enable no-unused-vars*/
import { Link } from 'react-router';

import { Panel } from 'react-bootstrap';
import { AutoAffix } from 'react-overlays';

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
        <AutoAffix viewportOffsetTop={0} container={document.body}>
          <NavigationHeader>
            <li><Link to={'/'}>{'Home'}</Link></li>
            <li><Link to={'/about'}>{'About'}</Link></li>
            <li><Link to={'/watches'}>{'Watches'}</Link></li>
          </NavigationHeader>
        </AutoAffix>
        <Panel style={ { width: '90%', margin: '0 auto' } }>
          {children}
        </Panel>
      </div>
    );
  }
}

export default App;
