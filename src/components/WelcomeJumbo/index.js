/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import { Jumbotron, Carousel, CarouselItem, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

import sampleWatchesJSON from 'constants/sampleWatches.json';

let { sampleWatches } = sampleWatchesJSON;
const WelcomeJumbo = () => (
  <Jumbotron style={ { paddingLeft: '1%' } }>
    <Grid>
      <Row>
        <Col xs={6}>
          <div>
            <h1>Welcome</h1>
            <p>
              {'Witness one of the finest watch collections in New York City'}
            </p>
            <Link to={'/about'} className={'btn btn-primary'}>
              {'Learn More'}
            </Link>
          </div>
        </Col>
        <Col xs={6}>
          <div>
            <Carousel style={ { margin: '0 auto', height: 'auto', width: '80%' } }>
              <CarouselItem>
                <img alt="900x500" style={ { maxHeight: '300px', margin: '0 auto' } } src={sampleWatches[0].srcUrl}/>
                <div className="carousel-caption">
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img alt="900x500" style={ { maxHeight: '300px', margin: '0 auto' } } src={sampleWatches[1].srcUrl}/>
                <div className="carousel-caption">
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img alt="900x500" style={ { maxHeight: '300px', margin: '0 auto' } } src={sampleWatches[2].srcUrl}/>
                <div className="carousel-caption">
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </CarouselItem>
            </Carousel>
          </div>
        </Col>
      </Row>
    </Grid>
  </Jumbotron>
);
WelcomeJumbo.propTypes = {
};
export default WelcomeJumbo;
