
import '../App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Home/Header";
import CaseHistoricOverviewIrish from './CaseHistoricOveriewIrish';
import './case-study.scss';
import ScrollToTop from '../Home/ScrollToTop';
import Footer from '../Home/Sponsors';

function CaseDeepMap({ changeIrish, setChangeIrish }) {

  return (
    <>
      <ScrollToTop />

      <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />

      <div className='case-wrapper'>
        <>
          <div className='case-study-top-wrapper'>
            <div className='case-study-title-wrapper'>
              <h1 className="header-title" style={{ fontSize: '5.5rem' }}>
                {
                  changeIrish ? <strong>Cruthú Léarscáil Dhomhain</strong> :
                    <strong>Deep Mapping</strong>
                }
              </h1>
            </div>
            <div className="title-img-wrapper">
              <img src="/images/case-studies/spenser.webp" alt="" style={{
                opacity: 0.5, width: "auto",
                height: "600px", margin: 10
              }} />
            </div>
          </div>
          <Container fixed>

            {!changeIrish ?
              <>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <span className="dropcap">T</span>
                    <p className='para-style'>he deep map seeks to bring us to a polyphonic world, to offer glimpses of a plurality and complexity that would be eclipsed, first, by conquest and, secondly, by the privileging of colonial sources when narrating the history of early modern Ireland. Ireland in the late 16th century is not just a place of conflict; it is also, and not unrelatedly, a place of cultural ferment.
                    </p>

                    [Insert How to use Map video here]

                    <p className='para-style'>To capture that ferment in all its complexity, MACMORRIS chose the province of Munster in the climactic years 1570 to 1610 for its deep map case study. A fine balance of integration and distinctiveness had long characterised the ruling families of the province: the Gaelic Irish (e.g. the Mac Carthaigh Mór, Ó Súileabháin Bhéara) intermarried with the Old English (descendants of the Anglo-Norman settlers, like the Fitzgeralds of Desmond, the Roches, the Barrys) to produce a complex, hybrid culture. Now, the battle to control the southern province's fertile land, its port cities (<Link to='/map?id=D1022'>Waterford</Link>, <Link to='/map?id=D1052'>Cork</Link>, <Link to='/map?id=D1079'>Limerick</Link>), its rich fisheries and safe harbours, and its coveted natural resources drew in state and private actors from Britain and continental Europe. Munster witnessed some of the decisive events in the Tudor conquest of Ireland: the Desmond Wars of 1569-73 and 1579-83 which accelerated the emergence of Irish Catholic identity; the Munster Plantation which followed on the defeat of the Desmonds; and the battle of Kinsale on 3 January 1602 which delivered the coup de grâce to any possibility of an independent Irish polity (See <Link to='/historical-overview'>Historical Overview</Link>).
                    </p>

                  </div>
                </div>

                <h5> Colonial Cartography </h5>

                <div className='case-flex-row'>
                  <div className='para-flex'>
                    <p className='para-style'>A deep map that attempts to recover a complexity erased by conquest is, inescapably, in dialogue with – and a riposte to – colonial cartography.
                      Most early modern maps of Ireland are colonial: accessories to military campaigns and, in their wake,
                      surveys of confiscated land slated for redistribution to planters. (The Irish did not map a land already
                      intimately known through habitation and Dindshenchas, a form of onomastics dedicated to place and placenames
                      which bardic poets drew).  The colonial map at its starkest and most ideologically laden – think Burleigh's map
                      (see below) of the province of Munster – shows the land as a blank, a terra nullius cleared for plantation.
                      In contrast, the MACMORRIS deep map is an act of postcolonial requital, designed to recover a complexity and
                      plurality – cultural, linguistic, political, ecological etc. – rubbed out by colonial mapping.
                      A deep map marries in-depth knowledge of all the available sources with the subjectivity inherent in any selection
                      process to create an artefact which offers its users the raw materials for an open-ended exploration of the period's
                      complexity. It is a spatially ordered digital anthology which offers curated extracts from a theatre of crisis in
                      order to capture the heterogeneity and contending perspectives of a Gaelic world under threat of erasure (though it
                      doesn't know that yet) and a new order (proto-capitalist and colonial) in formation.
                    </p>
                  </div>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/deepmap/fig1.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figCaption>
                      Burghley, Map of Munster. Courtesy of National Maritime Museum, London </figCaption>
                  </div>
                </div>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>
                      In assembling the discordant,
                      syncopated, and incommensurate record of the widest possible range of voices, it signals the need for new,
                      inclusive, and plural understandings of early modern Ireland.
                    </p>
                    <p className='para-style'>
                      For our historical map layer, we use <Link to='/profile/m1854'>John Speed's</Link> <Link to='/map'>'The Province of Munster'</Link>, originally published in <Link to='/works/223'>The Theatre of the Empire of Great Britaine</Link> (1611). The title tells its own story of a conquest completed, and it marks an end date for case study. But what we map onto Speed's 'theatre of empire'is the multiplicity that precedes – and is partly extinguished by – empire. Munster in the 40 years leading up to 1611 is a theatre of contiguity and encounter, where actors with conflicting interests and incommensurate cultural, political, philosophical, and religious understandings collide. The uniformity of Speed's map and its inclusion of County Clare in the province of Munster (located in Connacht in earlier maps) made it the obvious choice for our historical map layer. The very messiness of <Link to='/profile/m4161'>Francis Jobson</Link> plantation map of <a href='https://digitalcollections.tcd.ie/concern/parent/9k41zf08r/works/r781wg580'>Mounster, distinguishing the vndertakings</a> (dated 3 May 1589), however, testifies to the upheavals and influxes that set the stage for adventitious encounters and colliding worldviews. Its hodgepodge of colour-coded parcels of land represents a terrain where natives and newcomers, English poets and Irish bards, live cheek-by-jowl. Jobson depicts the seignories of the newly endowed 'undertakers'as islands of pink amid an ambient wash of greens and browns where the Gaelic Irish and Old English cling on. There, palisaded inside Jobson's hatched lines, is the 4000-acre estate at <Link to='/map?id=D1117'>Kilcolman</Link> where a recently arrived planter is writing <Link to='/works/5'>The Faerie Queene</Link>.
                    </p>

                  </div>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/deepmap/fig2.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption>MACMORRIS Deep Map of Munster</figcaption>
                  </div>
                </div>

                <h5> Cultural Contiguity </h5>


                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>If we approach this world in monophone, we think of <Link to='/profile/m1506'>Edmund Spenser</Link> <Link to='/spenser-in-munster'>'in Ireland'</Link> as neighboured by <Link to='/profile/m1738'>Sir Walter Ralegh</Link> in <Link to='/map?id=D1175'>Lismore</Link>, or <Link to='/profile/m1664'>Lodowick Bryskett</Link>, settling into his planter's castle in <Link to='/map?id=D1116'>Castletownroche</Link>, or <Link to='/profile/m4296'>Thomas Harriot</Link>, finishing <Link to='/works/1666'>A Briefe and True Report of the New Found Land of Virginia</Link>, in <Link to='/map?id=D1174'>Molana Abbey</Link>. But, in bringing us to realities on the ground, to location and geographical contiguity, the map's spatiality challenges the apartheid of disciplinary boundaries: it shows Spenser not in an Anglosphere of the English Renaissance on tour but in the midst of an ecosystem of Gaelic poets. His immediate neighbours to the east and west, <Link to='/profile/m1507'>Viscount Roche</Link>and <Link to='/profile/m1719'>Lord Barry</Link> each maintained a chief poet (ollamh), and were praised in poems such as “<Link to='/map?id=D1002'>Beannacht duit, a Dháibhíth óig</Link>”, “<Link to='/map?id=D1033'>Cionnas mheastar macámh óg?</Link>”, and “<Link to='/map?id=D1075'>Teallach coisreagtha críoch Bharrach</Link>”; to his north, in 'Arlo Hill', we find <Link to='/profile/m1020'>Donnchadh 'an tSneachta'Mac Craith</Link> who elegised the severed heads of his <Link to='/map?id=D1139'>Desmond lords</Link>.  Across the Blackwater, <Link to='/map?id=D1094'>Cluain Mín</Link> Castle was one of the abodes of <Link to='/profile/m2034'>Aonghus Ó Dálaigh Fionn</Link>, ollamh to the <Link to='/profile/m1455'>Mac Carthaigh Mór</Link>, witness to the <Link to='/map?id=D1026'>unfolding destruction</Link>, elegist to an <Link to='/map?id=D1028'>aristocracy in freefall</Link>, and a <Link to='/map?id=D1065'>devotional poet</Link> whose motifs can uncannily echo Spenser's in The Faerie Queene.
                    </p>
                  </div>

                  <div className="image-wrapper">
                    <img src="/images/case-studies/deepmap/fig3.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption><Link to='/map?id=D1020'>Nohavaldaly</Link> on MACMORRIS Deep Map of Munster</figcaption>
                  </div>

                </div>


                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>Everywhere on the map, we meet the same pattern of geographical and, therefore, linguistic and cultural contiguity. These may not be cultures in conversation but they are certainly in contact, if not collision. To the west of <Link to='/map?id=D1117'>Kilcolman</Link> lay <Link to='/map?id=D1197'>Mallow</Link>Castle, built by <Link to='/profile/m1502'>Thomas Norris</Link> (who, rumour had it, (<Link to='/map?id=D1006'>sold his soul to the devil</Link>) and headquarters of <Link to='/profile/m1846'>Sir George Carew</Link>, the translator of Ercilla's  <Link to='/map?id=D1197'>La Araucana</Link>. Beyond lay <Link to='/map?id=D1020'>Nohavaldaly</Link>, the bardic school of <Link to='/profile/m2034'>Aonghuis Uí Dhálaigh Fhionn</Link>, cynosure of poets. Further into <Link to='/map?id=D1156'>Sliabh Luachra</Link>lay the great bardic school of <Link to='/profile/m2031'>Chonchobhar</Link> and <Link to='/profile/m2035'>Cú Chonnacht Ó Dálaigh</Link>. Now fallen on evil days, these former court poets to the late Earl of Desmond occupied the edge-lands of <Link to='/profile/m1438'>Sir William Herbert's</Link> great seignory centred on <Link to='/map?id=D1125'>Castleisland</Link> where, in <Link to='/works/87'>Croftus, sive de Hibernia Liber</Link>, he meditated on the application of Roman colonisation to Ireland while trying to keep in with the Fitzmaurices – the Mac Muiris, Lords of Kerry – bountiful patrons to a <Link to='/map?id=D1015'>slew of poets.</Link> Everywhere on the map, upheaval, and resettlement sets unlikely conjunctions in motion; <Link to='/map?id=D1136'>the displaced wander</Link> a social and <Link to='/map?id=D1198'>political landscape made newly strange;</Link> emissaries and combatants pour in from Spain and Italy, swooping in to <Link to='/map?id=D1169'>kidnap an interpreter</Link> here, suffering the <Link to='/map?id=D1164'>privations of siege warfare</Link> there.
                    </p>

                    <div className="image-wrapper">
                      <figcaption>
                        [Image of “The Port at Dunboy Site Page when completed]
                      </figcaption>
                    </div>


                    <p className='para-style'>The deep map shows a province giddy with criss-crossings and unexpected conjunctions, where spatial contiguity is matched by axiological distance. Some of the most exciting places on the map, therefore, are sites like <Link to='/map?id=D1147'>Dunboy</Link> and <Link to='/profile/m1455'>Domhnall Mac Carthaigh Mór's</Link> seat at <Link to='/map?id=D1073'>Pallis</Link>where the conjunctions are most concentrated and the clash of worldviews (political, cultural, ecological) most discordant. The deep map, therefore, is an experiment in juxtaposing texts which, though they emerge from a shared geographical place occupy an altogether incommensurate cultural space.
                    </p>


                    <p className='para-style'>Our selections are guided by a decolonising agenda that seeks to make available sources (particularly in Irish) whose underrepresentation has skewed our understanding of early modern Ireland. In doing so, we were guided by the extracts'literary quality, historical significance, quirkiness, and, collectively, represent the widest possible range of viewpoints. That included an attentiveness to the more-than-human (outside the turmoil of human history, meet the oystercatcher working the tideline at <Link to='/map?id=D1194'>Valentia</Link>). Each extract was then assigned to one of six categories: patronage and lordship, cultural production, strategic or political, conflict and violence, music and entertainment, blue-eco-maritime sites, green-eco-sites. Those categories allow users to navigate the deep map by following their own thematic interests.
                    </p>

                    <div className="image-wrapper">
                      <img src="/images/case-studies/deepmap/fig5.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                      <figcaption>MACMORRIS Deep Map of Munster showing Map Layers</figcaption>
                    </div>

                    <p className='para-style'>The deep map brings us to a world of multiple and contending voices, to a province on the cusp of epochal change but where, for the moment, the conquest has not yet happened and everything is still in play.
                    </p>
                  </div>

                </div>

              </>

              :
              <>


                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <span className="dropcap">T</span>
                    <p className='para-style'>á sé i gceist ag an Léarscáil Dhomhain muid a tharraingt isteach i ndomhan ilghnéitheach, a a léiríonn castacht agus éagsúlacht – domhan a bheadh i bhfolach taobh thiar de choncas agus trí thús-áite a bheith tugtha d'fhoinsí na gcoilínithe agus muid ag insint scéal na hÉireann sa Nua-Aois Luath. Bhí níos mó i gceist le hÉirinn ná suíomh coinbhleachta ag deireadh an 16ú haois; bhí cúrsaí cultúrtha faoi bhláth ag an am céanna, agus ní hé nach bhfuil baint acu le chéile. Agus muid ag iarraidh cúrsaí cultúrtha a léiriú, roghnaigh muid Cúige Mumhan sna blianta cinniúnacha 1570–1610 le haghaidh léarscáil dhomhain MACMORRIS. Leis na céadta bliain, sainghné de theaghlaigh mhóra na Mumhan ab ea an mhionchothromaíocht idir imeascadh agus éagsúlacht: na Gaeil (m.sh. Mac Carthaigh Mór, Ó Súilleabháin Béirre) ag pósadh na Sean-Ghall (síolraithe ó na hAngla-Normannaigh, léithéidí Mac Gearailt, de Róisde, de Barra) le cultúr croschineálach casta nua a chruthú.
                    </p>


                    [Insert How to use Map video here]

                    <p className='para-style'>Ansin, tarraingíodh tíortha agus daoine ón Bhreatain agus ón mhór-roinn isteach sa streachailt le smacht a fháil ar thalamh torthúil na cúige, ar na cathracha (<Link to='/map?id=D1022'>Port Láirge</Link>,  <Link to='/map?id=D1052'>Corcaigh</Link>, <Link to='/map?id=D1079'>Luimneach</Link>), ar chuanta agus bráití iascaireachta, agus ar na hacmhainní nádúrtha luachmhara. I gCúige Mumhan a tharla cuid de na himeachtaí ba thábhachtaí le linn Choncas na dTúdarach in Éirinn: an tÉirí Amach i nDeasumhain (1569–73, 1579–83) a chuir fuadar faoi fhéiniúlacht Chaitliceach in Éirinn; Plandáil na Mumhan nuair a fuarthas an bua ar na Gearaltaigh; agus <Link to='/map?id=D1063'>Cath Chionn tSáile</Link> ar 3 Eanáir 1602, a thug an coup de grâce d'aon fhéidearthacht de rialtas neamhspleách a bheith in Éirinn (féach <Link to='/historical-overview#'>Léargas Ginearálta Staire</Link>).
                    </p>
                    <p className='para-style'>Cé go dtugann an léarscáil dhomhain faoin scéal casta a fháil ar ais, a cuireadh i bhfolach trí choncas, caithfidh sí plé le – agus dul i ngleic le – cartagraphaíocht choilíneach. Tá an chuid is mó de léarscáileanna stairiúla Éireann againn mar gheall ar an choilíneachas: oiriúintí d'fheachtais mhíleata a bhí iontu agus, ina ndiaidh sin, suirbhéireacht ar thalamh a gabhadh agus a thabharfaí ar aghaidh do na plandálaithe. Ní raibh sé de nós ag na dúchasaigh léarscáileanna a chruthú do thír a raibh aithne acu uirthi trí chónaí bheith acu inti agus trí Dindshenchas (saghas logainmeolaíochta a chum na filí).
                    </p>

                  </div>
                </div>

                {/* <h5> Colonial Cartography </h5> */}

                <div className='case-flex-row'>
                  <div className='para-flex'>

                    <p className='para-style'>I gcás na léarscáileanna coilíneacha is simplí agus is mó a bhfuil idé-eolaíocht ar leith iontu – cuimhnigh ar léarscáil Burleigh (féach thíos) de Chúige Mumhan – taispeánann siad tír bhán, terra nullius, atá réidh le plandáil. Is mór idir í agus léarscáil dhomhain MACMORRIS, ar iarracht athchóiriú iarchoilíneach í, a bhfuil sé i gceist aici an chastacht agus an ilghnéitheacht – cultúr, teanga, polaitíocht, éiceolaíocht srl. – a baineadh den léarscáil choilíneach a thabhairt ar ais. Tugann léarscáil dhomhain fianaise le chéile ó gach foinse eolais atá ar fáil leis an sprioc sa phróiseas roghnúcháin go mbeidh bailiúchán bunfhoinsí eolais á chruthú inar féidir leis an úsáideoir castacht na tréimhse a fhiosrú go hoscailte. Bailiúchán digiteach téacsanna atá ann i bhfoirm léarscáile a chuireann sleachta áirithe ó láthair géarchéime ós ár gcomhair chun léiriú a dhéanamh ar ilchineálacht agus peirspictíochtaí conspóideacha i ndomhan Gaelach i mbaol a dhíothaithe (cé nach bhfuil sé sin ar eolas acu go fóill) agus domhan nua (próta-rachmasaíoch agus coilíneach) á dheilbhiú ina áit.
                    </p>

                    <p className='para-style'>Trí tharraingt le chéile an bhailiúchán seo de théacsanna (iad achrannach agus ag teacht salach ar a chéile) óna oiread dearcadh éagsúla agus is féidir, tarraingíonn sé aird ar an ghá le tuiscint nua, ionchuimsitheach, ilghnéitheach ar Éirinn sa Nua-Aois Luath.
                    </p>


                  </div>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/deepmap/fig1.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figCaption>
                      Burghley, Map of Munster. Courtesy of National Maritime Museum, London </figCaption>
                  </div>
                </div>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>
                      Is féidir an léarscáil dhomhain a fheiceáil le clúdach <Link to='/map'>'The Province of Munster'</Link> le <Link to='/profile/m1854'>John Speed</Link>, a foilsíodh an chéad uair in <Link to='/work/223'>The Theatre of the Empire of Great Britaine</Link> (1611). Tugann an teideal le fios go raibh an concas curtha i gcrích, agus is leis an bhliain seo a chríochnaíonn an cás-staidéar. Ach baineann an méid atá curtha againne ar léarscáil Speed – ar a 'láthair impireachta' – leis an tréimhse ilghnéitheacht roimh an impireacht, an ilghnéitheacht chéanna a bhí faoi ionsaí na himpireachta. Sa tréimhse 40 bliain roimh 1611, bhí Cúige Mumhan measctha agus trí chéile, bhí daoine a raibh meoin agus spriocanna éagsúla acu taobh lena chéile agus bhí easaontas ann ó thaobh cúrsaí cultúrtha, polaitíochta, creidimh agus fealsúnachta. Mar gheall ar ionannas léarscáil Speed, agus mar go bhfuil Co. an Chláir léirithe mar chuid de Chúige Mumhan (léirithe mar chuid de Chúige Chonnacht i léarscáileanna eile roimhe sin) ba léir gurb í an rogha cheart don "Historical Layer" ar léarscáil dhomhain MACMORRIS. I léarscáil aimhréidhe <Link to='/profile/m4161'>Francis Jobson</Link> i dtaca leis an phlandáil dar teideal <a href=' https://digitalcollections.tcd.ie/concern/parent/9k41zf08r/works/r781wg580'>Mounster, distinguishing the vndertakings</a> (deartha 3 Bealtaine 1589), tugtar léiriú níos sonraí ar an choncas agus ar an phlodú isteach a réitigh an bealach do dhearcaidh éagsúla teacht i dteagmháil agus dul i mbun coimhlinte lena chéile. Tá meascán de dhathanna éagsúla ag léiriú píosaí talún roinnte idir dúchasaigh agus plandálaithe, baird Sasana agus filí na hÉireann ina gcónaí le hais a chéile. Léiríonn Jobson an uasalaicme nua ar bronnadh talamh orthu le paistí bándearga, agus an tseanuasalaicme, na Gaeil is na Sean-Ghaill, iadsan ar éirigh leo talamh a choinneáil go dtí sin, léirithe i gcodanna glasa is donna. Marcáilte ag Jobson ansin, tá eastát 4000 acra thart ar <Link to='/map?id=D1117'>Chill Cholmáin</Link> áit a raibh plandálaí nua amháin ag obair ar <Link to='/work/5'>The Faerie Queene</Link>. Má thugann muid faoin domhan seo a fhiosrú tríd an lionsa seo, shamhlóimis <Link to='/profile/m1506'>Edmund Spenser</Link> <Link to='/spenser-in-munster#'> 'in Éirinn'</Link> agus é taobh le <Link to='/profile/m1738'>Sir Walter Ralegh</Link> i  <Link to='/map?id=D1175'>Lios Mór</Link>, nó le <Link to='/profile/m1664'>Lodowick Bryskett</Link> ag socrú isteach mar phlandálaí i <Link to='/map?id=D1116'>mBaile Chaisleáin an Róistigh</Link>, nó <Link to='/profile/m4296'>Thomas Harriot</Link> ag obair ar <Link to='/work/1666'>A Briefe and True Report of the New Found Land of Virginia</Link> a chur i gcrích i <Link to='/map?id=D1174'>Mainistir Mhaolanfaidh</Link>. Ach, chun an fhírinne léiriú ó thaobh cóngarachta agus teagmhála, cuireann ár léarscáil dhomhain in éadan na míthuisceana go raibh deighilt chruinn ann idir dhaoine agus cultúir: ní thaispeántar Spenser i lár timpeallachta Béarla agus Renaissance Sasana thar lear, ach i lár líonraí filíochta Gaeilge. Ar an taobh thiar agus an taobh thoir de, bhí <Link to='/profile/m1507'>de Róisde</Link> agus <Link to='/profile/m1719'>de Barra</Link>, a raibh file gairmiúil (ollamh) faoina bpátrúnacht acu beirt, agus cumadh dánta dóibh ar nós <Link to='/map?id=D1002'>Beannacht duit, a Dháibhíth óig</Link>, <Link to='/map?id=D1033'>Cionnas mheastar macámh óg?</Link>, agus <Link to='/map?id=D1075'>Teallach coisreagtha críoch Bharrach</Link>; ar an taobh ó thuaidh, in 'Arlo Hill', bhí <Link to='/profile/m1020'>Donnchadh 'an tSneachta' Mac Craith</Link> a chum marbhna ar <Link to='/map?id=D1139'>na Gearaltaigh</Link> ar baineadh a gcinn díobh ag deireadh an chogaidh i nDeasumhain.  Ar an taobh eile den Abhainn Mhór, bhí Caisleán <Link to='/map?id=D1094'>Chluain Mín</Link> a bhí i measc na n-áiteanna a raibh cónaí ar <Link to='/profile/m2034'>Aonghus Ó Dálaigh Fionn</Link> (ollamh <Link to='/profile/m1455'>Mhic Carthaigh Mhóir</Link>) iontu. Chonaic seisean <Link to='/map?id=D1026'>scriosadh na cúige</Link> ag titim amach thart air, chaoin sé <Link to='/map?id=D1028'>an tseanuasalaicme ag titim as a chéile</Link>,  chum sé <Link to='/map?id=D1065'>filíocht dhiaga</Link>,  agus tá cosúlachtaí le feiceáil idir na móitífeanna a d'úsáid sé agus iad sin a d'úsáid Spenser in <Link to='/work/5'>The Faerie Queene.</Link>
                    </p>
                    <p className='para-style'>Gach áit ar an léarscáil, tagann muid ar na patrúin thíreolaíocha chéanna, agus mar sin, tá comhtheagmháil ó thaobh teanga agus cultúir de. B'fhéidir nach bhfuil na cultúir éagsúla ag meacsadh, ach is cinnte go bhfuil siad i dteagmháil lena chéile, agus b'fhéidir coimhlint eatarthu. Taobh thiar de <Link to='/map?id=D1117'>Chill Cholmáin</Link>, bhí <Link to='/map?id=D1197'>Mala</Link> agus an caisleán a thóg <Link to='/profile/m1502'>Thomas Norris</Link> (<Link to='/map?id=D1006'>duine a dhíol a anam leis an diabhal</Link>, de réir an scéil) agus ceanncheathrú <Link to='/profile/m1846'>Sir George Carew</Link>, an fear a d'aistrigh <Link to='/map?id=D1197'>La Araucana</Link>. Taobh thall de sin bhí <Link to='/map?id=D1020'>Nuachabháil Uí Dhálaigh</Link> áit a raibh scoil filíochta <Link to='/profile/m2034'>Aonghuis Uí Dhálaigh Fhionn</Link>, an t-ollamh mór le rá i ndomhan filíochta na Gaeilge. Níos faide thall arís, i dtreo <Link to='/map?id=D1156'>Shliabh Luachra</Link> bhí scoil filíochta eile faoi <Link to='/profile/m2031'>Chonchobhar</Link> agus <Link to='/profile/m2035'>Cú Chonnacht Ó Dálaigh</Link>. Iad ag fulaingt ó chaill siad phátrúnacht na nGearaltach i nDeasumhain, bhí cónaí orthu ar imeall an talaimh a bronnadh ar <Link to='/profile/m1438'>Sir William Herbert</Link> thart timpeall ar <Link to='/map?id=D1125'>Oileán Ciarraí</Link>. In <Link to='/work/87'>Croftus, sive de Hibernia Liber</Link>, déanann Herbert machnamh ar na féidearthachtaí leas a bhaint as modhanna coilíneachais Impireacht na Róimhe i gcás na hÉireann agus, ag an am céanna, é ag iarraidh caidreamh dearfach a choinneáil le clann Muiris, Tiarnaí Chiarraí, <Link to='/map?id=D1015'>teaghlach eile thug pátrúnacht do na filí</Link>. Gach áit ar an léarscáil, tarraingíonn achrann agus athlonnú scéalta neamhghnácha anuas: scéal <Link to='/map?id=D1136'>deoraí</Link>, <Link to='/map?id=D1198'>cúrsaí sochaí agus polaitíochta nua agus coimhthíoch</Link>; teachtaí agus saighdiúirí ag teacht isteach ón Spáinn is ón Iodáil; dul de ráib le <Link to='/map?id=D1169'>hateangaire a fhuadach</Link>; fulaingt trí <Link to='/map?id=D1164'>anás na cogaíochta léigir</Link>.
                    </p>
                    <p className='para-style'>
                      Léiríonn an léarscáil dhomhain cúige lán le heachtraí cumaisc agus comhtharluithe, áit a bhfuil na daoine cóngarach ó thaobh spáis de, ach deoranta ó thaobh meoin de. I measc na n-áiteanna is spreagúla, mar sin, tá leithéidí <Link to='/map?id=D1147'>Dún Baoi</Link> agus áit chónaithe <Link to='/profile/m1455'>Dhomhnaill Mhic Carthaigh Mhóir</Link> ag <Link to='/map?id=D1073'>an Phailís</Link>, na háiteanna is mó a raibh daoine as taobhanna éagsúla ag teacht le chéile agus na háiteanna is mó a raibh aighneas cultúrtha, polaitiúil, agus éiceolaíoch chun tosaigh. Mar sin, tríd an léarscáil dhomhain, baineann muid triail as téacsanna a thagann salach ar a chéile a chur taobh lena chéile, agus cé go bhfuil baint acu leis an áit chéanna, níl an spás cultúrtha céanna acu ar fad.
                    </p>

                  </div>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/deepmap/fig2.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption>MACMORRIS Deep Map of Munster</figcaption>
                  </div>
                </div>

                <h5> Cultural Contiguity </h5>


                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>
                      Roghnaigh muid na foinsí de réir an bhirt díchoilíniú a dhéanamh trí fhoinsí a chur ar fáil (go háirithe i nGaeilge) a ndéantar neamhaird orthu chomh minic sin is go mbíonn ár dtuiscint ar Éirinn sa Nua-Aois Luath anois claonta. Sa phróiseas seo, thug muid aird ar cháilíocht liteartha, tábhacht stairiúil, éagoitiantacht, agus, astu ar fad, bhí muid ag iarraidh an méid dearcadh agus is féidir linn a thaispeáint. Amanna, téann na dearcaidh seo thar chúrsaí daonna (lasmuigh d'achrann stair na ndaoine, féach ar an roilleach ag obair ar chósta <Link to='/map?id=D1194'>Oileán Dairbhre</Link>). Tá sé chatagóir againn ar an léarscáil, agus titeann gach téacs faoi cheann acu: pátrúnacht agus tiarnas, saothrú cultúrtha, straitéis agus polaitíocht, coinbhleacht agus foréigean, ceol agus siamsaíocht, aibhneacha agus aigéan, tuath agus talamh. Is féidir le húsáideoirí leas a bhaint as na catagóirí sin de réir a suime féin agus iad ag brabhsáil ar an léarscáil dhomhain.
                    </p>
                  </div>

                  <div className="image-wrapper">
                    <img src="/images/case-studies/deepmap/fig3.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption><Link to='/map?id=D1020'>Nohavaldaly</Link> on MACMORRIS Deep Map of Munster</figcaption>
                  </div>

                </div>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>
                      Tríd an léarscáil dhomhain, cuirtear tír ós ár gcomhair a bhfuil guthanna ilchineálacha achrannacha le cloisteáil, cúige ag tús agus ag deireadh ré – níl an concas curtha i gcrích agus ní léir a bhfuil i ndán di go fóill.
                    </p>

                    <div className="image-wrapper">
                      <figcaption>
                        [Image of “The Port at Dunboy Site Page when completed]
                      </figcaption>
                    </div>

                    <div className="image-wrapper">
                      <img src="/images/case-studies/deepmap/fig5.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                      <figcaption>MACMORRIS Deep Map of Munster showing Map Layers</figcaption>
                    </div>


                  </div>

                </div>

              </>


            }

          </Container>
        </>
      </div>
      <Footer />
    </>
  );
}

export default CaseDeepMap;
