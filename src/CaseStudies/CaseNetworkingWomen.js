import '../App.css'
import Container from '@mui/material/Container';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Home/Header";
import CaseHistoricOverviewIrish from './CaseHistoricOveriewIrish';
import './case-study.scss';
import ScrollToTop from '../Home/ScrollToTop';
import Footer from '../Home/Sponsors';


function CaseNetworkingWomen({ changeIrish, setChangeIrish }) {

  return (
    <>
      <ScrollToTop />

      <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />

      <div className='case-wrapper'>
        <>
          <div className='case-study-top-wrapper'>
            <div className='case-study-title-wrapper'>
              <h1 className="header-title" style={{ fontSize: '5.5rem' }}><strong>What Are Networks</strong></h1>
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
                    <span className="dropcap">A</span>
                    <p className='para-style'> network can broadly be described as a pattern of interconnectedness among a set of things and it presumes “a set of assumptions about structure, pattern, order, and distribution.”  A social media platforms is a good example of a contemporary network — each user has a profile and is connected to other profiles through their interactions with them, creating a web of interconnectedness between the users of the platform – a social network.
                    </p>

                    <p className='para-style'>There are digital tools that help us visualise these patterns of interconnectedness and one of the
                      visualisations on the MACMORRIS site is a network visualisation that allows us to explore how the people and the
                      works captured in the database connect to each other. The video below introduces our network interface and shows
                      you how to use it. Useful introductions to the methods of network analysis are Marten Düring's tutorial on
                      <a href='https://programminghistorian.org/en/lessons/creating-network-diagrams-from-historical-sources/'> Programming Historian</a> and Ahnert, Ahnert, Coleman and Weingart's <a href='https://doi.org/10.1017/9781108866804/'>The Network Turn. </a>
                    </p>
                    [insert video on network interface and how to use it]

                  </div>
                </div>

                <h5> Conceptualising Networks </h5>


                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>When considering a network of people living through a period of conflict and change, as MACMORRIS does, considerations about structure and pattern centre on who knew whom; who was related to whom; who worked for whom; who patronised whom; who fought (or killed!) whom. Also important are the social, cultural, spatial, familial, intellectual and religious connections – the overlapping networks which constitute a person's life.
                    </p>

                    <p className='para-style'> We can conceptualise historical networks in two different, but equally valuable ways. The first is to examine a network metaphorically, employing specialist knowledge and the literary historian's traditional toolkit – close reading, contextual reading, archival research, and palaeography. The metaphorical study of networks is inherently intuitive, and the study of patronage networks has been integral to historical, art-historical, and literary scholarship.
                    </p>

                  </div>
                  <div className='image-wrapper'>
                    <figcaption> Sample network highlighting nodes and edges. </figcaption>
                  </div>
                </div>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>The second way of considering and interrogating this pattern of interconnectedness is to plot the connections digitally, using what are known as “nodes” and “edges” - and this is the essence of network visualisation. When visualising a network, the objects connected are referred to as “nodes”, and the relationships between them are known as “edges”. In historical networks, the nodes are usually people and their relationships to each other are the edges. These nodes and edges can also convey more than one piece of information, or metadata, through connection types known as “attributes”. These attributes could be how two people connected knew each other, or how long they were connected.
                    </p>

                    <p className='para-style'> Another common type of network is one that connects authors to their books. This is known as a bimodal network as there are two different types of entities present: 1) people 2) books. In these networks, both the people and books are represented by nodes (usually of different shapes or colours to differentiate them) and the connections between the people and the books are the connections. In this instance the edge attributes can explain the relationship between a person and a book, indicating whether a person is the author, publisher or even dedicatee of the book.
                    </p>

                    <p className='para-style'>MACMORRIS's network interface visualises both these types of networks and can be explored through the 'people' and 'work' searches on the network landing page.
                    </p>

                  </div>

                </div>

                <h5> People Networks </h5>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>As a way of exploring our people networks, take, for example, the network of <Link to='/profile/m1851'>Róis inghean Uí Thuathail (d. c. 1629), </Link>  daughter of <Link to='/profile/m1273'>Fiachaidh Ó Tuathail (c.1525-1578).</Link> In her <Link to='/network?id=m1851'>network</Link>, Róis and those she is connected to are represented as nodes (in the MACMORRIS people networks, the nodes are indicated by circles). If you click on one of the nodes in her network, you will see a pop-up showing metadata or “attributes” including name, date of birth, date of death, flourishing etc., as well as a link to the profile page of each individual connected to Róis.
                    </p>


                    <p className='para-style'>In this visualisation, you will see lines (the 'edges') connecting Róis's node to other nodes (other people). Just like nodes, these edges can convey metadata, and when you click on an edge, you will see how the two people know each other. For example, when you click on the edge connecting Róis to <Link to='/profile/m1679'>William Russell (c.1553-1613),</Link> you will see that they were adversaries. (In fact, she was almost burnt at the stake while Russell's captive.) Included in every visualisation is the option to “Show the 2nd degree”; for Róis, this brings in the people whom those directly connected to her also knew, allowing for a contextual exploration of Róis's connections to the world around her.
                    </p>

                    <div className='image-wrapper'>
                      <figcaption> [insert screenshot of m1851 network with edge between m1851 and m1679 chosen once pop-up box is finished] </figcaption>
                    </div>


                    <p className='para-style'> A figure can be included in the network visualisations only if s/he is already included in the MACMORRIS dataset – we cannot visualise what we have not captured in our data. Given our commitment to recovering lives overlooked by traditional historiography, we paid particular attention to including women and Gaelic figures in our dataset. (If you want to read more about how we did this see our <Link to='/about'>'About'</Link> page.
                    </p>
                  </div>

                </div>

                <h5> Work Networks </h5>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'> When it comes to the Works network, there are two possible points of entry - via the person or via the work. Depending on the perspective you take, either a person or a work will be the central node.
                    </p>

                    <p className='para-style'>Take for example the bardic poet <Link to='/profile/m1670'>Eochaidh Ó hEódhusa</Link> (ca.1568-1612), who is the author of 57 extant poems in our corpus. When you search the works networks for Ó hEódhusa, you get an ego network that places Ó hEódhusa at the centre and his works around him (see image on left below). If you take the alternative perspective and search for Ó hEódhusa's poem <Link to='/works/3366'>“An sluagh sídhe so i nEamhuin?”,</Link> you get a network (see image on right below) that places the poem in the centre and visualises all the people to whom the poem is connected - in this instance, Ó hEódhusa (as the author), and to <Link to='/profile/m1453'>Toirdhealbhach Luineach Ó Néill</Link>  (as the patron of this poem). In these networks, Ó hEódhusa and Ó Néill are represented as circles (as they are in the people network) and Ó hEódhusa's works are represented as triangles, to distinguish the two different types of entities.
                    </p>



                    <p className='para-style'> In the work networks, too, you can choose to “Show the 2nd Degree” and, depending on the perspective you chose for your search, you will see different types of nodes appear. If you chose to place a person at the centre of the network (as we did with Ó hEódhusa above), you will bring in all the other people connected to the works already visible on screen. This will bring all of Ó hEódhusa's patrons into the network and allows you to explore which poems he wrote for which patron (see image on the left below). Alternatively, if you place a work at the centre (as we did with <Link to='/works/3366'>“An sluagh sídhe so i nEamhuin?”</Link>), you bring in all the other works connected to the people visible in the network. In this example, you can now see all of Ó hEódhusa's other poems and all the poems written for Toirdhealbhach Luineach Ó Néill, allowing you to explore how many times Ó hEódhusa wrote for Ó Néill and how this relates to Ó Néill's wider corpus of patronised poems (see image on right below).
                    </p>

                    {/* <div className='image-wrapper'>
                      <img src="/images/case-studies/spenser/fig3.webp" alt="" style={{ width: "auto", height: "600px", margin: 0 }} />
                      <figcaption> [Insert screenshots once 2nd degree works networks is ready and stable]
                      </figcaption>
                    </div> */}

                    <p className='para-style'> Overall, both types of network visualisation developed by MACMORRIS encourage exploration and interaction. It allows users to discover the complexity and plurality of early modern Ireland and provides a springboard for investigating new connections and unexpected conjunctions. Afterall, absence does not mean non-existence and we hope engagement with these networks gets you thinking about and searching for other connections, people, works that could have been included which we did not manage to incorporate.
                    </p>
                  </div>
                </div>

              </>
              :
              <>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <span className="dropcap">I</span>
                    <p className='para-style'>s féidir líonra a mhíniú go bunúsach mar phatrún nascanna idir dhaoine nó rudaí taobh istigh de ghrúpa ar leith, agus cuidíonn líonraí linn talamh slán a dhéanamh de rudaí a mheastar a bheith fíor faoi struchtúir, patrúin, oird agus dáileachán. Is féidir linn grúpa cairde ar na meáin shóisialta a úsáid mar shampla maith de líonra sa lá atá inniu ann – tá próifíl gach duine acu atá nasctha le próifílí na ndaoine eile mar go mbíonn idirghníomhaíocht eatarthu, agus as na nascanna díreacha sin ar fad cruthaítear gréasán caidrimh – líonra sóisialta.
                    </p>
                    <p className='para-style'>Tá uirlisí digiteacha ar fáil le cuidiú linn na patrúin nascanna seo a léirshamhlú, agus baintear úsáid as uirlis ar a dtugtar léirshamhlú líonraí ar shuíomh gréasáin MACMORRIS atá bunaithe ar ár mbunachar sonraí. Taispeánann na léirshamhluithe seo na bealaí a raibh nascanna agus caidrimh idir dhaoine éagsúla chomh maith lena saothair. San fhíseán thíos, taispeántar duit an comhéadan
                      léirshamhlaithe agus cén dóigh a n-úsáidtear é. Má tá tú ag iarraidh níos mó a fhoghlaim faoin mhodheolaíocht a
                      bhaineann le hanailísiú líonraí, molann muid <a href='https://programminghistorian.org/en/lessons/creating-network-diagrams-from-historical-sources/'>
                        Programming Historian</a> le Marten Düring agus <a href='https://doi.org/10.1017/9781108866804/'>
                        The Network Turn. </a>  le Ahnert, Ahnert, Coleman agus Weingart.
                    </p>
                    [insert video on network interface and how to use it]

                  </div>
                </div>

                <h5> Coincheapadh Líonraí </h5>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>Agus muid ag obair ar líonraí atá bunaithe ar dhaoine ag dul trí thréimhse lán de choinbhleacht agus d'athruithe, mar atá i gceist le líonraí MACMORRIS, is féidir struchtúr agus patrúin na líonraí a bhunú ar ghnéithe éagsúla: cé na daoine a raibh aithne acu ar a chéile; cé a bhí muinteartha; cé a bhí fostaithe ag daoine ar leith; cé a thug pátrúnacht do dhaoine ar leith; cé a bhí i mbun troda lena chéile. Chomh maith leis sin, tá tábhacht ar leith i gceist le nascanna sóisialta, cultúrtha, intleachtúla, cóngaracht, cúrsaí teaghlaigh agus creidimh, ar féidir leo ar fad líonraí cumaisc a chruthú i dtaca le saol duine ar leith.

                    </p>

                    <p className='para-style'>Is féidir coincheap a bheith againn de líonraí stairiúla ar dhá bhealach éagsúil atá díreach chomh luachmhar lena chéile. An chéad bhealach ná bheith ag plé leis an líonra go meafarach ag baint úsáide as saineolas agus uirlisí traidisiúnta staraithe liteartha – mionléamh comhthéacsúil, taighde cartlainne, agus pailéagrafaíocht. Tá gné iomasach ag baint leis an mhodheolaíocht mheafarach seo le staidéar a dhéanamh ar líonraí, agus tá staidéar ar líonraí pátrúnachta ina chuid lárnach den scoláireacht i réimsí staire, stair na healaíne, agus stair na litríochta le fada.

                    </p>

                  </div>
                  <div className='image-wrapper'>
                    <figcaption> Sampla de léiriú líonra le nóid agus ciumhaiseanna.</figcaption>
                  </div>
                </div>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>An dara bealach le hamharc ar an phatrún nascanna seo ná iad a rianú go digiteach, le ciorcail agus línte ar a dtugtar “nóid” agus “ciumhaiseanna” - seo is bunús le léirshamhlú líonra. Nuair a dhéantar léirshamhlú ar líonra, tugtar “nód” ar gach ball den líonra, agus tugtar “ciumhais” ar an líne a nascann iad. I líonraí stairiúla mar atá idir lámha againne, daoine a bhíonn i gceist leis na nóid de ghnáth, agus an caidreamh idir na daoine sin atá i gceist leis an chiumhais. Is féidir leis na nóid agus na ciumhaiseanna seo níos mó ná píosa eolais amháin (.i. píosa meiteashonraí) a léiriú, a thagann i bhfoirm liosta “aitreabúidí”. Ar na haiteabúidí sin, d'fhéadfadh eolas faoin sórt caidrimh a bhí idir an bheirt a bheith ann, nó cé chomh fada is a mhair an caidreamh eatarthu.

                    </p>

                    <p className='para-style'>Sórt líonra eile atá coitianta freisin ná nascanna idir daoine agus saothair. Tugtar líonra démhodúil air seo mar go mbíonn dhá shórt sonraí i gceist: 1) daoine 2) saothair. I líonraí den sórt seo, léirítear daoine agus saothair le nóid (ag baint úsáide as dathanna nó cruthanna éagsúla le iad a idirdhealú) agus bíonn na nascanna idir na daoine agus na saothair gaolmhara léirithe ag ciumhaiseanna. Nuair a chliceálann muid ar an chiumhais, d'fhéadfadh muid eolas a fháil faoi na daoine a raibh baint acu leis an saothar; cérbh é an t-údar, an foilsitheoir, an pátrún, srl.

                    </p>

                    <p className='para-style'>Is féidir linn an dhá sórt líonra seo a fheiceáil trí chomhéadan líonraí MACMORRIS, agus is féidir an bunachar a chuardach trí chliceáil ar ‘people' agus ‘work' ar leathanach tosaigh na líonraí ar an suíomh seo.

                    </p>


                  </div>

                </div>

                <h5> Líonraí daoine </h5>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>Tógaimis mar shampla líonra mná darbh ainm <Link to='/profile/m1851' > Róis </Link> (iníon <Link to='/profile/m1273' > Fhiachaidh Uí Thuathail, c.1525-1578 </Link>) a d'éag timpeall na bliana 1629. Ina <Link to='/network?id=m1851' > líonra-sa </Link>, tá Róis agus na daoine a raibh baint aici leo ceangailte le nóid (i léirshamhlú líonraí MACMORRIS, is ciorcail iad na nóid). Agus tú ag idirghníomhú leis an líonra, má chliceálann tú ar cheann de na nóid, tiocfaidh bosca aníos ar a mbeidh na meiteashonraí, nó “aitreabúidí”, a bhaineann leis an duine sin cosúil le hainm/sloinne, dáta breithe, dáta éaga, floruit srl. agus is féidir cliceáil ar nasc eile lena p(h)róifíl iomlán a fheiceáil agus níos mó a fhoghlaim faoin duine sin.

                    </p>


                    <p className='para-style'>Sa léirshamhlú seo thuas, is féidir nód Róis a fheiceáil ceangailte le nóid eile le línte (ciumhaiseanna). Cosúil leis na nóid féin, is féidir leis na línte seo meiteashonraí a léiriú, agus nuair a chliceálann tú ar chiumhais, taispeántar duit cén dóigh a raibh aithne ag na daoine sin ar a chéile. Mar shampla, nuair a chliceálann tú ar an líne a nascann Róis inghean Uí Thuathail agus <Link to='/profile/m1679' > William Russell (c.1553-1613) </Link>, taispeántar duit gur naimhde a bhí iontu (is beag nár dódh ag an stáca í nuair a bhí sí i ngéibheann ag Russell!). Tar éis duit amharc ar na nascanna díreacha a bhí ag Róis, is féidir cliceáil ar “show second degree” le nascanna a bhí ag daoine a raibh ceangal acu le Róis a thabhairt isteach san áireamh, agus tugtar íomhá dúinn faoi áit Róis sa saol thart uirthi.

                    </p>

                    <div className='image-wrapper'>
                      <figcaption> [insert screenshot of m1851 network with edge between m1851 and m1679 chosen once pop-up box is finished] </figcaption>
                    </div>


                    <p className='para-style'> Ní féidir linn duine a léiriú a mar chuid de léirshamhlú líonraí, áfach, mura bhfuil an duine sin i mbunachar sonraí MACMORRIS – ní féidir linn aon rud a léiriú faoi dhuine nach bhfuil sonraí againn air. Bhí sé i gceist againn i gcónaí aird ar leith a thabhairt ar dhaoine a ndéantar neamhaird orthu go rómhinic sa staireagrafaíocht thraidisiúnta, mná agus daoine gníomhach i sochaí na nGael go háirithe. (Is féidir níos mó eolais faoin chur chuige seo a fháil ar an leathanach <Link to='/about#'>"Fúinne"</Link>).

                    </p>
                  </div>

                </div>

                <h5> Líonraí saothar </h5>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>Agus muid ag plé le líonraí saothar, tá rogha againn idir dhá phointe tosaigh – an duine nó an saothar. Ag brath ar an pheirspictíocht atá uait, beidh an duine a roghnaíonn tú, nó an saothar a roghnaíonn tú, i lár an léirshamhlaithe.

                    </p>

                    <p className='para-style'>Tógaimis mar shampla an file gairmiúil <Link to='/profile/m1670'>Eochaidh Ó hEódhusa</Link> (ca.1568-1612), a bhfuil 57 dán dá chuid le feiceáil inár gcorpas. Nuair a chuardaíonn tú líonraí saothar Uí Eódhusa, faigheann tú léirshamhlú ina bhfuil seisean sa lár agus a chuid dánta thart air (féach thíos). Más maith leat peirspictíocht eile a fháil, is féidir amharc ar shaothar amháin dá chuid, cosúil le <Link to='/work/3366'>“An sluagh sídhe so i nEamhuin?”,</Link> agus faigheann tú léirshamhlú ina bhfuil an dán sin sa lár, agus na daoine a raibh baint acu leis an dán thart air – sa chás seo, Ó hEódhusa féin, agus   <Link to='/profile/m1453'>Toirdhealbhach Luineach Ó Néill</Link> (an pátrún). Sna líonraí seo thíos, léirítear Ó hEódhusa agus Ó Néill le ciorcail (mar is daoine sa líonra iad) agus léirítear na dánta le triantáin.

                    </p>





                    <p className='para-style'>Is féidir cliceáil ar “Show the 2nd Degree” leis na líonraí saothar chomh maith agus, ag brath ar an pheirspictíocht a roghnaíonn tú, tiocfaidh nóid eile ós do chomhair. Má chuireann tú duine sa lár (mar a rinne muid le hÓ Eódhusa thuas), léireofar na daoine eile ar fad a raibh baint acu leis na dánta sin a bhí ar an scáileán cheana féin.  Taispeánann sé seo na daoine a thug pátrúnacht d'Eochaidh Ó hEódhusa, agus is féidir leat féachaint ar na dánta a chum sé do phátrúin ar leith (féach thíos ar chlé). Nó má chuireann tú an saothar sa lár (mar a rinne muid le <Link to='/work/3366'>“An sluagh sídhe so i nEamhuin?”</Link>), taispeántar duit na saothair eile ar fad a raibh baint ag na daoine ar an scáileán leo. Sa chás seo, beidh tú in ann dánta eile Uí Eódhusa a fheiceáil chomh maith leis na dánta eile a cumadh do Thoirdhealbhach Luineach Ó Néill. Is féidir a fheiceáil go soiléir cé mhéad dán a mhaireann a chum Ó hEódhusa d'Ó Néill, agus tagann líonra pátrúnachta Uí Néill chun solais (féach thíos ar dheis).

                    </p>
                    {/* <div className='image-wrapper'>
                    <img src="/images/case-studies/spenser/fig3.webp" alt="" style={{ width: "auto", height: "600px", margin: 0 }} />
                    <figcaption> [Insert screenshots once 2nd degree works networks is ready and stable]
                    </figcaption>
                  </div> */}

                    <p className='para-style'>Ar an iomlán, tá súil againn go spreagfaidh na cineálacha éagsúla léirshamhlaithe líonraí atá forbartha ag MACMORRIS níos mó idirghníomhaíochta agus taiscéalaíocht tríd an chorpas. Taispeánann sé don úsáideoir castacht agus ilghnéitheacht an tsaoil in Éirinn sa Nua-Aois Luath agus is uirlis luachmhar é le staidéar a dhéanamh agus le solas a chaitheamh ar nascanna agus ar chaidrimh nach mbeifí ag súil leo. I ndeireadh na dála, ní ciallaíonn ceal fianaise nach raibh rud ann, agus tá súil againn go spreagfaidh na líonraí seo tuiscint nua chomh maith le smaointe i dtaca leis na bearnaí sna líonraí – daoine, saothair agus nascanna – nár éirigh linne a líonadh go fóill.

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

export default CaseNetworkingWomen;
