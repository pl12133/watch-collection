/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import { Grid } from 'react-bootstrap';
import WatchRow from 'components/WatchRow/';

const WatchDisplay = ({watches}) => {
  let rows = [];
  for (let index = 0, len = watches.length; index < len; index += 3) {
    rows.push(
      <WatchRow key={'row-' + (Math.floor(index / 3) + 1)}
                watches={watches.slice(index, index + 3)} />
    );
  }

  return (
    <section>
      <h3>
        {'Fine watches from around the world'}
      </h3>
      <Grid>
        {rows}
      </Grid>
    </section>
  );
};
WatchDisplay.propTypes = {
  watches: PropTypes.array.isRequired
};
export default WatchDisplay;
