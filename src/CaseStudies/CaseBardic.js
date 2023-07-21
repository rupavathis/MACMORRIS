import Container from '@mui/material/Container';
import * as React from 'react';
import './case-study.scss';
import { Link } from 'react-router-dom';
import Header from "../Home/Header";
import CaseHistoricOverviewIrish from './CaseHistoricOveriewIrish';
import ScrollToTop from '../Home/ScrollToTop';

function CaseBardic({ changeIrish, setChangeIrish }) {

    return (

        <>
            <ScrollToTop />

            <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />

            <div className='case-wrapper'>
                <>
                    <div className='case-study-top-wrapper'>
                        <div className='case-study-title-wrapper'>
                            <h1 className="header-title" style={{ fontSize: '5.5rem' }}>
                                <strong>
                                    {
                                        changeIrish ? <>
                                            Filíocht na Sgol
                                        </> :
                                            <>
                                                Introduction to Bardic Poetry
                                            </>
                                    }
                                </strong>
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

                        <>

                            <div className='case-flex-column'>
                                {changeIrish ?
                                    <div className='para-flex'>
                                        <span className="dropcap">C</span>
                                        <p className='para-style'>
                                            Séard atá i gceist le filíocht Chlasaiceach na hÉireann, nó filíocht na sgol, ná an sórt filíochta a bhí á cumadh ag na filí gairmiúla (filidh) a fuair oiliúint sna scoileanna filíochta in Éirinn sa Nua-Aois Luath (1200–1650). Cumadh an chuid is mó den fhilíocht seo do dhaoine uaisle na tíre, nó bhí baint ag na dánta le diagacht nó cúrsaí creidimh. Cuireadh de ghlanmheabhair iad agus rinneadh iad a aithris go poiblí. Tá an fhilíocht seo ar na foinsí staire is luachmhaire atá againn ó fhir léannta na nGael, agus maireann os cionn <a href='https://bardic.celt.dias.ie/'>2,000 dán</a> den sórt seo ón tréimhse thuasluaite ar féidir leo léargas a thabhairt dúinn ar shaol agus ar shochaí na nGael. Tá 229 filí i mbunachar líonraí MACMORRIS  a bhí gníomhach in Éirinn idir na blianta 1541–1660.
                                        </p>
                                        <p className='para-style'><strong>The Role of the Poet in Gaelic society</strong></p>
                                        <p className='para-style'>The elevated status of professional poet in Gaelic Ireland goes back as far as written sources can bring us. The filidh spent seven years studying in bardic schools which were open only to reputable descendants of poets possessed of a strong memory. There, they were highly trained in language, literature, history, and the traditions of their country and patrons. Qualified poets held an official position in aristocratic society, and the chief poet of a noble family was bound to the chief of that family, and dependant on him for his livelihood. The duties of the poet included celebrating inaugurations, marriages, births, and the achievements of the family, in war and peace, and elegising deceased patrons. The poet was licensed to mount criticisms, even of his own patron. <Link to='/profile/m1938'>Uilliam Óg Mac an Bhaird (†1576)</Link>, for example, the chief poet of <Link to='/profile/m1517'>Aodh Ó Domhnaill</Link>, wrote several poems to Aodh around 1570, urging him to pursue greater ambitions, complaining that he could not compose praise poetry since Ó Domhnaill's accomplishments were so few:
                                        </p>
                                    </div>
                                    :
                                    <div className='para-flex'>
                                        <span className="dropcap">C</span>
                                        <p className='para-style'>
                                            lassical Irish poetry – Bardic poetry – was composed by professional poets (filidh) trained in the bardic schools of during the period of Early Modern Irish (1200-1650). The poems, comprising mostly addresses to the lay nobility or devotional verse, were intended to be memorised and publicly recited. They provide one of the most valuable sources of historical information left by the Gaelic intelligentsia. More than 2,000 <a href='https://bardic.celt.dias.ie/'>bardic poems </a>
                                            survive from this period, supplying information about various aspects of Gaelic society. The MACMORRIS network comprises 229 poets active in Ireland 1541-1660.
                                        </p>
                                        <p className='para-style'><strong>The Role of the Poet in Gaelic society</strong></p>
                                        <p className='para-style'>The elevated status of professional poet in Gaelic Ireland goes back as far as written sources can bring us. The filidh spent seven years studying in bardic schools which were open only to reputable descendants of poets possessed of a strong memory. There, they were highly trained in language, literature, history, and the traditions of their country and patrons. Qualified poets held an official position in aristocratic society, and the chief poet of a noble family was bound to the chief of that family, and dependant on him for his livelihood. The duties of the poet included celebrating inaugurations, marriages, births, and the achievements of the family, in war and peace, and elegising deceased patrons. The poet was licensed to mount criticisms, even of his own patron. <Link to='/profile/m1938'>Uilliam Óg Mac an Bhaird (†1576)</Link>, for example, the chief poet of <Link to='/profile/m1517'>Aodh Ó Domhnaill</Link>, wrote several poems to Aodh around 1570, urging him to pursue greater ambitions, complaining that he could not compose praise poetry since Ó Domhnaill's accomplishments were so few:
                                        </p>
                                    </div>
                                }
                            </div>



                            <div className='case-flex-column'>
                                <blockquote style={{ opacity: 1 }}>

                                    <p className='para-style'>3. Gabh do bhrosdadh uaim, a Aodh,<br />
                                        gā hollamh nach dual do dhíol?<br />
                                        Beag an bhrīogh — gríosadh do ghruadh — <br />
                                        luadh do ghníomh dā dtíosadh thríom.<br />
                                        <br />
                                        4. Red shuan is dealaighthe dhaoibh<br />
                                        go leathnaighthe do luadh ráidh...<br />
                                        <br />
                                        3. Embrace this incitement from me, Aodh; what poet should not be paid? If I were to recite your achievements, it would not be very impressive, [causing] your cheeks to blush.<br />
                                        4. You must awaken from your sleep so that the recitation [of your achievements] may be expanded...<br />
                                        <br />
                                        – <a href='https://bardic.celt.dias.ie/pdf/POEM1874.pdf'>Trom an suan-sa ort, a Aodh</a>, <Link to='/profile/m1938'>Uilliam Óg Mac an Bhaird (†1576)</Link>
                                    </p>
                                </blockquote>
                                <div className='para-flex'>
                                    <p className='para-style'>There were also travelling poets (filidh chúarta) who moved between patrons. Poets also played a role in the Gaelic legal system, where they could be required by law to satirise someone who breached a contract or treaty, thereby destroying their social standing. Such was the case with <Link to='/profile/m1932'>Conchubhar Mac an Bhaird</Link> and other poets in connection with the 1539 treaty between <Link to='/profile/m1154'>Maghnus Ó Domhnaill</Link> and <Link to='/profile/m1129'>Tadhg Ó Conchubhar Sligigh</Link> concerning Sligo Castle. The poet's power to satirise and ruin a reputation was not taken lightly in Gaelic society, and strict rules governed who, how, and under what circumstances a poet could satirise.
                                    </p>

                                    <p className='para-style'>A great amount of religious poetry composed by bardic poets survives, with evidence that such poetry was incorporated into religious services, as with the short poem <Link to='/map?id=D1142'>Dia do bheatha, a Abhluinn án</Link> which welcomes the body of the Lord on Easter Sunday. Devotional poetry intended to disseminate Christian teaching to the general public in their native tongue became a feature of the Counter-Reformation in Ireland.
                                    </p>

                                    <p className='para-style'><strong>Who patronised these poets? </strong></p>

                                    <p className='para-style'>Both Gaelic and Anglo-Norman noble families embraced the bardic literary tradition and patronised professional poets. The role of a professional poet was a hereditary one, and often one poetic family remained closely associated with one family of patronage over several generations, such as the Mac an Bhaird poets and the Ó Domhnaills of Tír Chonaill (see below). Even Old English noblemen such as <Link to='/profile/m1685'>Tomás Dubh Buitléar</Link>, a consistent ally of the English, was an enthusiastic patron of Gaelic poets who eulogised him in works such as <Link to='/map?id=D1004'>Taghaim Tomás ragha is róghrádh</Link>. Even those operating well outside of Gaelic society knew the advantage of patronising poets as a way to gain public support, as with <Link to='/profile/m2145'>Sir Dominick Sarsfield</Link> when appointed <Link to='/map?id=D1070'>Chief Justice of Munster</Link> in 1604/5.
                                    </p>

                                </div>
                                <div className="image-wrapper">
                                    <img src="/images/case-studies/bardic/bardic.webp" alt="" style={{ width: "auto", height: "600px", margin: 10 }} />
                                    <figcaption> Bardic Poetry Family Patronage Network. From Bourke and Nic Chárthaigh, “Patronage networks in Gaelic Ireland ca. 1541 – ca. 1660”. </figcaption>
                                </div>
                            </div>

                            <h5>What were bardic poems about?</h5>

                            <div className='case-flex-column'>

                                <div className='para-flex'>
                                    <p className='para-style'>The content of Bardic court poetry ranged from <Link to='/map?id=D1155'>poems of praise</Link> and <Link to='/map?id=D1184'>satire</Link>, to <Link to='/map?id=D1046'>petitions</Link> and <Link to='/map?id=D1138'>criticisms</Link>. (see <Link to='/using-gaelic-sources'>Using Gaelic Sources</Link>)
                                    </p>

                                    <p className='para-style'>Religious poetry praising God, the Blessed Virgin Mary, or saints, to matters of Catholic teaching, such as sin and penance. <Link to='/profile/m2034'>Aonghus Fionn Ó Dálaigh</Link>, perhaps the most renowned poet in Munster during the late-16th century, wrote not just for eulogies and elegies to his patrons but a significant body of religious poetry, including <Link to='/map?id=D1065'>A Íosa, an éisdir mo dhán</Link> which features on the Deep Map.
                                    </p>

                                    <p className='para-style'>Literary and personal poetry makes up a smaller portion of the extant corpus; however a substantial selection of love poetry survives, such as the poem <Link to='/map?id=D1129'>Och, och a Mhuire bhuidh</Link> by <Link to='/profile/m1455'>Domhnall Mór Mac Carthaigh Mór</Link>.
                                    </p>

                                </div>
                            </div>

                            <h5>Metre & Register</h5>


                            <div className='case-flex-column'>
                                <div className='para-flex'>
                                    <p className='para-style'>The Gaelic poetry of Early-Modern Ireland was subject to strict requirements in terms of syllables, rhyme, alliteration, etc. Some of the most common metres from this period included deibhidhe (1), rannaigheacht mhór (2), and séadna (3):
                                    </p>
                                </div>
                                <blockquote style={{ opacity: 1 }}>

                                    <p className='para-style'>1. <Link to='/map?id=D1062'>Deibhidhe</Link> <br />
                                        Nír filleadh aontroigh tar ais (7 syllables per line, end rhyme between lines a-b, c-d)<br />
                                        láimh ré harsaidh fhóid Durlais,<br />
                                        eang shéanamhuil *luaimneach *lonn (alliteration in every line)<br />
                                        uaibhreach éanamhuil éadtrom.<br />
                                        (^internal rhyme in the second couplet)
                                    </p>

                                    <p className='para-style'>2. <Link to='/map?id=D1065'> Rannaigheacht mhór</Link> <br />
                                        Moladh an ghaoth *Rígh na *reann ( 7 syllables and alliteration in every line)<br />
                                        moladh gach síon ní saoth liom ( end rhyme between lines b-c)<br />
                                        do ní ealbha is foghar tonn<br />
                                        moladh don donn fheardha fhionn.<br />
                                        (^ internal rhyme and aicill rhyme in second couplet)
                                    </p>

                                    <p className='para-style'>3. <Link to='/map?id=D1113'>Séadna</Link> <br />
                                        Fiora Mumhan na múr sochraidh, ( 8 syllables in lines a-c, 7 syllables in lines b-d)<br />
                                        sluagh *síthe ag nach *saoghlach fíon, ( end rhyme between lines b-d, alliteration in every line)<br />
                                        Laoich danab dual dál a mbeidheadh, <br />
                                        slán uam ag gach deighfhear dhíobh. <br />
                                        (^internal rhyme and aicill rhyme in second couplet)
                                    </p>

                                </blockquote>
                            </div>
                            <div className='case-flex-column'>


                                <div className='para-flex'>

                                    <p className='para-style'>The quatrains above are samples of dán díreach, which is the highest register of Classical Gaelic poetry, with the strictest and most intricate metrical requirements. Poems with looser requirements (such as ógláchas) were also common. By the late 17th century, more demotic forms like amhrán would come to replace bardic poetry as the most common form of Gaelic poetry in Ireland. This type of poetry allowed for freer expression and more <Link to='/map?id=D1004'>creative use</Link> of the language:
                                    </p>
                                    <blockquote style={{ opacity: 1 }}>

                                        <p className='para-style'>12 Finnteagh fleadhach slinnteach sleaghach <br />
                                            geimhleach greaghach géibheannach; <br />
                                            ceólbhrugh cluthair bordghlan bruthmhur <br />
                                            córnach cupach craobhdhathach, <br />
                                            fíonbhrugh féasdach buidhneach béasach <br />
                                            daoineach déarcach daorchoimtheach; <br />
                                            teaghdhais taithneamhach dhearrsgnach dhealbhach <br />
                                            áluinn amlach aol-chreatach.
                                        </p>

                                        <p className='para-style'>12 Bright seat, slated, welcoming, weaponed <br />
                                            holding hostages, horses, and prisoners; <br />
                                            sheltering, strong-walled music-mansion of polished tables <br />
                                            goblets, drinking horns in coloured interlace <br />
                                            festive, triumphant, cultivated wine-hall <br />
                                            humane, benevolent, protector of the low-born <br />
                                            pleasant, burnished, shapely dwelling <br />
                                            lovely, adorned, lime-bodied.
                                        </p>

                                    </blockquote>
                                </div>

                            </div>
                            <h5>The End of the Bardic Tradition</h5>

                            <div className='case-flex-column'>
                                <div className='para-flex'>

                                    <p className='para-style'>With the death, defeat or exile of much of the Gaelic upper class during the 17th century, the patronage of Bardic poetry declined and it was eventually replaced by other forms of poetry, like that of <Link to='/profile/m2005'>Dáibhíth Ó Bruadair</Link>. Poets in Munster were already lamenting the loss of patronage by turn of the 17th century, making the difficult transition from being members of the elite by virtue of their profession to <Link to='/map?id=D1136'>hawking their poetry</Link> in the marketplace:
                                    </p>
                                    <blockquote style={{ opacity: 1 }}>

                                        <p className='para-style'>1 Ceist! cia do cheinneóchadh dán? <br />
                                            a chiall is ceirteólas suadh: <br />
                                            an ngéabhadh, nó an áil le haon, <br />
                                            dán saor do-bhéaradh go buan? <br />
                                            <br />
                                            2 Gé dán sin go snadhmadh bhfis, <br />
                                            gach margadh ó chrois go crois <br />
                                            do shiobhail mé an Mhumhain leis - <br />
                                            ní breis é a-nuraidh ná a-nois.
                                        </p>
                                    </blockquote>
                                    <blockquote style={{ opacity: 1 }}>
                                        <p className='para-style'>Question! Who would buy a poem? Its meaning is genuine learning of scholars. Will anyone take, or does anyone lack, a noble poem that shall make him immortal?<br />
                                            <br />
                                            Though this is a poem with close-knit science, I have walked all of Munster with it, every market from cross to cross – nothing gained from last year to this time.
                                        </p>
                                    </blockquote>

                                </div>

                            </div>

                        </>

                        {changeIrish && <CaseHistoricOverviewIrish />}
                    </Container>
                </>
            </div>
        </>
    );
}

export default CaseBardic;
