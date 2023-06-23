
import '../App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Link } from 'react-router-dom';
import Header from "../Home/Header";
import CaseHistoricOverviewIrish from './CaseHistoricOveriewIrish';
import './case-study.scss';


function CaseHistoricOverview({ changeIrish, setChangeIrish }) {

    return (
        <>
            <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />

            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Box sx={{ bgcolor: '#f5f2f', textAlign: "justify" }}>
                        <div className="chapter-header-media chapter-header-media--featured-image">
                            <img src="/images/case-studies/historic.jpg" alt="" style={{ opacity: 0.5, width: "auto", height: "600px", margin: 10 }} />
                            <div className="header-text-overlay">
                                <h1 className="header-text"><strong>Historical Overview</strong></h1>
                            </div>
                        </div>
                        {!changeIrish &&
                            <>
                                {/* <h3 style={{ textAlign: "center", padding: "10px", color: 'maroon' }}>Historical Overview</h3> */}


                                <span className="dropcap">E</span>

                                <p className="para-style">Early modern Ireland was a site of extraordinary literary vibrancy. The backdrop to this rich cultural landscape was one of political turmoil,
                                    conflict, and colonial violence. MACMORRIS picks up in 1541, when the Irish parliament passed the Act of Kingly title,
                                    which declared <Link to="/profile/m1060">Henry VIII</Link> and his heirs to be the Kings of Ireland and created the
                                    ‘Kingdom’ of Ireland.
                                </p>
                                <div className="image-container">
                                    <p className="para-style">
                                        What followed was an expansion of English control through the Tudor conquest, led by a series of Lord Deputies,
                                        including <Link to="/profile/m1115">Anthony St Leger</Link>, <Link to="/profile/m1370">Thomas Radclyffe</Link>,
                                        <Link to="/profile/m1496">William Fitzwilliam</Link>, and <Link to="/profile/m1394">Henry Sidney</Link>.

                                    </p>
                                    <div className="image-wrapper">
                                        <img src="/images/case-studies/historic/fig1.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                                        <figcaption>John Speed, "The Province of Munster", Courtesy of Trinity College Dublin.</figcaption>
                                    </div>
                                </div>


                                {/* <p className='para-style'>arly modern Ireland was a site of extraordinary literary vibrancy. The backdrop to this rich cultural landscape was one of political turmoil, conflict and colonial violence. MACMORRIS picks up in 1541, when the Irish parliament passed the Act of Kingly title, which declared <Link to='/profile/m1060'>Henry VIII</Link> and his heirs to be the Kings of Ireland, and created the ‘Kingdom’ of Ireland. What followed was an expansion of English control through the Tudor conquest, led by a series of Lord Deputies, including <Link to='/profile/m1115'>Anthony St Leger</Link>, <Link to='/profile/m1370'>Thomas Radclyffe</Link>, <Link to='/profile/m1496'>William Fitzwilliam</Link> and <Link to='/profile/m1394'>Henry Sidney</Link>. The conquest involved the confiscation of land from the Gaelic Irish, and policies such as ‘surrender and regrant’, whereby Gaelic Lords who surrendered their lands to the crown and swore henceforth to follow English law and customs, where regranted the land as freehold under Common Law (see <Link to='/profile/m1114'>Conn Bacach Ó Néill</Link>, Earl of Tyrone, <Link to='/profile/m1044'>Muircheartach Ó Briain</Link>, Earl of Thomond, and <Link to='/profile/m1455'>Domhnall Mac Carthaigh Mór</Link>, Earl of Clancar). As part of the conquest, <Link to='/profile/m1394'>Henry Sidney</Link> established the provincial presidency in Munster, a post that reported directly to the Lord Deputy, but had full authority within the Province. However, this office brought with it its own problems.
                                </p>

                                <img src="/images/case-studies/historic/fig1.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />

                                <figcaption> John Speed, "The Province of Munster", Courtesy of Trinity College Dublin. </figcaption> */}

                                <h5>The Desmond Wars</h5>

                                <p className='para-style'>The Fitzgeralds, Earls of Desmond, saw the presidency as an intrusion on their sphere of influence. This alongside the Fitzgerald’s rivalry with the Butler’s of Ormond, resulted <Link to='/profile/m1360'>Gearóid (mac Séamais) Mac Gearailt</Link>, the Earl of Desmond, being arrested and placed in the Tower of London, in 1569. The following year <Link to='/profile/m1301'>Shéamais (mac Muiris) Mhic Gearailt</Link>, the Earl’s captain general rebelled, and over the next four years led guerrilla attacks on the English and their allies, among them the sacking of <Link to='/map?id=D1024'>Kilmallock</Link> in 1571. By 1573, however, the rebellion had fizzled out and Mac Gearailt fled to Spain.
                                </p>

                                <div className="image-container">
                                    <p className='para-style'>The Earl of Desmond was subsequently released and spent the next five years attempting to balance his position of head of the Desmond lordship with appeasing the Crown. However, in 1579, <Link to='/profile/m1301'>Séamas (mac Muiris) Mac Gearailt</Link> accompanied by the papal legate Dr <Link to='/profile/m1341'>Nicholas Sanders</Link>, returned from Spain at the head of a military force, precipitating the Second Desmond War; the <Link to='/profile/m1360'> Earl of Desmond</Link> was proclaimed a traitor. The resulting military campaign was bloody and violent; <Link to='/map?id=D1093'>Munster was devastated</Link>, and the sites of slaughter included <Link to='/map?id=D1060'>Coill Mhór</Link>, <Link to='/map?id=D1025'>Gort na Tiobrad</Link>, and <Link to='/map?id=D1018'>Carrigafoyle</Link>. The most notorious massacre took place at <Link to='/map?id=D1182'>Smerwick</Link>,  in 1580. That September, a papal force of  c. 800 Italian and Spanish soldiers, allied to the Desmonds, landed at Smerwick Harbour and camped at Dún an Óir promontory fort. In early October, <Link to='/profile/m1437'>Lord Grey</Link> and his forces besieged the fort. Three days later, the papal forces surrendered, and were executed. The scorched earth tactics of <Link to='/profile/m1437'>Grey</Link> and <Link to='/profile/m1685'>Ormond</Link> decimated the Desmond forces. <Link to='/profile/m1348'>Seaán (mac Séamais) Mac Gearailt</Link> was killed in 1582, a death lamented in <Link to='/map?id=D1007'>Truagh sin, a chinn mo chroidhe</Link>. Between 1581 and 1583, the <Link to='/profile/m1360'>Earl of Desmond</Link> evaded his pursuers despite several close escapes, including at <Link to='/map?id=D1035'>Sliabh Luachra</Link>. However, in November 1583 he was captured at <Link to='/map?id=D1139'>Glanageenty</Link>, and his severed head was presented to Ormond at Cork and later displayed on London bridge.
                                    </p>
                                    <div className="image-wrapper">
                                        <img src="/images/case-studies/historic/fig2.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />


                                        <figcaption> "English attack on Spanish and Italian forces at Smerwick", NM p49/21. Courtesy of National Maritime Museum, Greenwich, London. </figcaption>
                                    </div>
                                </div>
                                <h5>Munster Plantation</h5>

                                <p className='para-style'>The <Link to='/profile/m1360'>Earl of Desmond’s</Link> lands were ‘attainted’ or legally forfeited to the English crown. These lands, alongside those of his supporters, were granted to New English settlers. The Desmond and Peyton Surveys, undertaken by commissioners appointed in 1584, prepared the ground for plantation by surveying forfeited land and determining its value. The surveyors offers snapshots of the built (if ruinous) environment, such as their descriptions of <Link to='/map?id=D1044'>Bouchier's Castle</Link> and <Link to='/map?id=D1042'>Askeaton</Link> castle, and show a keen eye for natural resources such as the salmon and eel fisheries on the <Link to='/map?id=D1043'>Deel</Link>.
                                </p>
                                <div className="image-container">
                                    <div className="image-wrapper">
                                        <img src="/images/case-studies/historic/fig3.webp" alt="" style={{ width: "400px", height: "580px", margin: 10 }} />
                                        <figcaption> MS1209/36, "The Provence of Munster",  Courtesy of Trinity College Dublin. </figcaption>
                                    </div>
                                    <div className="text-container">

                                        <p className='para-style'>Thirty-five grantees received seignories in 1588 was thirty-five, the most famous being <Link to='/profile/m1738'>Sir Walter Raleigh</Link> who received 40,000 acres in east Cork and west Waterford including <Link to='/map?id=D1180'>Youghal</Link> and <Link to='/map?id=D1175'>Lismore</Link>. The mathematician, <Link to='/profile/m4296'>Thomas Hariot</Link>, took up residence in <Link to='/map?id=D1174'>Molana Abbey</Link>, on Raleigh’s vast estate. Other undertakers included <Link to='/profile/m1438'>William Herbert</Link>, author of <Link to='/work/87'>Croftus, sive de Hibernia liber</Link>,  who was granted 13,276 acres around <Link to='/map?id=D1125'>Castleisland</Link>; <Link to='/profile/m1502'>Thomas Norris</Link>, later Lord President of Munster, acquired 6,000 acres that included <Link to='/map?id=D1198'>Mallow</Link>; <Link to='/profile/m1614'>Christopher Hatton</Link>, Lord Chancellor of England, and dedicatee of works by <Link to='/profile/m1725'>Barnaby Rich</Link> and <Link to='/profile/m3513'> Thomas Churchyard</Link>, got 10,910 acres in Co. Waterford; and <Link to='/profile/m1506'>Edmund Spenser</Link>, author of the <Link to='/work/5'>Faerie Queene</Link>, was granted 3,028 acres at <Link to='/map?id=D1008'>Kilcolman</Link>. From the start, several challenges faced the undertakers. They were never able to fill their quotas for imported labour from England and had to rely on local labour. Native landholders mounted legal challenges, as illustrated by Spenser’s legal battle with <Link to='/profile/m1507'>Maurice Roche</Link> over <Link to='/map?id=D1008'>Kilcolman</Link>. In 1598, the plantation was set ablaze by troops led by <Link to='/profile/m1514'>Aodh Mág Uidhir</Link>. Spenser was burnt out of <Link to='/map?id=D1008'>Kilcolman</Link> and fled to London, dying a few months later. (see <Link to='/spenser-in-munster'>Edmund Spenser in Munster</Link>).
                                        </p>
                                    </div>
                                </div>


                                
                                <h5> Battle of Kinsale (1601) </h5>

                                <p className='para-style'>The destruction of the Munster Plantation is just one of many military victories which <Link to='/profile/m1704'>Aodh O'Neill</Link> and his allies secured in the Nine Years War (1593-1603). Their defeat at <Link to='/map?id=D1013'>Kinsale</Link> in 1601, however, marked a decisive turning point.  Spain which had been cautiously backing Ó Néill for a number of years, finally sent c. 4,500 troops in the autumn of 1601. But a storm drove most of the ships back and only 1,700 troops, led by <Link to='/profile/m1582'>Don Juan del Águila</Link>, landed at <Link to='/map?id=D1013'>Kinsale</Link>. <Link to='/profile/m1618'>Mountjoy</Link> besieged the Spanish; <Link to='/profile/m1704'>Ó Néill</Link> and <Link to='/profile/m1571'>Ó Domhnaill</Link> marched south, cutting off English supply lines. Spanish reinforcements arrived in <Link to='/map?id=D1160'>Castlehaven</Link>  in December. A plan for a pincer attack by Irish and Spanish forces, launched on 24th December, was a catastrophic failure: the Irish and Spanish were routed, <Link to='/profile/m1582'>del Águila</Link> surrendered, and Ó Néill retreated north. This pivotal event can be explored from multiple perspectives on the Deep Map. By clicking on <Link to='/map?id=D1013'>Kinsale</Link>, you can see <Link to='/profile/m1618'>Mountjoy’s</Link> own description of events, and contrast that with the Annals of the Four Masters’ account, as well as engaging with Spanish perspectives. In the aftermath of the battle, the Spanish surrendered garrisons at <Link to='/map?id=D1164'>Dunboy</Link>, <Link to='/map?id=D1122'>Baltimore</Link> agus <Link to='/map?id=D1160'>Castlehaven</Link>, while many of the Gaelic lords fled to the continent in what came to be known as the ‘Flight of the Earls’.
                                </p>

                                <p className='para-style'>This ushered in profound transformation: the Plantation of Ulster, the immigration of Scottish and English Protestant settlers, Catholic landholders’ grievances over proposals for a Plantation of Connacht, and their increasing marginalisation in Irish Parliaments during the 1620s and 1630s.
                                </p>

                                <img src="/images/case-studies/historic/fig4.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />

                                <figcaption> Thomas Stafford, Pacata Hibernia ... an Historie of the Late Warres of Ireland (London, 1633). Copyright Marsh’s Library, Dublin. </figcaption>


                                <h5> Literary Responses </h5>

                                <p className='para-style'>Writers responded robustly to the conflict and uncertainty which they lived through. The filidh (hereditary professional poets), products of the flourishing bardic schools, where powerful figures within the lordships of Gaelic and Gaelicised Ireland, a centrality that condemned them in the eyes of the incoming Tudor administrators (see <Link to='/what-is-bardic-poetry'>What is Bardic Poetry?</Link> and <Link to='/using-gaelic-sources'>Using Gaelic Sources</Link>). Neo-Latin scholarship took on the energies of the Counter-Reformation, not just in theological writings but in histories like <Link to='/profile/m2140'>Philip O’Sullivan Beare’s</Link><Link to='/work/3123'>Historiae Catholicae Iberniae compendium</Link>; and it produced epics like <Link to='/profile/m3476'>Dermot O’Meara’s</Link><Link to='/work/1190'>Ormonius</Link>.  At the same time, the English of Ireland had its own vitality, evident in <Link to='/profile/m1740'>Richard Stanihurst’s</Link> highly experimental translation of Virgil his Aeneid and his contribution to <Link to='/work/175'>Holinshed’s Chronicles</Link>, which includes his celebration of <Link to='/profile/m2462'>Domhnall Dubh Ó Cathail</Link> from <Link to='/map?id=D1019'>Aghadoe</Link>. <Link to='/profile/m3943'>Richard Nugent’s</Link> sonnet collection, <Link to='/work/116'>Cynthia</Link> (1602) may be stylistically more conventional, but Nugent’s <Link to='/network?id=m3943'>network</Link> points to a wider literary and linguistic plurality: his father, <Link to='/profile/m1809'>William Nugent</Link>, was an accomplished sonneteer in English who also wrote poems of exile in the strict deibhidhe metre of the bardic schools, <Link to='/work/3617'>Diombáidh triall ó thulchaibh Fáil</Link> and <Link to='/work/3710'>Fada i n-éagmais inse Fáil</Link>. Richard’s uncle, <Link to='/profile/m2215'>Christopher Nugent</Link>, Baron of Delvin, wrote an <Link to='/work/3069'>Irish primer</Link> (with parallel phrases in Irish, English and Latin) to encourage <Link to='/profile/m1089'>Queen Elizabeth I</Link> to learn Irish, and the Nugent family maintained their own hereditary bards, the muintir Chobhthaigh, evidenced by <Link to='/profile/m2023'>Muircheartach Ó Cobhthaigh’s</Link> <Link to='/work/3656'> Do-ní clú áit oighreachda </Link> and <Link to='/work/3798'>Geall re hiarlachd ainm barúin</Link>.
                                </p>

                                <p className='para-style'>The agents of the Tudor and Stuart conquest, too, included a striking number of writers, among them <Link to='/profile/m3513'>Thomas Churchyard</Link>, <Link to='/profile/m4296'>Thomas Hariot</Link>, <Link to='/profile/m1438'>William Herbert</Link>, <Link to='/profile/m1738'>Sir Walter Raleigh</Link>, <Link to='/profile/m1725'>Barnaby Rich</Link>, and <Link to='/profile/m1506'>Edmund Spenser</Link>.  <Link to='/profile/m1667'>John Harrington</Link>, translator of <Link to='/work/120'>Orlando Furioso</Link> and author of several books of <Link to='/work/126'>epigrams</Link>, left a witty record of his Irish campaigns, including a description of <Link to='/map?id=D1173'>Duncannon Fort</Link> and a facetious reference to Morris dancing at <Link to='/map?id=D1172'>Adare</Link>; <Link to='/profile/m1664'>Lodowick Bryskett</Link> praises Spenser in his <Link to='/work/117'>A discourse of ciuill life</Link>; and <Link to='/profile/m1870'>Fynes Moryson</Link> discusses the insolent papists of <Link to='/map?id=D1017'>Cork</Link> in his <Link to='/work/227'>Itinerary</Link>.
                                </p>

                                <p className='para-style'>To capture the range of works written in, from, or about Ireland in the period, we compiled a bibliography of primary works. While not definitive, it provides the largest multilingual bibliography of primary sources related to Ireland for this period. The bibliography is <Link to='/search'>searchable</Link>. To explore these texts visually, you can use our works networks to see how the each text connects various people in the database, drawing together the authors, printers, publishers, and dedicatees to the texts with which they are affiliated.
                                </p>

                                <img src="/images/case-studies/historic/fig5.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />

                                <figcaption> MACMORRIS Deep Map of Munster. </figcaption>

                                <p className='para-style'>MACMORRIS offers a variety of ways to think about literature’s engagement with these key historical events. Our <Link to='/Network?id=2504'>networks</Link> show who a given literary figure knew and the nature of their connections to political figures and events. The <Link to='/map'>Deep Map</Link> facilitates spatial exploration of selected authors relationship with place. Rather than offering answers, MACMORRIS encourages exploration, and offers a means of discovering the complexity and plurality of early modern Ireland.
                                </p>

                            </>}

                        {changeIrish && <CaseHistoricOverviewIrish />}
                    </Box>
                </Container>
            </React.Fragment >
        </>
    );
}

export default CaseHistoricOverview;
