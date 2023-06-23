import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CaseStudies({ setSelectedCS }) {

  useEffect(() => {
    $("#flat-gallery").cubeportfolio({  // eslint-disable-line
      layoutMode: 'grid',
      filters: '#flat-filters',
      defaultFilter: '*',
      animationType: "quicksand",
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
         width: 768,
         cols: 2
      }, {
         width: 480,
         cols: 1
      }, {
         width: 320,
         cols: 1
      }],
   });
  }, []);

  return (
    <section id="our-casestudies" className="bglight padding">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-sm-12 text-center">
            <div className="heading-title wow fadeInUp" data-wow-delay="300ms">
              <span>Our Learning guides</span>
              <h2 className="darkcolor bottom10">Resources</h2>
              <div className="heading_space">Explore our case studies to learn more about the project
                and how to navigate the visualisations </div>
            </div>
          </div>
        </div>
        <div id="flat-gallery" className="cbp dark_overlay">
          <div className="cbp-item web logo">
            <img src="images/case-studies/historic.jpg" alt="" />
            <div className="overlay center-block whitecolor">
              <h4 className="top30">Learning guides</h4>
              <div style={{ "padding": "10px" }}>Learn more about the minor figures in our database</div>
            </div>
          </div>

          <div className="cbp-item">
            <img src="images/case-studies/women.png" alt="" />
            <Link to="networking-women">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("network-women")}>
                <h4 className="top30">What are networks?</h4>
                <div style={{ "padding": "10px" }}>Learn about our network and some of the women in our
                  database</div>
              </div>
            </Link>
          </div>


          <div className="cbp-item web print graphic">
            <img src="images/case-studies/yettoname.jpg" alt="" />
            <Link to="historical-overview">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("historic")}>
                <h4 className="top30">Historical Overview</h4>
                <div style={{ "padding": "10px", "cursor": "pointer" }}>Learn more about the dramatic period of conflict,
                  change, and innovation which transformed Ireland.</div>
              </div>

            </Link>

          </div>

          <div className="cbp-item">
            <img src="images/case-studies/spenser.jpeg" alt="" />
            <Link to="spenser-in-munster">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("munster")}>
                <h4 className="top30">Spenser in Munster</h4>
                <div style={{ "padding": "10px" }}>Who was Edmund Spenser and what was his connection to Munster?</div>
              </div>
            </Link>
          </div>
          <div className="cbp-item web print graphic">
            <img src="images/case-studies/bardic.jpg" alt="" />
            <Link to="what-is-bardic-poetry">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("bardic-poetry")}>
                <h4 className="top30">What is Bardic Poetry?</h4>
                <div style={{ "padding": "10px" }}>Learn more about the literary landscape of Early Modern Ireland and
                  the poetry
                  composed by the professional caste of poets (or filidh) trained in the bardic schools.
                </div>
              </div>
            </Link>
          </div>
          <div className="cbp-item">
            <img src="images/case-studies/drama.jpg" alt="" />
            <Link to="early-modern-drama">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("modern-drama")}>
                <h4 className="top30">Staging Early Modern Drama today</h4>
                <div style={{ "padding": "10px" }}>A reflection on the staging of Hic Et
                  Ubique in Smock Alley Theatre</div>
              </div>
            </Link>
          </div>

          <div className="cbp-item web print graphic">
            <img src="images/case-studies/gaelic.png" alt="" />
            <Link to="using-gaelic-sources">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("gaelic")}>
                <h4 className="top30">Using Gaelic Sources</h4>
                <div style={{ "padding": "10px" }}>Explore ways to use and engage with Gaelic sources.</div>
              </div>
            </Link>
          </div>

          <div className="cbp-item print">
            <img src="images/case-studies/munster.png" alt="" />
            <Link to="deep-mapping">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("deep-map")}>
                <h4 className="top30">Deep Mapping</h4>
                <div style={{ "padding": "10px" }}>What is Deep Mapping and how does that allow us to explore
                  cultural activity in Munster?</div>
              </div>
            </Link>
          </div>

          <div className="cbp-item print">
            <img src="images/case-studies/munster.png" alt="" />
            <Link to="deep-mapping">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("sec-bib")}>
                <h4 className="top30">Secondary Bibiliography</h4>
                <div style={{ "padding": "10px" }}>What is Deep Mapping and how does that allow us to explore
                  cultural activity in Munster?</div>
              </div>
            </Link>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
