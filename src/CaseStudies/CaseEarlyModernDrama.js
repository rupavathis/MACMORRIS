
import '../App.css'
import Container from '@mui/material/Container';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Home/Header";
import './case-study.scss';
import ScrollToTop from '../Home/ScrollToTop';
import Footer from '../Home/Sponsors';


function CaseEarlyModernDrama({ changeIrish, setChangeIrish }) {

  return (
    <>
      <ScrollToTop />

      <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />

      <div className='case-wrapper'>
        <>
          <div className='case-study-top-wrapper'>
            <div className='case-study-title-wrapper'>
              <h1 className="header-title" style={{ fontSize: '5.5rem' }}><strong>
                {changeIrish ? <>Cumhacht agus taibhléiriú in Éirinn sa Nua-Aois Luath</> : <>Power and performance in Early Modern Ireland</>}
              </strong></h1>
            </div>
            <div className="title-img-wrapper">
              <img src="/images/case-studies/spenser.webp" alt="" style={{
                opacity: 0.5, width: "auto",
                height: "600px", margin: 10
              }} />
            </div>
          </div>
          <Container fixed>

            <>

              <div className='case-flex-column'>
                <div className='para-flex'>
                  <span className="dropcap">{!changeIrish ? <>W</> : <>C</>}</span>
                  {!changeIrish ? <p className='para-style'>hile the number of theatrical works created in early
                    modern Ireland are few in number compared to England or the continent, the socio-political forces
                    shaping their creation capture the tumult and instability of a colonial world in formation. Indeed,
                    the very earliest theatrical performances in Ireland were inextricably linked to key figures who
                    shaped the period and can, therefore, be seen as a form of political intervention and, at times, an
                    assertion of soft power from their backers. </p> :

                    <p className='para-style'>
                      Cé gur cumadh i bhfad níos lú drámaí in Éirinn sa Nua-Aois Luath i gcomparáid le Sasana nó ar an mhór-roinn, léiríonn siad an t-anord agus an mhíshocracht nuair a cumadh iad trí na fórsaí soch-pholaitiúla a bhí thart orthu i ndomhain ina raibh an coilíneachas ag teacht chun tosaigh. Is féidir na drámaí is luaithe in Éirinn a nascadh le daoine tábhachtacha a raibh baint acu le cruthú an domhain nua seo, agus mar sin is féidir amharc orthu mar shórt idirghabháil pholaitiúil agus, in amanna, mar iarracht cumhacht a léiriú óna lucht tacaíochta. </p>
                  }
                </div>
              </div>

              <h5> {!changeIrish ? <>Early ecclesiastical plays </> : <>Drámaí luatha eaglasta </>} </h5>

              <div className='case-flex-column'>
                <div className='para-flex'>
                  <p className='para-style'>
                    {changeIrish ? <>
                      Is le<Link to='/profile/m1153'>John Bale</Link>na drámaí eaglasta is luaithe a cuireadh ar an stáitse in Éirinn, an fear a ndearna Éadbhard VI Easpag Osraí de sa bhliain 1552. Cé gur chaith sé níos lú ná bliain sa ról sin – chuir a chuid scríbhneoireacht nimhneach in éadan an Chaitliceachais a oiread sin feirge ar mhuintir Chill Chainnigh go raibh air teitheadh go Sasana – d'éirigh leis trí dhráma mhíorúilte a léiriú i gCearnóg an Mhargaidh i gCill Chainnigh sa bhliain 1553, ina measc bhí<Link to='/works/35'>A brefe comedy or enterlude concernynge the temptacyon of our lorde and sauer Iesus Christ.</Link> Cé nár éirigh le Bale an tionchar a raibh sé ag súil leis a imirt trína dhrámaí eaglasta, lean na hÍosánaigh ¬(dream amháin ar dhírigh Bale orthu ina dhrámaí nimhneacha) orthu ag cumadh agus ag léiriú drámaí eaglasta sa 17ú haois, cosúil le <Link to='/works/1587'>Titus or the Palme of Christian Courage</Link> in 1644. Ar an drochuair, ní mhaireann anois de ach cur síos ar argóint an dráma.
                    </> :
                      <>
                        We see this first in the ecclesiastical plays staged in Ireland by <Link to='/profile/m1153'>John Bale</Link>, who was nominated Bishop of Ossory by King Edward VI. Though he held this position for less than a year (1552-3) – his virulently anti-Catholic writings so the enraged the townspeople of Kilkenny that he had to flee to England – he managed to stage three of his miracle plays in Kilkenny's Market Square in 1553, one of which was <Link to='/works/35'>A brefe comedy or enterlude concernynge the temptacyon of our lorde and sauer Iesus Christ.</Link> Bale's brand of ecclesiastical performances might not have had the effect he desired, but the Jesuits, one of the targets of Bale's vituperation, would keep writing and performing religious plays well into the 1600s, such as <Link to='/works/1587'>Titus or the Palme of Christian Courage</Link> in 1644. Unfortunately, only the printed argument of the play remains
                      </>
                    }
                  </p>
                </div>
                <p className="para-style">
                  {
                    changeIrish ? <>
                      B'fhéidir gur léiríodh an dráma arís sna blianta i ndiaidh léirithe gríosaitheacha Bale, níl tásc ná tuairisc air. Bheadh 80 bliain eile caite sular cuireadh le hiarrachtaí Bale ar aon bhealach suntasach, ach amháin in 1601. Is sa bhliain sin a léiríodh an chéad dráma tuata a bhfuil cuntas againn air, is é sin nuair a chuir <Link to='/profile/m1618'>Charles Blount</Link>, Fear Ionaid an Rí in Éirinn, dráma le Thomas Norton agus <Link to='/profile/m5518'>Thomas Sackville</Link> dar teideal Gorboduc ar an stáitse ar lá breithe <Link to='/profile/m1089'>Eilís I</Link>. Cuireadh Gorboduc ar an stáitse don chéad uair 40 bliain roimhe sin ós comhair Eilís féin, agus nuair a léiríodh in Éirinn é – dráma a bhfuil deighilt pholaitiúil agus cogaidh cathartha i mBreatain ina gcuid lárnach den phlota – bhí teachtaireacht ann d'aon duine a bhí ag troid taobh le <Link to='/profile/m1704'> hAodh Ó Néill</Link> agus <Link to='/profile/m1571'>Aodh Ruadh Ó Domhnaill</Link> i gCogadh na Naoi mBliana: is éasca tír a chur faoi chois nuair nach bhfuil muintir na tíre sin aontaithe . Díreach cúpla seachtain ina dhiaidh seo, bhí Blount agus a fhórsaí ag máirseáil i dtreo Chionn tSáile roimh chath cinniúnach an chogaidh
                    </> :
                      <>
                        While it is certainly possible that performances took place in the years following Bale's inflammatory performances, no records of them remain. In fact, it would be 80 years before Bale's experiments were added to in any significant manner, with a notable exception in 1601. That year saw the first recorded staging of a secular play in Ireland, when <Link to='/profile/m1618'>Charles Blount</Link>, Lord Deputy of Ireland, hosted a production of Thomas Norton and <Link to='/profile/m5518'>Thomas Sackville's</Link>, Gorboduc on <Link to='/profile/m1089'>Queen Elizabeth's</Link>, birthday. <Link to='/works/4630'>Gorboduc</Link> had first been performed 40 years prior in front of Elizabeth, and this particular staging of a play whose plot is driven by divisions and civil war in the Kingdom of Britain was created to send a message to those who fought with <Link to='/profile/m1704'>Aodh O'Neill</Link> and <Link to='/profile/m1571'>Aodh Ruadh Ó Domhnaill</Link> during the Nine Year's War: a divided land is an easily conquered one1. Mere weeks after this, Blount would be leading his forces to Kinsale in what would be the climactic battle of the war.
                      </>
                  }
                </p>
              </div>

              {changeIrish ? <h5>Wentworth, Shirley, agus Sráid San Werburgh</h5> : <h5>Wentworth, Shirley, and Werburgh Street</h5>}

              <div className='case-flex-column'>
                <div className='para-flex'>
                  {changeIrish ? <>
                    <p className='para-style'>
                      Ní raibh amharclann shaintógtha in Éirinn go dtí gur tháinig Fear Ionaid an Rí, <Link to='/profile/m2183'>Thomas Wentworth</Link> go hÉirinn sna 1630daí. Bhí Wentworth tiomanta go mbeadh lárionad cultúrtha i mBaile Átha Cliath a bheadh díreach chomh hálainn le hionad ar bith i Londain. Leis sin a dhéanamh, choimisiúnaigh sé an scríbhneoir agus aistritheoir<Link to='/profile/m2682'>John Ogilby</Link> le hamharclann a bhunú ar Shráid San Werburgh, díreach síos an bóthar ó áit chónaithe Wentworth i gCaisleán Bhaile Átha Cliath. Níl a fhios againn go baileach cá huair a d'oscail an amharclann don chéad uair, ach is cinnte go raibh sí ar a boinn faoin bhliain 1636. Dá mba mhaith le Wentworth amharclann iontach a bheith aige, áfach, bheadh air drámadóir cónaithe iontach a aimsiú. Is cosúil go raibh sciorta den ádh ar an amharclann nua, mar d'éirigh le Wentworth <Link to='/profile/m2559'>James Shirley</Link> a mhealladh leis an ról sin a líonadh sa bhliain 1636. Tháinig ráig den phlá ar Londain agus dhún na hamharclanna, mar sin bheadh deis ag Shirley i mBaile Átha Cliath leanúint air lena chuid oibre. B'fhéidir gur shíl Shirley go mbeadh seans níos fearr aige teacht in áit Ben Jonson (a d'éag in 1637) mar Fhile Cúirte tar éis bogadh go Baile Átha Cliath. Tá an chosúlacht air gur chuidigh tíolacthaí ó leithéidí <Link to='/profile/m2686'>Richard Bellings</Link>, <Link to='/profile/m5563'>William Markham</Link>, agus <Link to='/profile/m5560'>James Mervyn</Link> dá chéad dráma, <Link to='/works/539'>The Royall Master,</Link> lena iarrachtaí dul chun cinn sa saol. <Link to='/profile/m5562'>Drury Cooper</Link> ach go háirithe, a dúirt le Shirley: “stand forth, and put thy Lawrell on…now Ben is dead and gone.” Ach, mar a tharla sé, roghnaíodh <Link to='/profile/m5538'>William Davenant</Link> don ról in 1638 agus, go háirithe i ndiaidh an ábhair dhíomá sin, bhí frustrachas uafásach ar Shirley le linn a chuid ama in Éirinn. Níor chuir an pobal mórán suime sna drámaí a chum sé don amharclann ar Shráid San Werburgh, cosúil le <Link to='/works/519'>The Doubtful Heir,</Link> <Link to='/works/517'>The Constant Maid</Link> agus <Link to='/works/512'>St. Patrick for Ireland </Link>                      , an dráma deireanach a chum sé sula ndeachaigh sé ar ais go Londain sa bhliain 1640.
                    </p>

                    <p className='para-style'> Bhí deiseanna ann do dhrámadóirí eile, áfach, in amharclann Shirley ar Shráid San Werburgh. Chum <Link to='/profile/m2683'>Henry Burnell</Link> <Link to='/works/784'>Landgartha</Link> sa bhliain 1640, an chéad dráma a cumadh le duine a rugadh in Éirinn agus a cuireadh go proifisiúnta ar an stáitse i mBaile Átha Cliath. Tugann sé blaiseadh dúinn den atmaisféar i dtír a bhí ag luascadh i dtreo cogadh cathartha.
                    </p>
                    <p className='para-style'> Is dócha gur chum Burnell drámaí eile don amharclann ar Shráid San Werburgh ach, ar an drochuair, tá siadsan caillte. Dhún an amharclann go gairid i ndiaidh Landgartha: go híorónta, bhí titim polaitiúil agus bás <Link to='/profile/m2183'>Thomas Wentworth</Link> ar na rudaí a spreag Cogadh na dTrí Ríocht agus a chuir deireadh le gach mórléiriú in amharclanna idir na blianta 1641–1662, in Éirinn agus i Sasana. Chothaigh a stíl ansmachtach rialachais agus an dóigh ar chaith sé lena eascairde polaitiúla ar nós <Link to='/profile/m2130'>Richard Burke</Link>, a mhac <Link to='/profile/m2422'>Ulick</Link>, agus <Link to='/profile/m2223'>Richard Boyle</Link> naimhdeas dó féin i measc Caitliceach agus i measc Protastúnach. Cibé aontas a bhí idir Caitlicigh agus Protastúnaigh mar gheall air sin, tháinig deireadh leis nuair a cuireadh Wentworth chun báis sa bhliain 1641, agus thosaigh an tÉirí Amach an bhliain chéanna. Ní hionann é sin is le rá nár cumadh nó nár léiríodh drámaí ar bith sna blianta 1641–1662; bhí sé ag tarlú faoi rún. Chum <Link to='/profile/m3531'>Henry Burkhead</Link> an dráma an-ghríosaitheach <Link to='/works/1329'>Cola's furie,</Link> ag tabhairt léirithe ar ainghníomhartha na Sasanach le linn an Éirí Amach, agus léirigh <Link to='/profile/m4541'>Abraham Cowley</Link> a dhráma-san chomh maith, The Guardian, in 1650 i dteach príobháideach i mBaile Átha Cliath.
                    </p>
                  </> :
                    <>
                      <p className='para-style'>
                        In assembling the discordant,
                        syncopated, and incommensurate record of the widest possible range of voices, it signals the need for new,
                        inclusive, and plural understandings of early modern Ireland.
                      </p>
                      <p className='para-style'>
                        It was not until the arrival of a later Lord Deputy, <Link to='/profile/m2183'>Thomas Wentworth</Link> in the 1630s, that Ireland saw its first purpose-built theatre. Wentworth was keen for Dublin to have a cultural centrepiece as splendid as any found in London and, to that end, he commissioned the writer and translator <Link to='/profile/m2682'>John Ogilby</Link> to establish a theatre in Werburgh Street, a stone's throw away from Wentworth's residence in Dublin Castle. The exact date of the Werburgh Street Theatre's opening is not known, but it was certainly in use by 1636. If Wentworth was to have a truly great playhouse, however, he would need an equally great playwright-in-residence. In what represented a coup for the fledgling theatre, Wentworth managed to attract <Link to='/profile/m2559'>James Shirley</Link> to fill that role in 1636. An outbreak of plague had closed London's theatres, so Dublin offered Shirley an opportunity to keep plying his trade. Shirley may have imagined that his chance of succeeding Ben Jonson (who died in 1637) to the position of Poet Laureate would be strengthened by the move. Indeed, the dedications from people such as <Link to='/profile/m2686'>Richard Bellings</Link>, <Link to='/profile/m5563'>William Markham</Link>, and <Link to='/profile/m5560'>James Mervyn</Link>, to his first work, <Link to='/works/539'>The Royall Master,</Link> might have appeared to advance his cause. <Link to='/profile/m5562'>Drury Cooper</Link>, in particular, asks Shirley to “stand forth, and put thy Lawrell on…now Ben is dead and gone.” But, in the event, <Link to='/profile/m5538'>William Davenant</Link> was chosen in 1638 and, compounding this disappointment, Shirley's time in Ireland was extremely frustrating. Audiences did not flock to the plays he wrote for the Werburgh Street stage, such as <Link to='/works/519'>The Doubtful Heir,</Link> <Link to='/works/517'>The Constant Maid</Link> and what would be his last work before departing for London in 1640, <Link to='/works/512'>St. Patrick for Ireland. </Link> </p>
                      <p className='para-style'>
                        Shirley's Werburgh Street Theatre, however, provided a stage for others. <Link to='/profile/m2683'>Henry Burnell,</Link> whose 1640 play <Link to='/works/784'>Landgartha</Link> captures the mood of a country teetering on the edge of civil war, is the first Irish play written by an Irish-born author to be staged professionally in Dublin. It is probable that Burnell wrote more plays for Werburgh Street but these, unfortunately, are now lost. However, Werburgh Street closed soon after Landgartha: in an ironic twist, <Link to='/profile/m2183'>Thomas Wentworth</Link> political downfall and death became a catalyst in the Wars of the Three Kingdoms which shut all large-scale theatre performances from 1641 until 1662, in both Ireland and England. His heavy-handed approach to governance and the manner he treated political rivals such as <Link to='/profile/m2130'>Richard Burke</Link>, his son <Link to='/profile/m2422'>Ulick</Link>, and <Link to='/profile/m2223'>Richard Boyle</Link> created an alliance of mutual antipathy against him among Catholics and Protestants alike. Wentworth's execution in 1641 destroyed this, resulting in the Irish Rebellion of 1641. That is not to say that plays were not written or performed between 1641 and 1662; rather, they became more clandestine affairs. <Link to='/profile/m3531'>Henry Burkhead</Link> created the fiercely provocative <Link to='/works/1329'>Cola's furie,</Link> with its depiction of English atrocities during the Irish Rebellion, while <Link to='/profile/m4541'>Abraham Cowley</Link> also performed his piece, <Link to='/works/4631'>The Guardian</Link>, in 1650 at a private house in Dublin. </p>
                    </>
                  }
                </div>
              </div>

              {changeIrish ? <h5>
                Drámaíocht in Éirinn le linn an Reistiréisin: An Amharclann Ríoga agus níos mó
              </h5> : <h5>Restoration Theatre in Ireland: The Theatre Royal and beyond</h5>}


              <div className='case-flex-column'>
                {changeIrish ?
                  <div className='para-flex'>
                    <p className='para-style'>
                      I ndiaidh an Reistiréisin faoi <Link to='/profile/m2350'>Shéarlas II</Link>, cuireadh iarrachtaí nua ar bun le cultúr drámaíochta a chothú in Éirinn. Tháinig <Link to='/profile/m2682'>John Ogilby</Link>, a chuidigh le bunú na hamharclainne ar Shráid San Werburgh, chun tosaigh mar dhuine lárnach sna hiarrachtaí nua seo. Ceapadh é mar "Master of the Revels" in Éirinn, agus thug sé faoin Amharclann Ríoga a thógáil i Scabhat Smock i mBaile Átha Cliath. D'osclaíodh í in 1662 le léiriúchán de With without Money le <Link to='/profile/m4698'>John Dancer</Link> agus, uair amháin eile, bhí gníomhaíocht chultúrtha agus pramsáil pholaitiúil ar an stáitse in Éirinn. Is féidir é seo a fheiceáil go háirithe sa chéad léiriú a cumadh don Amharclann Ríoga, <Link to='/works/1565'>Pompey</Link> le <Link to='/profile/m2523'>Katherine Philips</Link>. Tháinig Philips go hÉirinn sa tóir ar thalamh a chaill a teaghlach le linn Chogadh na dTrí Ríocht. Chas sí ar <Link to='/profile/m2722'>Roger Boyle</Link>, drámadóir eile a raibh tuiscint aige ar an sórt amharclannaíochta a thaitin le Séarlas II. Nuair a chonaic sé aistriúcháin Philips ar bhunshaothar Pierre Corneille, spreag Boyle í le Pompey a chríochnú. Cuireadh ar an stáitse é don chéad uair ar 10ú Feabhra 1663, agus bhí scothaicme Bhaile Átha Cliath i láthair, Fear Ionaid an Rí, <Link to='/profile/m2816'>James Butler</Link> ina measc.

                    </p>
                    <p className='para-style'>
                      Bhí níos mó ná léirithe drámatúla i gceist leis an Amharclann Ríoga. D'fhoilsíodh Pompey agus <Link to='/works/2858'>Hic et Ubique</Link> le <Link to='/profile/m4663'>Richard Head</Link> an bhliain chéanna. Ba é an chéad dráma a cuireadh ar an stáitse in Éirinn a chum drámadóir a rugadh in Éirinn, agus a rinne cur síos ar rudaí a bhí ag titim amach sa tír – cé go raibh an cur síos sin áibhéalach ar mhaithe leis an ghreann.  Theith Head agus a mháthair go Sasana nuair a thosaigh an tÉirí Amach in 1641, ach d'fhill sé ag tús na 1660daí lena shaibhreas a dhéanamh. Déanann an dráma seo cur síos ar an bhealach a raibh daoine ag teitheadh as Sasana ag lorg saibhris, bíodh sé trí mhodhanna maithe nó modhanna olca. Ach níor cuireadh an dráma seo ar stáitse mór na hAmharclainne Ríoga, ach ar cheann i bhfad níos uirísle. Gach seans go raibh sé léirithe i dteach tábhairne. Tugann sé seo le fios, áfach, nárbh é barr lucht na n-uasalaicmí amháin a bhí gníomhach i ndomhain cúrsaí drámaíochta ag an am sin.
                    </p>
                  </div>
                  :
                  <div className='para-flex'>
                    <p className='para-style'>
                      Following the Restoration of <Link to='/profile/m2350'>King Charles II</Link>, there was a second attempt at creating a theatrical culture in Ireland. <Link to='/profile/m2682'>John Ogilby</Link>, who played a pivotal role in the establishment of the Werburgh Street Theatre, became even more central in the development of the second theatre. Newly appointed as Master of the Revels in Ireland, he set about constructing the Theatre Royal, based in Dublin's Smock Alley. It opened in 1662, with a performance of <Link to='/profile/m4698'>John Dancer's</Link> With without Money and, again, the Irish stage became a focus for cultural activity and political posturing. This can be seen most keenly with the first original production at the Theatre Royal, <Link to='/profile/m2523'>Katherine Philips'</Link> <Link to='/works/1565'>Pompey</Link>. Philips arrived in Ireland looking pursue a claim to land which her family had lost during the Wars of the Three Kingdoms. Her sojourn brought her into contact with <Link to='/profile/m2722'>Roger Boyle</Link>, himself a keen playwright and someone who understood the theatrical tastes of King Charles II. Seeing some of her early translations of Pierre Corneille's original, Boyle encouraged Philips to finish her work on Pompey. It premiered on February 10th, 1663, and was attended by the élite of Dublin courtly society, including the Lord Lieutenant of Ireland, <Link to='/profile/m2816'>James Butler</Link>. </p>
                    <p className='para-style'>
                      The stage of the Theatre Royal was not the only venue for dramatic performances. Published in the same year as Pompey, <Link to='/profile/m4663'>Richard Head's </Link><Link to='/works/2858'>Hic et Ubique</Link> was the first play written by a person born in the country which depicted real events taking place in Ireland on an Irish stage, albeit in a sensationalised manner for comedic effect. Head and his mother had fled Ireland at the outbreak of the Rebellion in 1641 and he only returned in the early 1660s to find his fortune, and this play describes the manner in which other people fleeing England try and find theirs through fair means and foul. The ‘stage' that this play would have been on would have been far less grand than the Theatre Royal, however. It was most likely a pub. Nevertheless, it suggests that playwrighting and play-going were not confined to the upper echelons of Irish society. </p>
                  </div>}
              </div>

              {changeIrish ? <h5>1663-2023: Ag tabhairt beocht nua do Hic et Ubique</h5> : <h5>1663-2023: Reviving Hic et Ubique</h5>}

              <div className='case-flex-column'>
                {changeIrish ?
                  <div className='para-flex'>
                    <p className='para-style'>
                      Cé go bhfuil neart staidéir agus anailíse déanta ar na drámaí luatha seo – <Link to='/works/2858'>Hic et Ubique</Link>, Pompey le Katherine Philips, saothar Bale agus saothar Shirley – is annamh a cuireadh ar an stáitse arís iad, má cuireadh riamh. Mar atá léirithe ag tionscadail cosúil le<a href='https://www.shakespearesglobe.com/discover/read-not-dead/'>Read Not Dead</a> agus <a href='https://www.dhi.ac.uk/brome/'>Richard Brome Online</a> a bhfuil sé i gceist acu drámaí as Sasana sa Nua-Aois Luath a athbheochan, is féidir léargas agus peirspictíochtaí eile a fháil trí dhráma a fheiceáil ar an stáitse, seachas ar páipéar, agus muid ag dul i mbun léirmheastóireachta. Le dul i ngleic leis seo, thug mac léinn PhD MACMORRIS Alan Waldron, in éineacht le Cumann Drámaíochta Ollscoil Mhá Nuad, faoi thionscadal taighde praiticiúil agus Hic et Ubique le Richard Head a léiriú arís. Seo an chéad uair a léiríodh an dráma ón 17ú haois, go bhfios dúinn, agus tharraing sé ó obair Christopher Wheatley, Stephen Austin Kelly, agus Deana Rankin le machnamh a dhéanamh ar an cheist “cad is brí le teacht chun bheith Éireannach in Hic et Ubique agus, as sin, cad is brí le bheith Éireannach i sochaí na hÉireann sa lá atá inniu ann?” I ndiaidh 5 mhí de chleachtadh, léiríodh an dráma faoi dhó idir 29ú–30ú Márta 2023 san áit a raibh an Amharclann Ríoga roimhe seo, ach anois a bhfuil Amharclann Scabhat Smock. Díoladh na ticéid go léir don dhá léiriú rathúil, agus thug siad ábhar machnaimh dúinn ina ndiaidh. Beidh plé ar thorthaí na léirithe seo ar fáil i dtráchtas dochtúireachta Alan, a bhfuil sé i gceist aige é chríochnú faoi dheireadh na bliana 2024. </p>
                  </div>
                  :

                  <div className='para-flex'>
                    <p className='para-style'> <Link to='/works/2858'>Hic et Ubique</Link>, along with other works of the time such as Katherine Philips' Pompey and the work of both Bale and Shirley have all been the subject of significant literary analysis and criticism. However, these plays have very rarely, if ever, have been the subject of revivals or adaptations. As projects such as <a href='https://www.shakespearesglobe.com/discover/read-not-dead/'>Read Not Dead</a> or <a href='https://www.dhi.ac.uk/brome/'>Richard Brome Online</a> have shown through their revivals of early modern plays from England, making the transition from page to stage can bring about new insights and perspectives to complement literary criticism. To address this gap, MACMORRIS PhD student Alan Waldron, working with Maynooth University's Drama Society, set about creating a Practice-as-Research project which looked specifically at creating an adaptation of Richard Head's Hic et Ubique. This revival, which is the first recorded production of the play since its initial staging, used the work of Christopher Wheatley, Stephen Austin Kelly, and Deana Rankin to ask, “what does it mean to become Irish in Hic et Ubique and, consequently, how does that inform how we think about being and becoming Irish in contemporary Irish society?” Following a five-month rehearsal period, the play was performed over two days from March 29th – 30th 2023 and on the site of the Theatre Royal in what is now Dublin's Smock Alley Theatre, the production played to sold out audiences and generated numerous findings and provocations with its run there. Alan's thesis containing these results is due for submission in late 2024. </p>
                  </div>}
              </div>

            </>


          </Container>
        </>
      </div>
      <Footer />

    </>
  );
}

export default CaseEarlyModernDrama;
