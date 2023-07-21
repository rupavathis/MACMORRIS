import React, { useEffect, useState } from 'react';
import { Timeline } from "react-twitter-widgets";


function Tweet({ changeIrish }) {

  return (
    <section id="our-tweet" className="half-section bglight" style={{ padding: '5%' }}>
      <div className="container-fluid">
        <div className="row">

          <div className="heading-title padding_half wow fadeInUp" data-wow-delay="400ms">
            <span>{!changeIrish ? <>Read Our News</> : <>
              léigh ár nuacht

            </>}</span>

            {
              !changeIrish ?
                <h2 className="darkcolor" style={{ paddingBottom: '30px' }}> Latest Tweets</h2> :
                <h2 className="darkcolor" style={{ paddingBottom: '30px' }}>

                  tweetanna is déanaí

                </h2>
            }

            {/* {!changeIrish ? <p className="heading_space">Stay connected with our latest tweets!</p> :
              <p className="heading_space">Stay connected with our latest tweets!</p>
            } */}
            <a href='https://twitter.com/macmorr1s_?lang=en' target="_blank" rel="noopener noreferrer">
              {!changeIrish ? <div className="button btnsecondary pagescroll wow fadeInUp"
                data-wow-delay="450ms">Follow Us!</div> :
                <div className="button btnsecondary pagescroll wow fadeInUp"
                  data-wow-delay="450ms">Lean muid!</div>
              }
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Tweet;
