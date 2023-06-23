
import '../App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Home/Header";
import CaseHistoricOverviewIrish from './CaseHistoricOveriewIrish';
import './case-study.scss';
function CaseMunster({ changeIrish, setChangeIrish }) {

  return (
    <>
      <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />

      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: '#f5f2f', textAlign: "justify" }}>
            <div className="chapter-header-media chapter-header-media--featured-image">
              <img src="/images/case-studies/spenser.jpeg" alt="" style={{ opacity: 0.5, width: "auto", height: "600px" }} />
              <div className="header-text-overlay">
                <h1 className="header-text"><strong>Edmund Spenser in Munster</strong></h1>
              </div>
            </div>
            {!changeIrish &&
              <>
                <span className="dropcap">F</span>
                <p className='para-style'>or those who come to early modern Ireland through English-language sources, one poet leaps off the page: <Link to='/profile/m1506'>Edmund Spenser</Link>. A colonist, hostile to the country in which he spent the most productive years of his life, has, ironically, come to speak for late 16th-century Ireland. Spenser, therefore, serves as a test case for what happens when the Irish context in which he wrote <Link to='/work/5'>The Faerie Queene</Link>seriously.
                </p>

                <p className='para-style'>It was around 1580 that Spenser's association with Ireland started and it was a connection that would span the rest of his life.
                </p>

                <h5>Spenser in Ireland:</h5>

                <p className='para-style'>In 1580, Spenser, fresh from publishing his first book, <Link to='/work/2'>The Shepheardes Calender</Link>, became private secretary to <Link to='/profile/m1437'>Arthur Grey, Lord Grey of Wilton</Link>,  the newly appointed lord deputy of Ireland. Within days of arriving in Ireland that September, Spenser accompanied Grey on a military expedition against <Link to='/profile/m1474'>Fiach mac Aodha Ó Broin</Link> But in the battle of Glenmalure, Grey's forces were routed. In book 4 of <Link to='/work/5'>The Faerie Queene</Link> Spenser recalls the “balefull Oure, late stained with English blood”; Ó Broin lingered in his mind as a model for Malengin.
                </p>

                [Insert Image of Glenmalure from Pat]

                <p className='para-style'>Spenser was one among many English colonial administrators, soldiers, and Anglican clergy in Ireland who left a record of their Irish experiences. Among these were <Link to='/profile/m1153'>John Bale</Link>, <Link to='/profile/m1664'>Lodowick Bryskett</Link>, <Link to='/profile/m3513'>Thomas Churchyard</Link>, <Link to='/profile/m1643'>Geoffrey Fenton</Link>, <Link to='/profile/m1446'>Barnabe Googe</Link>, <Link to='/profile/m1667'>Sir John Harrington</Link>, <Link to='/profile/m1438'>William Herbert</Link>, <Link to='/profile/m1870'>Fynes Moryson</Link>, <Link to='/profile/m1738'>Sir Walter Raleigh</Link>, and <Link to='/profile/m1725'>Barnaby Rich</Link>.Several of these authors were connected to Munster and their impressions can be explored through our <Link to='/map'>Deep Map</Link>, including Fynes Moryson's description of <Link to='/map?id=D1069'>Waterford</Link> and Barnaby Rich's of <Link to='/map?id=D1021'>Limerick.</Link>
                </p>


                <figcaption> Macmorris. Edmund Spenser's Ego Network </figcaption>

                <p className='para-style'>In Spenser's case, his early career in Ireland and his time in Dublin can be
                   <Link to='/network?id=m1506'>visualised</Link>  through his place in Lord Grey's network, 
                   his administrative connections, and through the ‘Bryskett circle' 
                   (those “gentleman fit for civill conversation” who gathered at Bryskett's house near Dublin in the 
                   early 1580s). These contexts connect Spenser to <Link to='/profile/m1664'>Lodowick Bryskett</Link>  
                   himself, and other colonial administrators and officials, such as <Link to='/profile/m4368'>
                    Pertruccio Ubaldini</Link>, <Link to='/profile/m3749'>Christopher Carleill</Link>, 
                    <Link to='/profile/m1502'>Thomas Norris</Link>, and <Link to='/profile/m1396'>William Pelham</Link>. 
                     However, by the late 1580s, Spenser had a more tangible foothold in Ireland, and Munster in 
                     particular, when he was granted over three thousand acres at <Link to='/map?id=D1191'>Kilcolman
                     </Link>, Co. Cork, as part of the <Link to='/historical-overview'>Munster Plantation.</Link> Spenser' s Munster connections included <Link to='/profile/m1438'>Sir William Herbert</Link>, who was granted land in <Link to='/map?id=D1127'>Castleisland</Link>, Co. Kerry, and wrote the Latin treatise <Link to='/work/87'>Croftus, sive de Hibernia liber</Link> which argued that colonies degenerate when settlers adopt the customs and practices of the natives. Spenser remained close to Bryskett who received land around Bridgetown Priory in <Link to='/map?id=D1115'>Castletownroche</Link>, and served as clerk of the Council of Munster.  The most famous of Spenser's Munster neighbours and allies was undoubtably <Link to='/profile/m1738'>Sir Walter Raleigh</Link>, who was granted an estate of 42,000 acres in counties Cork and Waterford, with residences in <Link to='/map?id=D1175'>Lismore</Link> and <Link to='/map?id=D1180'>Youghal.</Link>  Spenser and Raleigh spent time in Lismore, Youghal and Kilcolman: in <Link to='/work/11'>Colin Clout Comes Home Againe</Link>, Spenser alludes to his connection to Raleigh (to whom he dedicated a <Link to='/map?id=D1180'>sonnet</Link> in <Link to='/work/5'>The Faerie Queene</Link>) by describing how the <Link to='/map?id=D1175'>“shepheard of the Ocean”</Link> (an alias for Raleigh) visited him in Kilcolman and how they sat in ‘the cooly shade' reciting verses and ‘each making other mery'.
                </p>


                <figcaption> The Ruins of Kilcolman Castle. Courtesy of Tom Herron. </figcaption>

                <p className='para-style'>Not all of his connections were to his fellow soldiers and colonial administrators however. One of the more fawning Dedicatory sonnets in <Link to='/work/5'>The Faerie Queene</Link> is to <Link to='/profile/m1685'>Thomas Butler, 10th Earl of Ormond</Link>, which is placed at <Link to='/map?id=D1057'>Carrick-on-Suir</Link> on our deep map. Spenser would have known the Earl, the principal military leader in Munster throughout the 1580s, through his administrative work with Lord Grey and Bryskett.  Spenser's connections to the principal Old English families did not stop with the Butlers; Spenser also has an interesting literary connection to another powerful family – the Fitzgeralds. In <Link to='/work/11'>Colin Clout Comes Home Againe</Link> Spenser allegorises <Link to='/profile/m1465'>Frances (née Howard) Fitzgerald</Link>, Countess of Kildare, wife of <Link to='/profile/m1464'>Henry, the 12th Earl</Link> as Mansilia, noting that while once she had waited on Cynthia (<Link to='/profile/m1089'>Elizabeth I</Link>), Mansilia was now “here with vs /About the borders of our rich <Link to='/map?id=D1177'>Coshma</Link>.” ‘Coshma' is an anglicisation of Chois Máighe, the ‘banks of the Máigh', a river in Co. Limerick, thus rooting his celebration of the Countess of Kildare in the landscape of Munster.
                </p>

                <p className='para-style'>All of the connections discussed so far, from Bryskett and Lord Grey, to Raleigh and Ormond, are viewable on Spenser's <Link to='/network?id=m1506'>network</Link> However, these connections mostly reaffirm the English colonial networks in which we are used to seeing Spenser. The network interface (which you can learn more about here ), however, allows us to change this view and complicate the picture. By adding in the next degree of separation, we can ask who Spenser's connections knew.
                </p>


                <figcaption> MACMORRIS Edmund Spenser's Network with 2nd degree activated </figcaption>

                <p className='para-style'>When we activate this, Spenser's network begins to incorporate even more of the literary landscape of Munster, but not in the way you might expect. Now alongside Spenser's fellow authors in the English literary tradition are <Link to='/what-is-bardic-poetry'>the bardic poets</Link> of the Irish literary tradition who wrote eulogies for people to whom Spenser was connected. These include the poets <Link to='/profile/m2041'>Domhnall (mac Taidhg) Ó Dálaigh</Link>, and <Link to='/profile/m2042'>Domhnall Ó Dálaigh</Link> who eulogised <Link to='/profile/m1719'>Dáibhídh Óg de Barra</Link> (David Barry), and <Link to='/profile/m1512'>Dáibhídh de Róiste</Link> (David Roche). Spenser was connected to both the Roches and the Barry's through his landholdings in Kilcolman. The Barrys were his neighbours to the south-west, near <Link to='/map?id=D1002'>Buttevant</Link> and <Link to='/profile/m2041'>Domhnall (mac Taidhg) Ó Dálaigh's</Link> Beannacht duit, a Dháibhíth óig  opens a window onto the multilingual education of Spenser's neighbour, by explaining that <Link to='/profile/m1719'>Dáibhídh Óg de Barra</Link> received “the education of the intense schools of the Irish language and of the great schools of the sweet and flowery English language.” The Roches had a more antagonistic relationship with Spenser. <Link to='/profile/m1507'>Maurice Roche</Link> claimed that <Link to='/map?id=D1181'>Kilcolman</Link> was his land, wrongly confiscated by the crown after the Desmond Rebellion, before being granted to Spenser during the Munster Plantation. Spenser's title to seignory was eventually upheld in 1590.
                </p>

                <p className='para-style'>While the network connects Spenser to the Barry and Roche families and onwards to the Uí Dhálaigh, this contiguity is also viewable on the Deep Map. If you look again at <Link to='/map?id=D1057'>Carrick-on-Suir</Link>, Spenser's dedicatory sonnet is only one of a number of texts represented here. Also included is the poem Taghaim Tómás ragha is róghrádh,  which praises the Ormond castle at Carrick, and an anonymous love poem, <Link to='/map?id=D1140'>Mealltar bean le beagán téad</Link>, that evokes the music of the harp filling the castle. While these are not direct connections, they force us to recognise that bardic poetry and Spenser's poetry operate within the same overarching network of literary patronage in Munster.
                </p>

                <h5>Deep Mapping Spenser</h5>


                <figcaption> MACMORRIS Deep Map of Munster. </figcaption>

                <p className='para-style'>The Deep Map (which you can learn about <Link to='/deep-mapping'>here</Link>) also contains a multitude of different ways to consider Spenser's importance within the literary and political landscape of Munster. By mapping poetic representations onto the geographical spaces that prompted them, we are reminded of Spenser's material presence in a landscape that was not just familiar but, to use a vexed term, ‘home': the <Link to='/map?id=D1099'>Ballyhoura Mountains</Link>, <Link to='/map?id=D1098'>local rivers</Link>, and the ancient city of <Link to='/map?id=D1058'>Buttevant</Link>.  While you can consider Spenser's texts in isolation, you can also use the filters of the map, filtering by Blue eco sites and Green eco sites, to see how Spenser's descriptions compare to those of other poets on the map, such as <Link to='/profile/m1335'>Domhnall (mac Dáire) Mac Bruaideadha's</Link> depiction of the river <Link to='/map?id=D1103'>Feale</Link> in <a href='https://bardic.celt.dias.ie/displayPoem.php?firstLineID=1515'>Ní dúal cairde ar creich ngeimhil</a>.
                </p>


                <figcaption> “English attack on Spanish and Italian forces at Smerwick”, NM p49/21. Courtesy of National Maritime Museum, Greenwich, London. </figcaption>

                <p className='para-style'>You can also use the map to interrogate key events in Spenser's life, such as the massacre of <Link to='/map?id=D1056'>Smerwick</Link> in 1580. Not long after Grey's rout at Glenmalure, a papal force of c. 800 Italian and Spanish soldier sailed into Smerwick Harbour, bringing reinforcements for <Link to='/profile/m1348'>John FitzJames Fitzgerald</Link>. The papal contingent which quickly fortified itself within the promontory fort at Dún an Óir was commanded by two Italians, Colonel <Link to='/profile/m3944'>Sebastiano di San Giuseppe</Link>  and <Link to='/profile/m5808'>Alessandro Bertoni</Link> who wrote a short Latin <Link to='/map?id=D1152'>account of the doomed campaign</Link>. Grey and his forces (among them his secretary, Edmund Spenser) laid siege. After three days the papal forces surrendered and were put to the sword. Grey's slaughter of men who had surrendered ‘on mercy' was denounced as treachery by the leaders of Catholic Europe. Poems like “England's Hope against Irish Hate”, however, which cast the Lord Deputy as “The warlike GRAY, whose actions Tragicall” spin the story differently. The contemporary significance of the massacre means there are many different perspectives on <Link to='/map?id=D1056'>Smerwick</Link> and the deep map can be used to explore these contending narratives, from <Link to='/map?id=D1182'>Grey's defence of his actions</Link>, through Pertruccio Ubaldini's <Link to='/map?id=D1170'>description of events in Italian</Link>, to a description of the massacre in the <Link to='/map?id=D1105'>Annals of the Four Masters</Link>. Spenser himself defended his patron, both in <Link to='/map?id=D1179'>The View</Link> and in The Faerie Queene, in a dedicatory <Link to='/map?id=D1056'>sonnet</Link>, and as by allegorising Grey as the knight of Justice, Artegall  [in Irish, ‘foreign/English Art[hur'], in Book V.
                </p>

                <p className='para-style'>While Spenser is all too often seen through an exclusively English lens, MACMORRIS shows the potential of network analysis and deep mapping to situate Spenser within the complex, bi-cultural context in which he operated and to explore how the polyphony, as well as the tragedy, of late 16th-century Munster fed into his poetry.
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

export default CaseMunster;
