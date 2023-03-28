import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WebLink from '@mui/material/Link';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import './sites.scss'


function Sites() {

    const [siteID, setSiteID] = useState(-1);
    const [sites, setSites] = useState({});


    // useEffect(() => {
    //     console.log("In sites page")

    //     if (document.URL.includes('/site')) {
    //         const url = document.URL;
    //         const id = url.substring(url.lastIndexOf('/') + 1);
    //         console.log(id, id);
    //         setSiteID(id);
    //     }
    // }, [])


    useEffect(() => {
        (async () => {
            let id = 0;
            if (document.URL.includes('/site')) {
                const url = document.URL;
                id = url.substring(url.lastIndexOf('/') + 1);
                console.log(id, id);
                setSiteID(id);
            }

            // if (siteID !== -1) {
            console.log("useeffect sites");
            const sitesRes = await fetch(`/sites/${id}`);
            const sitesResJson = await sitesRes.json();
            console.log("sitesResJson", sitesResJson);
            setSites(sitesResJson);

            // }
        })();
    }, [siteID])


    function createData(name, value, id) {
        return { name, value, id }
    }

    const rows = [
        // createData('Name', sites.name),
        createData('Other name', sites.gaelic_name),
        createData('Site Type', sites.site_type?.name),
        createData('Place', sites.place?.name),
        // createData('Description', sites.description),
        // createData('Gaelic description', sites.gaelic_decription)
    ].filter((e) => e.value !== null)

    return (
        <div>
            <div className="top-panel">
                <Link to='/' href="index.html">
                    <img style={{
                        objectFit: 'contain', 'width': '200px', height: '80px', margin: '10px',
                        opacity: '0.8'
                    }} alt="" src="/images/logos/macmorris.png" />
                </Link>
            </div>

            <Container>
                <h2 style={{paddingTop: 20}}>{sites.name}</h2>
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
                        <Paper variant="outlined" style={{ textAlign: 'justify', padding: 10}}>
                            <div className='desc-header'>Description</div>
                            <div style={{ paddingTop: 20 }}>{sites.description} </div>
                        </Paper>

                        {sites.gaelic_description && <Paper variant="outlined" style={{ textAlign: 'justify', padding: 10 }}>
                            <div className='desc-header'>Gaelic Description</div>
                            <div style={{ paddingTop: 20 }}>{sites.gaelic_description}</div>
                        </Paper>}
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
                                        <TableCell component="th" scope="row" align="right">
                                            {row.value}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
}

export default Sites;
