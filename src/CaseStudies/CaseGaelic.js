
import '../App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Home/Header";
import CaseHistoricOverviewIrish from './CaseHistoricOveriewIrish';
import './case-study.scss';
function CaseGaelic({ changeIrish, setChangeIrish }) {

    return (
      <>
      <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />

      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: '#f5f2f', textAlign: "justify" }}>
            <div className="chapter-header-media chapter-header-media--featured-image">
              <img src="/images/case-studies/gaelic.png" alt="" style={{ opacity: 0.5, width: "auto", height: "400px" }} />
              <div className="header-text-overlay">
                <h1 className="header-text"><strong>Using Gaelic Sources</strong></h1>
              </div>
            </div>
            {!changeIrish &&
              <>
              <span className="dropcap">D</span>
              <p className='para-style'>uring the sixteenth century, most of Ireland was dominated by Gaelic (or largely Gaelicised) noble families, and the dominant language of the island was Irish. And so, for scholars wishing to delve into the life, culture, politics and perspective of that majority population in 16th¬-17th century Ireland, the primary access to it is to be found in various forms of surviving Irish-language sources. In practical terms, the English administration proved to be more systematic and effective record-keepers, and therefore the study of Early Modern Ireland largely draws mostly from English-language sources. In consequence, understandings of Ireland, its people, culture, and society during this period is moulded by colonial perspectives, and the voice of the native, where it survives in the sources which escaped destruction, is too often neglected.
</p>

<p className='para-style'>The object of this case study is to direct researchers towards the substantial body of Irish-language materials available to them, materials which can rebalance our understanding of Ireland at a formative moment of transition. 
</p>

<h5>Poetry</h5>

<p className='para-style'>Classical Irish poetry, or Bardic poetry, is poetry composed by professional poets (filidh) who trained in the bardic schools of the Early-Modern Irish period (1200–1650) (See <Link to='/what-is-bardic-poetry'>What is Bardic Poetry?</Link>).
</p>

 

<figcaption> MS 23 F 16 (The Book of O'Gara). Courtesy of Irish Script on Screen. </figcaption>

<p className='para-style'>More than 2,000 <a href='https://bardic.celt.dias.ie/'>bardic poems</a>  survive from the Early-Modern period. Excerpts from 44 of these appear on our <Link to='/map'>Deep Map</Link> which accounts for less than a quarter of the poems which survive from the province of Munster during our selected period, 1560-1607. (In some cases, we have drawn from the different parts of the same poem for different nodes.) The Deep Map includes political poems <Link to='/map?id=D1067'>prophesising patrons'success</Link> and poems <Link to='/map?id=D1073'>lamenting patrons'death</Link>. You can discover <Link to='/map?id=D1032'>poetry addressed to women</Link> and <Link to='/map?id=D1010'>written by women.</Link> There are <Link to='/map?id=D1020'>poems of praise to addressed other poets</Link>, and <Link to='/map?id=D1078'>poems criticising praise poetry</Link>, <Link to='/map?id=D1009'>poems about music</Link>, about <Link to='/map?id=D1140'>love</Link>, and about <Link to='/map?id=D1131'>the beauty of the natural world</Link>.
</p> 

<p className='para-style'>Historians of Early Modern Ireland can learn about <Link to='/map?id=D1027'>families'genealogies</Link>, the <Link to='/map?id=D1002'>education</Link> of the Munster nobility, <Link to='/map?id=D1004'>castle life</Link> in war and peace, <Link to='/map?id=D1003'>trade links with Europe</Link>, and much else about the texture of people's lives.
</p>

<p className='para-style'>Part of the poets'duties was to keep an account of their patron's martial career (caithréim), providing insights which ranged from brief references to events like <Link to='/profile/m1685'>Butler</Link> and <Link to='/profile/m1396'>Pelham</Link> <Link to='/map?id=D1029'>capture of Carrigafoyle and Glin</Link> in 1580, or the Earl of Thomond at the <Link to='/map?id=D1063'>Battle of Kinsale</Link> (1601), to more detailed accounts of battles such as Farsetmore (1567) in <Link to='/work/3814'>Gréas dearbhtha Duan na Feirsde</Link> by <Link to='/profile/m1938'>Uilliam Óg Mac an Bhaird</Link> to <Link to='/profile/m1517'>Aodh Ó Domhnaill</Link>. Caithréim poetry has a fondness for hyperbole, and cannot be taken literally by historians. A lengthy caithréim <Link to='/profile/m3111'>Dhonnchadh Ó Ceallacháin</Link>, would have us believe that this very minor lord <Link to='/map?id=D1094'>plundered most of Munster</Link> during his lifetime.
</p>

<h5>Annals</h5>

 

<figcaption> MS 23 P 7 (The Annals of the Four Masters). Courtesy of Irish Script on Screen.</figcaption>

<p className='para-style'>The annals from Gaelic Ireland were compiled by professional chroniclers (seanchaidhe) ‘n they 
  provide us with an invaluable alternative perspective to those of the dominant Anglophone accounts. Unlike bardic
   poetry, with its focus on praise or complaint, the annals are relatively even-handed and offer much more detail 
   about time, place, and key individuals. The most significant compilation is the <a href='https://archive.org/details/annalsofkingdomo05ocleuoft/'>Annals of the Kingdom of Ireland by the Four Masters</a>, more commonly known as the Annals of the Four Masters (AFM), 16 excerpts from which make it into our Deep Map. These include the accounts of the <Link to='/map?id=D1014'>Battle of Kinsale</Link> and the <Link to='/map?id=D1105'>Siege at Smerwick</Link>, as well as lesser-known events like the <Link to='/map?id=D1059'>capture of Derrinlaur castle</Link> in 1574 and the <Link to='/map?id=D1024'>sacking of Kilmallock</Link> in 1571. The compilers of AFM record atrocities committed on all sides of the conflict, including the massacre by <Link to='/profile/m1396'>Lord Pelham's</Link> ‘marauding parties'near <Link to='/map?id=D1060'>Coill Mhór</Link> in 1580, and the plundering of Thomond by <Link to='/profile/m1571'>Aodh Rua Ó Domhnaill's</Link> mirroring <Link to='/map?id=D1107'>‘marauding parties'</Link><Link to='/map?id=D1107'> in 1599; no side is absolved of blame for </Link> <Link to='/map?id=D1093'>havocking Munster</Link>.
</p>

<p className='para-style'>Beyond their reports of conflict and violence, the annals also shed light on characters like the <Link to='/map?id=D1111'>‘Blind Abbot'</Link> mentioned under the year 1598, and the <Link to='/map?id=D1109'>trilingual Baothghalach Mac Fhlannchadha</Link> from Knockfinn, Co. Clare.
</p>

<h5>Prose & Other</h5>
<p className='para-style'>
Although poetry and annals constitute the bulk of surviving Gaelic sources, the writings of the other learned classes of
 Gaelic society, including those of professional physicians (leagha) and of the brehons (breithimh), such as the 
 <Link to='/map?id=D1183'>legal documents</Link> from the Mac Aodhagáin family of brehons in Co. Clare, are full of
  interest. So, too, are letters, such as the <Link to='/map?id=D1048'>plea</Link> written by <Link to='/profile/m1732'>Ó Súilleabháin Béirre</Link> to <Link to='/profile/m1579'>Philip III of Spain</Link>. 
</p>

 

<figcaption> MS 23 F 21 (Butler Duanaire). Courtesy of Irish Script on Screen.
</figcaption>

<p className='para-style'>Pieces of prose are often found alongside poetry in manuscripts, either as marginalia or within the poem itself, providing context or information worthy of attention. Crosántacht poetry mixes verse and prose, and the latter offers extended descriptions unrestricted by the requirements of poetic metres. The <Link to='/map?id=D1047'>crosántacht</Link> to Richard Butler, for example, includes an elaborate comparison of the patron to fruit-trees.
</p>

<h5>Reading Early-Modern Irish</h5>

<p className='para-style'>Many Irish-language texts from this period have been published with English translations. However, those who don't wish to rely on translations or, more importantly, would like to access a corpus of as-yet untranslated texts may do so by developing an understanding of Early Modern Irish – which is undoubtedly the preferable way approach. An invaluable resource for doing so is <a href='https://léamh.org/'>Léamh.org</a>, a digital humanities project which facilitates the greater use of Classical Irish sources across disciplines.
</p>

<p className='para-style'>Working with the team at Léamh.org, MACMORRIS has been able to showcase some of the texts we have included on our Deep Map, with translations, word-by-word annotations on the text, and general guides. You can explore these texts here  
</p>

 

<h5>Further Reading</h5>

<p className='para-style'>For anyone wishing to learn more about Gaelic materials as sources of historical information from this period, we recommend consulting Katarine Simms, Medieval Gaelic Sources (2009).
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
 
 export default CaseGaelic;
 