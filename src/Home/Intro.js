import { Link } from 'react-router-dom';


function intro({ changeIrish, setAbout, about }) {

    console.log("intro about", about)

    return (
        <section id="about-us" className="padding single-feature bg">
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
                                <div style={{ "textAlign": "justify" }} className="bottom35">

                                    The MACMORRIS project seeks to capture the complexity and richness of early modern
                                    Ireland, by mapping the full range of cultural activity, across languages and ethnic
                                    groups, from 1541 to 1660. This largely bilingual resource provides the first inclusive
                                    account of creative, scholarly, and intellectual activity in a time of conquest,
                                    plantation, and colonisation. It opens a window on a world on the cusp of drastic
                                    change and puts in place the resources for understanding what stood to be lost in a
                                    time of dynamic and often violent encounter.
                                </div>

                            </>
                        }

                        {changeIrish &&
                            <>
                                <div style={{ "textAlign": "justify" }}>
                                    Is í aidhm an tionscadail seo léiriú a thabhairt ar Éirinn sa Nua-Aois Luath, a théann in
                                    éadan na ngnáthpheirspictíochtaí, síolraithe ó dhearcadh na gcoilíneach, ar stair agus
                                    litríocht na tíre ag an am. Baintear seo amach trí fhoinse nua a fhorbairt, a bhfuil teacht
                                    go hoscailte air, a thugann léiriú ar na daoine (is cuma cén eitneacht) a bhí ag scríobh,
                                    nó a raibh baint acu le saothrú litríochta, sa Ghaeilge, sa Bhéarla, sa Laidin, san Albainis,
                                    sa Spáinnis, san Iodáilis, sa Phortaingéilis, agus san Ollainnis in Éirinn go mall sa 16ú haois
                                    agus go luath sa 17ú haois. Dá bharr seo, tá cuntas ionchuimsitheach ar ghníomhíocht cultúrtha,
                                    léannta, agus intleachtúil curtha ar fáil don chéad uair riamh.
                                </div>

                            </>}

                        {/* {
                            changeIrish && <div className="button btnsecondary pagescroll" style={{ "margin": "10px" }}
                                onClick={() => setAbout(!about)}>Faoin Tionscadal</div>
                        }
                        {
                            !changeIrish && <div className="button btnsecondary pagescroll" style={{ "margin": "10px" }}
                                onClick={() => setAbout(!about)}>About us</div>
                        } */}

                    </div>
                    <div className="col-md-6 col-sm-5 wow fadeInRight" data-wow-delay="350ms">

                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/dZn47_whvEg"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe> */}

                        {/* {!changeIrish ? <iframe
                            // width="853"
                            // height="480"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/twSvAgHA67U"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>

                        </iframe> :
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/xpunqllv6Q0"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>

                            </iframe>


                        } */}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default intro;
