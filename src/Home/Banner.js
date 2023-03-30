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
        $("#rev_single").show().revolution({// eslint-disable-line
            sliderType: "hero",
            jsFileLocation: "js/revolution",
            sliderLayout: "fullscreen",
            scrollbarDrag: "true",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {},
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1170, 1024, 778, 480],
            gridheight: [868, 768, 960, 720],
            lazyType: "none",
            parallax: {
               type: "scroll",
               origo: "slidercenter",
               speed: 400,
               levels: [10, 15, 20, 25, 30, 35, 40, -10, -15, -20, -25, -30, -35, -40, -45, 55]
            },
            shadow: 0,
            spinner: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
               simplifyAll: "off",
               disableFocusListener: false
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

                    <div style={{padding: "10px", "paddingTop": "30px"}}>

                    <p className="banner">
                        An IRC Laureate project that seeks to map the full range and richness of cultural activity,
                        across languages and ethnic groups, in Ireland from 1541 to 1660.
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
