import { Link } from 'react-router-dom';


function intro({ changeIrish, setAbout, about }) {
    return (
        <section id="about-us" className="padding single-feature">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-7 text-md-start text-center wow fadeInLeft" data-wow-delay="300ms">
                        {changeIrish && <div className="heading-title heading_space">
                            <span>Eolas fúinne:</span>
                            <h2 className="darkcolor bottom30">Cad atá i gceist le MACMORRIS?</h2>
                        </div>}
                        {!changeIrish && <div className="heading-title heading_space">
                            <span>Learn about us:</span>
                            <h2 className="darkcolor bottom30">What is MACMORRIS?</h2>
                        </div>}
                        {/* <h4 className="bottom35">
                            Gaelic culture is vibrant; the English vernacular of the Pale is lively and colourful;
                            agents of the Tudor conquest like Edmund Spenser bring the energies – often dark energies –
                            of the English Renaissance to Ireland; and contact with mainland Europe is routine.</h4>
                        <h4 className="bottom35">
                            Tionscnamh gradaim de chuid na Comhairle um Thaighde in Éirinn (IRC) is ea MACMORRIS, a bhfuil sé
                            mar aidhm aige saibhreas agus fairsinge ghníomhachtaí cultúrtha na hÉireann sna blianta 1541-1660 a
                            léiriú.</h4> */}
                        {!changeIrish &&
                            <>
                                <p className="bottom35">
                                    Our project presents a picture of early modern Ireland, that goes against the prevailing
                                    Anglocentric perspective of literary-historical scholarship by developing this open-access
                                    resource that maps significant cultural actors (of whatever ethnicity) writing in,
                                    or engaging with, Gaelic, English, Latin, Scots, Spanish, Italian, Portuguese,
                                    and Dutch, in late 16th and early 17th century Ireland. In doing that, it provides,
                                    for the first time, an inclusive account of creative, scholarly, and intellectual
                                    activity in the period. </p>
                                <p>
                                    In this account, Gaelic culture is vibrant; the English vernacular
                                    of the Pale is lively and colourful; agents of the Tudor conquest like
                                    Edmund Spenser bring the energies – often dark energies – of the English Renaissance to
                                    Ireland; and contact with mainland Europe is routine.
                                </p>
                            </>
                        }

                        {changeIrish &&
                            <>
                                <p>
                                    Is í aidhm an tionscadail seo léiriú a thabhairt ar Éirinn sa Nua-Aois Luath, a théann in
                                    éadan na ngnáthpheirspictíochtaí, síolraithe ó dhearcadh na gcoilíneach, ar stair agus
                                    litríocht na tíre ag an am. Baintear seo amach trí fhoinse nua a fhorbairt, a bhfuil teacht
                                    go hoscailte air, a thugann léiriú ar na daoine (is cuma cén eitneacht) a bhí ag scríobh,
                                    nó a raibh baint acu le saothrú litríochta, sa Ghaeilge, sa Bhéarla, sa Laidin, san Albainis,
                                    sa Spáinnis, san Iodáilis, sa Phortaingéilis, agus san Ollainnis in Éirinn go mall sa 16ú haois
                                    agus go luath sa 17ú haois. Dá bharr seo, tá cuntas ionchuimsitheach ar ghníomhíocht cultúrtha,
                                    léannta, agus intleachtúil curtha ar fáil don chéad uair riamh.
                                </p>
                                <p>
                                    De réir an chuntais seo, tá cultúr na nGael faoi bhláth; tá Béarla na Páile beo bríomhar;
                                    tugann leithéidí Edmund Spenser agus gníomhairí na Corónach – go minic faoi scáth dorcha an
                                    choilínithe ­– blaiseadh dúinn de Renaissance Sasanach in Éirinn; agus neart nasc leis an
                                    mhór-roinn.
                                </p>
                            </>}

                        {/* <Link to="about-us"> */}
                            <div className="button btnsecondary pagescroll" onClick={() => setAbout(!about)}>About us</div>
                        {/* </Link> */}
                    </div>
                    <div className="col-md-6 col-sm-5 wow fadeInRight" data-wow-delay="350ms">

                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/dZn47_whvEg"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe> */}

                        <iframe
                            width="853"
                            height="480"
                            src="https://www.youtube.com/embed/dZn47_whvEg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default intro;
