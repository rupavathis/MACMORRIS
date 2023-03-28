
import People from "./People/BasicSearch";
import Works from './Works/BasicSearch';
import AdvancedPeople from "./People/AdvancedSearch";
import AdvancedWorks from './Works/AdvancedSearch';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Container from "@mui/material/Container";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Search from "../Home/Search";
import Content from './People/Content';
import WorkContent from './Works/Content';
import Spinner from 'react-bootstrap/Spinner';
import Header from "../Home/Header";
import "./search.scss";
import { Link } from 'react-router-dom'

function Index({ changeIrish, setChangeIrish }) {
    const [selectedValue, setSelectedValue] = useState('people');
    const [searchData, setSearchData] = useState('');
    const [peopleData, setPeopleData] = useState([]);
    const [worksData, setWorksData] = useState([]);
    const [uniqData, setUniqData] = useState([]);


    const [displayNames, setDisplayNames] = useState([]);
    const [displayTitles, setDisplayTitles] = useState([]);
    const [loading, setLoading] = useState(false);



    const fetchData = async () => {
        console.log("basic search useeefect people")
        const displayNamesRes = await fetch("/names");
        var displayNamesJson = await displayNamesRes.json();
        // setDisplayNames(displayNamesJson)
        setDisplayNames(displayNamesJson)

        const displayTitlesRes = await fetch("/titles");
        var displayTitlesJson = await displayTitlesRes.json();
        // setDisplayTitles(displayTitlesJson)
        setDisplayTitles(displayTitlesJson)
    };

    useEffect(() => {
        fetchData();
    }, [])


    const handleSelectionChange = (event) => {
        console.log(event.target.value);
        setSelectedValue(event.target.value)
    };

    function getUniqData(data) {
        console.log("getUniq", { data })
        return [...new Set(data.map(d => d.id))].map(
            d => {
                return data.find(e => e.id === d)
            }
        )
    }

    return (
        <>
            <Header changeIrish={changeIrish} setChangeIrish={setChangeIrish} />
            {/* <div className="top-panel">
                <Link to='/' href="index.html">
                    <img style={{
                        objectFit: 'contain', 'width': '200px', height: '80px', margin: '10px',
                        opacity: '0.8'
                    }} alt="" src="/images/logos/macmorris.png" />
                </Link>
            </div> */}


            <Box sx={{}}>
                <h2 style={{ textAlign: "center", padding: "20px", color: '#a22828' }}>Search our Database</h2>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="people"
                        onChange={handleSelectionChange}
                    >
                        <FormControlLabel
                            value="people"
                            control={<Radio />}
                            label="People"
                        />
                        <FormControlLabel value="works" control={<Radio />} label="Work" />
                    </RadioGroup>
                </FormControl>

                <Container>
                    {selectedValue === "people" && <People setSearchData={setSearchData} setPeopleData={setPeopleData}
                        displayNames={displayNames} setLoading={setLoading} />}
                    {selectedValue === "works" && <Works setSearchData={setSearchData} setWorksData={setWorksData}
                        displayTitles={displayTitles} setLoading={setLoading} loading={loading} />}
                    <div style={{ paddingTop: '20px' }}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                {<Accordion.Header>Advanced Search</Accordion.Header>}
                                <Accordion.Body>
                                    {selectedValue === "people" && <AdvancedPeople setSearchData={setSearchData} setPeopleData={setPeopleData}
                                        setLoading={setLoading} />}
                                    {selectedValue === "works" && <AdvancedWorks setSearchData={setSearchData} setWorksData={setWorksData}
                                        setLoading={setLoading} />}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Container>
                <Container style={{ padding: "40px", overflow: "hidden" }}>
                    {console.log({ selectedValue })}
                    {searchData === "people" && selectedValue === "people" && !loading && <Content data={getUniqData(peopleData)} />}
                    {searchData === "works" && selectedValue === "works" && !loading && <WorkContent data={getUniqData(worksData)} />}

                    {loading &&
                        <Spinner animation="border" role="status" variant="primary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    }

                </Container>

            </Box>
        </>
    );
}

export default Index;
