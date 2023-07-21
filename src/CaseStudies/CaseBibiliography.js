
import '../App.css'
import Container from '@mui/material/Container';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Home/Header";
import CaseHistoricOverviewIrish from './CaseHistoricOveriewIrish';
import './case-study.scss';
import ScrollToTop from '../Home/ScrollToTop';
import Footer from '../Home/Sponsors';


function CaseBibiliography({ changeIrish, setChangeIrish }) {

    return (
        <>

            <ScrollToTop />

            <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />

            <div className='case-wrapper'>
                <>
                    <div className='case-study-top-wrapper'>
                        <div className='case-study-title-wrapper'>
                            <h1 className="header-title" style={{ fontSize: '5.5rem' }}><strong>MACMORRIS: Bibliography</strong></h1>
                        </div>
                        <div className="title-img-wrapper">
                            <img src="/images/case-studies/spenser.webp" alt="" style={{
                                opacity: 0.5, width: "auto",
                                height: "600px", margin: 10
                            }} />
                        </div>
                    </div>
                    <Container fixed>

                        {!changeIrish &&
                            <>
                                <div className='case-flex-column'>
                                    <div className='para-flex'>
                                        MACMORRIS: Bibliography

                                        <h5> Background </h5>

                                        <ul className='unorder-list'>
                                            <li>Tadhg Ó hAnnracháin & Robert Armstrong eds., Community in early modern Ireland (Dublin: Four Courts, 2006). </li>
                                            <li>Tamsin Badcoe, Edmund Spenser and the Romance of Space. (Manchester: Manchester</li>
                                            <li>University Press, 2019). </li>
                                            <li>David Baker, and Willy Maley, eds.  British Identities and English Renaissance Literature (Cambridge: Cambridge University Press, 2002). </li>
                                            <li>David Baker, Willy Maley, and Pat Palmer, “‘What ish my network? Introducing MACMORRIS: Digitising cultural activity and collaborative networks in early modern Ireland.” Literature Compass 15 (2018): (https://onlinelibrary.wiley.com/doi/10.1111/lic3.12496).  </li>
                                            <li>David Baker, Willy Maley, and Pat Palmerm, “Enter MACMORRIS.” Dublin Review of Books. (2019) (https://drb.ie/articles/enter-macmorris/). </li>
                                            <li>David Baker, and Pat Palmer, Early Modern Criticism in a Time of Crisis. (EMC Imprint, 2022): (https://emctc.tome.press/) </li>
                                            <li>Toby Barnard, A Guide to the Sources for Irish Material Culture: 1500-1900 (Maynooth: Four Courts Press, 2005). </li>
                                            <li>Osborn Bergin, Irish Bardic Poetry: Texts and Translations. (Dublin: Dublin Institute of Advanced Studies, 2003). </li>
                                            <li>Ciaran Brady, and Jane Ohlmeyer, eds.  British Interventions in Early Modern Ireland. (Cambridge: Cambridge University Press, 2005.) </li>
                                            <li>Brendan Bradshaw ed., And so Began the Irish Nation: Nationality, Nationalism and National Consciousness in Pre-Modern Ireland (Farnham: Ashgate, 2015). </li>
                                            <li>Marc Caball: Poets and politics: continuity and change in Irish poetry (Cork University Press, 1998). </li>
                                            <li>Marc Caball, ‘Creating an Irish Identity: Print, Culture, and the Irish Franciscans of Louvain’, in Forming Catholic Communities: Irish, Scots and English College Networks in Europe, 1568-1918, ed. Liam Chambers and Thomas O'Connor (Leiden: Brill, 2018). </li>
                                            <li>Eve Campbell, Elizabeth Fitzpatrick and Audrey Horning eds., Becoming and Belonging in Ireland 1200-1600 (Cork University Press, 2018). </li>
                                            <li>David Cannadine, “British National Biography and Global British Lives: From the DNB to</li>
                                            <li>the ODNB – and Beyond”. In ‘True Biographies of Nations?’: The Cultural Journeys of Dictionaries of National Biography, edited by Karen Fox, 193-208. (ANU Press, 2019). (http://doi.org/10.22459/TBN.2019.11.) </li>
                                            <li>Ruth Canning, The Old English in Early Modern Ireland: the Palesmen and the Nine Years War, 1594-1603 (Woodbridge: Boydell and Brewer, 2019). </li>
                                            <li>Nicholas Canny, 'The Formation of the Irish Mind: Religion, Politics and Gaelic Literature, 1580-1750', Past and Present 95 (1982), 91-116. </li>
                                            <li>Nicholas Canny, 'Edmund Spenser and the Development of an Anglo-Irish Identity', Yearbook of English Studies 13 (1983), 1-19. </li>
                                            <li>Nicholas Canny, Making Ireland British 1580-1650. (Oxford: Oxford University Press, 2001). </li>
                                            <li>Nicholas Canny, Imagining Ireland's Pasts: Early Modern Ireland through the Centuries. (Oxford: Oxford University Press, 2021). </li>
                                            <li>Claire Carroll, Exiles in a Global City: The Irish and Early Modern Rome, 1609-1783 (Leiden: Brill, 2017). </li>
                                            <li>Claire Carroll,  Circe’s Cup: Cultural Transformations in Early Modern Writing About Ireland.  (Cork: Cork University Press, 2001). </li>
                                            <li>Aidan Clark, The Old English in Ireland, 1625-42 (Ithaca: Cornell University Press, 1966). </li>
                                            <li>SJ Connolly, Contested Ireland: Ireland 1460-1630 (Oxford: Oxford University Press, 2007). </li>
                                            <li>Maire-Louise Coolahan, Women, Writing, and Language in Early Modern Ireland. (Oxford University Press, 2010). </li>
                                            <li>Patricia Coughlan, ed.  Spenser and Ireland: An Interdisciplinary Perspective (Cork: Cork University Press, 1989). </li>
                                            <li>Sarah Covington, Vincent Carey, and Valerie McGowan-Doyle, Early Modern Ireland: New Sources, Methods, and Perspectives (Abingdon: Routledge, 2019). </li>
                                            <li>Bernadette Cunningham, The World of Geoffrey Keating: History, Myth and Religion in Seventeenth-Century Ireland. (Dublin: Four Courts Press, 2004). </li>
                                            <li>Bernadette Cunningham, The Annals of the Four Masters: Irish History, Kingship and</li>
                                            <li>Society in the Early Seventeenth Century. (Dublin: Four Courts Press, 2010). </li>
                                            <li>Patrick J. Duffy, David Edwards and Elizabeth Fitzpatrick eds., Gaelic Ireland c.1250-c.1650: Land, Lordship and Settlement (Dublin: Four Courts, 2001). </li>
                                            <li>Seán Duffy ed., Medieval Ireland: An Encyclopedia (Dublin, 2004). </li>
                                            <li>Steven G Ellis, Tudor Ireland: crown, community, and the conflict of cultures, 1470-1603. (London: Longman Publishing Group, 1985). </li>
                                            <li>Gerard Farrell, The 'Mere Irish' and the Colonisation of Ulster, 1570-1641 (Springer, 2017). </li>
                                            <li>Elizabeth Fitzpatrick, Royal Inauguration in Gaelic Ireland C. 1100-1600: A Cultural Landscape Study (Boydell, 2004). </li>
                                            <li>Elizabeth Fitzpatrick, ‘Ollamh, biatach, comharba: lifeways of Gaelic learned families in medieval and early modern Ireland’, Proceedings of the XIVth International Celtic Congress, Maynooth 2011. </li>
                                            <li>Elizabeth Fitzpatrick, ‘The landscape and Bardic School settlement of the Uí Dhálaigh Gaelic poets of Muinter Bháire’, in Princes, prelates and poets in medieval Ireland: essays in honour of Katharine Simms (Dublin: Four Courts Press, 2013). </li>
                                            <li>Elizabeth FitzPatrick and Coilin Ó Drisceoil, ‘The landscape and Gaelic law school settlement of the O’Doran brehons, Ballyorley, Co. Wexford’, in Medieval Wexford (Dublin: Four Courts Press, 2016). </li>
                                            <li>Raymond Gillespie, Devoted People: Belief and Religion in Early Modern Ireland (Manchester: Manchester University Press, 1997). </li>
                                            <li>Raymond Gillespie, Devoted People: Belief and Religion in Early Modern Ireland (Manchester: Manchester University Press, 1997). </li>
                                            <li>Raymond Gillespie,and Andrew Hadfield, eds.  History of the Irish Book, vol. III: 1500-1800. (Oxford: Oxford University Press, 2005). </li>
                                            <li>Andrew Hadfield, Edmund Spenser: A Life. (Oxford: Oxford University Press, 2012). </li>
                                            <li>Thomas Herron, and Michael Potterton (ed), Ireland in the Renaissance c.1540-1660 (Dublin: Four Courts Press, 2007). </li>
                                            <li>Brendan Kane, The Politics and Culture of Honour in Britain and Ireland, 1541-1641.</li>
                                            <li>(Cambridge: Cambridge University Press, 2010). </li>
                                            <li>Brendan Kane, 'Making the Irish European: Gaelic Honour Politics and its Continental Contexts', Renaissance Quarterly 61 (2008), 1139-66.  </li>
                                            <li>Brendan Kane & Valerie McGowan-Doyle (eds), Elizabeth I and Ireland (Cambridge, 2007). </li>
                                            <li>John Kerrigan, Archipelagic English: Literature, History, and Politics, 1603-1707. (Oxford: Oxford University Press, 2008). </li>
                                            <li>Colm Lennon, Sixteenth-Century Ireland: The Incomplete Conquest–Irish Landlords and the Extension of English Royal Power (Dublin: Gill & Macmillan, 2005). </li>
                                            <li>James Lyttleton and Colin Rynne eds., Plantation Ireland: Settlement and Material Culture, c.1550-c.1700 (Dublin: Four Courts Press, 2009). </li>
                                            <li>Christopher Maginn, ‘Civilizing’ Gaelic Leinster: The Extension of Tudor Rule in the O'Byrne and O'Toole Lordships. (Dublin: Four Courts Press, 2005). </li>
                                            <li>Anthony M. McCormack, The Earldom of Desmond 1463-1583: The Decline and Crisis of a Feudal Lordship (Dublin: Four Courts Press, 2005). </li>
                                            <li>Valerie McGowan-Doyle, The Book of Howth: Elizabethan Conquest and the Old English (Cork: Cork University Press, 2011). </li>
                                            <li>Éamonn Ó Ciardha, 'Irish-language Sources for the History of Early Modern Ireland', in Oxford Handbook of Modern Irish History, ed. Alvin Jackson (Oxford University Press, 2014). </li>
                                            <li>Thomas O'Connor, The Irish in Europe 1580-1815 (Dublin: Four Courts Press, 2001). </li>
                                            <li>Thomas O'Connor and Liam Chambers eds., Forming Catholic Communities: Irish, Scots and English College Networks in Europe 1560s-1918 (Leiden: Brill, 2018). </li>
                                            <li>Thomas O'Connor and Liam Chambers eds., Catholic Communities Abroad: Education, Migration and Catholicism in Early Modern Europe (Manchester: Manchester University Press, 2017). </li>
                                            <li>James O’Neill, The Nine Years War 1593-1603: O’Neill, Mountjoy and the Military Revolution. (Dublin: Four Courts Press, 2017). </li>
                                            <li>Stephen O’Neill, Staging Ireland: Representations in Shakespeare and Renaissance Drama. (Dublin: Four Courts Press, 2007). </li>
                                            <li>Turlough O’Riordan, “The Irish World: How to Revise a Long-Standing Dictionary</li>
                                            <li>Project.” In ‘True Biographies of Nations?’: The Cultural Journeys of Dictionaries of</li>
                                            <li>National Biography, edited by Karen Fox, 37-55. (ANU Press, 2019).</li>
                                            <li>https://doi.org/10.22459/TBN.2019.03. </li>
                                            <li>Patricia Palmer, Language and Conquest in Early Modern Ireland (Cambridge: Cambridge University Press, 2001). </li>
                                            <li>Patricia Palmer, The Severed Head and the Grafted Tongue: Literature, Translation and Violence in Early Modern Ireland. (Cambridge: Cambridge University Press, 2013). </li>
                                            <li>Deana Rankin, Between Spenser and Swift: English Writing in Seventeenth-Century Ireland. (Cambridge: Cambridge University Press, 2005). </li>
                                        </ul>

                                        <h5> Gaelic Sources </h5>
                                        <ul className='unorder-list'>
                                            <li>Osborn Bergin, Irish Bardic Poetry: Texts and Translations. (Dublin: Dublin Institute of Advanced Studies, 2003)  </li>
                                            <li>Caoimhín Breatnach, ‘Early Modern Irish Prose’, in K, McCone & K, Simms (eds), Progress in Medieval Irish Studies (Maynooth, 1996), 189–206. </li>
                                            <li>Pádraig A. Breatnach, “The Chief’s Poet.” Proceedings of the Royal Irish Academy: Archaeology, Culture, History, Literature 83c (1983): 37-79.  </li>
                                            <li>Pádraig A. Breatnach, “A Poem on the End of Patronage.” Éigse 31 (1999): 79–88. </li>
                                            <li>James Carney, ‘Society and the Bardic Poet’, Studies: An Irish Quarterly Review 62.247/248 (1973), 223–250. </li>
                                            <li>Carney, James. The Irish Bardic Poet: A Study in the Relationship of Poet & Patron as Exemplified in the Persons of the Poet Eochaidh Ó hEoghusa and his Various Patrons, Mainly Members of the Maguire Family of Fermanagh. (Dublin: Dublin Institute of Advanced Studies, 1985). </li>
                                            <li>David Greene Duanaire Mhéig Uidhir: The Poem-book of Cú Chonnacht Mág Uidhir, Lord of Fermanagh 1566–1589, Edited from the Copenhagen manuscript. (Dublin: Dublin Institute of Advanced Studies, 1991). </li>
                                            <li>Margo Griffin-Wilson, “Fear Feasa Ó’n Cháinte’s Petition for Reconciliation.” In Lorg na Leabhar: A Festschrift for Pádraig A. Breatnach, ed. Caoimhín Breatnach, Meidhbhín Ní Úrdail, Gordon Ó Riain, 235–69. (Dublin: Four Courts Press, 2019.) </li>
                                            <li>Elinor Knott, Irish syllabic poetry 1200–1600 (Cork and Dublin, 1928). </li>
                                            <li>Elinor Knott, The bardic poems of Tadhg Dall Ó hUiginn (London, 1922–6), esp. vol. 1, li-lxiv (on literary style). </li>
                                            <li>Prionsias Mac Cana, ‘The Poet as Spouse of His Patron’, Ériu 39 (1988), 79–85. </li>
                                            <li>Terence McCaughey, ‘Bards Beasts and Men’, in D. Ó Corráin, L. Breatnach & K. McCone (eds), Sages, Saints and Storytellers: Celtic Studies in Honour of Professor James Carney (Maynooth 1989), 102–121. </li>
                                            <li>Mícheál Mac Craith, Lorg na hIasachta ar na dánta grá (Dublin, 1989). </li>
                                            <li>Sarah E McKibben, “Bardic Close Reading.” In Early Modern Ireland: New Sources, Methods, and Perspectives, ed. Sarah Covington et. al, 96-112. (London: Routledge, 2018). </li>
                                            <li>Sarah E McKibben, “Guaranteeing What Cannot Be Guaranteed. Defending and Adapting Bardic Patronage in Ag so an Chomairce, a Chormaic (ca. 1585) by Tadhg Dall Ó HUiginn.” North American Journal of Celtic Studies 2.1 (2018): 1. (https://doi.org/10.26818/nortamerceltstud.2.1.0001). </li>
                                            <li>Damian McManus, ‘Classical Modern Irish’, in K. McCone and K. Simms (eds) Progress in medieval Irish Studies (Maynooth, 1996), 165–87. </li>
                                            <li>Damian McManus, ‘‘The smallest man in Ireland can reach the tops of her trees’: Images of the King’s Peace and Bounty in Bardic Poetry’, CSANA Yearbook 5 (Dublin 2006), 61–116. </li>
                                            <li>Damian McManus, ‘Surnames and Scions: Adjectival Qualification of Christian Names and Cognomina in Classical Irish Poetry, Ériu 63 (2013), 117–43. </li>
                                            <li>Damian McManus, ‘Female ancestry and mother’s kin in Classical Irish poetry’, in Caoimhín Breatnach and Meidhbhín Ní Úrdail (eds), Aon don Éigse. Essays marking Osborn Bergin’s centenary lecture on Bardic Poetry (Dublin, 2015), 193–219. </li>
                                            <li>Damian mcManus, ‘Celebrating the Female in Classica Irish Poetry: The Wife’, Ériu 65 (2015), 137–68. </li>
                                            <li>Damian Mc Manus & Eoin Ó Raghallaigh (eds), A Bardic Miscellany (Dublin, 2010). </li>
                                            <li>Breandán Ó Buachalla, ‘‘Annála Ríoghachta Éireann’ is ‘Foras Feasa ar Éirinn’: An Comhthéacs Comhaimseartha’, Studia Hibernica 22/23 (1982/3), 59–105. </li>
                                            <li>Breandán Ó Buachalla: ‘Na Stíobhartaigh agus an t-aos léinn: Cing Séamas’, Proceedings of the Royal Irish Academy 83C (1983), 81–134 </li>
                                            <li>Brian Ó Cuív, ‘The Linguistic Training of the Mediaeval Irish Poet’, Celtica 10 (1973), 114-40. </li>
                                            <li>Brian Ó Cuív ed., Seven Centuries of Irish Learning 1000-1700 (Dublin: Stationery Office, 1961) – includes Green ‘The Professional Poets’. </li>
                                            <li>Pádraig Ó Macháin, ‘The Flight of the Poets: Eóghan Ruadh and Fearghal Óg Mac an Bhaird in Exile’, Seanchas Ard Mhacha 21/2 (2007-8), 39-50. </li>
                                            <li>Cecil O’Rahilly, Five Seventeenth-Century Political Poems. (Dublin, 1952). </li>
                                            <li>Michelle O’Riordan, The Gaelic Mind and the Collapse of the Gaelic World. (Cork: Cork</li>
                                            <li>University Press, 1990). </li>
                                            <li>Michelle O’Riordan, Irish Bardic Poetry and Rhetorical Reality. (Cork: Cork University Press, 2007). </li>
                                            <li>Michelle O’Riordan, Poetics and Polemics: Reading Seventeenth-Century Irish Political Verse. (Cork: Cork University Press, 2021). </li>
                                            <li>Katharine Simms, Medieval Gaelic sources (Dublin: Four Courts Press, 2009). </li>
                                            <li>Katharine Simms, 'The Brehons in Later medieval Ireland', in Brehons, Sergeants and Attorneys, ed. D Hogan and W. Osborough (Blackrock: Irish Academic Press, 1990). </li>
                                            <li>Katharine Simms, 'Bards and Barons: the Anglo-Irish aristocracy and the native culture', </li>
                                            <li>in Medieval Frontier Societies, ed. Robert Bartlett and Angus Mackay (Oxford: Clarendon, 1992). </li>
                                            <li>Katharine Simms, 'Literacy and the Irish Bards', in Literacy in Medieval Celtic Societies, ed. H. Pryce (Cambridge University Press, 1998). </li>
                                            <li>Katharine Simms, 'Charles Lynegar, the Ó Luinín Family and the Study of Seanchas’, in A Miracle of Learning, ed. Toby Barnard (Aldershot: Ashgate, 1998). </li>
                                            <li>Katharine Simms, From kings to warlords: the changing political structure of Gaelic Ireland in the later middle ages (London: Boydell & Brewer, 2000). </li>
                                            <li>Katharine Simms, 'Bardic Schools, Learned Families', in Seán Duffy ed., Medieval Ireland: An Encyclopedia (Dublin, 2004). </li>
                                            <li>Katharine Simms, ‘The Poetic Brehon Lawyers of the early 16th century Ireland’, Ériu 57 (2007), 121-32. </li>
                                            <li>Katharine Simms, 'The Barefoot Kings: Literary Image and Reality in Later Medieval Ireland, Proceedings of the Harvard Celtic Colloquium 30 (2010) 1-21. </li>
                                            <li>Katharine Simms, 'Foreign Apologues in Bardic Poetry', in The English Isles: cultural </li>
                                            <li>transmission and political conflict in Britain and Ireland, 1100–1500, ed. Seán Duffy and Susan Foran (Dublin: Four Courts Press. 2013).</li>
                                        </ul>

                                        <h5> Network Analysis </h5>
                                        <ul className='unorder-list'>
                                            <li>Ruth Ahnert, and Sebastian E. Ahnert. “Protestant Letter Networks in the Reign of Mary I: A Quantitative Approach.” ELH 82.1 (2015): 1-27. </li>
                                            <li>Ruth Ahnert, and Sebastian E. Ahnert. “Metadata, Surveillance and the Tudor State.” History Workshop Journal (2019): 1-26. </li>
                                            <li>Ruth Ahnert, Sebastian E. Ahnert, Catherine Nicole Coleman, and Scott B. Weingart. The Network Turn: Changing Perspectives in the Humanities. Cambridge: Cambridge University Press, 2020. </li>
                                            <li>Bernhard Bauer, “Venezia, Biblioteca Marciana, Zanetti lat. 349 an Isolated Manuscript? A (Network) Analysis of Parallel Glosses on Orosius' Historiae Adversus Paganos.” Etudes Celtique 45 (2019):91-106. </li>
                                            <li>Stephen Borgatti, “Centrality and Network Flow.” Social Networks 27 (2005): 55–71.  </li>
                                            <li>Evan Bourke, “Female Involvement, Membership, and Centrality: A Social Network Analysis of the Hartlib Circle.” Literature Compass 14.4 (2017): 1-17. </li>
                                            <li>Evan Bourke, “Networking Early Modern Irish Women.” Irish Historical Studies 46, no.170 (2022): 270-85. </li>
                                            <li>Evan Bourke and Deirdre Nic Chárthaigh, “Patronage networks in Gaelic Ireland ca. 1541 – ca. 1660”, Renaissance Quarterly (Forthcoming).</li>
                                            <li>Blaine Greteman, Networking Print in Shakespeare’s England: Influence, Agency, and</li>
                                            <li>Revolutionary Change. (Stanford: Stanford University Press, 2021). </li>
                                            <li>John R. Ladd, Jessica Otis, Christopher N. Warren, and Scott Weingart. “Exploring</li>
                                            <li>and Analyzing Network Data with Python.” Programming Historian 6 (2017):</li>
                                            <li>https://doi.org/10.46430/phen0064. </li>
                                            <li>Bronagh Ann McShane, “Visualising the Reception and Circulation of Early Modern Nuns’ Letters.” Journal of Historical Network Research 2 (2018): 1-25. </li>
                                            <li>Catherine Medici, "Using network analysis to understand early modern women." Early Modern Women: An Interdisciplinary Journal 13.1 (2018): 153-162. </li>
                                            <li>Mark E. Newman, Networks: An Introduction. (Oxford: Oxford University Press, 2018). </li>
                                            <li>Mark E. Newman, “The Structure and Function of Complex Networks.” SIAM Review 45.2 (2003): 167-256. </li>
                                            <li>Tore Opshal, “Triadic closure in two-mode networks: Redefining the global and local</li>
                                            <li>clustering coefficients.” Social Networks 35.2 (2013): 159-167. </li>
                                            <li>Yann C. Ryan, and Sebastian E. Ahnert, “The Measure of the Archive: The Robustness of Network Analysis in Early Modern Correspondence.” Journal of Cultural Analytics 7 (2021): 57-88. </li>
                                            <li>Minna Tamper, Petri Leskinen, and Eero Hyvönen, “Visualizing and Analyzing Networks of</li>
                                            <li>Named Entities in Biographical Dictionaries for Digital Humanities Research” (2019): https://doi.org/10.29007/zqs5. </li>
                                            <li>Minna Tamper, Petri Leskinen, Kasper Apajalahti, and Eero Hyvönen. “Using Biographical</li>
                                            <li>Texts as Linked Data for Prosopographical Research and Applications.” In Digital Heritage. Progress in Cultural Heritage: Documentation, Preservation, and Protection, edited by Marinos Ioannides et al, 125–37. (Cham: Springer International Publishing, 2018). https://doi.org/10.1007/978-3-030-01762-0_11. </li>
                                            <li>Jenna Townend, “Quantitative and Qualitative Approaches to Early-modern Networks: The Case of George Herbert (1593–1633) and his Imitators.” Literature Compass 14.3 (March 2017): 1-14. </li>
                                            <li>Esther Van Raamsdonk, and Ruth Ahnert, “John Milton’s Network and the Republic of</li>
                                            <li>Letters”. Renaissance and Reformation / Renaissance et Réforme 44.3 (2021): 81–110. </li>
                                            <li>Ingeborg Van Vugt, “Using Multi-Layered Networks to Disclose Books in the Republic of </li>
                                            <li>Letters.” Journal of Historical Network Research 1 (2017): 25-51. </li>
                                            <li>Ingeborg Van Vugt,  "Networking in the Republic of Letters: Magliabechi and the Dutch </li>
                                            <li>Republic." Journal of Interdisciplinary History 53.1 (2022): 117-141. </li>
                                            <li>Christopher Warren et al., “Six Degrees of Francis Bacon: A Statistical Method for</li>
                                            <li>Reconstructing Large Historical Social Networks,” Digital Humanities Quarterly 10.3</li>
                                            <li>(2016): 1-15. </li>
                                            <li>Christopher Warren et al, “Gender and Name Recognition,” “Six Degrees of Francis Bacon,” </li>
                                            <li>March 20, 2013: http://6dfb.tumblr.com/post/45833622936/gender-and-namerecognition. </li>
                                            <li>Joseph Yose, Ralph Kenna, Máirín MacCarron, and Pádraig MacCarron. “Network Analysis</li>
                                            <li>of the Viking Age in Ireland as Portrayed in Cogadh Gaedhel re Gallaibh.” Royal Society Open Science Vol. 5.1 (2018): https://doi.org/10.1098/rsos.171024.</li>
                                        </ul>

                                        <h5> Deep Mapping </h5>
                                        <ul className='unorder-list'>
                                            <li>J. H. Andrews,  “The Mapping of Ireland’s Cultural Landscape, 1550-1630.” In Patrick </li>
                                            <li>J. Duffy David Edwards & Liz FitzPatrick (eds.), Gaelic Ireland c.1250–c.1650: Land, lordship & settlement (Dublin: Four Courts Press, 2001). </li>
                                            <li>J. H. Andrews, “Sir Richard Bingham and the Mapping of Western Ireland.” Proceedings of </li>
                                            <li>the Royal Irish Academy. Section C: Archaeology, Celtic Studies, History, Linguistics, Literature 103C, no. 3 (2003): 61–95. </li>
                                            <li>Chris Barrett, Early Modern English Literature and the Poetics of Cartographic Anxiety. </li>
                                            <li>(Oxford University Press, 2018). </li>
                                            <li>David J., Bodenhamer,  John Corrigan, and Trevor M. Harris, eds. Making Deep Maps: </li>
                                            <li>Foundations, Approaches, and Methods. (London: Routledge, 2021). </li>
                                            <li>David J., Bodenhamer, "Making the invisible visible: Place, spatial stories and deep </li>
                                            <li>maps." Literary mapping in the digital age. Routledge, 2016. 225-238. </li>
                                            <li>David J., Bodenhamer,  John Corrigan, and Trevor M. Harris, Deep maps and spatial </li>
                                            <li>narratives. (Indiana University Press, 2015). </li>
                                            <li>David J., Bodenhamer,  John Corrigan, and Trevor M. Harris, "Deep mapping and the spatial </li>
                                            <li>humanities." International Journal of Humanities and Arts Computing 7.1-2 (2013): 170-175. </li>
                                            <li>David J. Bodenhamer,  John Corrigan, and Trevor M. Harris, eds. The spatial humanities: </li>
                                            <li>GIS and the future of humanities scholarship. (Indiana University Press, 2010). </li>
                                            <li>David Cooper, and Ian N Gregory. “Mapping the English Lake District: A Literary GIS: </li>
                                            <li>Mapping the English Lake District.” Transactions of the Institute of British Geographers 36, no. 1 (January 2011): 89–108. https://doi.org/10.1111/j.1475-5661.2010.00405.x. </li>
                                            <li>Imogen Humphris, Lummina G. Horlings, and Iain Biggs, ‘Getting Deep into Things’: Deep </li>
                                            <li>Mapping in a ‘Vacant’ Landscape, in Co-Creativity and Engaged Scholarship, ed. Alex Franklin (Palgrave Macmillan, 2022). </li>
                                            <li>Randa El Khatib, and Marcel Schaeben. “Why Map Literature? Geospatial Prototyping for </li>
                                            <li>Literary Studies and Digital Humanities.” Digital Studies/Le Champ Numérique 10, no. 1 (September 21, 2020): 7. https://doi.org/10.16995/dscn.381. </li>
                                            <li>Silvia Loeffler, “Glas Journal: Deep Mappings of a Harbour or the Charting of Fragments, </li>
                                            <li>Traces and Possibilities.” Humanities 4, no. 3 (September 18, 2015): 457–75. https://doi.org/10.3390/h4030457. </li>
                                            <li>Cliff McLucas, ‘There are ten things that I can say about these deep maps’ (n.d.): </li>
                                            <li>http://cliffordmclucas.info/deep-mapping.html</li>
                                            <li>Mary Modeen, and Iain Biggs, Creative engagements with ecologies of place: Geopoetics, </li>
                                            <li>Deep mapping and slow residencies. (London: Routledge, 2020). </li>
                                            <li>Catherine Porter et al, 'Cartographic Connections - the digital analysis and curation of </li>
                                            <li>sixteenth-century maps of Great Britain and Ireland.' e-Perimetron 14 (2019), 97-109 </li>
                                        </ul>
                                    </div>
                                </div>
                            </>

                        }

                        {changeIrish && <CaseHistoricOverviewIrish />}
                    </Container>
                </>
            </div>
            <Footer />
        </>
    );
}

export default CaseBibiliography;
