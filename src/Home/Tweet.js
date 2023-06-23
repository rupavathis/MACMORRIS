import React, { useEffect, useState } from 'react';
import { Timeline } from "react-twitter-widgets";


function Tweet() {

  return (
    <section id="our-tweet" className="half-section bglight" style={{ padding: '5%'}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-6 nopadding">
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'macmorr1s_'
              }}
              options={{
                height: 400,
                theme: 'light',
              }}
            />
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="split-box text-center center-block equalheight container-padding">
              <div className="heading-title padding_half wow fadeInUp" data-wow-delay="400ms">
                <span>Read Our News</span>
                <h2 className="darkcolor">Latest Tweets</h2>
                <p className="heading_space">Stay connected with our latest tweets!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tweet;
