/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import { Modal } from 'react-overlays';

import { Button, Col, Thumbnail, Image } from 'react-bootstrap';

let rand = ()=> (Math.floor(Math.random() * 20) - 10);

const modalStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0, bottom: 0, left: 0, right: 0
};

const backdropStyle = {
  ...modalStyle,
  zIndex: 'auto',
  backgroundColor: '#000',
  opacity: 0.5
};

const dialogStyle = function() {
  // we use some psuedo random coords so modals
  // don't sit right on top of each other.
  let top = 50 + rand();
  let left = 50 + rand();

  return {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #e5e5e5',
    maxWidth: '400px',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
  };
};
////
const WatchThumbnail = ({srcUrl, name, desc, onClick}) => (
  <Thumbnail src={srcUrl} alt={name} onClick={onClick}>
    <h3>{name}</h3>
    <p>{desc}</p>
  </Thumbnail>
)
WatchThumbnail.propTypes = {
  srcUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
////
class ModalWatch extends Component {
  constructor(...args) {
    super(...args);
    let ownFuncs = [ 'close', 'open' ];
    ownFuncs.forEach(key => (this[key])
      ? this[key] = this[key].bind(this)
      : console.error('Could not self bind ' + key + ' to ModalWatch')
    );

    this.state = {
      showModal: false
    }
  }

  render() {
    let { srcUrl, name } = this.props;
    return (
      <Col xs={12} md={4}>
        <WatchThumbnail {...this.props} onClick={this.open}/>
        <Modal
          aria-labelledby='modal-label'
          style={modalStyle}
          backdropStyle={backdropStyle}
          show={this.state.showModal}
          onHide={this.close}
        >
          <Image style={dialogStyle()} rounded responsive src={srcUrl} />
        </Modal>
      </Col>
    );
  }

  close(){
    this.setState({ showModal: false });
  }

  open(){
    this.setState({ showModal: true });
  }
}

ModalWatch.propTypes = {
  srcUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}
export default ModalWatch;
