/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import { Transition } from 'react-overlays';
import { Button } from 'react-bootstrap';

class TransitionExample extends Component {

  constructor (...args) {
    super(...args);
    this.state = { in: false };
    this.toggle = this.toggle.bind(this);

    const tag = Number(Math.random() * Math.pow(2,32)).toString(36);
    this.state = {
      tag
    }
  }

  toggle () {
    return this.setState({ in: !this.state.in });
  }
  componentDidMount () {
    this.toggle();
  }
  render () {
    let { tag, in: inState } = this.state;
    let { timeout } = this.props;
    let injectCSS = `
      .fadeShift-${tag} {
        opacity: 0;
        top: 35%;
        -webkit-transition: opacity ${timeout}ms linear, top ${timeout}ms linear;
             -o-transition: opacity ${timeout}ms linear, top ${timeout}ms linear;
                transition: opacity ${timeout}ms linear, top ${timeout}ms linear;
      }

      .in-${tag} {
        opacity: 1;
        top: 50%;
      }
    `;
    let animationClassName = `fadeShift-${tag}`;
    return (
      <div>
        <Transition
          in={inState}
          transitionAppear
          timeout={this.props.timeout}
          className={animationClassName}
          enteredClassName={`in-${tag}`}
          enteringClassName={`in-${tag}`}
        >
          {this.props.children}
        </Transition>
        <style>{injectCSS}</style>
      </div>
    );
  }
}

TransitionExample.propTypes = {
  timeout: PropTypes.number
}

export default TransitionExample;
