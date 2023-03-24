import { height } from "@mui/system";

function Banner() {
   return (
      <section className="no-padding wow fadeIn no-transition" id="home">
         <div id="rev_single_wrapper" className="rev_slider_wrapper fullscreen-container rev-slider"
            data-alias="inspiration-header" data-source="gallery" style={{ "backgroundColor": "transparent", "padding": "0px" }}>
            {/* <!-- start revolution slider 5.4.1 fullscreen mode --> */}
            <div id="rev_single" className="rev_slider fullscreenbanner" style={{ "display": "none" }}
               data-version="5.4.1">
               <ul>
                  {/* <!-- slide --> */}
                  <li data-index="rs-layers" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
                     data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="500"
                     data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2=""
                     data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8=""
                     data-param9="" data-param10="" data-description="">
                     {/* <!-- main image --> */}

                     <img src="images/banner/munster-bg.png" data-bgcolor="#e0e0e0" alt="" data-bgposition="center center"
                        data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg"
                        data-no-retina />

                     <div className="tp-caption tp-resizeme" data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                        data-voffset="['-70','-70','-70','-70']" data-whitespace="nowrap" data-responsive_offset="on"
                        data-width="['none','none','none','none']" data-type="text"
                        data-textalign="['center','center','center','center']" data-transform_idle="o:1;"
                        data-transform_in="x:-50px;opacity:0;s:2000;e:Power3.easeOut;"
                        data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1000"
                        data-splitin="none" data-splitout="none">
                        <h2 className="text-capitalize font-xlight darkcolor">Fáilte go</h2>
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
                        <h4 className="darkcolor font-light text-center">
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
                        <h4 className="darkcolor font-light text-center">
                           It opens a window on a world on the cusp of drastic change but where, for the moment,
                           everything is still in play.
                        </h4>
                     </div>

                     <div className="tp-caption tp-resizeme" data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']"
                        data-voffset="['160','160','160','160']" data-whitespace="nowrap" data-transform_idle="o:1;"
                        data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power4.easeInOut;"
                        data-transform_out="s:900;e:Power2.easeInOut;s:900;e:Power2.easeInOut;" data-start="2000"
                        data-splitin="none" data-splitout="none" data-responsive_offset="on">
                        <a className="button btnprimary pagescroll" href="#our-process">Learn More</a>
                     </div>

                     {/* <!-- layer nr. 15 --> */}
                     <div className="tp-caption rev-scroll-btn revs-dark" id="layers-thir"
                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['90','90','70','50']" data-width="30"
                        data-height="45" data-whitespace="nowrap" data-type="button" data-responsive_offset="on"
                        data-actions='[{"event":"click","action":"scrollbelow","offset":"px","delay":"","speed":1000}]'
                        data-basealign="slide"
                        data-frames='[{"from":"y:-50px;opacity:0;","speed":1500,"to":"o:1;","delay":800,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                        data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                        style={{
                           zIndex: "19", minWidth: "35px", maxWidth: "35px", maxWidth: "55px",
                           maxWidth: "55px", whiteSpace: "nowrap", fontWeight: "400",
                           borderColor: "rgba(0, 0, 0, 1.00)", borderStyle: "solid",
                           borderWidth: "2px", borderRadius: "23px 23px 23px 23px",
                           boxSizing: "border-box", "MozBoxSizing": "border-box",
                           "WebkitBoxSizing": "border-box", cursor: "pointer"
                        }}>
                        <span></span>
                     </div>
                  </li>
               </ul>
               <div className="tp-bannertimer tp-bottom" style={{ visibility: "hidden !important" }}></div>
            </div>
         </div>
      </section>
   );
}

export default Banner;
