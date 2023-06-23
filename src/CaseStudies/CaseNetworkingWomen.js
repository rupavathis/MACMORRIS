import '../App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Home/Header";
import CaseHistoricOverviewIrish from './CaseHistoricOveriewIrish';
import './case-study.scss';

function CaseNetworkingWomen({ changeIrish, setChangeIrish }) {

  return (
    <>
      <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />

      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: '#f5f2f', textAlign: "justify" }}>
            <div className="chapter-header-media chapter-header-media--featured-image">
              <img src="/images/case-studies/women.png" alt="" style={{ opacity: 0.5, width: "auto", height: "600px" }} />
              <div className="header-text-overlay">
                <h1 className="header-text"><strong>What Are Networks</strong></h1>
              </div>
            </div>
            {!changeIrish &&
              <>
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

                <h5> Conceptualising Networks </h5>

                <p className='para-style'>When considering a network of people living through a period of conflict and change, as MACMORRIS does, considerations about structure and pattern centre on who knew whom; who was related to whom; who worked for whom; who patronised whom; who fought (or killed!) whom. Also important are the social, cultural, spatial, familial, intellectual and religious connections – the overlapping networks which constitute a person's life.
                </p>

                <p className='para-style'> We can conceptualise historical networks in two different, but equally valuable ways. The first is to examine a network metaphorically, employing specialist knowledge and the literary historian's traditional toolkit – close reading, contextual reading, archival research, and palaeography. The metaphorical study of networks is inherently intuitive, and the study of patronage networks has been integral to historical, art-historical, and literary scholarship.
                </p>



                <figcaption> Sample network highlighting nodes and edges. </figcaption>


                <p className='para-style'>The second way of considering and interrogating this pattern of interconnectedness is to plot the connections digitally, using what are known as “nodes” and “edges” - and this is the essence of network visualisation. When visualising a network, the objects connected are referred to as “nodes”, and the relationships between them are known as “edges”. In historical networks, the nodes are usually people and their relationships to each other are the edges. These nodes and edges can also convey more than one piece of information, or metadata, through connection types known as “attributes”. These attributes could be how two people connected knew each other, or how long they were connected.
                </p>

                <p className='para-style'> Another common type of network is one that connects authors to their books. This is known as a bimodal network as there are two different types of entities present: 1) people 2) books. In these networks, both the people and books are represented by nodes (usually of different shapes or colours to differentiate them) and the connections between the people and the books are the connections. In this instance the edge attributes can explain the relationship between a person and a book, indicating whether a person is the author, publisher or even dedicatee of the book.
                </p>

                <p className='para-style'>MACMORRIS's network interface visualises both these types of networks and can be explored through the 'people' and 'work' searches on the network landing page.
                </p>

                <h5> People Networks </h5>

                <p className='para-style'>As a way of exploring our people networks, take, for example, the network of <Link to='/profile/m1851'>Róis inghean Uí Thuathail (d. c. 1629), </Link>  daughter of <Link to='/profile/m1273'>Fiachaidh Ó Tuathail (c.1525-1578).</Link> In her <Link to='/network?id=m1851'>network</Link>, Róis and those she is connected to are represented as nodes (in the MACMORRIS people networks, the nodes are indicated by circles). If you click on one of the nodes in her network, you will see a pop-up showing metadata or “attributes” including name, date of birth, date of death, flourishing etc., as well as a link to the profile page of each individual connected to Róis.
                </p>


                <p className='para-style'>In this visualisation, you will see lines (the 'edges') connecting Róis's node to other nodes (other people). Just like nodes, these edges can convey metadata, and when you click on an edge, you will see how the two people know each other. For example, when you click on the edge connecting Róis to <Link to='/profile/m1679'>William Russell (c.1553-1613),</Link> you will see that they were adversaries. (In fact, she was almost burnt at the stake while Russell's captive.) Included in every visualisation is the option to “Show the 2nd degree”; for Róis, this brings in the people whom those directly connected to her also knew, allowing for a contextual exploration of Róis's connections to the world around her.
                </p>

                [insert screenshot of m1851 network with edge between m1851 and m1679 chosen once pop-up box is finished]

                <p className='para-style'> A figure can be included in the network visualisations only if s/he is already included in the MACMORRIS dataset – we cannot visualise what we have not captured in our data. Given our commitment to recovering lives overlooked by traditional historiography, we paid particular attention to including women and Gaelic figures in our dataset. (If you want to read more about how we did this see our <Link to='/about'>'About'</Link> page.
                </p>

                <h5> Work Networks </h5>

                <p className='para-style'> When it comes to the Works network, there are two possible points of entry - via the person or via the work. Depending on the perspective you take, either a person or a work will be the central node.
                </p>

                <p className='para-style'>Take for example the bardic poet <Link to='/profile/m1670'>Eochaidh Ó hEódhusa</Link> (ca.1568-1612), who is the author of 57 extant poems in our corpus. When you search the works networks for Ó hEódhusa, you get an ego network that places Ó hEódhusa at the centre and his works around him (see image on left below). If you take the alternative perspective and search for Ó hEódhusa's poem <Link to='/work/3366'>“An sluagh sídhe so i nEamhuin?”,</Link> you get a network (see image on right below) that places the poem in the centre and visualises all the people to whom the poem is connected - in this instance, Ó hEódhusa (as the author), and to <Link to='/profile/m1453'>Toirdhealbhach Luineach Ó Néill</Link>  (as the patron of this poem). In these networks, Ó hEódhusa and Ó Néill are represented as circles (as they are in the people network) and Ó hEódhusa's works are represented as triangles, to distinguish the two different types of entities.
                </p>



                <p className='para-style'> In the work networks, too, you can choose to “Show the 2nd Degree” and, depending on the perspective you chose for your search, you will see different types of nodes appear. If you chose to place a person at the centre of the network (as we did with Ó hEódhusa above), you will bring in all the other people connected to the works already visible on screen. This will bring all of Ó hEódhusa's patrons into the network and allows you to explore which poems he wrote for which patron (see image on the left below). Alternatively, if you place a work at the centre (as we did with <Link to='/work/3366'>“An sluagh sídhe so i nEamhuin?”</Link>), you bring in all the other works connected to the people visible in the network. In this example, you can now see all of Ó hEódhusa's other poems and all the poems written for Toirdhealbhach Luineach Ó Néill, allowing you to explore how many times Ó hEódhusa wrote for Ó Néill and how this relates to Ó Néill's wider corpus of patronised poems (see image on right below).
                </p>

                [Insert screenshots once 2nd degree works networks is ready and stable]

                <p className='para-style'> Overall, both types of network visualisation developed by MACMORRIS encourage exploration and interaction. It allows users to discover the complexity and plurality of early modern Ireland and provides a springboard for investigating new connections and unexpected conjunctions. Afterall, absence does not mean non-existence and we hope engagement with these networks gets you thinking about and searching for other connections, people, works that could have been included which we did not manage to incorporate.
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

export default CaseNetworkingWomen;
