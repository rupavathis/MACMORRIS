
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


function CaseGaelic({ changeIrish, setChangeIrish }) {

  return (
    <>
      <ScrollToTop />

      <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />

      <div className='case-wrapper'>
        <>
          <div className='case-study-top-wrapper'>
            <div className='case-study-title-wrapper'>
              <h1 className="header-title" style={{ fontSize: '5.5rem' }}><strong>Using Gaelic Sources</strong></h1>
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
                    <span className="dropcap">D</span>
                    <p className='para-style'>uring the sixteenth century, most of Ireland was dominated by Gaelic (or largely Gaelicised) noble families, and the dominant language of the island was Irish. And so, for scholars wishing to delve into the life, culture, politics and perspective of that majority population in 16th¬-17th century Ireland, the primary access to it is to be found in various forms of surviving Irish-language sources. In practical terms, the English administration proved to be more systematic and effective record-keepers, and therefore the study of Early Modern Ireland largely draws mostly from English-language sources. In consequence, understandings of Ireland, its people, culture, and society during this period is moulded by colonial perspectives, and the voice of the native, where it survives in the sources which escaped destruction, is too often neglected.
                    </p>

                    <p className='para-style'>The object of this case study is to direct researchers towards the substantial body of Irish-language materials available to them, materials which can rebalance our understanding of Ireland at a formative moment of transition.
                    </p>

                  </div>
                </div>

                <h5>Poetry</h5>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>Classical Irish poetry, or Bardic poetry, is poetry composed by professional poets (filidh) who trained in the bardic schools of the Early-Modern Irish period (1200–1650) (See <Link to='/what-is-bardic-poetry'>What is Bardic Poetry?</Link>).
                    </p>
                  </div>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/gaelic/fig1.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption> MS 23 F 16 (The Book of O'Gara). Courtesy of Irish Script on Screen. </figcaption>
                  </div>
                  <div className='para-flex'>
                    <p className='para-style'>More than 2,000 <a href='https://bardic.celt.dias.ie/'>bardic poems</a>  survive from the Early-Modern period. Excerpts from 44 of these appear on our <Link to='/map'>Deep Map</Link> which accounts for less than a quarter of the poems which survive from the province of Munster during our selected period, 1560-1607. (In some cases, we have drawn from the different parts of the same poem for different nodes.) The Deep Map includes political poems <Link to='/map?id=D1067'>prophesising patrons'success</Link> and poems <Link to='/map?id=D1073'>lamenting patrons'death</Link>. You can discover <Link to='/map?id=D1032'>poetry addressed to women</Link> and <Link to='/map?id=D1010'>written by women.</Link> There are <Link to='/map?id=D1020'>poems of praise to addressed other poets</Link>, and <Link to='/map?id=D1078'>poems criticising praise poetry</Link>, <Link to='/map?id=D1009'>poems about music</Link>, about <Link to='/map?id=D1140'>love</Link>, and about <Link to='/map?id=D1131'>the beauty of the natural world</Link>.
                    </p>

                    <p className='para-style'>Historians of Early Modern Ireland can learn about <Link to='/map?id=D1027'>families'genealogies</Link>, the <Link to='/map?id=D1002'>education</Link> of the Munster nobility, <Link to='/map?id=D1004'>castle life</Link> in war and peace, <Link to='/map?id=D1003'>trade links with Europe</Link>, and much else about the texture of people's lives.
                    </p>

                    <p className='para-style'>Part of the poets'duties was to keep an account of their patron's martial career (caithréim), providing insights which ranged from brief references to events like <Link to='/profile/m1685'>Butler</Link> and <Link to='/profile/m1396'>Pelham</Link> <Link to='/map?id=D1029'>capture of Carrigafoyle and Glin</Link> in 1580, or the Earl of Thomond at the <Link to='/map?id=D1063'>Battle of Kinsale</Link> (1601), to more detailed accounts of battles such as Farsetmore (1567) in <Link to='/works/3814'>Gréas dearbhtha Duan na Feirsde</Link> by <Link to='/profile/m1938'>Uilliam Óg Mac an Bhaird</Link> to <Link to='/profile/m1517'>Aodh Ó Domhnaill</Link>. Caithréim poetry has a fondness for hyperbole, and cannot be taken literally by historians. A lengthy caithréim <Link to='/profile/m3111'>Dhonnchadh Ó Ceallacháin</Link>, would have us believe that this very minor lord <Link to='/map?id=D1094'>plundered most of Munster</Link> during his lifetime.
                    </p>

                  </div>
                </div>

                <h5>Annals</h5>

                <div className='case-flex-column'>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/gaelic/fig2.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />

                    <figcaption> MS 23 P 7 (The Annals of the Four Masters). Courtesy of Irish Script on Screen.</figcaption>

                  </div>
                  <div className='para-flex'>
                    <p className='para-style'>The annals from Gaelic Ireland were compiled by professional chroniclers (seanchaidhe) ‘n they
                      provide us with an invaluable alternative perspective to those of the dominant Anglophone accounts. Unlike bardic
                      poetry, with its focus on praise or complaint, the annals are relatively even-handed and offer much more detail
                      about time, place, and key individuals. The most significant compilation is the <a href='https://archive.org/details/annalsofkingdomo05ocleuoft/'>Annals of the Kingdom of Ireland by the Four Masters</a>, more commonly known as the Annals of the Four Masters (AFM), 16 excerpts from which make it into our Deep Map. These include the accounts of the <Link to='/map?id=D1014'>Battle of Kinsale</Link> and the <Link to='/map?id=D1105'>Siege at Smerwick</Link>, as well as lesser-known events like the <Link to='/map?id=D1059'>capture of Derrinlaur castle</Link> in 1574 and the <Link to='/map?id=D1024'>sacking of Kilmallock</Link> in 1571. The compilers of AFM record atrocities committed on all sides of the conflict, including the massacre by <Link to='/profile/m1396'>Lord Pelham's</Link> ‘marauding parties'near <Link to='/map?id=D1060'>Coill Mhór</Link> in 1580, and the plundering of Thomond by <Link to='/profile/m1571'>Aodh Rua Ó Domhnaill's</Link> mirroring <Link to='/map?id=D1107'>‘marauding parties'</Link><Link to='/map?id=D1107'> in 1599; no side is absolved of blame for </Link> <Link to='/map?id=D1093'>havocking Munster</Link>.
                    </p>

                    <p className='para-style'>Beyond their reports of conflict and violence, the annals also shed light on characters like the <Link to='/map?id=D1111'>‘Blind Abbot'</Link> mentioned under the year 1598, and the <Link to='/map?id=D1109'>trilingual Baothghalach Mac Fhlannchadha</Link> from Knockfinn, Co. Clare.
                    </p>

                  </div>
                </div>

                <h5>Prose & Other</h5>


                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>
                      Although poetry and annals constitute the bulk of surviving Gaelic sources, the writings of the other learned classes of
                      Gaelic society, including those of professional physicians (leagha) and of the brehons (breithimh), such as the
                      <Link to='/map?id=D1183'>legal documents</Link> from the Mac Aodhagáin family of brehons in Co. Clare, are full of
                      interest. So, too, are letters, such as the <Link to='/map?id=D1048'>plea</Link> written by <Link to='/profile/m1732'>Ó Súilleabháin Béirre</Link> to <Link to='/profile/m1579'>Philip III of Spain</Link>.
                    </p>
                  </div>
                </div>
                <div className='case-flex-row'>

                  <div className="image-wrapper">
                    <img src="/images/case-studies/gaelic/fig3.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption> MS 23 F 21 (Butler Duanaire). Courtesy of Irish Script on Screen.
                    </figcaption>
                  </div>
                  <div className='para-flex'>

                    <p className='para-style'>Pieces of prose are often found alongside poetry in manuscripts, either as marginalia or within the poem itself, providing context or information worthy of attention. Crosántacht poetry mixes verse and prose, and the latter offers extended descriptions unrestricted by the requirements of poetic metres. The <Link to='/map?id=D1047'>crosántacht</Link> to Richard Butler, for example, includes an elaborate comparison of the patron to fruit-trees.
                    </p>
                    <h5>Reading Early-Modern Irish</h5>

                    <p className='para-style'>Many Irish-language texts from this period have been published with English translations. However, those who don't wish to rely on translations or, more importantly, would like to access a corpus of as-yet untranslated texts may do so by developing an understanding of Early Modern Irish – which is undoubtedly the preferable way approach. An invaluable resource for doing so is <a href='https://léamh.org/'>Léamh.org</a>, a digital humanities project which facilitates the greater use of Classical Irish sources across disciplines.
                    </p>

                    <p className='para-style'>Working with the team at Léamh.org, MACMORRIS has been able to showcase some of the texts we have included on our Deep Map, with translations, word-by-word annotations on the text, and general guides. You can explore these texts here
                    </p>
                  </div>

                </div>


                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <h5>Further Reading</h5>

                    <p className='para-style'>For anyone wishing to learn more about Gaelic materials as sources of historical information from this period, we recommend consulting Katarine Simms, Medieval Gaelic Sources (2009).
                    </p>
                  </div>

                </div>

              </>
              :
              <>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <span className="dropcap">L</span>
                    <p className='para-style'>e linn an 16ú haois, bhí an chuid is mó d'Éirinn faoi cheannasaíocht teaghlaigh uaisle Gaelacha (nó teaghlaigh uaisle a gaelaíodh), agus ba í an Ghaeilge príomhtheanga na tíre í. Mar sin, do scoláirí a bhfuil sé i gceist acu cúrsaí cultúrtha agus polaitíochta in Éirinn sa 16ú–17ú haois a fhiosrú, chomh maith le saol agus deacradh na ndaoine sin arbh í an Ghaeilge an teanga laethúil acu, ní féidir leo neamhaird a dhéanamh ar na bunfhoinsí eolais atá tagtha anuas chugainn sa teanga sin. Go praiticiúil, bhí na Sasanaigh ní b'fhearr ag cúrsaí riaracháin agus ag coinneáil cuntas d'eachtraí le linn Choncas na dTúdarach agus, mar sin, is minic a bhíonn staidéar atá déanta (agus a dhéantar go fóill) ar Éirinn sa Nua-Aois Luath ag brath ar, agus ag tarraingt den chuid is mó ó, fhoinsí Béarla. An fhadhb a thagann leis an mhodh oibre seo, áfach, ná go mbíonn ár dtuiscint ar eachtraí agus ar chúrsaí sochpholaitiúla in Éirinn sa tréimhse seo á cruthú trí pheirspictíocht na gcoilíneach, agus go ndéantar faillí i nguth na ndúchasach d'ainneoin go maireann sé i mbunfhoinsí atá ar fáil dúinn.
                    </p>


                    <p className='para-style'>Tá sé i gceist againn sa chás-staidéar seo cabhair agus treoir a thabhairt do thaighdeoirí atá ag iarraidh leas a bhaint as an chorpas mór téacsanna Gaeilge atá ar fáil dóibh, agus plé a dhéanamh ar úsáid agus ar iontaofacht na dtéacsanna sin mar fhoinsí eolais.
                    </p>

                  </div>
                </div>

                <h5>Filíocht</h5>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>Séard atá i gceist leis an Fhilíocht Chlasaiceach, or Filíocht na Scol, ná an sórt filíochta a chum na filí gairmiúla (filidh) a fuair oideachas mionchruinn ar theanga agus ar litríocht sna scoileanna filíochta in Éirinn sa Nua-Aois Luath (1200–1650) (<Link to='/what-is-bardic-poetry#'>Cad atá i gceist le Filíocht na Sgol?</Link>).
                    </p>

                  </div>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/gaelic/fig1.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption> MS 23 F 16 (The Book of O'Gara). Courtesy of Irish Script on Screen. </figcaption>
                  </div>
                  <div className='para-flex'>
                    <p className='para-style'>Tá sleachta as 44 dánta éagsúla le feiceáil ar an Léarscáil Dhomhain, is ionann é sin is níos lú ná ceathrú de na dánta a mhaireann a cumadh i gCúige Mumhan sna blianta 1560–1607. Tarlaíonn sé scaití go mbíonn sleachta as an dán céanna roghnaithe againn i nóid éagsúla. I measc na sleachta sin ar an Léarscáil Dhomhain, tá dánta molta <Link to='/map?id=D1067'>ag tuar rath an phátrúin</Link> agus marbhnaí <Link to='/map?id=D1073'>ag caoineadh bás an phátrúin</Link>. Is féidir teacht ar fhilíocht <Link to='/map?id=D1032'>a chum mná</Link> agus ar fhilíocht <Link to='/map?id=D1010'>a cumadh do mhná</Link>. Tá dánta molta <Link to='/map?id=D1020'>a cumadh d'fhilí eile</Link>, agus dánta <Link to='/map?id=D1078'>ag cáineadh filíocht mholta</Link>. Dánta faoin <Link to='/map?id=D1009'> cheol </Link>, faoin <Link to='/map?id=D1140'>ghrá</Link> agus faoi <Link to='/map?id=D1131'>áilleacht an domhain</Link>.
                    </p>

                    <p className='para-style'>Is féidir le staraithe na Nua-Aoise Luaithe eolas a fháil faoi <Link to='/map?id=D1027'>chraobhacha ginealaigh</Link>, faoin <Link to='/map?id=D1002'>oideachas a fuair uaisle Chúige Mumhan</Link>, faoin chuma a bhíodh <Link to='/map?id=D1004'>ar chaisleáin agus na féastaí</Link> a bhí iontu, faoi <Link to='/map?id=D1003'>nascanna tradála leis an Eoraip</Link>, agus léargas a fháil ar go leor leor gnéithe eile de shaol na ndaoine i gCúige Mumhan sa tréimhse seo.
                    </p>


                    <p className='para-style'>Ar na dualgais a bhí ar na filí seo, bhí orthu cuntas a choinneáil de chaithréim an phátrúin, ag tabhairt léirithe dúinn d'eachtraí – tagairtí gonta, uaireanta, cosúil leis an rann faoi <Link to='/profile/m1685'>Thomás de Buitléir</Link> agus <Link to='/profile/m1396'>Pelham</Link> ag gabháil na gcaisleán <Link to='/map?id=D1029'>i gCarraig an Phoill agus sa Ghleann</Link> sa bhliain 1580, nó <Link to='/map?id=D1063'>Iarla Thuamhan i gCath Chionn tSáile</Link>; chomh maith le léirithe i bhfad níos sonraí cosúil leis an chuntas a thugann <Link to='/profile/m1938'>Uilliam Óg Mac an Bhaird</Link> ar Chath Fhearsaid Mhór (1567) ina dhán <Link to='/work/3814'>Gréas dearbhtha Duan na Feirsde</Link> <Link to='/profile/m1517'>d'Aodh Ó Domhnaill</Link>. Is fiú a lua nárbh annamh áibhéil a bheith i gceist le dánta caithréime, agus mar sin ní féidir le staraithe brath orthu i gcónaí mar fhoinsí eolas cruinn. Féach, mar shampla, an dán fada <Link to='/map?id=D1094'>Deacair comháireamh a chreach</Link> a cumadh do <Link to='/profile/m3111'>Dhonnchadh Ó Ceallacháin</Link>, fear, dar leis an fhile, a rinne an chuid is mó de na bailte i gCúige Mumhan a chreachadh le linn a shaoil.
                    </p>
                    <p className='para-style'>Maireann os cionn <a href='https://bardic.celt.dias.ie/'>2,000 dán</a> sa Ghaeilge ón Nua-Aois Luath, ar féidir leo eolas agus léargas a thabhairt dúinn ar ghnéithe éagsúla de shochaí na hÉireann sa Nua-Aois Luath.
                    </p>


                  </div>
                </div>

                <h5>Na hAnnála </h5>

                <div className='case-flex-column'>
                  <div className="image-wrapper">
                    <img src="/images/case-studies/gaelic/fig2.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />

                    <figcaption> MS 23 P 7 (The Annals of the Four Masters). Courtesy of Irish Script on Screen.</figcaption>

                  </div>
                  <div className='para-flex'>
                    <p className='para-style'>I sochaí na nGael, bhailigh staraithe gairmiúla (seanchaidhe) eolas faoi eachtraí a bhí ag titim amach sa tír, an bailiúchán is suntasaí a cuireadh le chéile ná <a href=' https://archive.org/details/annalsofkingdomo05ocleuoft/'>Annála Ríoghachta na hÉireann leis na Ceithre Mháistrí</a> (AFM) – nó Annála na gCeithre Mháistrí mar a thugtar air go coitianta – agus tá 16 sliocht as na hannála seo le feiceáil ar Léarscáil Dhomhain MACMORRIS. Murab ionann agus an fhilíocht, a raibh sé i gceist ag filí moladh nó cáineadh a chur ina gcuid dánta, de ghnáth is iad na hannála an chéad fhoinse Gaeilge a dtéann staraithe chucu, mar ba ghnách do na seanchaidhe a bheith i bhfad níos sonraí faoi chúrsaí ama, suíomh, agus daoine.
                    </p>


                    <p className='para-style'>Ar na sleachta atá le feiceáil ar an Léarscáil Dhomhain tá cuntas ar <Link to='/map?id=D1014'>Chath Chionn tSáile</Link> agus ar <Link to='/map?id=D1105'>Léigear Ard na Caithne</Link>, chomh maith le heachtraí nach mbíonn a fhios ag daoine fúthu a oiread sin cosúil le gabháil agus athghabháil an chaisleáin i <Link to='/map?id=D1059'>nDoire an Láir</Link> sa bhliain 1574, agus creacadh <Link to='/map?id=D1024'>Chill Mocheallóg</Link> sa bhliain 1571. Thug na fir a bhailigh AFM cuntas ar na gníomhartha uafásacha a rinne dreamanna ar gach taobh de na coinbhleachtaí i gCúige Mumhan sa tréimhse seo – déantar cur síos ar na dúnmharuithe le "sceimhealta scaoilte" an <Link to='/profile/m1396'>Tiarna Pelham</Link>gar do <Link to='/map?id=D1060'>Choill Mhór</Link> sa bhliain 1580 agus ar <Link to='/map?id=D1107'>chreachadh Tuamhan</Link> le "sceimhealta scaoilte" <Link to='/profile/m1571'>Aodha Rua Uí Dhomhnaill</Link> sa bhliain 1599; níor baineadh an milleán de na Sasanaigh ná de na Gearaltaigh nuair a <Link to='/map?id=D1093'>scriosadh Cúige Mumhan</Link> le linn an Éirí Amach i nDeasumhain.
                    </p>
                    <p className='para-style'>Tá níos mó sna hannála ná cuntais ar choinbhleacht agus foréigean, áfach, agus is minic a thagann muid ar scéilíní agus sonraí suimiúla faoi dhaoine ar leith, cosúil leis <Link to='/map?id=D1111'>an tAb Caoch</Link> a luaitear faoi iontráil na bliana 1598, agus <Link to='/map?id=D1109'>Baothghalach Mac Fhlannchadha</Link> as Cnoc Fionn a raibh líofacht aige i dtrí theanga.
                    </p>
                    <p className='para-style'>Tugann na hannála peirspictíocht éagsúil an-tábhachtach dúinn is féidir linn a chur i gcomparáid agus i gcodarsnacht le foinsí i dteangacha le tuiscint níos soiléire a fháil ar eachtraí agus ar choinbhleachtaí in Éirinn sa tréimhse seo.
                    </p>

                  </div>
                </div>

                <h5>Prós agus eile</h5>

                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <p className='para-style'>
                      Cé go mbaineann cuid mhaith de na foinsí Gaeilge a mhaireann ón tréimhse le filíocht nó le hannála, tá neart foinsí eile ar féidir linn tarraingt uathu. Ina measc sin tá litreacha, cosúil leis an <Link to='/map?id=D1048'>litir</Link> a scríobh Ó Súilleabháin Béirre chuig <Link to='/profile/m1579'>Felipe III na Spáinne</Link> sa bhliain 1602. Maireann téacsanna le fir léannta eile, cosúil leis na lianna gairmiúla (leagha) agus na breithiúna (breithimh) – féach, mar shampla an <Link to='/map?id=D1183'>chaipéis dlí</Link> le duine de theaghlach breithiúna Mhac Aodhagáin i dTuamhain.
                    </p>
                    <p className='para-style'>Is minic a fhaightear píosaí próis taobh le filíocht i lámhscríbhinní, cosúil le nótaí imill, ceannscríbhinní, nó taobh istigh den téacs féin, ag tabhairt comhthéacs nó tuilleadh eolais ar fiú dúinn cuimhniú orthu mar fhoinsí. Sa sórt filíochta ar a dtugtar crosántacht, ina mbíonn meascán den phrós agus den fhilíocht, bíonn níos mó saoirse ag an fhile moladh a dhéanamh agus sonraí a thabhairt mar nach bhfuil siad srianta sna codanna prós ag riachtanais mheadarachta – féach, mar shampla, <Link to='/map?id=D1047'>an sliocht seo as crosántacht</Link> do Risteard de Buitléir, áit a gcuireann an file an pátrún i gcomparáid le crann torthúil.
                    </p>

                  </div>
                </div>
                <div className='case-flex-row'>

                  <div className="image-wrapper">
                    <img src="/images/case-studies/gaelic/fig3.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                    <figcaption> MS 23 F 21 (Butler Duanaire). Courtesy of Irish Script on Screen.
                    </figcaption>
                  </div>


                  <div className='para-flex'>
                    <h5>An Nua-Ghaeilge Mhoch a léamh</h5>
                    <p className='para-style'>Tá go leor de na téacsanna Gaeilge ón Nua-Aois Luath ar fáil anois le haistriúcháin Bhéarla. Sin ráite, is féidir scoláirí nár mhaith leo a bheith ag brath ar aistriúchán, nó ar mhaith leo leathnú a dhéanamh ar líon na dtéacsanna atá ar fáil dóibh, é sin a bhaint amach trína dtuiscint ar an Nua-Ghaeilge Moch a fhorbairt – is é sin an bealach is fearr le staidéar a dhéanamh ar na téacsanna seo, gan aon dabht. Tá acmhainní ar nós <a href='https://léamh.org/'>Léamh.org</a> ar fáil le cabhrú le scoláirí sa phróiseas seo. Is tionscadal sna daonnachtaí digiteacha é Léamh a bhfuil sé i gceist aige scoláireacht ildhisciplíneach a fhorbairt trí úsáid a bhaint as foinsí sa Nua-Ghaeilge Mhoch.
                    </p>

                    <p className='para-style'>Tá MACMORRIS ag obair le foireann Léamh.org, agus beidh 6 sliocht as an Léarscáil Dhomhain le feiceáil ar Léamh le haistriúchán, nótaí focal-ar-fhocal, agus treoracha. Beidh teacht ar na téacsanna sin <a href='https://léamh.org/'>anseo</a>.
                    </p>

                  </div>

                </div>


                <div className='case-flex-column'>
                  <div className='para-flex'>
                    <h5>Tuilleadh léitheoireachta</h5>

                    <p className='para-style'>Más maith leat níos mó a fhoghlaim faoi théacsanna Gaeilge ón tréimshe seo mar fhoinsí eolas stairiúil, molann muid Katarine Simms, Medieval Gaelic Sources (2009), a bhí an-luachmhar agus muid ag obair ar an chás-staidéar seo.
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

export default CaseGaelic;
