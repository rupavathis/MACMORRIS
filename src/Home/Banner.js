import zIndex from "@mui/material/styles/zIndex";
import { height } from "@mui/system";
import React, { useEffect, useRef, useState } from 'react';
import './home.scss'

function Banner() {

    const sRef = useRef();
    const [position, setPosition] = useState(null);
    const [curtainPos, setCurtainPos] = useState(null);


    useEffect(() => {
        const handleScroll = () => {
            if (sRef.current) {
                const pos = sRef.current.getBoundingClientRect().top - window.innerHeight
                setPosition(pos/4);
            }

        };
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        // return () => {
        //     console.log("get return boudning", sRef.current.getBoundingClientRect().top)
        //     window.removeEventListener('scroll', handleScroll);
        // };
    }, []);

    useEffect(() => {
        $("#banner-main").show().revolution({ // eslint-disable-line
            sliderType: "standard",
            sliderLayout: "fullscreen",
            scrollbarDrag: "true",
            dottedOverlay: "none",
            navigation: {
               keyboardNavigation: "off",
               keyboard_direction: "horizontal",
               mouseScrollNavigation: "off",
               bullets: {
                  style: "",
                  enable: true,
                  rtl: false,
                  hide_onmobile: false,
                  hide_onleave: false,
                  hide_under: 767,
                  hide_over: 9999,
                  tmp: '',
                  direction: "vertical",
                  space: 10,
                  h_align: "right",
                  v_align: "center",
                  h_offset: 40,
                  v_offset: 0
               },
               arrows: {
                  enable: false,
                  hide_onmobile: true,
                  hide_onleave: false,
                  hide_under: 767,
                  left: {
                     h_align: "left",
                     v_align: "center",
                     h_offset: 20,
                     v_offset: 30,
                  },
                  right: {
                     h_align: "right",
                     v_align: "center",
                     h_offset: 20,
                     v_offset: 30
                  },
               },
               touch: {
                  touchenabled: "on",
                  swipe_threshold: 75,
                  swipe_min_touches: 1,
                  swipe_direction: "horizontal",
                  drag_block_vertical: false,
               }
            },
            viewPort: {
               enable: true,
               outof: "pause",
               visible_area: "90%"
            },
            responsiveLevels: [4096, 1024, 778, 480],
            gridwidth: [1140, 1024, 768, 480],
            gridheight: [600, 500, 500, 350],
            lazyType: "none",
            parallax: {
               type: "mouse",
               origo: "slidercenter",
               speed: 9000,
               levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
               simplifyAll: "off",
               nextSlideOnWindowFocus: "off",
               disableFocusListener: false,
            }
         });
    }, []);


    return (
        <>
            <div id="rev_single" style={{ "display": "none", height: "100%" }}
                ref={sRef}>

                <img src="images/banner/map-banner.png"
                    style={{
                        width: '100%',
                        height: '600px',
                        objectFit: 'cover',
                        objectPosition: `0 ${position}px`,
                        opacity: 0.4,
                        filter: "blur(3px)"
                        // transform: "rotate(180deg)"
                    }} />


                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontWeight: 500,
                    padding: "30px 60px"
                }}>

                    <h2>Fáilte go</h2>

                    <h1> MACMORRIS </h1>

                    <div style={{padding: "10px", "padding-top": "30px"}}>

                    <p className="banner">
                        An IRC Laureate project that seeks to map the full range and richness of cultural activity,
                        across languages and ethnic groups, in Ireland from 1541 to 1691.
                    </p>

                    <p className="banner">
                        It opens a window on a world on the cusp of drastic change but where, for the moment,
                        everything is still in play.
                    </p>

                    <p className="banner">
                        Tionscnamh gradaim de chuid na Comhairle um Thaighde in Éirinn (IRC) is ea MACMORRIS,
                        a bhfuil sé mar aidhm aige saibhreas agus fairsinge ghníomhachtaí cultúrtha na hÉireann sna
                        blianta 1541-1660 a léiriú.
                    </p>

                    <p className="banner">
                        Déanfar iniúchadh ar dhomhan atá ar thairseach a chlaochlaithe ach nach léir a bhfuil i ndán
                        go fóill dó.
                    </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
