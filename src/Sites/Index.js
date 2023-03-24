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
        console.log(name, value)
        return { name, value, id }
    }

    const rows = [
        createData('Site Type', sites.site_type?.name),
        createData('Name', sites.name),
        createData('Other name', sites.gaelic_name),
        createData('Place', sites.place?.name),
        // createData('Description', sites.description),
        createData('Gaelic description', sites.gaelic_decription)
    ].filter((e) => e.value !== null)

    return (
        <div>
            <Container>
                <h2>{sites.place?.name}</h2>
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            '& > :not(style)': {
                                m: 1,
                                width: 800,
                            },
                        }}
                    >
                        <Paper variant="outlined" style={{ justifyContent: 'center'}}>
                            {sites.description}
                        </Paper>
                        {/* <Paper variant="outlined">
                            {sites.description}
                        </Paper> */}
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
