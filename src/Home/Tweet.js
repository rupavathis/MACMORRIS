import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { useEffect } from 'react';


function Tweet() {
    useEffect(() =>
        $("#blog-measonry").cubeportfolio({ // eslint-disable-line
            layoutMode: 'grid',
            defaultFilter: '*',
            animationType: "scaleSides",
            gapHorizontal: 30,
            gapVertical: 30,
            gridAdjustment: "responsive",
            mediaQueries: [{
                width: 1500,
                cols: 3
            }, {
                width: 1100,
                cols: 3
            }, {
                width: 992,
                cols: 3
            }, {
                width: 768,
                cols: 3
            }, {
                width: 480,
                cols: 1
            }, {
                width: 320,
                cols: 1
            }],
        }), [])

    return (
        <section id="our-tweet" className="half-section bglight">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-6 nopadding">
                        {/* <!-- <div className="image hover-effect"><img src="images/split-blog.jpg" alt="our blog"
                             className="equalheight"></div> --> */}
                        {/* <div style={{ height: "500px", overflowY: "scroll" }}>
                            <a className="twitter-timeline" href="https://twitter.com/macmorr1s_?ref_src=twsrc%5Etfw">Tweets by
                                macmorr1s_</a>


                        </div> */}
                        {/* <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="macmorr1s_"
                            options={{ height: 400 }}
                        /> */}


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
