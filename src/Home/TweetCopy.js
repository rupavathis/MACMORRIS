import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { useEffect, useState } from 'react';


function Tweet() {

    const [apiLoaded, setApiLoaded] = useState(false);

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

        useEffect(() => {
            // Load Twitter API script asynchronously
            const script = document.createElement('script');
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            script.onload = () => {
              setApiLoaded(true);
            };
            document.body.appendChild(script);
            return () => {
                // Cleanup: remove the Twitter API script
                document.body.removeChild(script);
              };
            }, []);

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


                        </div>  */}
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="macmorr1s_"
                            options={{
                                height: 400,
                                theme: 'light',
                                // Add your API credentials here:                             
                                // consumerKey: 'azqTILX9WDfG4YabioT5K9Apd',
                                // consumerSecret: 'joDwH1dks0tDasd8RWcrqk532euNoamF6AT5AZw9fCzlpEknVV',
                                // token: '2901398814-VeJ0FZM1jjG5vqpMhSTS3cRtupz85uR1D0F7Utf',
                                // tokenSecret: 'RAburs9jeVOfKqn5Yici1DIx3vYhD3f6ZSCFKJIbVTOxl'
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
