import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Network from './Network';


function CaseStudiesIrish({ setSelectedCS }) {

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
              <span style={{ fontSize: '2rem' }}>Treoracha Foghlama</span>
              {/* <h2 className="darkcolor bottom10">Cás-staidéir</h2> */}
              <div className="heading_space">Bain úsáid as na cás-staidéir má tá tú ag iarraidh níos mó a fhoghlaim faoin tionscadal agus faoin dóigh is fearr le leas a bhaint as an suíomh</div>
            </div>
          </div>
        </div>
        <div id="flat-gallery" className="cbp dark_overlay">

          <div className="cbp-item print">
            <img src="images/case-studies/munster.webp" alt="" />
            <div className="case-study-tile">Léarscáil Dhomhain</div>
            <Link to="deep-mapping">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("deep-map")}>
                <div style={{ "padding": "10px" }}>Cad atá i gceist le Léarscáil Dhomhain agus cén dóigh a ligeann a léithéid dúinn léargas a fháil ar ghníomhaíochtaí cultúrtha i gCúige Mumhan?</div>
              </div>
            </Link>
          </div>

          <div className="cbp-item web logo">
            <img src="images/case-studies/historic.webp" alt="" />
            <div className='case-study-tile'>

              Acmhainní foghlama

            </div>
            <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}>
              <div style={{ "padding": "10px" }}>Féach ar ár bpleananna ceachta samplacha leis an suíomh seo a úsáid sa seomra ranga</div>
            </div>
          </div>



          <div className="cbp-item web print graphic">
            <img src="images/case-studies/gaelic.webp" alt="" />
            <div className="case-study-tile">Ag baint leasa as foinsí Gaelacha</div>
            <Link to="using-gaelic-sources">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("gaelic")}>
                <div style={{ "padding": "10px" }}>Tugtar eolas anseo faoin dóigh is fearr le leas a bhaint as foinsí Gaelacha</div>
              </div>
            </Link>
          </div>


          <div className="cbp-item web print graphic">
            <img src="images/case-studies/yettoname.webp" alt="" />
            <div className="case-study-tile">Léargas Stairiúil</div>
            <Link to="historical-overview">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("historic")}>
                <div style={{ "padding": "10px", "cursor": "pointer" }}>Tugtar eolas anseo faoin tréimhse achrannach, lán le coinbhleacht, le claochlú, agus le nuálaíocht a d'athraigh an tír ó bhonn.</div>
              </div>
            </Link>
          </div>

          <div className="cbp-item print">
            <img src="images/case-studies/bibilio.webp" alt="" />
            {/* <div>Secondary Bibiliography</div> */}
            <div className="case-study-tile">Leabharliosta</div>
            <Link to="deep-mapping">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("sec-bib")}>
                <div style={{ "padding": "10px" }}>Liosta de shaothar foilsithe a bhaineann le hÉirinn sa Nua-Aois Luath</div>
              </div>
            </Link>
          </div>



          <div className="cbp-item">
            {/* <img src="images/case-studies/women.png" alt="" /> */}
            <Network />
            <div className="case-study-tile">Líonraí</div>
            <Link to="networking-women">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("network-women")}>
                <div style={{ "padding": "10px" }}>Eolas faoi na líonraí</div>
              </div>
            </Link>
          </div>




          <div className="cbp-item web print graphic">
            <img src="images/case-studies/bardic.webp" alt="" />
            <div className="case-study-tile">Cad atá i gceist le Filíocht na Sgol?</div>
            <Link to="what-is-bardic-poetry">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("bardic-poetry")}>
                <div style={{ "padding": "10px" }}>Tugtar eolas anseo faoi thírdhreach liteartha na hÉireann sa Nua-Aois Luath agus faoin sórt filíochta a bhí á chumadh ag filí gairmiúla na sgol.
                </div>
              </div>
            </Link>
          </div>
          <div className="cbp-item">
            <img src="images/case-studies/drama.webp" alt="" />
            <div className="case-study-tile">Drámaíocht in Éirinn sa Nua-Aois Luath</div>
            <Link to="early-modern-drama">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("modern-drama")}>
                <div style={{ "padding": "10px" }}>Eolas ar stair agus cultúr na drámaíochta in Éirinn
                </div>
              </div>
            </Link>
          </div>

          <div className="cbp-item">
            <img src="images/case-studies/spenser.webp" alt="" />
            <div className="case-study-tile">Spenser i gCúige Mumhan</div>
            <Link to="spenser-in-munster">
              <div className="overlay center-block whitecolor" style={{ "cursor": "pointer" }}
                onClick={() => setSelectedCS("munster")}>
                <div style={{ "padding": "10px" }}>Cérbh é Edmund Spenser agus cén bhaint a bhí aige le Cúige Mumhan?</div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CaseStudiesIrish;
