
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

function CaseHistoricOverview({ changeIrish, setChangeIrish }) {

    return (
        <>
            <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />

            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Box sx={{ bgcolor: '#f5f2f', textAlign: "justify" }}>
                        {!changeIrish && <>
                            <h3 style={{ textAlign: "center", padding: "10px", color: 'maroon' }}>Historical Overview</h3>
                            <p>
                                Early modern Ireland was a site of extraordinary literary vibrancy. The backdrop to this rich
                                cultural landscape was one of political turmoil, conflict and colonial violence. MACMORRIS picks
                                up in 1541, when the Irish parliament passed the Act of Kingly title, which declared
                                <Link className='link' to='/profile/m1060'> Henry VIII </Link>
                                and his heirs to be the Kings of Ireland, and created the Kingdom of Ireland. What followed was an
                                expansion of English control through the Tudor conquest, led by a series of Lord Deputies such as
                                <Link className='link' to='/profile/m1115'> Anthony St Leger</Link>,
                                <Link className='link' to='/profile/m1370'> Thomas Radclyffe</Link>,
                                <Link className='link' to='/profile/m1496'> William Fitzwilliam </Link> and
                                <Link className='link' to='/profile/m1394'> Henry Sidney </Link>.  The conquest involved
                                the confiscation of land from the Gaelic Irish, and policies such as surrender and regrant, whereby
                                Gaelic Lords were encouraged to surrender their lands to the crown and in return for their loyalty
                                and adherence to English customs, they would be regranted the land as freehold and given an English
                                title (see
                                <Link className='link' to='/profile/m1114'> Conn Bacach Ó Néill</Link>,
                                Earl of Tyrone,
                                <Link className='link' to='/profile/m1044'> Muircheartach Ó Briain</Link>,
                                Earl of Thomond, and
                                <Link className='link' to='/profile/m1455'> Domhnall Mac Carthaigh Mór</Link>,
                                Earl of Clancar ). As part of the conquest,
                                <Link className='link' to='/profile/m1394'> Henry Sidney </Link>
                                established the provincial
                                presidency in Munster, a post that reported directly to the Lord Deputy, but had full authority within
                                the Province. However, this office brought with it its own problems and casualties.
                            </p>

                            <h5>The Desmond Wars</h5>
                            <p>
                                The most destabilising was relating the Fitzgerald’s of Desmond, who saw the presidency as an
                                intrusion on their sphere of influence. This alongside the Fitzgerald’s rivalry with the Butler’s
                                of Ormond, resulted in
                                <Link className='link' to='/profile/m1301'> Gearóid (mac Séamais) Mac Gearailt </Link>
                                , the Earl of Desmond being arrested and
                                placed in the Tower of London. In 1569, a year after the Earl’s arrest,
                                <Link className='link' to='/profile/m1360'> Séamas (mac Muiris) Mac Gearailt</Link>,
                                the Earl’s captain general rebelled, and over the next four years enacted guerrilla attacks on the English and
                                their allies. This included the Sacking of
                                Henry Sidney
                                <Link className='link' to='/map?id=401'> Kilmallock </Link>  in 1571, but by 1573 the rebellion had fizzled out and
                                Mac Gearailt fled to Spain.

                            </p>
                            <p>

                                Subsequently, the Earl of Desmond was released and spent the next five years attempting to balance
                                his position of head of the Desmond lordship alongside accommodating and appeasing the Crown.
                                However, in 1579,
                                <Link className='link' to='/profile/m1301'> Séamas (mac Muiris) Mac Gearailt </Link>
                                returned from Spain with the papal legate
                                Dr <Link className='link' to='/profile/m1341'> Nicholas Sanders </Link>
                                and a military force, leading to the second Desmond war and the
                                <Link className='link' to='/profile/m1360'>Earl of
                                    Desmond </Link>himself being proclaimed a traitor. The resulting military campaign was a bloody and
                                violent one, with the Desmond’s and the English
                                <Link className='link' to='/map?id=724'> destroying Munster</Link>, including Massacres near
                                Coill Mhór,  Conflict at
                                Gort na Tiobrad,  and battles at
                                <Link className='link' to='/map?id=792'> Carrigafoyle</Link>.  However, the most enduring
                                massacre was that of Smerwick  in 1580. This event took place between September and October at a
                                promontory fort on the west side of Smerwick harbour, known as Dún an Óir. A papal force of as
                                many as 800 Italian and Spanish soldier had landed at Smerwick Harbour to aid the Desmond forces.
                                However these forces were blockaded into the fort and in October
                                <Link className='link' to='/profile/m1437'> Lord Grey </Link>and his forces laid
                                siege. After three days the papal forces surrendered and were executed. Due to the scorched earth
                                tactics of
                                <Link className='link' to='/profile/m1437'> Grey </Link>  and
                                <Link className='link' to='/profile/m1685'> Ormond </Link>,  the Desmond forces were largely defeated by 1581,
                                with <Link className='link' to='/profile/m1348'>Seaán (mac Séamais) Mac Gearailt </Link>being killed in 1582,
                                a death lamented in <Link className='link' to='/map/D1007'>"Truagh sin, a chinn mo
                                    chroidhe" </Link>, and the
                                <Link className='link' to='/profile/m1360'>Earl of Desmond </Link> being hunted.

                            </p>
                            <p>


                                Between 1581 and 1583 the earl avoided capture, but had many close escapes, including at
                                <Link className='link' to='/map/D1035'> Sliabh Luachra</Link>.
                                However, in November 1583 he was captured just outside Tralee, before being
                                beheaded at
                                <Link className='link' to='/map?id=829'> Glanageenty</Link>,
                                and his head was presented to Ormond at Cork and later displayed on
                                London bridge.
                            </p>

                            <h5> Munster Plantation </h5>

                            <p>

                                The plantation began after the failed rebellion when the lands of the
                                <Link className='link' to='/profile/m1360'> Earl of Desmond </Link>
                                were
                                "attainted" or legally forfeited to the English crown. These lands, alongside those of his
                                supporters were granted to and exploited by a series of New English settlers who undertook the
                                task of repopulating, restructuring and developing the land both on behalf of the crown and for
                                their own profit. A key part of this process was the act of surveying the land with the intention
                                to record the area forfeited, assign a value, and highlight the name of the present occupier.
                                The most important of these surveys was the Desmond and Peyton Surveys, undertaken by commissioners
                                appointed in 1584.  The survey facilitated the government estimation of the amount of land at its
                                disposal and allowed it to proceed with the drafting of a provisional scheme for the planting of
                                Munster. In this act of surveying, it captures aspects of the surviving architecture of the
                                region, such as its description of
                                <Link className='link' to='/map/D1044'> Bouchier's Castle </Link>
                                and
                                <Link className='link' to='/map/D1042'> Askeaton castle </Link>
                                , but it also has
                                a fascination with natural resources as exemplified by a description of Salmon and Eel Fishing
                                on the
                                <Link className='link' to='/map/D1043'> Deel</Link>.
                            </p>

                            <p>
                                While initially there had been eighty-six people projected to be granted land in the first wave
                                of the plantation, the number of initial grantees who received seignories in 1588 was thirty-five,
                                and a high proportion of these colonists were army men or administrators on the Irish establishment.
                                The most famous of the grantees was
                                <Link className='link' to='/profile/m1738'> Sir Walter Raleigh </Link>
                                who was granted 40,000 acres in
                                Eastern Cork and Western Waterford including Youghal  and Lismore.  Also connected to Raleigh’s
                                estates was the adventurer Thomas Hariot  who stayed at Molana Abbey . Other well-known
                                undertakers included William Herbert , who was author of the Latin treatise Croftus, sive de
                                Hibernia liber , and was granted land that included Castleisland  and its surrounds, covering
                                13276 acres; Thomas Norris,  who later became President of Munster, was granted 6000 acres that
                                included Mallow;  the Lord Chancellor of England, Christopher Hatton  (who was also the
                                dedicatee of works by Barnaby Rich  and Thomas Churchyard ), was granted 10910 acres in Co.
                                Waterford; and Edmund Spenser,  author of the Faerie Queene,  was granted 3028 acres around
                                Kilcolman.  From the start there were several challenges facing the undertakers. They were
                                never able to fill their quotas for imported labour from England, instead having to rely on
                                local labour. Their progress was also impeded by lawsuits from the natives, evidenced by
                                Spenser’s legal battle with Maurice Roche  over Kilcolman.  By 1598, the plantation was set
                                ablaze and destroyed during the Nine Years’ War, by troops led by Aodh Mág Uidhir.
                                Included in this destruction was Kilcolman,  and Spenser having fled to London, died a few months later.
                                (see Edmund Spenser in Munster).
                            </p>

                            <h5>Battle of Kinsale (1601)</h5>

                            <p>

                                The destruction of the Munster Plantation is just one of many military victories for Aodh O'Neill  and his allies in the seven years
                                between 1593 and 1600. However, their greatest defeat and major turning point was the Siege of Kinsale  in 1601.
                                While Spain had been offering material support to O’Neill for a number of years, in the Autumn of 1601, they sent
                                military support in the region of 4500 troops. However, a storm meant that the majority of the ships had to turn
                                back, leading to 1700 troops, led by Don Juan del Águila,  to land at Kinsale , taking the town with little resistance in September 1601. Mountjoy  responded quickly and ordered his army to Kinsale and besieged the Spanish. In order to support the Spanish, O’Neill  and Ó Domhnaill  marched south, cutting English supply lines as they moved. Spanish reinforcements had also arrived in Castlehaven  by December and with del Águila  came up with a plan for O’Neill’s army to approach the English lines in order to facilitate the Spanish breaking out of Kinsale and linking up with the Irish forces. This plan was enacted on 24th December and was a catastrophic failure, leading to a rout of both the Irish and Spanish forces, Don Juan del Águila’s  surrender, and O’Neill’s retreat North. As this is such a pivotal event in the Nine Years’ War, there are many perspectives that can be explored. By engaging with Kinsale  on our map, you can see Mounjoy’s  own description of events, and contrast that with how the battle is presented in the Annals of the Four Masters, as well as engaging with Spanish perspectives. In the aftermath of the battle, the Spanish surrendered garrisons at Dunboy,  Baltimore,  and Castlehaven,  while many of the Gaelic lords retreated and eventually fled to Spain in what is now known as the Flight of the Earls.
                                This ushered in another period of change and religious tension; one that included the implementation of the Plantation of Ulster, the immigration of Scottish and English Protestant settlers, and Catholic landholder grievances over proposals for a Plantation of Connacht and their treatment in successive Irish Parliaments throughout the 1620s and 1630s.
                            </p>
                            <h5>  Literary Responses</h5>
                            <p>
                                Throughout this period of conflict and political uncertainty, many wrote about, reflected on and responded to the social and political world around them. Bardic schools flourished, producing the filidh (hereditary professional poets) whose centrality to the lordships of Gaelic and Gaelicised Ireland condemned them in the eyes of the incoming Tudor administrators (see What is Bardic Poetry?  and Using Gaelic Sources ) Neo-Latin scholarship took on the energies of the Counter-Reformation, not just in theological writings but in histories like Philip O’Sullivan Beare’s  Historiae Catholicae Iberniae compendium;  it produced epics like Dermot O’Meara’s  Ormonius.   At the same time, the English of Ireland had its own vitality, evident in Richard Stanihurst’s  contribution to Holinshed’s Chronicles,  which includes his celebration of Domhnall Dubh Ó Cathail  from Aghadoe  and in his highly experimental translation of Virgil his Aeneid. The sonnet collection, Cynthia,  published in 1602 by Richard Nugent,  may seem more conventional, but Nugent’s network,  especially the cultural activities of  his immediate family points to an important example of the literary and linguistic plurality at play: his father, William Nugent,  was an accomplished sonneteer in English who also, writing in the strict deibhidhe metre of the bardic schools, produced poems of exile in classical Irish which begin begin ‘Diombáidh triall ó thulchaibh Fáil’  and ‘Fada i n-éagmais inse Fáil’ . Richard’s uncle, Christopher Nugent,  Baron of Delvin, wrote an Irish primer  (with parallel phrases in Irish, English and Latin) to encourage Queen Elizabeth I  to ‘understande the language of your people theare’, and the Nugent family maintained their own hereditary bards, the muintir Chobhthaigh, evidenced by Muircheartach Ó Cobhthaigh  penning “Do-ní clú áit oighreachda”  and “Geall re hiarlachd ainm barúin”  for William Nugent and Christopher Nugent respectively. This wide case list of author related to Ireland has facilitated our bibliography of primary works, which while incomplete, is the largest multilingual bibliography of primary sources related to Ireland for this period. Works in this bibliography can be searched  for, or, if you want to visually explore these texts, you can use our works networks  to see how the above mentioned texts (and more) connect various people in our database, drawing together authors, printers, publishers and dedicatees to the texts the were affiliated with.
                                By the 1570s, the cultural complexity already manifest in this cross-fertilisation of the Gaelic and Old English communities was further complicated by the irruption of soldiers, administrators and settlers – the agents of the Elizabethan conquest of Ireland connected to the Desmond wars, the Munster Plantation, and Kinsale. One of the striking features of the conquest is the number of writers in its vanguard. These include those already mentioned - Thomas Churchyard,  Thomas Hariot,  William Herbert,  Sir Walter Raleigh,  Barnaby Rich,  and Edmund Spenser.  It also includes John Harrington,   translator of Orlando Furioso , and author of several books of epigrams,  who also gives a description of Duncannon  Fort and some Morris dancing at Adare ; Lodowick Bryskett , who praises Spenser in his A discourse of ciuill life;  and Fynes Moryson,  who discussed Insolent Papists of Cork  in his Itinerary.
                                MACMORRIS offers different ways to think about how literary history engages with, presents, and overlaps with these key historical events. Our networks  allow you to see who a literary figure knew, and how they may connect to different political figures and events; while our Deep map  facilitates spatial exploration of the places various authors where writing about or writing from. Rather than offering answers, we encourage exploration, and consideration of all that this fascinating period has to offer.
                            </p>
                        </>}

                        {changeIrish && <CaseHistoricOverviewIrish />}
                    </Box>
                </Container>
            </React.Fragment>
        </>
    );
}

export default CaseHistoricOverview;
