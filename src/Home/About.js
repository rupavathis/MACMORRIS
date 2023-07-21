import React, { useEffect, useRef, useState } from 'react';
import './home.scss'
import Container from "@mui/material/Container";
import Header from './Header';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ScrollToTop from '../Home/ScrollToTop';
import Footer from '../Home/Sponsors';

function About({ changeIrish, setChangeIrish }) {

    return (
        <>
            <ScrollToTop />

            <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />

            <div className='case-wrapper'>
                <>
                    <div className='case-study-top-wrapper'>
                        <div className='case-study-title-wrapper'>
                            <h1 className="header-title" style={{ fontSize: '5.5rem', marginTop: '10%' }}>
                                <strong>About MACMORRIS</strong>
                            </h1>
                        </div>

                    </div>
                    <Container fixed>
                        <>
                            <div className='case-flex-column'>
                                <div className='para-flex'>
                                    <span className="dropcap">M</span>
                                    <p className='para-style'>ACMORRIS recovers the vibrancy and complexity of Ireland’s transformative years between Henry VIII’s
                                        assumption of the kingship of Ireland in 1541 and the Restoration in 1660.</p>

                                    <p className='para-style'>
                                        It represents a dramatic period of conflict, change, and innovation which transformed Ireland. The
                                        dataset provides a research engine for a newly interdisciplinary and multilingual engagement with a period
                                        that was, itself, ineluctably plural, linguistically and culturally.
                                    </p>

                                    <p className='para-style'>
                                        Project Reference: IRCLA/2019/116
                                    </p>



                                </div>
                            </div>



                            <div className='case-flex-column'>
                                <h4> MACMORRIS has two main components</h4>
                                <div className='para-flex'>
                                    <p className='para-style'>
                                        It is a dataset containing biographical and bibliographical metadata relating to people active in
                                        Ireland between 1541 and 1660. Along with soldiers, administrators, merchants, clergy etc.,
                                        this dataset incorporates cultural producers of all kinds, across languages – poets, pamphleteers,
                                        chroniclers, theologians; translators; inventors and innovators; patrons; and members of the aois
                                        ealadhan (learned class). This metadata can be searched and viewed through our search screen, and
                                        can be visualised using our network interface.
                                    </p>
                                    <p className='para-style'>
                                        Focusing on Munster in the period 1569-1607, it explores how patterns of contiguity, confluence
                                        and crossover make Ireland, all at once, a place of deeply embedded cultural traditions, a site
                                        of vigorous exchange and, ultimately, the locus of dramatic change over time. Through a Deep Map
                                        of the region we provide and visualise textual material associated with cultural actors in the
                                        province.
                                    </p>

                                </div>
                            </div>

                            <h5> Affiliates</h5>


                            <div className='case-flex-column'>
                                <div className='para-flex'>
                                    <p className='para-style'>  This project was only possible due to the collaboration and support of colleagues, both institutional
                                        and individual.</p>
                                </div>
                            </div>

                            <h5> Institutional Affiliates</h5>

                            <div className='case-flex-column'>
                                <div className='para-flex'>
                                    <p className='para-style'><a href='https://bardic.celt.dias.ie/'>Dublin Institute of Advanced Studies</a>: Thanks to DIAS for sharing with us the backend metadata
                                        of the Bardic Poetry Database from which we established our list of Bardic poems, poets, patron
                                        and patronage connections.</p>
                                    <p className='para-style'>
                                        <a href='https://www.dib.ie/'>
                                            Dictionary of Irish Biography </a>: Thanks to the DIB for sharing with the backend .xml files of the DIB,
                                        from which we were able to extract the embedded network connections from.
                                    </p>
                                    <p className='para-style'>
                                        <a href='https://www.Léamh.org/'>
                                            Léamh</a>: Thanks to Léamh for collaborating with us on producing, alongside hosting, a number of quatrains
                                        from different bardic poems from our Munster case study.
                                    </p>
                                    <p className='para-style'>
                                        <a href='https://www.maynoothuniversity.ie/experiential-learning/students/research'>
                                            Maynooth SPUR Programme</a>:Thanks to the SPUR programme for funding and facilitating three different
                                        student projects affiliated with MACMORRIS between 2020 and 2023. Thanks to Éabha Puirséil for her work
                                        on the MACMORRIS bibliography and one of the texts available on Léamh. Thanks to Conor Killian for
                                        his work on data cleaning and data entry of biographical metadata and network connection metadata.
                                        Thanks to Emma Cooling for her work on the MACMORRIS learning guides
                                    </p>


                                </div>

                            </div>

                            <h5>
                                Individual affiliates</h5>
                            <ol className='ordered-affiliates'>
                                <li><a href='https://englishcomplit.unc.edu/faculty-directory/david-john-baker/'>David Baker (English and Comparative Literature, UNC Chapel Hill)</a></li>
                                <li><a href='https://www.universityofgalway.ie/our-research/people/english-and-creative-arts/marielouisecoolahan/'>Marie-Louise Coolahan (English and Creative Arts, NUI Galway)</a></li>
                                <li><a href='https://history.uconn.edu/faculty-by-name/brendan-kane/'>Brendan Kane (History, UCONN)</a></li>
                                <li><a href='https://www.maynoothuniversity.ie/people/stephen-oneill'>Stephen O’Neill (English, Maynooth)</a></li>
                                <li><a href='https://www.maynoothuniversity.ie/people/kevin-tracey'>Kevin Tracey (English, Maynooth)</a></li>
                                <li><a href='https://www.gla.ac.uk/schools/critical/staff/willymaley/'>Willy Maley (Critical Studies, University of Glasgow)</a></li>
                                <li><a href='https://pure.royalholloway.ac.uk/en/persons/deana-rankin'>Deana Rankin (English and Drama, Royal Holloway)</a></li>
                                <li><a href='https://people.ucd.ie/marc.caball'>Marc Caball (History, UCD)</a></li>
                                <li><a href='https://www.hope.ac.uk/si/dr-ruth-canning.html'>Ruth Canning (History and Politics, Liverpool Hope)</a></li>
                                <li><a href='https://people.ucd.ie/jane.grogan'>Jane Grogan (English, Drama and Film, UCD)</a></li>
                                <li><a href='https://profiles.sussex.ac.uk/p131314-andrew-hadfield/about'>Andrew Hadfield (English, Sussex)</a></li>
                                <li><a href='https://people.tcd.ie/Profile?Username=mhoyne'>Mícheál Hoyne (Gaeilge, TCD)</a></li>
                                <li><a href='https://mooreinstitute.ie/about-us/core-staff/'>David Kelly (Digital Humanities Manager, NUI Galway)</a></li>
                                <li><a href='https://irishstudies.nd.edu/scholars/faculty-fellows/sarah-mckibben/'>Sarah McKibben (Irish Studies, Notre Dame)</a></li>
                                <li><a href='https://www.maynoothuniversity.ie/people/eoghan-raghallaigh'>Eoghan Ó Raghallaigh (Gaeilge, Maigh Nuad)</a></li>
                                <li><a href='https://pure.au.dk/portal/en/persons/isabelle-torrance(c9ba2efc-ef38-4bf2-8061-ae5f33b8cb0a).html'>Isabelle Torrance (English, Aarhus)</a></li>
                            </ol>
                            <h4>
                                Acknowledgements
                            </h4>

                            <div className='case-flex-column'>
                                <div className='para-flex'>
                                    <p className='para-style'>
                                        We would like to thank the following institutions for their kind permission to use images from their collections:
                                    </p>
                                    <ol className='ordered-affiliates'>
                                        <li><a href='https://www.bl.uk/'>British Library</a></li>
                                        <li><a href='https://marshlibrary.ie'>Marsh’s Library</a></li>
                                        <li><a href='https://www.nli.ie/'>National Library of Ireland</a></li>
                                        <li><a href='https://www.rmg.co.uk/national-maritime-museum'>National Maritime Museum, London</a></li>
                                        <li><a href='https://www.tcd.ie/library/'>Trinity College Library</a></li>
                                        <li><a href='https://www.ria.ie/library'>Royal Irish Academy</a></li>
                                    </ol>
                                </div>
                            </div>

                        </>





                    </Container>
                </>
            </div>
            <Footer />
        </>
    );
}

export default About;
