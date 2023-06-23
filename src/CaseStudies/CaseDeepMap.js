
import '../App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Home/Header";
import CaseHistoricOverviewIrish from './CaseHistoricOveriewIrish';
import './case-study.scss';
function CaseDeepMap({ changeIrish, setChangeIrish }) {

  return (
    <>
      <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />

      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: '#f5f2f', textAlign: "justify" }}>
            <div className="chapter-header-media chapter-header-media--featured-image">
              <img src="/images/case-studies/munster.png" alt="" style={{ opacity: 0.5, width: "auto", height: "400px" }} />
              <div className="header-text-overlay">
                <h1 className="header-text"><strong>Deep Mapping</strong></h1>
              </div>
            </div>
            {!changeIrish &&
              <>

                <p className='para-style'>The deep map seeks to bring us to a polyphonic world, to offer glimpses of a plurality and complexity that would be eclipsed, first, by conquest and, secondly, by the privileging of colonial sources when narrating the history of early modern Ireland. Ireland in the late 16th century is not just a place of conflict; it is also, and not unrelatedly, a place of cultural ferment.
                </p>

                [Insert How to use Map video here]

                <p className='para-style'>To capture that ferment in all its complexity, MACMORRIS chose the province of Munster in the climactic years 1570 to 1610 for its deep map case study. A fine balance of integration and distinctiveness had long characterised the ruling families of the province: the Gaelic Irish (e.g. the Mac Carthaigh Mór, Ó Súileabháin Bhéara) intermarried with the Old English (descendants of the Anglo-Norman settlers, like the Fitzgeralds of Desmond, the Roches, the Barrys) to produce a complex, hybrid culture. Now, the battle to control the southern province’s fertile land, its port cities (<Link to='/map?id=D1022'>Waterford</Link>, <Link to='/map?id=D1052'>Cork</Link>, <Link to='/map?id=D1079'>Limerick</Link>), its rich fisheries and safe harbours, and its coveted natural resources drew in state and private actors from Britain and continental Europe. Munster witnessed some of the decisive events in the Tudor conquest of Ireland: the Desmond Wars of 1569-73 and 1579-83 which accelerated the emergence of Irish Catholic identity; the Munster Plantation which followed on the defeat of the Desmonds; and the battle of Kinsale on 3 January 1602 which delivered the coup de grâce to any possibility of an independent Irish polity (See <Link to='/historical-overview'>Historical Overview</Link>).
                </p>

                <h5> Colonial Cartography </h5>

                <p className='para-style'>A deep map that attempts to recover a complexity erased by conquest is, inescapably, in dialogue with – and a riposte to – colonial cartography. Most early modern maps of Ireland are colonial: accessories to military campaigns and, in their wake, surveys of confiscated land slated for redistribution to planters. (The Irish did not map a land already intimately known through habitation and Dindshenchas, a form of onomastics dedicated to place and placenames which bardic poets drew).  The colonial map at its starkest and most ideologically laden – think Burleigh’s map (see below) of the province of Munster – shows the land as a blank, a terra nullius cleared for plantation. In contrast, the MACMORRIS deep map is an act of postcolonial requital, designed to recover a complexity and plurality – cultural, linguistic, political, ecological etc. – rubbed out by colonial mapping. A deep map marries in-depth knowledge of all the available sources with the subjectivity inherent in any selection process to create an artefact which offers its users the raw materials for an open-ended exploration of the period’s complexity. It is a spatially ordered digital anthology which offers curated extracts from a theatre of crisis in order to capture the heterogeneity and contending perspectives of a Gaelic world under threat of erasure (though it doesn’t know that yet) and a new order (proto-capitalist and colonial) in formation. In assembling the discordant, syncopated, and incommensurate record of the widest possible range of voices, it signals the need for new, inclusive, and plural understandings of early modern Ireland.
                </p>


                <p className='para-style'>For our historical map layer, we use <Link to='/profile/m1854'>John Speed’s</Link> <Link to='/map'>‘The Province of Munster’</Link>, originally published in <Link to='/work/223'>The Theatre of the Empire of Great Britaine</Link> (1611). The title tells its own story of a conquest completed, and it marks an end date for case study. But what we map onto Speed’s ‘theatre of empire'is the multiplicity that precedes – and is partly extinguished by – empire. Munster in the 40 years leading up to 1611 is a theatre of contiguity and encounter, where actors with conflicting interests and incommensurate cultural, political, philosophical, and religious understandings collide. The uniformity of Speed’s map and its inclusion of County Clare in the province of Munster (located in Connacht in earlier maps) made it the obvious choice for our historical map layer. The very messiness of <Link to='/profile/m4161'>Francis Jobson</Link> plantation map of <a href='https://digitalcollections.tcd.ie/concern/parent/9k41zf08r/works/r781wg580'>Mounster, distinguishing the vndertakings</a> (dated 3 May 1589), however, testifies to the upheavals and influxes that set the stage for adventitious encounters and colliding worldviews. Its hodgepodge of colour-coded parcels of land represents a terrain where natives and newcomers, English poets and Irish bards, live cheek-by-jowl. Jobson depicts the seignories of the newly endowed ‘undertakers'as islands of pink amid an ambient wash of greens and browns where the Gaelic Irish and Old English cling on. There, palisaded inside Jobson’s hatched lines, is the 4000-acre estate at <Link to='/map?id=D1117'>Kilcolman</Link> where a recently arrived planter is writing <Link to='/work/5'>The Faerie Queene</Link>.
                </p>


                <h5> Cultural Contiguity </h5>

                <p className='para-style'>If we approach this world in monophone, we think of <Link to='/profile/m1506'>Edmund Spenser</Link> <Link to='/spenser-in-munster'>‘in Ireland’</Link> as neighboured by <Link to='/profile/m1738'>Sir Walter Ralegh</Link> in <Link to='/map?id=D1175'>Lismore</Link>, or <Link to='/profile/m1664'>Lodowick Bryskett</Link>, settling into his planter’s castle in <Link to='/map?id=D1116'>Castletownroche</Link>, or <Link to='/profile/m4296'>Thomas Harriot</Link>, finishing <Link to='/work/1666'>A Briefe and True Report of the New Found Land of Virginia</Link>, in <Link to='/map?id=D1174'>Molana Abbey</Link>. But, in bringing us to realities on the ground, to location and geographical contiguity, the map’s spatiality challenges the apartheid of disciplinary boundaries: it shows Spenser not in an Anglosphere of the English Renaissance on tour but in the midst of an ecosystem of Gaelic poets. His immediate neighbours to the east and west, <Link to='/profile/m1507'>Viscount Roche</Link>and <Link to='/profile/m1719'>Lord Barry</Link> each maintained a chief poet (ollamh), and were praised in poems such as “<Link to='/map?id=D1002'>Beannacht duit, a Dháibhíth óig</Link>”, “<Link to='/map?id=D1033'>Cionnas mheastar macámh óg?</Link>”, and “<Link to='/map?id=D1075'>Teallach coisreagtha críoch Bharrach</Link>”; to his north, in ‘Arlo Hill’, we find <Link to='/profile/m1020'>Donnchadh ‘an tSneachta'Mac Craith</Link> who elegised the severed heads of his <Link to='/map?id=D1139'>Desmond lords</Link>.  Across the Blackwater, <Link to='/map?id=D1094'>Cluain Mín</Link> Castle was one of the abodes of <Link to='/profile/m2034'>Aonghus Ó Dálaigh Fionn</Link>, ollamh to the <Link to='/profile/m1455'>Mac Carthaigh Mór</Link>, witness to the <Link to='/map?id=D1026'>unfolding destruction</Link>, elegist to an <Link to='/map?id=D1028'>aristocracy in freefall</Link>, and a <Link to='/map?id=D1065'>devotional poet</Link> whose motifs can uncannily echo Spenser’s in The Faerie Queene.
                </p>

                <p className='para-style'>Everywhere on the map, we meet the same pattern of geographical and, therefore, linguistic and cultural contiguity. These may not be cultures in conversation but they are certainly in contact, if not collision. To the west of <Link to='/map?id=D1117'>Kilcolman</Link> lay <Link to='/map?id=D1197'>Mallow</Link>Castle, built by <Link to='/profile/m1502'>Thomas Norris</Link> (who, rumour had it, (<Link to='/map?id=D1006'>sold his soul to the devil</Link>) and headquarters of <Link to='/profile/m1846'>Sir George Carew</Link>, the translator of Ercilla’s  <Link to='/map?id=D1197'>La Araucana</Link>. Beyond lay <Link to='/map?id=D1020'>Nohavaldaly</Link>, the bardic school of <Link to='/profile/m2034'>Aonghuis Uí Dhálaigh Fhionn</Link>, cynosure of poets. Further into <Link to='/map?id=D1156'>Sliabh Luachra</Link>lay the great bardic school of <Link to='/profile/m2031'>Chonchobhar</Link> and <Link to='/profile/m2035'>Cú Chonnacht Ó Dálaigh</Link>. Now fallen on evil days, these former court poets to the late Earl of Desmond occupied the edge-lands of <Link to='/profile/m1438'>Sir William Herbert’s</Link> great seignory centred on <Link to='/map?id=D1125'>Castleisland</Link> where, in <Link to='/work/87'>Croftus, sive de Hibernia Liber</Link>, he meditated on the application of Roman colonisation to Ireland while trying to keep in with the Fitzmaurices – the Mac Muiris, Lords of Kerry – bountiful patrons to a <Link to='/map?id=D1015'>slew of poets.</Link> Everywhere on the map, upheaval, and resettlement sets unlikely conjunctions in motion; <Link to='/map?id=D1136'>the displaced wander</Link> a social and <Link to='/map?id=D1198'>political landscape made newly strange;</Link> emissaries and combatants pour in from Spain and Italy, swooping in to <Link to='/map?id=D1169'>kidnap an interpreter</Link> here, suffering the <Link to='/map?id=D1164'>privations of siege warfare</Link> there.
                </p>

                [Image of “The Port at Dunboy Site Page when completed]

                <p className='para-style'>The deep map shows a province giddy with criss-crossings and unexpected conjunctions, where spatial contiguity is matched by axiological distance. Some of the most exciting places on the map, therefore, are sites like <Link to='/map?id=D1147'>Dunboy</Link> and <Link to='/profile/m1455'>Domhnall Mac Carthaigh Mór’s</Link> seat at <Link to='/map?id=D1073'>Pallis</Link>where the conjunctions are most concentrated and the clash of worldviews (political, cultural, ecological) most discordant. The deep map, therefore, is an experiment in juxtaposing texts which, though they emerge from a shared geographical place occupy an altogether incommensurate cultural space.
                </p>


                <p className='para-style'>Our selections are guided by a decolonising agenda that seeks to make available sources (particularly in Irish) whose underrepresentation has skewed our understanding of early modern Ireland. In doing so, we were guided by the extracts'literary quality, historical significance, quirkiness, and, collectively, represent the widest possible range of viewpoints. That included an attentiveness to the more-than-human (outside the turmoil of human history, meet the oystercatcher working the tideline at <Link to='/map?id=D1194'>Valentia</Link>). Each extract was then assigned to one of six categories: patronage and lordship, cultural production, strategic or political, conflict and violence, music and entertainment, blue-eco-maritime sites, green-eco-sites. Those categories allow users to navigate the deep map by following their own thematic interests.
                </p>

                <p className='para-style'>The deep map brings us to a world of multiple and contending voices, to a province on the cusp of epochal change but where, for the moment, the conquest has not yet happened and everything is still in play.
                </p>


              </>
            }

            {changeIrish && <CaseHistoricOverviewIrish />}
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default CaseDeepMap;
