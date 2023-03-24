import { useEffect } from "react";
function Sponsors() {

   useEffect(() => {
      $("#partners-slider").owlCarousel({ // eslint-disable-line
         items: 5,
         autoplay: 150,
         smartSpeed: 150,
         autoplayHoverPause: true,
         slideBy: 1,
         loop: true,
         margin: 30,
         dots: false,
         nav: false,
         responsive: {
            1200: {
               items: 5,
            },
            900: {
               items: 4,
            },
            768: {
               items: 3,
            },
            480: {
               items: 2,
            },
            320: {
               items: 1,
            },
         }
      });
   
    }, []);


   return (
    <section id="our-sponsors" class="padding_bottom">
   <div class="container">
     <h3 class="invisible">hidden</h3>
      <div class="row">
         <div class="col-md-12 col-sm-12">
            <div id="partners-slider" class="owl-carousel">
               <div class="item">
                  <div class="logo-item"> <img alt="" src="images/logos/ahi.png" /></div>
               </div>
               <div class="item">
                  <div class="logo-item"><img alt="" src="images/logos/bpd.png" /></div>
               </div>
               <div class="item">
                  <div class="logo-item"><img alt="" src="images/logos/dib.png" /></div>
               </div>
               <div class="item">
                  <div class="logo-item"><img alt="" src="images/logos/irc.jpg" /></div>
               </div>
               <div class="item">
                  <div class="logo-item"><img alt="" src="images/logos/leamh.png" /></div>
               </div>
               <div class="item">
                  <div class="logo-item"><img alt="" src="images/logos/macmorris.png" /></div>
               </div>
               <div class="item">
                  <div class="logo-item"><img alt="" src="images/logos/maynooth.png" /></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
   );
}

export default Sponsors;
