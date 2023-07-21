
import '../App.css'
import Container from '@mui/material/Container';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Home/Header";
import './case-study.scss';
import ScrollToTop from '../Home/ScrollToTop';
import Footer from '../Home/Sponsors';


function CaseMunster({ changeIrish, setChangeIrish }) {

  return (
    <>
      <ScrollToTop />

      <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />

      <div className='case-wrapper'>
        <>
          <div className='case-study-top-wrapper'>
            <div className='case-study-title-wrapper'>
              <h1 className="header-title" style={{ fontSize: '5.5rem' }}><strong>Edmund Spenser in Munster</strong></h1>
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
                    <span className="dropcap">F</span>
                    <p className='para-style'>or those who come to early modern Ireland through English-language sources, one poet leaps off the page: <Link to='/profile/m1506'>Edmund Spenser</Link>. A colonist, hostile to the country in which he spent the most productive years of his life, has, ironically, come to speak for late 16th-century Ireland. Spenser, therefore, serves as a test case for what happens when the Irish context in which he wrote <Link to='/works/5'>The Faerie Queene</Link>seriously.
                    </p>

                    <p className='para-style'>It was around 1580 that Spenser's association with Ireland started and it was a connection that would span the rest of his life.
                    </p>
                  </div>
                </div>

                <h5>Spenser in Ireland:</h5>



                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>In 1580, Spenser, fresh from publishing his first book, <Link to='/works/2'>The Shepheardes Calender</Link>, became private secretary to <Link to='/profile/m1437'>Arthur Grey, Lord Grey of Wilton</Link>,  the newly appointed lord deputy of Ireland. Within days of arriving in Ireland that September, Spenser accompanied Grey on a military expedition against <Link to='/profile/m1474'>Fiach mac Aodha Ó Broin</Link> But in the battle of Glenmalure, Grey's forces were routed. In book 4 of <Link to='/works/5'>The Faerie Queene</Link> Spenser recalls the “balefull Oure, late stained with English blood”; Ó Broin lingered in his mind as a model for Malengin.
                    </p>
                  </div>
                  <div className='image-wrapper'>
                    <figcaption> [Insert Image of Glenmalure from Pat] </figcaption>
                  </div>
                </div>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>Spenser was one among many English colonial administrators, soldiers, and Anglican clergy in Ireland who left a record of their Irish experiences. Among these were <Link to='/profile/m1153'>John Bale</Link>, <Link to='/profile/m1664'>Lodowick Bryskett</Link>, <Link to='/profile/m3513'>Thomas Churchyard</Link>, <Link to='/profile/m1643'>Geoffrey Fenton</Link>, <Link to='/profile/m1446'>Barnabe Googe</Link>, <Link to='/profile/m1667'>Sir John Harrington</Link>, <Link to='/profile/m1438'>William Herbert</Link>, <Link to='/profile/m1870'>Fynes Moryson</Link>, <Link to='/profile/m1738'>Sir Walter Raleigh</Link>, and <Link to='/profile/m1725'>Barnaby Rich</Link>.Several of these authors were connected to Munster and their impressions can be explored through our <Link to='/map'>Deep Map</Link>, including Fynes Moryson's description of <Link to='/map?id=D1069'>Waterford</Link> and Barnaby Rich's of <Link to='/map?id=D1021'>Limerick.</Link>
                    </p>
                  </div>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/spenser/fig2.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption> Macmorris. Edmund Spenser's Ego Network </figcaption>
                  </div>
                </div>

                <div className='case-flex-column'>
                  <div className='para-flex'>
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
                      </Link>, Co. Cork, as part of the <Link to='/historical-overview'>Munster Plantation.</Link> Spenser' s Munster connections included <Link to='/profile/m1438'>Sir William Herbert</Link>, who was granted land in <Link to='/map?id=D1127'>Castleisland</Link>, Co. Kerry, and wrote the Latin treatise <Link to='/works/87'>Croftus, sive de Hibernia liber</Link> which argued that colonies degenerate when settlers adopt the customs and practices of the natives. Spenser remained close to Bryskett who received land around Bridgetown Priory in <Link to='/map?id=D1115'>Castletownroche</Link>, and served as clerk of the Council of Munster.  The most famous of Spenser's Munster neighbours and allies was undoubtably <Link to='/profile/m1738'>Sir Walter Raleigh</Link>, who was granted an estate of 42,000 acres in counties Cork and Waterford, with residences in <Link to='/map?id=D1175'>Lismore</Link> and <Link to='/map?id=D1180'>Youghal.</Link>  Spenser and Raleigh spent time in Lismore, Youghal and Kilcolman: in <Link to='/works/11'>Colin Clout Comes Home Againe</Link>, Spenser alludes to his connection to Raleigh (to whom he dedicated a <Link to='/map?id=D1180'>sonnet</Link> in <Link to='/works/5'>The Faerie Queene</Link>) by describing how the <Link to='/map?id=D1175'>“shepheard of the Ocean”</Link> (an alias for Raleigh) visited him in Kilcolman and how they sat in ‘the cooly shade' reciting verses and ‘each making other mery'.
                    </p>
                  </div>

                </div>


                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>Not all of his connections were to his fellow soldiers and colonial administrators however. One of the more fawning Dedicatory sonnets in <Link to='/works/5'>The Faerie Queene</Link> is to <Link to='/profile/m1685'>Thomas Butler, 10th Earl of Ormond</Link>, which is placed at <Link to='/map?id=D1057'>Carrick-on-Suir</Link>
                      on our deep map. Spenser would have known the Earl, the principal military leader in Munster throughout the 1580s,
                      through his administrative work with Lord Grey and Bryskett.
                      Spenser's connections to the principal Old English families did not stop with the Butlers;
                      Spenser also has an interesting literary connection to another powerful family – the Fitzgeralds.
                    </p>

                  </div>
                  <div className='image-wrapper'>
                    <img src="/images/case-studies/spenser/fig3.webp" alt="" style={{ width: "auto", height: "600px", margin: 0 }} />
                    <figcaption> The Ruins of Kilcolman Castle. Courtesy of Tom Herron. </figcaption>
                  </div>
                </div>


                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>
                      In <Link to='/works/11'>Colin Clout Comes Home Againe</Link> Spenser allegorises <Link to='/profile/m1465'>Frances (née Howard) Fitzgerald</Link>, Countess of Kildare, wife of <Link to='/profile/m1464'>Henry, the 12th Earl</Link> as Mansilia, noting that while once she had waited on Cynthia (<Link to='/profile/m1089'>Elizabeth I</Link>), Mansilia was now “here with vs /About the borders of our rich <Link to='/map?id=D1177'>Coshma</Link>.” ‘Coshma' is an anglicisation of Chois Máighe, the ‘banks of the Máigh', a river in Co. Limerick, thus rooting his celebration of the Countess of Kildare in the landscape of Munster.
                    </p>

                    <p className='para-style'>All of the connections discussed so far, from Bryskett and Lord Grey, to Raleigh and Ormond, are viewable on Spenser's <Link to='/network?id=m1506'>network</Link> However, these connections mostly reaffirm the English colonial networks in which we are used to seeing Spenser. The network interface (which you can learn more about here ), however, allows us to change this view and complicate the picture. By adding in the next degree of separation, we can ask who Spenser's connections knew.
                    </p>


                  </div>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/spenser/fig4.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption> MACMORRIS Edmund Spenser's Network with 2nd degree activated </figcaption>
                  </div>


                </div>
                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>When we activate this, Spenser's network begins to incorporate even more of the literary landscape of Munster, but not in the way you might expect. Now alongside Spenser's fellow authors in the English literary tradition are <Link to='/what-is-bardic-poetry'>the bardic poets</Link> of the Irish literary tradition who wrote eulogies for people to whom Spenser was connected. These include the poets <Link to='/profile/m2041'>Domhnall (mac Taidhg) Ó Dálaigh</Link>, and <Link to='/profile/m2042'>Domhnall Ó Dálaigh</Link> who eulogised <Link to='/profile/m1719'>Dáibhídh Óg de Barra</Link> (David Barry), and <Link to='/profile/m1512'>Dáibhídh de Róiste</Link> (David Roche). Spenser was connected to both the Roches and the Barry's through his landholdings in Kilcolman. The Barrys were his neighbours to the south-west, near <Link to='/map?id=D1002'>Buttevant</Link> and <Link to='/profile/m2041'>Domhnall (mac Taidhg) Ó Dálaigh's</Link> Beannacht duit, a Dháibhíth óig  opens a window onto the multilingual education of Spenser's neighbour, by explaining that <Link to='/profile/m1719'>Dáibhídh Óg de Barra</Link> received “the education of the intense schools of the Irish language and of the great schools of the sweet and flowery English language.” The Roches had a more antagonistic relationship with Spenser. <Link to='/profile/m1507'>Maurice Roche</Link> claimed that <Link to='/map?id=D1181'>Kilcolman</Link> was his land, wrongly confiscated by the crown after the Desmond Rebellion, before being granted to Spenser during the Munster Plantation. Spenser's title to seignory was eventually upheld in 1590.
                    </p>

                    <p className='para-style'>While the network connects Spenser to the Barry and Roche families and onwards to the Uí Dhálaigh, this contiguity is also viewable on the Deep Map. If you look again at <Link to='/map?id=D1057'>Carrick-on-Suir</Link>, Spenser's dedicatory sonnet is only one of a number of texts represented here. Also included is the poem Taghaim Tómás ragha is róghrádh,  which praises the Ormond castle at Carrick, and an anonymous love poem, <Link to='/map?id=D1140'>Mealltar bean le beagán téad</Link>, that evokes the music of the harp filling the castle. While these are not direct connections, they force us to recognise that bardic poetry and Spenser's poetry operate within the same overarching network of literary patronage in Munster.
                    </p>
                  </div>
                </div>


                <h5>Deep Mapping Spenser</h5>

                <div className='case-flex-column'>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/spenser/fig5.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption> MACMORRIS Deep Map of Munster. </figcaption>
                  </div>
                  <div className='para-flex'>
                    <p className='para-style'>The Deep Map (which you can learn about <Link to='/deep-mapping'>here</Link>) also contains a multitude of different ways to consider Spenser's importance within the literary and political landscape of Munster. By mapping poetic representations onto the geographical spaces that prompted them, we are reminded of Spenser's material presence in a landscape that was not just familiar but, to use a vexed term, ‘home': the <Link to='/map?id=D1099'>Ballyhoura Mountains</Link>, <Link to='/map?id=D1098'>local rivers</Link>, and the ancient city of <Link to='/map?id=D1058'>Buttevant</Link>.  While you can consider Spenser's texts in isolation, you can also use the filters of the map, filtering by Blue eco sites and Green eco sites, to see how Spenser's descriptions compare to those of other poets on the map, such as <Link to='/profile/m1335'>Domhnall (mac Dáire) Mac Bruaideadha's</Link> depiction of the river <Link to='/map?id=D1103'>Feale</Link> in <a href='https://bardic.celt.dias.ie/displayPoem.php?firstLineID=1515'>Ní dúal cairde ar creich ngeimhil</a>.
                    </p>
                  </div>
                </div>


                <div className='case-flex-row'>
                  <div className='para-flex'>
                    <p className='para-style'>You can also use the map to interrogate key events in Spenser's life, such as the massacre of <Link to='/map?id=D1056'>Smerwick</Link> in 1580. Not long after Grey's rout at Glenmalure, a papal force of c. 800 Italian and Spanish soldier sailed into Smerwick Harbour, bringing reinforcements for <Link to='/profile/m1348'>John FitzJames Fitzgerald</Link>. The papal contingent which quickly fortified itself within the promontory fort at Dún an Óir was commanded by two Italians, Colonel <Link to='/profile/m3944'>Sebastiano di San Giuseppe</Link>  and <Link to='/profile/m5808'>Alessandro Bertoni</Link> who wrote a short Latin <Link to='/map?id=D1152'>account of the doomed campaign</Link>. Grey and his forces (among them his secretary, Edmund Spenser) laid siege. After three days the papal forces surrendered and were put to the sword. Grey's slaughter of men who had surrendered ‘on mercy' was denounced as treachery by the leaders of Catholic Europe. Poems like “England's Hope against Irish Hate”, however, which cast the Lord Deputy as “The warlike GRAY, whose actions Tragicall” spin the story differently. The contemporary significance of the massacre means there are many different perspectives on <Link to='/map?id=D1056'>Smerwick</Link> and the deep map can be used to explore these contending narratives, from <Link to='/map?id=D1182'>Grey's defence of his actions</Link>, through Pertruccio Ubaldini's <Link to='/map?id=D1170'>description of events in Italian</Link>, to a description of the massacre in the <Link to='/map?id=D1105'>Annals of the Four Masters</Link>. Spenser himself defended his patron, both in <Link to='/map?id=D1179'>The View</Link> and in The Faerie Queene, in a dedicatory <Link to='/map?id=D1056'>sonnet</Link>, and as by allegorising Grey as the knight of Justice, Artegall  [in Irish, ‘foreign/English Art[hur'], in Book V.
                    </p>
                  </div>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/spenser/fig6.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption> “English attack on Spanish and Italian forces at Smerwick”, NM p49/21. Courtesy of National Maritime Museum, Greenwich, London. </figcaption>
                  </div>
                </div>

                <div className='case-flex-row'>
                  <div className='para-flex'>
                    <p className='para-style'>While Spenser is all too often seen through an exclusively English lens, MACMORRIS shows the potential of network analysis and deep mapping to situate Spenser within the complex, bi-cultural context in which he operated and to explore how the polyphony, as well as the tragedy, of late 16th-century Munster fed into his poetry.
                    </p>
                  </div>
                </div>

              </>
              :
              <>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <h5>A óige</h5>
                    <span className="dropcap">F</span>
                    <p className='para-style'>File, riarthóir coilíneach, agus údar ab ea é <Link to='/profile/m1506'>Edmund Spenser</Link>, a rugadh i Londain c.1552. I mí na Bealtaine 1569, thosaigh sé ag staidéar in Pembroke Hall, Cambridge, agus bhain sé céim amach in 1573, agus máistreacht ina dhiaidh sin sa bhliain 1576. D'fhág Spenser Cambridge ina dhiaidh sin agus chuaigh sé go Kent, ag obair mar rúnaí d'Easpag Rochester John Young, agus meastar gurbh ansin a scríobh sé <Link to='/work/2'>The Shepheardes Calender</Link>.  Bhí baint ag Spenser le hÉirinn ón bhliain 1580 go dtí deireadh a shaoil.
                    </p>
                  </div>
                </div>

                <h5>Spenser in Éirinn </h5>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>In 1580, ceapadh Spenser ina rúnaí príobháideach d'<Link to='/profile/m1437'>Arthur Grey, Tiarna Grey Wilton</Link>, a ndearnadh Fear Ionaid an Rí in Éirinn de i mí Iúil na bliana sin. Nuair a bhain sé Éire amach, chuaigh Spenser in éineacht le Grey ar fheachtais mhíleata. I measc na bhfeachtas sin, bhí cath Ghleann Molúra, a bhfuil tagairt déanta ag Spenser dó i leabhar 4 de <Link to='/work/5'>The Faerie Queene</Link> ag déanamh cur síos ar an abhainn i nGleann Molúra: “balefull Oure, late stained with English blood”. Cé go bhfuil clú ag Spenser mar an duine ba shuntasaí i gcúrsaí liteartha an Bhéarla in Éirinn ag an am sin, bhí sé ann i measc go leor riarthóirí coilíneacha, saighdiúirí, cléirigh Anglacánacha eile a tháinig as Sasana agus a bhí gníomhach i gcúrsaí liteartha an Bhéarla in Éirinn.  Ar na daoine sin bhí <Link to='/profile/m1153'>John Bale</Link>, <Link to='/profile/m1664'>Lodowick Bryskett</Link>, <Link to='/profile/m3513'>Thomas Churchyard</Link>, <Link to='/profile/m1643'>Geoffrey Fenton</Link>, <Link to='/profile/m1446'>Barnabe Googe</Link>, <Link to='/profile/m1667'>Sir John Harrington</Link>, <Link to='/profile/m1438'>William Herbert</Link>, <Link to='/profile/m1870'>Fynes Moryson</Link>, <Link to='/profile/m1738'>Sir Walter Raleigh</Link>, agus <Link to='/profile/m1725'>Barnaby Rich</Link>. Bhí baint ag go leor de na scríbhneoirí seo le Cúige Mumhan agus, mar sin, is féidir teacht ar a gcuid saothar ar <Link to='/map'>Léarscáil Dhomhain MACMORRIS</Link>; féach, mar shampla, an cur síos a dhéanann Fynes Moryson ar <Link to='/map?id=D1069'>Phort Láirge</Link> nó an cur síos a dhéanann Barnaby Rich ar <Link to='/map?id=D1021'>Luimneach</Link>.
                    </p>

                  </div>
                  <div className='image-wrapper'>
                    <figcaption> [Insert Image of Glenmalure from Pat] </figcaption>
                  </div>
                </div>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>
                      I gcás Spenser, is féidir an chéad chúpla bliain a chaith sé in Éirinn agus i mBaile Átha Cliath a
                      <Link to='/network?id=m1506'>léirshamhlú</Link>  trí na nascanna a chruthaigh sé agus é ag obair leis an Tiarna Grey: nascanna riaracháin, agus líonra <Link to='/profile/m1664'>Lodowick Bryskett</Link>  (mar a léirítear é sa chruinniú idir “gentleman fit for civill conversation” i dteach Bryskett gar do Bhaile Átha Cliath ag tús na 1580daí). Mar sin, tarraingítear le chéile Spenser,

                      Bryskett, agus riarthóirí agus oifigigh eile, cosúil le <Link to='/profile/m4368'>Pertruccio Ubaldini</Link>,
                      <Link to='/profile/m3749'>Christopher Carleill</Link>, <Link to='/profile/m1502'>Thomas Norris</Link>, agus
                      <Link to='/profile/m1396'>William Pelham</Link>. Faoi dheireadh na 1580daí, áfach, bhí ceangal ní ba bhuaine agus
                      ní b'fhollasaí ag Spenser le hÉirinn, Cúige Mumhan go háirithe, nuair a bronnadh os cionn 3000 acra air thart ar
                      <Link to='/map?id=D1191'>Chill Cholmáin</Link> Co. Chorcaí, mar chuid de <Link to='/historical-overview#'>
                        Phlandáil na Mumhan </Link>. Agus é i gCúige Mumhan bhí sé i dteagmháil le go leor daoine agus cairde nua. Ina measc sin bhí <Link to='/profile/m1438'>Sir William Herbert</Link>, ar bronnadh talamh air timpeall <Link to='/map?id=D1127'>Oileán Chiarraí</Link>. Chum Herbert an tráchtas Laidine <Link to='/work/87'>Croftus, sive de Hibernia liber</Link>, ina dhéanann sé an argóint go dtagann meath ar choilíneachtaí nuair a iompaíonn plandálaithe ar nósanna na ndúchasach. Bhí ceangal dlúth idir Spenser agus Bryskett go fóill, a fuair talamh thart ar Phrióireacht Bhaile an Droichid i <Link to='/map?id=D1115'>mBaile Chaisleáin an Róistigh</Link> agus a d'oibrigh mar chléireach do chomhairle na Mumhan.   Gan dabht, an chomharsa agus an cara ba cháiliúla a bhí ag Spenser ná <Link to='/profile/m1738'>Sir Walter Raleigh</Link>, ar bronnadh 42,000 acra air i gCo. Chorcaí agus i gCo. Phort Láirge, agus bhí áit chónaithe aige i <Link to='/map?id=D1175'>Lios Mór</Link> agus in <Link to='/map?id=D1180'>Eochall</Link>. Tá a fhios againn gur chaith Spenser agus Raleigh am le chéile i Lios Mór, Eochall agus Cill Cholmáin agus, in <Link to='/work/11'>Colin Clout Comes Home Againe</Link>, tagraíonn Spenser dá chaidreamh le Raleigh, ag rá gur thug <Link to='/map?id=D1175'>“shepheard of the Ocean”</Link> (.i. Raleigh) cuairt air agus go raibh siad i mbun véarsaíochta agus amhránaíochta le chéile. Chum Spenser <Link to='/map?id=D1180'>soinéad</Link> dó in <Link to='/work/5'>The Faerie Queene</Link>.
                    </p>

                  </div>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/spenser/fig2.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption> Macmorris. Edmund Spenser's Ego Network </figcaption>
                  </div>
                </div>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>Ní saighdiúirí agus riarthóirí amháin a bhí i líonra Spenser, áfach. Chum sé soinéad molta do <Link to='/profile/m1685'>Thomás Buitléar, 10ú hIarla Urumhan</Link> in <Link to='/work/5'>The Faerie Queene</Link>, a bhfuil cuid de le feiceáil nuair a roghnaíonn tú <Link to='/map?id=D1057'>Carraig na Siúire</Link> ar an Léarscáil Dhomhain. Ní haon ionadh é go raibh aithne ag Spenser ar Thomás Buitléar. Mar gurbh é príomhcheannaire míleata Chúige Mumhan é Iarla Urumhan le linn na 1580daí, bheadh aithne ag Spenser air trína obair riaracháin leis an Tiarna Grey agus le Bryskett. In Edmund Spenser: A Life, tá sé luaite ag Andrew Hadfield go gcaithfidh gur thug Spenser cuairt oifigiúil ar Charraig na Siúire ó am go chéile, go háirithe agus é ag taisteal idir Baile Átha Cliath agus Cill Cholmáin.  Bhí nasc idir Spenser agus na Sean-Ghaill eile leis, ní hamháin na Buitléaraigh; is díol spéise go raibh nasc liteartha suntasach idir é agus teaghlach mór eile – na Gearaltaigh. In <Link to='/work/11'>Colin Clout Comes Home Againe</Link> déanann Spenser léiriú ar <Link to='/profile/m1465'>Frances (née Howard) inghean Mhic Gearailt</Link>, Cuntaois Chill Dara, bean chéile <Link to='/profile/m1464'>Éinrí Mac Gearailt, 12ú hIarla Chill Dara</Link> mar Mansilia, agus scríobhann sé faoi Mansilia ag freastal ar Cynthia (.i. <Link to='/profile/m1089'>Eilís I</Link>) ag rá go mbíonn sí “here with vs /About the borders of our rich <Link to='/map?id=D1177'>Coshma</Link>” – Cois Máighe a bhí i gceist aige, Co. Luimnigh, agus mar sin faigheann muid moladh ar Chuntaois Chill Dara fréamhaithe i gCúige Mumhan.
                    </p>
                  </div>
                </div>


                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>Is féidir na nascanna seo ar fad, ó Bryskett agus an Tiarna Grey go Raleigh agus Iarla Urumhan, a fheiceáil ar léirshamhlú <Link to='/network?id=m1506'>líonra Spenser</Link>. Daingníonn na nascanna seo líonraí coilíneacha na Sasanach in Éirinn, an íomhá de Spenser a bhfuil muid i dtaithí uirthi. Trí líonraí MACMORRIS (is féidir leat níos mó a fhoghlaim fúthu anseo ) is féidir linn íomhá níos casta agus níos gaire don fhírinne a fheiceáil. Nuair a roghnaítear "show second degree" agus tú ag breathnú ar líonra Spenser, taispeántar na daoine a raibh baint acu leis na daoine a raibh aithne acu ar Spenser.
                    </p>


                  </div>
                  <div className='image-wrapper'>
                    <img src="/images/case-studies/spenser/fig3.webp" alt="" style={{ width: "auto", height: "600px", margin: 0 }} />
                    <figcaption> The Ruins of Kilcolman Castle. Courtesy of Tom Herron. </figcaption>
                  </div>
                </div>


                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>
                      Feiceann muid ansin níos mó de shaol liteartha Chúige Mumhan taobh istigh de líonra Spenser, ach b'fhéidir ní ar an dóigh a mbeifí ag súil leis. Anois, taobh le húdair Béarla cosúil le Raleigh agus Spenser, tá <Link to='/what-is-bardic-poetry#'>filí gairmiúla na Gaeilge</Link>, filí a bhí faoi phátrúnacht daoine a raibh aithne ag Spenser orthu. I measc na bhfilí sin, bhí <Link to='/profile/m2041'>Domhnall (mac Taidhg) Ó Dálaigh</Link>, agus <Link to='/profile/m2042'>Domhnall Ó Dálaigh</Link> a chum dánta do léithéidí <Link to='/profile/m1719'>Dáibhídh Óg de Barra</Link>, agus <Link to='/profile/m1512'>Dáibhídh de Róiste</Link>. Bhí nasc idir Spenser agus na Róistigh agus na Barraigh mar gurbh iadsan a chomharsana agus é ina chónaí i gceantar Chill Cholmáin – na Barraigh ar an taobh thiar theas i gceantar <Link to='/map?id=D1002'>Chill na Mallach</Link>, agus tugtar léiriú dúinn ar an oideachas iltheangach a fuair <Link to='/profile/m1719'>Dáibhídh Óg de Barra</Link> sa dán Beannacht duit, a Dháibhíth óig   le <Link to='/profile/m2041'>Domhnall (mac Taidhg) Ó Dálaigh</Link>: oideas géarsgol nGaoidheilge / no sgol mbras mblathBéarladh mbinn. Ar an taobh eile bhí na Róistigh nach raibh caidreamh maith acu le Spenser – mhaígh <Link to='/profile/m1507'>Muiris de Róiste</Link> go raibh cearta aigesean ar cheantar <Link to='/map?id=D1181'>Chill Cholmáin</Link>; ghabh fórsaí na Corónach an talamh sin i ndiaidh an éirí amach i nDeasumhain, agus bronnadh é ar Spenser le linn Phlandáil na Mumhan. Tháinig de Róiste amach in éadan éileamh Spenser agus an choigistithe seo in 1588, cé go raibh an bua ag Spenser sa deireadh in 1590.
                    </p>


                    <p className='para-style'>Tá na nascanna seo idir Spenser, na Róistigh agus na Barraigh le feiceáil trí na líonraí, ach tá siad le feiceáil ar an Léarscáil Dhomhain chomh maith. Má roghnaíonn tú <Link to='/map?id=D1057'>Carraig na Siúire</Link> ar an léarscáil, tá soinéad molta Spenser taobh le téacsanna de chineálacha éagsúla. I measc na dtéacsanna sin tá sliocht as an dán Taghaim Tómás ragha is róghrádh,  ina moltar caisleán na mBuitléarach i gCarraig na Siúire, agus an dán grá <Link to='/map?id=D1140'>Mealltar bean le beagán téad</Link>, ina dtugtar íomhá de cheol á sheinm ar an chláirseach sa chaisleán. Cé nach nascanna díreacha iad seo, léirítear dúinn gur codanna iad filíocht Spenser agus filíocht na Gaeilge den saol liteartha agus pátrúnachta i gCúige Mumhan; traidisiúin éagsúla i dteangacha éagsúla ag dul timpeall sa cheantar céanna ag an am céanna.
                    </p>


                  </div>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/spenser/fig4.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption> MACMORRIS Edmund Spenser's Network with 2nd degree activated </figcaption>
                  </div>
                </div>

                <h5>Spenser ar an Léarscáil Dhomhain </h5>

                <div className='case-flex-column'>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/spenser/fig5.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption> MACMORRIS Deep Map of Munster. </figcaption>
                  </div>
                  <div className='para-flex'>
                    <p className='para-style'>Tugann an Léarscáil Dhomhain (níos mó faoin Léarscáil Dhomhain <Link to='/deep-mapping#'>anseo</Link>) go leor bealaí éagsúla dúinn le hiniúchadh a dhéanamh ar an tábhacht a bhaineann le Spenser i saol liteartha agus polaitíochta Chúige Mumhan. Is féidir linn díriú ar léirithe tíre i dtéacsanna Spenser, an dóigh a scríobhann sé faoin domhan thart air, cosúil leis an mhéid a deir sé faoin <Link to='/map?id=D1099'>Sliabh Riabhach</Link> faoi <Link to='/map?id=D1098'>aibhneacha éagsúla</Link>, agus faoi <Link to='/map?id=D1058'>Chill na Mallach</Link> féin. Cé gur féidir díriú ar théacsanna Spenser amháin, tá an rogha agat na téacsanna ar an léarscáil a shórtáil de réir cineáil, (m.sh. Aibhneacha agus Aigéan nó Dúlra, Tuath agus Talamh) chun téacsanna Spenser a chur i gcomparáid le téacsanna eile a bhfuil téamaí cosúla i gceist leo. Féach, mar shampla, an cur síos ar <Link to='/map?id=D1103'>an Fhéil</Link> sa dán <a href='https://bardic.celt.dias.ie/displayPoem.php?firstLineID=1515'>Ní dúal cairde ar creich ngeimhil</a> le <Link to='/profile/m1335'>Domhnall (mac Dáire) Mac Bruaideadha</Link>.
                    </p>

                  </div>
                </div>


                <div className='case-flex-row'>
                  <div className='para-flex'>
                    <p className='para-style'>Is féidir díriú chomh maith ar eachtraí móra a raibh baint ag Spenser leo, cosúil leis an sléacht ar <Link to='/map?id=D1056'>Ard na Caithne</Link> in 1580. Tharla sé seo idir mí Mheán Fómhair agus mí Dheireadh Fómhair thart ar dhaingean ar a dtugadh Dún an Óir. Tháinig 800 Iodálaigh agus Spáinnigh de chuid fórsaí an Phápa i dtír i gCuan Ard na Caithne le cuidiú a thabhairt do <Link to='/profile/m1348'>Sheaán (mac Séamais) Mac Gearailt</Link> agus na fórsaí Caitliceacha a bhí ag troid sa dara éirí amach i nDeasumhain. Bhí na fórsaí eachtrannacha seo faoi cheannasaíocht <Link to='/profile/m3944'>Sebastiano di San Giuseppe</Link>  agus <Link to='/profile/m5808'>Alessandro Bertoni</Link>, agus meastar gurbh é an Alessandro seo a scríobh <Link to='/map?id=D1152'>cur síos gairid ar Éirinn</Link> sa Laidin. Bhí na fórsaí seo gafa taobh istigh den daingean, agus i mí Dheireadh Fómhair, rinne an Tiarna Grey agus a arm (a raibh Spenser ina measc) léigear ar an daingean. I ndiaidh trí lá ghéill fórsaí an Phápa agus cuireadh chun báis iad. Chreid caitlicigh ar fud na hEorpa gur sháraigh Grey nósanna dea-chleachtais a bhaineann le gabháil cimí, agus fiú i ndánta Béarla cosúil le “England's Hope against Irish Hate”, déantar cur síos ar Grey mar “The warlike GRAY, whose actions Tragicall”. Mar go raibh an eachtra seo ar <Link to='/map?id=D1056'>Ard na Caithne</Link> chomh tábhachtach sin, tá peirspictíochtaí éagsúla tagtha anuas chugainn agus is féidir teacht ar na peirspictíochtaí sin tríd an Léarscáil Dhomhain; an <Link to='/map?id=D1182'>cur síos a bhí ag Grey</Link> é féin, <Link to='/map?id=D1170'>cuntas Pertruccio Ubaldini</Link> san Iodáilis, agus cuntas sa Ghaeilge <Link to='/map?id=D1105'>ó lámha na gCeithre Mháistrí</Link>. Cosnaíonn Spenser an Tiarna Grey i <Link to='/map?id=D1179'>The View</Link> agus in The Faerie Queene; trí <Link to='/map?id=D1056'>shoinéad</Link> a chumadh dó, agus é a shamhlú mar ridire Ceartais, Artegall, i Leabhar V.
                    </p>

                  </div>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/spenser/fig6.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption> “English attack on Spanish and Italian forces at Smerwick”, NM p49/21. Courtesy of National Maritime Museum, Greenwich, London. </figcaption>
                  </div>
                </div>

                <div className='case-flex-row'>
                  <div className='para-flex'>
                    <p className='para-style'>Cé nach bhfuil sé deacair cur amach a fháil ar na daoine ba ghaire do Spenser in Éirinn, léiríonn MACMORRIS an luach a bhaineann le hanailís líonraí agus léarscáil dhomhain mar uirlisí a ligeann dúinn athscrúdú a dhéanamh ar áit Spenser i gcúrsaí cultúrtha agus polaitíochta i gCúige Mumhan ag deireadh an 16ú haois.
                    </p>

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

export default CaseMunster;
