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
                setPosition(sRef.current.getBoundingClientRect().top - window.innerHeight);
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
        const interval = setInterval(() => {
            setCurtainPos(prevPosition => prevPosition + 10);
        }, 50);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div id="rev_single" style={{ "display": "none", height: "100%" }}
                ref={sRef}>

                {/* <img src="images/banner/curtain.jpg"
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        // objectFit: 'cover',
                        right: `${curtainPos}px`,
                        zIndex: 1
                    }} /> */}

                <img src="images/banner/map-banner.png"
                    style={{
                        width: '100%',
                        height: '600px',
                        objectFit: 'cover',
                        objectPosition: `0 ${position}px`,
                        opacity: 0.4
                        // transform: "rotate(180deg)"
                    }} />
       

                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontWeight: 500
                }}>
                    <div className="tp-caption tp-resizeme" data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                        data-voffset="['-70','-70','-70','-70']" data-whitespace="nowrap" data-responsive_offset="on"
                        data-width="['none','none','none','none']" data-type="text"
                        data-textalign="['center','center','center','center']" data-transform_idle="o:1;"
                        data-transform_in="x:-50px;opacity:0;s:2000;e:Power3.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1000"
                        data-splitin="none" data-splitout="none">
                        <h2 className="text-capitalize fontbold darkcolor">Fáilte go</h2>
                    </div>

                    <div className="tp-caption tp-resizeme" data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']" data-whitespace="nowrap" data-responsive_offset="on"
                        data-width="['none','none','none','none']" data-type="text"
                        data-textalign="['center','center','center','center']" data-transform_idle="o:1;"
                        data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                        data-transform_out="s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-start="1000"
                        data-splitin="none" data-splitout="none">
                        <h1 className="text-capitalize fontbold darkcolor"> MACMORRIS </h1>
                    </div>
                    <div className="tp-caption tp-resizeme whitecolor" data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                        data-voffset="['70','70','70','70']" data-whitespace="nowrap" data-responsive_offset="on"
                        data-width="['none','none','none','none']" data-type="text"
                        data-textalign="['center','center','center','center']" data-fontsize="['24','24','20','20']"
                        data-transform_idle="o:1;"
                        data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:2;sY:2;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="1500" data-splitin="none"
                        data-splitout="none">
                        <h4 className="darkcolor text-center"
                        >
                            An IRC Laureate project that seeks to map the full range and richness of cultural activity,
                            across languages and ethnic groups, in Ireland from 1541 to 1691.
                        </h4>
                    </div>

                    <div className="tp-caption tp-resizeme whitecolor" data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                        data-voffset="['100','100','100','100']" data-whitespace="nowrap" data-responsive_offset="on"
                        data-width="['none','none','none','none']" data-type="text"
                        data-textalign="['center','center','center','center']" data-fontsize="['24','24','20','20']"
                        data-transform_idle="o:1;"
                        data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:2;sY:2;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="1500" data-splitin="none"
                        data-splitout="none">
                        <h4 className="darkcolor text-center"
                         >
                            It opens a window on a world on the cusp of drastic change but where, for the moment,
                            everything is still in play.
                        </h4>
                    </div>
                    <br />
                    <div className="tp-caption tp-resizeme whitecolor" data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                        data-voffset="['100','100','100','100']" data-whitespace="nowrap" data-responsive_offset="on"
                        data-width="['none','none','none','none']" data-type="text"
                        data-textalign="['center','center','center','center']" data-fontsize="['24','24','20','20']"
                        data-transform_idle="o:1;"
                        data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:2;sY:2;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="1500" data-splitin="none"
                        data-splitout="none">
                        <h4 className="darkcolor text-center"
                         >
                            Tionscnamh gradaim de chuid na Comhairle um Thaighde in Éirinn (IRC) is ea MACMORRIS, 
                            a bhfuil sé mar aidhm aige saibhreas agus fairsinge ghníomhachtaí cultúrtha na hÉireann sna 
                            blianta 1541-1660 a léiriú.
                        </h4>
                    </div>

                    <div className="tp-caption tp-resizeme whitecolor" data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                        data-voffset="['100','100','100','100']" data-whitespace="nowrap" data-responsive_offset="on"
                        data-width="['none','none','none','none']" data-type="text"
                        data-textalign="['center','center','center','center']" data-fontsize="['24','24','20','20']"
                        data-transform_idle="o:1;"
                        data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:2;sY:2;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="1500" data-splitin="none"
                        data-splitout="none">
                        <h4 className="darkcolor text-center"
                         >
                            Déanfar iniúchadh ar dhomhan atá ar thairseach a chlaochlaithe ach nach léir a bhfuil i ndán 
                            go fóill dó.
                        </h4>
                    </div>


                </div>

            </div>
        </>
    );
}

export default Banner;
