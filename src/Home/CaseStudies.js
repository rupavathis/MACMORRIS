import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Network from './Network';
import './home.scss';

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
    <section id="our-casestudies" className="padding  bg-sec-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-sm-12 text-center">
            <div className="heading-title wow fadeInUp" data-wow-delay="300ms">
              <span style={{ fontSize: '2rem' }}>Our Learning guides</span>
              {/* <h2 className="darkcolor bottom10">Resources</h2> */}
              <div className="heading_space">Explore our case studies to learn more about the project
                and how to navigate the visualisations </div>
            </div>
          </div>
        </div>
        <div id="flat-gallery" className="cbp dark_overlay">

          <div className="cbp-item print">
            <img src="images/case-studies/munster.webp" alt="" />
            <div className="case-study-tile">Deep Mapping</div>
            <Link to="deep-mapping">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("deep-map")}>
                <div style={{ "padding": "10px" }}>What is Deep Mapping and how does that allow us to explore
                  cultural activity in Munster?</div>
              </div>
            </Link>
          </div>

          <div className="cbp-item web logo">
            <img src="images/case-studies/historic.webp" alt="" />
            <div className='case-study-tile'>Learning guides</div>
            <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}>
              <div style={{ "padding": "10px" }}>See our lesson plans for how to use the website in the classroom.</div>
            </div>
          </div>



          <div className="cbp-item web print graphic">
            <img src="images/case-studies/gaelic.webp" alt="" />
            <div className="case-study-tile">Using Gaelic Sources</div>
            <Link to="using-gaelic-sources">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("gaelic")}>
                <div style={{ "padding": "10px" }}>Explore ways to use and engage with Gaelic sources.</div>
              </div>
            </Link>
          </div>


          <div className="cbp-item web print graphic">
            <img src="images/case-studies/yettoname.webp" alt="" />
            <div className="case-study-tile">Historical Overview</div>
            <Link to="historical-overview">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("historic")}>
                <div style={{ "padding": "10px", "cursor": "pointer" }}>Learn more about the dramatic period of conflict,
                  change, and innovation which transformed Ireland.</div>
              </div>
            </Link>
          </div>

          <div className="cbp-item print">
            <img src="images/case-studies/bibilio.webp" alt="" />
            {/* <div>Secondary Bibiliography</div> */}
            <div className="case-study-tile">Secondary Bibiliography</div>
            <Link to="bibiliography">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("sec-bib")}>
                <div style={{ "padding": "10px" }}>Select bibliography of published works relating to Early Modern Ireland.  </div>
              </div>
            </Link>
          </div>

          <div className="cbp-item">
            {/* <img src="images/case-studies/women.png" alt="" /> */}
            <Network />
            <div className="case-study-tile">What are networks?</div>
            <Link to="networking-women">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("network-women")}>
                <div style={{ "padding": "10px" }}>Learn about our network interface</div>
              </div>
            </Link>
          </div>


          <div className="cbp-item web print graphic">
            <img src="images/case-studies/bardic.webp" alt="" />
            <div className="case-study-tile">What is Bardic Poetry?</div>
            <Link to="what-is-bardic-poetry">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("bardic-poetry")}>
                <div style={{ "padding": "10px" }}>Learn more about the literary landscape of Early Modern Ireland and
                  the poetry
                  composed by the professional caste of poets (or filidh) trained in the bardic schools.
                </div>
              </div>
            </Link>
          </div>
          <div className="cbp-item">
            <img src="images/case-studies/drama.webp" alt="" />
            <div className="case-study-tile">Early Modern Irish Drama</div>
            <Link to="early-modern-drama">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("modern-drama")}>
                <div style={{ "padding": "10px" }}>An overview of early performances of dramatic works in Ireland
                </div>
              </div>
            </Link>
          </div>

          <div className="cbp-item">
            <img src="images/case-studies/spenser.webp" alt="" />
            <div className="case-study-tile">Spenser in Munster</div>
            <Link to="spenser-in-munster">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("munster")}>
                <div style={{ "padding": "10px" }}>Who was Edmund Spenser and what was his connection to Munster?</div>
              </div>
            </Link>
          </div>



        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
