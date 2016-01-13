/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import { Grid, Row } from 'react-bootstrap';
import Watch from 'components/Watch/';

const WatchRow = ({watches}) => {
  let watchComponents = watches.map((watch, index) => (
    <Watch key={`${watch.name}-${index}`}
           name={watch.name}
           srcUrl={watch.srcUrl} />
  ));
  return (
    <Row>
      <Grid>
        <Row>
          {watchComponents}
        </Row>
      </Grid>
    </Row>
  );
};

WatchRow.propTypes = {
  watches: PropTypes.array.isRequired
};
export default WatchRow;
