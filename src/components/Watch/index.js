/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import { Col, Thumbnail } from 'react-bootstrap';

const Watch = ({srcUrl, alt, name}) => (
  <Col xs={12} md={4}>
    <Thumbnail src={srcUrl} alt={alt || ''}>
      <h3>{name}</h3>
      <p>{'Description'}</p>
    </Thumbnail>
  </Col>
);
Watch.propTypes = {
  srcUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
export default Watch;
