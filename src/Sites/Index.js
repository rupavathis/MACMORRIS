import React, { useEffect, useMemo, useState } from "react";
import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import './sites.scss'
import { API_URL } from '../constants';
import Spinner from 'react-bootstrap/Spinner';
import Footer from '../Home/Sponsors';
import Header from '../Home/Header1';
import BreadcrumbProfile from '../Home/BreadcrumbProfile';


function Sites() {

    const [siteID, setSiteID] = useState(-1);
    const [sites, setSites] = useState(null);
    const history = useNavigate()

    useEffect(() => {
        console.log('History Changed');
        if (document.URL.includes('/site')) {
            const url = document.URL;
            const id = url.substring(url.lastIndexOf('/') + 1);
            setSiteID(id);
        }
    }, [history])

    useEffect(() => {
        if (siteID != -1)
            fetchData();
    }, [siteID])

    const fetchData = async () => {
        const sitesRes = await fetch(`${API_URL}/sites/${siteID}`);
        const sitesResJson = await sitesRes.json();
        setSites(sitesResJson);
    }

    function createData(name, value, id) {
        return { name, value, id }
    }

    const rows = useMemo(() => sites != null ? [
        createData('Alternative Title', sites.gaelic_name),
        createData('Site Type', sites.site_type?.name),
        createData('Place', sites.place?.name),
        createData('References', sites.reference_text),
        createData('Connected People', 0)
    ].filter((e) => e.value != null) : []
        , [sites])

    return (
        <>
            <Header />

            <div style={{ backgroundColor: "whitesmoke", marginBottom: '10px' }}>
                <BreadcrumbProfile page="Site" />
                {sites == null ? <div className="loading-container"><Spinner animation="grow" /></div> :
                    <Container>
                        <h3 style={{ paddingTop: 20 }}>{sites.name}</h3>
                        <Container>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: 800,
                                    },
                                }}
                            >
                                {sites.gaelic_description && <Paper variant="outlined" style={{ textAlign: 'justify', padding: 10 }}>
                                    <div className='desc-header'>Text</div>
                                    <div style={{ paddingTop: 20 }}>
                                        {sites.gaelic_description && sites.gaelic_description.split('_x000B_').map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                {index !== sites.gaelic_description.split('_x000B_').length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </Paper>}

                                <Paper variant="outlined" style={{ textAlign: 'justify', padding: 10 }}>
                                    <div className='desc-header'>Text</div>
                                    <div style={{ paddingTop: 20 }}>
                                        {sites.description && sites.description.split('_x000B_').map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                {index !== sites.description.split('_x000B_').length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </Paper>
                            </Box>
                        </Container>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="Details of sites table">
                                <TableBody>
                                    {rows.map((row) => {
                                        return (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <b>{row.name}</b>
                                                </TableCell>
                                                {row.name != 'References' && row.name != "Connected People" &&
                                                    <TableCell component="th" scope="row" align="right">
                                                        {row.value}
                                                    </TableCell>
                                                }
                                                {row.name === 'References' && row.name != "Connected People" &&
                                                    <TableCell component="th" scope="row" align="right">
                                                        {row.value.includes("http") &&
                                                            <a href={row.value} target="_blank" rel="noopener noreferrer">{row.value}</a>
                                                        }
                                                        {!row.value.includes("http") &&
                                                            <>{row.value}</>
                                                        }
                                                    </TableCell>
                                                }
                                                {(row.name === "Connected People") && sites.person_id != null &&
                                                    <TableCell align="right">
                                                        {sites.person_id?.map((n, index) =>
                                                            <React.Fragment key={index}>
                                                                <Link to={`/profile/${n.macmorris_id}`}>{n.name}</Link>
                                                                {index < sites.person_id.length - 1 && " | "}
                                                            </React.Fragment>
                                                        )}
                                                    </TableCell>
                                                }

                                            </TableRow>
                                        )
                                    })}

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                }
            </div>
            <Footer />
        </>
    );
}

export default Sites;
